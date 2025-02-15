---
title: "Autosaving user inputs"
seoTitle: "Autosaving user inputs"
seoDescription: "How to autosave user input changes without overloading the server."
datePublished: Mon May 13 2024 22:34:33 GMT+0000 (Coordinated Universal Time)
cuid: clw5jkc7m000b0amjf2egf7fa
slug: autosaving-user-inputs
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/9DZY0mO98xU/upload/dda6773fce953d677cd63a7e8e60f63d.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1715639664436/6c24e61b-c584-43b8-8e35-d16eaf85fbb7.avif
tags: tutorial, ideas, frontend, apis, typescript, frontend-development, autosave

---

A few weeks into joining a new project, we received a bug report in our production environment. The error was from [Dynamo DB](https://aws.amazon.com/dynamodb/): [Throughput exceeded exception](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html)

```plaintext
Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests using Error retries and exponential backoff.
```

The cause for this issue was our autosave feature. On every user input (text input, radio buttons, checkboxes) change, we were triggering an API request to save the changes. Since our users were familiar with the user interface and clicked through the site quickly, we never caught this error during development and QA testing.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1715639375659/a16c93e8-2883-42b7-9dcb-738b7b4a20c2.png align="center")

My solution, as always, was to look for how other products approach it. Looking at Hashnode, they have an autosave feature where the user changes text of the draft blog, and there’s a few second wait before the save is triggered. This way, save request isn’t on each keydown event, and instead is using a debounce mechanism to save when user stops typing.

To achieve this, I decided to create a new [dependency injectable](https://angular.io/guide/dependency-injection-overview) class: [autosave](https://en.wikipedia.org/wiki/Autosave) service.

<div data-node-type="callout">
<div data-node-type="callout-emoji">🚩</div>
<div data-node-type="callout-text">I will be using the Angular framework for this project.</div>
</div>

## Definition of done

* An abstract service to allow different data type implementations.
    
* Autosave service should be dependency injectable by any component.
    
* Component can request a piece of data to save to the database on next timer tick.
    
* Component should have the ability to save immediately (ignoring the debounce mechanism).
    
* When the save request errors out, data should not be saved again until a new change is made.
    
* Status of the save should be visible to the component for user feedback.
    
* Frequency of the tick should be configurable.
    

## Implementation

Let’s start by creating a status enum indicating when a request has been received, saving request but have not received response from API, save complete. This will be a public property that can be accessed by the component to display in the user interface.

```typescript
export enum SaveStatus {
	UNSAVED = 'Unsaved changes',
	SAVING = 'Saving',
	SAVED = 'Changes saved',
	NULL = 'No changes'
}
```

As mentioned in the requirements, I wanted the class to be an [abstract class](https://www.tutorialsteacher.com/typescript/abstract-class) meaning multiple services can be implemented with different kinds of data.

```typescript
export abstract class AutosaveService<T> {
	/** Request object to save on the next trigger */
	protected dataToSave: T = null;
}
```

Using [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html), the base class will take in a type that indicates the instances of the data that will be sent to the API.

To allow the child components to listen to the status change and display in the UI, we can use the `[BehaviorSubject](<https://rxjs.dev/api/index/class/BehaviorSubject>)` from RxJS.

```typescript
/** Current status of the save */
protected status = new BehaviorSubject<SaveStatus>(SaveStatus.NULL);

/** Current status of the save */
status$ = this.status.asObservable();
```

In the same way, tracking errors will be important to prevent multiple requests of the same value.

```typescript
/** Indicates error happened on last API call */
protected error = new BehaviorSubject<boolean>(false);

/** Indicates error happened on last API call */
error$ = this.error.asObservable();
```

Now, on to the fun part. We’ll need a way to start a timer when a request is first sent. When the timer goes off, an API request should be sent to save the data. The [timer observable](https://rxjs.dev/api/index/function/timer) from RxJS is a perfect usecase for this.

It is important to note here that we account for when another request has been sent prior to the first timer completing. In this case, we will restart the timer and update the data object.

```typescript
/** Observable for timer ticks */
private timer$: Observable<number>;

/** Subscription listening to latest timer */
private timerSubscription: Subscription;

/** Frequency of the timer tick in milliseconds */
private readonly tickFrequency = 5000;

constructor() {}

/** Calls API to save data */
abstract saveData(): Promise<void>;

/**
	* Requests service to save data on the next tick
	* @param request Data to save
	*/
requestSave(request: T): void {
	this.timerSubscription?.unsubscribe();

	this.timer$ = timer(this.tickFrequency);
	this.dataToSave = request;
	this.error.next(false);
	this.status.next(SaveStatus.UNSAVED);

	this.listenToTimer();
}

/**
 * Triggers save on timer tick
 */
private listenToTimer(): void {
	this.timerSubscription = this.timer$.pipe(first()).subscribe(() => {
		const triggerSave = this.dataToSave && !this.error.getValue() && this.status.getValue() === SaveStatus.UNSAVED;
		if (triggerSave) {
			this.saveData();
		}
	});
}
```

Let’s add the ability to save immediately ignoring the timer. This will be useful when the user wants to manually save recent changes or when the user navigates away from the page before the changes are saved.

```typescript
/**
 * Saves data at the moment of the request
 * @param request Data to save
 */
saveNow(request: T): Promise<void> {
	this.status.next(SaveStatus.UNSAVED);
	this.dataToSave = request;
	this.error.next(false);

	return this.saveData();
}
```

We also need an ability to clear the request after saving changes. This will be an easy way to clear the previous request after a successful save.

```typescript
/**
 * Empties save request
 */
clearRequest(): void {
	this.status.next(SaveStatus.SAVED);
	this.dataToSave = null;
	this.error.next(false);
}
```

Boom! The abstract class is now complete!

To start using the autosave feature, create a brand new class with data type you wish to save. Then the `saveData()` method should be implemented to perform the API request.

```typescript
export class AutosavePersonService extends AutosaveService<Person> {
	constructor(private apiService: ApiService) {
		super();
	}

	/**
	 * Calls API to save person's data
	 */
	saveData(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.status.next(SaveStatus.SAVING);
			this.apiService
				.save(this.dataToSave)
				.then(() => {
					this.clearRequest();
					resolve();
				})
				.catch(() => {
					this.status.next(SaveStatus.UNSAVED);
					this.error.next(true);
					reject();
				});
		});
	}
}
```

We are now ready to inject this class into any component you desire and autosave user input changes. Here is what that might look like:

```typescript
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	/** Data on the person */
	person: Person;
  
  /** Status of the autosave request */  
	status = this.autosavePersonService.status$;

	constructor(private autosavePersonService: AutosavePersonService) {}
  
  /**
   * Fires save request to autosave service
   */
	savePerson() : void {
		this.autosavePersonService.requestSave(this.person);
	}
	
	/**
   * Immediately saves changes on person object
   */
	savePersonNow(): void {
		this.autosavePersonService.saveNow(this.person);
	}
}
```

## Demo

I’ve created a CodeSandbox project with the entire code from this writing.

%[https://codesandbox.io/s/autosave-service-34jpdy] 

## Resources

* TypeScript [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
    
* RxJS [Behavior Subject](https://rxjs.dev/api/index/class/BehaviorSubject) and [tutorial](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject)
    
* RxJS [Observable](https://rxjs.dev/guide/observable)
    
* RxJS [timer](https://rxjs.dev/api/index/function/timer) and [tutorial](https://www.learnrxjs.io/learn-rxjs/operators/creation/timer)