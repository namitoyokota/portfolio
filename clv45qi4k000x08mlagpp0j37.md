---
title: "How I accidentally contributed to an open-source project"
seoTitle: "How I accidentally contributed to an open-source project"
seoDescription: "Latest node.js patch for Windows broke an CLI project."
datePublished: Wed Apr 17 2024 18:39:57 GMT+0000 (Coordinated Universal Time)
cuid: clv45qi4k000x08mlagpp0j37
slug: how-i-accidentally-contributed-to-an-open-source-project
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/LCtDPn_2aTE/upload/016cf4ff2b25f799a68bc0fcd4872078.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1713379133176/40aa94f5-5290-49c6-a579-5fabdce122e4.jpeg
tags: opensource, aurelia, security, nodejs, cli, windows, childprocess, spawn

---

### I can’t do my job

My local environment stopped working. The [command](https://aurelia.io/docs/cli/basics#running-your-aurelia-app) to run and build an Aurelia project, a frontend web framework built by the original creator of Angular, mysteriously failed with the following error message:

```plaintext
error: Error: spawn EINVAL
  at ChildProcess.spawn (node:internal/child_process:421:11)
  at spawn (node:child_process:761:9)
  ...
```

### The almighty Google search

Since none of the typical solutions like reinstalling dependencies or reverting back the recent changes worked, I searched on the internet for a solution.

Eventually, I came across a [discussion forum](https://discourse.nodered.org/t/not-starting-on-window-11-error-spawn-einval/87153) from an open-source project called [Node-RED](https://nodered.org/). Node-RED is a low-code development tool for visual programming. The project maintainers had come across the same [error message](https://github.com/node-red/node-red/issues/4653) and they found that the recent [security release](https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2/) from [Node.js](https://nodejs.org/en) was the root cause.

Node.js codebase included a method in which “a malicious command line argument can inject arbitrary commands and achieve code execution even if the shell option is not enabled.” This impacted all `Windows` users in active release lines of `18.x`, `20.x`, and `21.x`.

Since I am on `Windows 11` using their latest `21.7.3`, this was likely the issue. Node-RED maintainers were able to [resolve this issue](https://github.com/node-red/node-red/pull/4652) quickly by adding an option property of `shell: true` to the `spawn()` constructor argument.

### The CLI repository

Looking at the [Aurelia's CLI project on GitHub](https://github.com/aurelia/cli), I found a line referencing the exact `spawn` method without the `shell` option set.

However, the Aurelia develompent team has since moved to [completely rewrite](https://docs.aurelia.io/developer-guides/migrating-to-aurelia-2) the project ([Aurelia v2](https://docs.aurelia.io/)) so the repository has not been updated in 6 months.

![Sacrifice](https://www.monkeyuser.com/2024/sacrifice/273-sacrifice.jpg align="left")

## Solutions (in order from worst to best)

### Stop using Windows

This is not an option since I work for an organization with 99% of developers using Windows. However, good news is that our servers are all Linux; therefore, this error is only thrown during local development.

### Downgrade Node.js

Downgrading the Node.js version to the latest LTS release will *solve* the problem for now. However, this is a temporary solution as more developers will run into this issue upon a Node.js update.

Additionally, since no one has yet reported this issue on their GitHub issues page, I opened a [new thread](https://github.com/aurelia/cli/issues/1205) explaining the issue I was having as well as the solution.

### Contribute to the open-source project

Within a few hours of writing a thorough explanation of my findings, the maintainer of the project commented on the issue asking for me to create a pull request.

Up to this point, I’ve never contributed or even attempted to contribute to an open-source project. This was also an CLI project which I don’t have experience working on. Not only that, the project has over 400 stars and 5,000 weekly downloads on npm.

Despite the hesitation, my manager encouraged me to attempt making the change. He thought that it would be a great experience for me.

With a few minor roadblocks, I manged to push the [code change](https://github.com/aurelia/cli/pull/1206) and the package was released to npm a few days later. Installing the new version on my machine, our project started working again.

Throughout this journey, I learned how to think about open-source contribution. Within the developer community, it is commonly understood that contributing to open-source is how you can get a good job. However, I think we might have it backwards.

> Contributing to open source doesn’t make you a good developer. Good developers contribute to open-source.

## Managing Node.js versions properly

To this day, I'm not sure how my machine automatically updated the Node.js version but my speculation is [Chocolatey](https://chocolatey.org/), an optionally installed package manager upon installation of Node.js. However, my big take away is that I now have an approach to managing the versions intentionally:

* Decide on an LTS release to use everywhere (local and servers).
    
* Match your machine’s version with the production server.
    
* Subscribe to the [Node.js blog](https://nodejs.org/en/blog) and manually install any new releases to test your local environment. After confirming, downgrade to the LTS version. If the latest version fails one of your tools, search the repository online (typically on GitHub) and report the issue if there isn't one already.
    
* Manage these versions using [nvm](https://github.com/nvm-sh/nvm).