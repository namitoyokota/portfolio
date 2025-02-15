---
title: "Recommend VSCode Extensions"
seoTitle: "Recommend VSCode Extensions"
seoDescription: "Create a recommended list of extensions for a workspace."
datePublished: Wed Sep 25 2024 12:18:57 GMT+0000 (Coordinated Universal Time)
cuid: cm1hu0o3t000308l93qdg9xxx
slug: recommend-vscode-extensions
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/Ylk5n_nd9dA/upload/0302d5dec180c5a3639d4084ca6d6631.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1739134635610/5157cd84-7fad-499d-8ef3-8905cd55a745.jpeg
tags: frontend, frontend-development, extensions, vscode-cjevho8kk00bo1ss2lmqqjr51, vscode-extensions, vscode-tips

---

To [recommend VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) within a certain repository, create a new JSON file under root: `.vscode/extensions.json`.

This then takes in an object with property `recommendations` as a list of strings. Each string is the Extension ID which can be found by going to the “Extensions” tab, clicking on the settings icon, then “Copy Extension ID”.

```json
{
    "recommendations": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ecmel.vscode-html-css",
        "sibiraj-s.vscode-scss-formatter",
        "formulahendry.auto-rename-tag",
        "kamikillerto.vscode-colorize",
        "deque-systems.vscode-axe-linter",
        "streetsidesoftware.code-spell-checker",
        "aaron-bond.better-comments",
        "vincaslt.highlight-matching-tag",
        "oderwat.indent-rainbow",
        "christian-kohler.path-intellisense",
        "YoavBls.pretty-ts-errors"
    ]
}
```

Now, if any developers open the repository without *all* of the recommended repositories, a prompt automatically opens with the following action steps:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727266592347/c4deeab0-b088-40a4-81a9-b5cdbc411033.png align="center")