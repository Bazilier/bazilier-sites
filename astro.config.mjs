import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://bazilier.com',
  integrations: [sitemap()],
  adapter: vercel(),
  output: 'static',
});