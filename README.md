**Prerequisites:**

1. [Git](https://git-scm.com/)
2. [pnpm 8](https://pnpm.io/)
3. [Node JS 21](https://pnpm.io/cli/env)
4. `Others`
    1. [VS Code Extension](https://code.visualstudio.com/) (optional but recommend to install)
        1. [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
        2. [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
        3. [Auto Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
        4. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
        5. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Demo

[https://yuan116.github.io](https://yuan116.github.io)

## Steps to develop

1. Clone repository
    - Clone and install submodules together  
      '`git clone --recurse-submodules https://github.com/yuan116/yuan116.github.io.git`'
    - Clone and install submodules separately  
      '`git clone https://github.com/yuan116/yuan116.github.io.git`'  
      '`git submodule update --init --recursive`'
2. Switch branch to '`dev`', run command '`git checkout dev`'
3. Install node modules, run command '`pnpm install`'
4. Duplicate '`.env.example`' and rename to '`.env`'
5. Start dev server, run command '`pnpm run dev`'

## Command to update git submodules

```bash
git submodule update --remote
```
