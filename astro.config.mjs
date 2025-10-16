// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://juan-vertiz.github.io',
  base: '/astro-tutorial',
  integrations: [preact()],
});