import { defineConfig } from 'wxt';
import tokens from './design/tokens.json';

// https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: tokens.name ?? 'My extension',
    description: 'Built with Universal App Studio',
    // Ask only for what the extension needs. Add permissions here as features need them.
    permissions: ['storage'],
  },
});
