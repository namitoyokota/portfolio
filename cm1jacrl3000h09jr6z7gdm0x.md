---
title: "Open VSCode from Visual Studio"
seoTitle: "Visual Studio setting to open certain file types in VSCode"
seoDescription: "How to open certain file types in VSCode from the Solution Explorer."
datePublished: Thu Sep 26 2024 12:44:01 GMT+0000 (Coordinated Universal Time)
cuid: cm1jacrl3000h09jr6z7gdm0x
slug: open-vscode-from-visual-studio
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/weRQAu9TA-A/upload/2aaaa8a7ca2485176f606eb4f199eaa5.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1739134457111/ada1f8ec-433b-42e4-97a7-680dff0b9604.jpeg
tags: visual-studio, vscode-cjevho8kk00bo1ss2lmqqjr51, vscode-extensions, vscode-tips

---

If you are a full-stack developer mainly working in Visual Studio, it may be tempting to edit frontend files within the same software. However, this can be counter productive - especially if the frontend codebase has linting.

Imagine having to go through each lint error and manually resolve them because the pull request pipeline failed with the message: `ESLint found too many warnings`. When you could’ve simply installed a few extensions in VSCode to automatically format the code changes to follow the specific coding standards that has been set.

From my research, there is no good linting or prettier plugins for formatting on save within Visual Studio. So for now, my solution is to recommend developers to open frontend files from VSCode - and there is a setting that helps us achieve this.

Once you open your repository in Visual Studio, locate file types you would like to always open with VSCode from the Solution Explorer. For my project, I selected 3 different file types: TypeScript (`.ts`), HTML (`.html`), and SCSS (`.scss`). For each file, right click and open the `Open With...` menu. From here, `Add` the VSCode executable, which is typically stored within the following path: `C:\\Users\\{USER}\\AppData\\Local\\Programs\\Microsoft VS Code`. Then use `Set as Default` button to open these file types in VSCode going forward.