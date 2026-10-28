# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Copying or Moving the Project

The project uses only relative paths, so it runs from any folder. To set it up somewhere new:

1. Clone the repo, or copy the folder **without** `node_modules`, `.docusaurus` and `build`. These are generated, and the symlinks in `node_modules/.bin` can break when copied (for example through Windows Explorer or onto an NTFS drive under WSL).
2. Make sure Node.js 20 or later is installed.
3. In the new folder, install the exact versions from `package-lock.json` and start the dev server:

   ```bash
   npm ci
   npm start
   ```

Only committed files come along with a `git clone`, so commit any new posts, components or theme changes before cloning elsewhere.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
