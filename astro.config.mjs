// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages "project site": https://jasefreters.github.io/GregHansell/
// If the site later moves to its own domain (e.g. greghansell.com.au),
// set `site` to that address and delete the `base` line.
export default defineConfig({
  site: 'https://jasefreters.github.io',
  base: '/GregHansell',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
