---
title: "Using browser storage"
seoTitle: "Using browser storage"
seoDescription: "What are the main differences between the 3 browser storage options?"
datePublished: Wed Oct 23 2024 12:51:38 GMT+0000 (Coordinated Universal Time)
cuid: cm2lvijvd000208jv1lrybqxp
slug: using-browser-storage
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/lRoX0shwjUQ/upload/3364f8dbd11117d4bcc45ebb1b0f45a2.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1739134171743/5d8de910-7bad-42aa-b68d-3479aadfcf7a.jpeg
tags: javascript, browsers, frontend-development, storage

---

There are [3 main storage options](https://blog.webdevsimplified.com/2020-08/cookies-localstorage-sessionstorage/) within the browser. Use the following information to decide which option to use for your use case.

## Session Storage

[Session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) is a browser storage only accessible through client-side JavaScript in which the data stored is automatically deleted when the user closes the browser tab or window.

### Differences

* Expiration: On tab close
    
* Storage capacity: 5MB
    
* Accessibility: Current tab
    

### Code example

```jsx
sessionStorage.setItem("firstName", "John");
sessionStorage.setItem("lastName", "Doe");
sessionStorage.getItem("firstName"); // John
localStorage.removeItem("firstName");
```

## Local Storage

[Local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) is a browser storage only accessible through client-side JavaScript in which the data persists in the browser’s memory upon page refresh or window/tab close.

### Differences

* Expiration: Never
    
* Storage capacity: 10MB
    
* Accessibility: Any window or tab
    

### Code example

```jsx
localStroage.setItem("firstName", "John");
localStroage.setItem("lastName", "Doe");
localStorage.getItem("firstName") // John
sessionStorage.removeItem("firstName");
```

## Cookies

[Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) are another form of browser storage [only accessible by the server](https://owasp.org/www-community/HttpOnly) and not by the client-side JavaScript. The data stored in cookies are persistent upon page refresh or window/tab close, until the expired date passes.

### Differences

* Expiration: Manually set
    
* Storage capacity: 4KB
    
* Accessibility: Any window or tab
    

### Code example

```jsx
document.cookie = "firstName=John; expires=${new Date(2025, 0, 1).toUTCString()}"; // 01-01-2025
document.cookie = "lastName=Doe; expires=${new Date(9999, 0, 1).toUTCString()}"; // Never expires
document.cookie // firstName=John; lastName=Doe
document.cookie = "firstName=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
```