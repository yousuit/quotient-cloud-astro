import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yousuit.github.io',
  base: '/quotient-cloud-astro',
  integrations: [sitemap()],
});
