// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://elfsundae.github.io',
  base: '/astro-tutorial',
  trailingSlash: "always",
  integrations: [preact()],
});