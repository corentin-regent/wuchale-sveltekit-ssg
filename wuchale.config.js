import { adapter as svelte } from '@wuchale/svelte';
import { defineConfig } from 'wuchale';

export default defineConfig({
  sourceLocale: 'en',
  adapters: {
    main: svelte(),
  },
});
