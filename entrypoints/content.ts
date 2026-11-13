// Runs on the pages listed in `matches`. Narrow this to the sites the extension is for.
export default defineContentScript({
  matches: ['https://example.com/*'],
  main() {
    console.log('Content script loaded on', location.href);
  },
});
