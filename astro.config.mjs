import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// This Vercel project serves steadyeye.bazilier.com (bazilier.com itself has
// no DNS record), so absolute URLs — sitemap, canonical — use that host.
const SITEMAP_PAGES = new Set(['/', '/privacy/', '/terms/']);

export default defineConfig({
  site: 'https://steadyeye.bazilier.com',
  integrations: [
    sitemap({
      // Only SteadyEye's own pages; /doseboard/ belongs to another product.
      filter: (page) => SITEMAP_PAGES.has(new URL(page).pathname),
    }),
  ],
  // The landing used to be duplicated at /steadyeye/.
  redirects: { '/steadyeye': '/' },
  adapter: vercel(),
  output: 'static',
});
