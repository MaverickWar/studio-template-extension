export default defineBackground(() => {
  console.log('Extension started', { id: browser.runtime.id });
});
