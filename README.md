# Studio template: Browser extension

The starter Universal App Studio copies when someone picks **Browser extension** while setting up a new project.

A browser extension built with WXT and TypeScript (Manifest V3), with a popup, a background script, a content script and saved settings. It builds for Chrome, Edge and Firefox. It has one change: **the look comes from `design/tokens.json`**.

- `design/tokens.json` holds the colours, fonts, corners and spacing. Studio replaces it with the project's own design straight after copying this template.
- `design/adapters/` reads those tokens in this stack's own language. See `design/adapters/README.md` once Studio has added it, or the comments at the top of each adapter.
- Style everything from the tokens. Change the look in Studio, never by typing colours into the code.

## Running it

```
npm install
npm run dev           # opens Chrome with the extension loaded
npm run dev:firefox   # or Firefox
```

Open the extension's popup from the browser toolbar.

## Checks

```
npm run typecheck
npm test
npm run build
npm run build:firefox
```

The same checks run on GitHub for every push and pull request (`.github/workflows/checks.yml`).
