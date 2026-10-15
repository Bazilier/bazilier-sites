import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// This Vercel project serves steadyeye.bazilier.com (bazilier.com itself has
// no DNS record), so absolute URLs — sitemap, canonical — use that host.
const SITEMAP_PAGES = new Set(['/', '/pt-br/', '/es/', '/privacy/', '/terms/']);

export default defineConfig({
  site: 'https://steadyeye.bazilier.com',
  integrations: [
    sitemap({
      // Only SteadyEye's own pages; /doseboard/ belongs to another product.
      filter: (page) => SITEMAP_PAGES.has(new URL(page).pathname),
      // Language versions link to each other through hreflang tags in each
      // page's <head>; the sitemap plugin can't express es-419 (no digits).
    }),
  ],
  // The landing used to be duplicated at /steadyeye/.
  redirects: { '/steadyeye': '/' },
  adapter: vercel(),
  output: 'static',
});
