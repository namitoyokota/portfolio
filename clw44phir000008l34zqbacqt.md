---
title: "Catch TypeScript errors with Webpack"
seoTitle: "Catch TypeScript errors with Webpack"
seoDescription: "Try this if your build process isn’t catching any TypeScript errors."
datePublished: Sun May 12 2024 22:50:53 GMT+0000 (Coordinated Universal Time)
cuid: clw44phir000008l34zqbacqt
slug: catch-typescript-errors-with-webpack
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/XodiSw1wA8A/upload/54f6273646a0c92e6875d9380bf7048c.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1715554192443/54966a26-b0d9-4ec2-9b7e-7f3388351cfc.avif
tags: error, stackoverflow, webpack, error-handling, typescript

---

When I first joined my company, I was responsible for overseeing a new frontend project started by full-stack developers. This is a story about the first issue I resolved.

## Problem

As full-stack developers tend to be backend developers with minimal frontend experience, our frontend project was barely functional.

One of the issues I found was that when running an instance locally, our builds were not failing on any TypeScript errors seen in the code editor.

For example, imagine a simply method that adds 2 numbers. As addition is a mathematical operation, both of the arguments are expecting a number type.

```typescript
add(num1: number, num2: number): number {
	return num1 + num2;
}

add(1, 2);     // This is valid.
add('a', 'b'); // This is not valid.
```

With the above implementation, `add('a', 'b');` should fail at compile time as string were passed in as parameters. However, in our codebase, the build completes without any errors or warnings, and the bug will only found at runtime.

This is a major problem as [type checking is the whole point of using TypeScript](https://www.typescriptlang.org/why-create-typescript/). God only knows how many errors we have been ignoring. Our codebase is essentially all using JavaScript at this point.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1715554116856/2bfaa162-e3c5-41de-93de-aa74ac00d38b.png align="center")

## Solution

With the almighty Google search, I found a commonly used npm package known as `[fork-ts-checker-webpack-plugin](<https://www.npmjs.com/package/fork-ts-checker-webpack-plugin>)`. \*\*\*\*This is a webpack plugin which adds TypeScript’s type checking process then outputs the results in the command line.

To implement this plugin, first install the package: `npm i fork-ts-checker-webpack-plugin`.

Then, navigate to the project’s `webpack.config.js` file. Within the file, you will need to add an import line at the top, as well as an instance of the class to the `plugins` array:

```jsx
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  plugins: [new ForkTsCheckerWebpackPlugin()],
  ...
};
```

Keep in mind that the `ts-loader` package is required for this plugin to work. Loader should look like the following:

```jsx
module.exports = {
  context: __dirname,
  entry: './src/index.ts',
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        loader: 'ts-loader',
      }
    ]
  },
};
```

Voila! Now the terminal will display each and every TypeScript error! As a result, I was able to catch over 120 type errors in our codebase which I spent rest of the day resolving 😄

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1715554084754/6a813fd9-6e7a-4577-ab20-aae1d831e40f.png align="center")

---

Thanks to [this Stack Overflow thread](https://stackoverflow.com/questions/64592611/webpack-is-not-failing-on-typescript-error) for discussing this issue.