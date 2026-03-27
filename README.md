# Bazilier Sites

All landing pages in one project. Astro + Vercel.

## Domains

| Domain | Page |
|--------|------|
| `bazilier.com` | `/src/pages/index.astro` |
| `steadyeye.bazilier.com` | `/src/pages/steadyeye/index.astro` |
| `doseboard.bazilier.com` | `/src/pages/doseboard/index.astro` |

## Local dev

```bash
npm install
npm run dev
```

Open `http://localhost:4321/steadyeye/` to see SteadyEye landing.

## Deploy

```bash
git push  # Vercel auto-deploys
```

## Vercel setup (one-time)

1. Go to [vercel.com](https://vercel.com), import this GitHub repo
2. Framework: Astro (auto-detected)
3. Deploy
4. Settings → Domains → Add:
   - `bazilier.com`
   - `steadyeye.bazilier.com`
   - `doseboard.bazilier.com`
5. In Namecheap DNS, point all three to Vercel:
   - `@` → A record → `76.76.21.21`
   - `www` → CNAME → `cname.vercel-dns.com.`
   - `steadyeye` → CNAME → `cname.vercel-dns.com.`
   - `doseboard` → CNAME → `cname.vercel-dns.com.`

## Structure

```
src/
  layouts/Base.astro       ← shared HTML shell
  styles/global.css        ← shared styles
  pages/
    index.astro            ← bazilier.com
    steadyeye/
      index.astro          ← landing page
      steadyeye.css        ← page styles
    doseboard/
      index.astro          ← landing page
public/
  img/steadyeye/           ← screenshots, logo
  img/doseboard/           ← (future)
vercel.json                ← subdomain routing
```

## TODO

- [ ] Replace `YOUR_APP_ID` in steadyeye page
- [ ] Replace `G-XXXXXXXXXX` with GA4 ID
- [ ] Replace `href="#"` App Store buttons with real URL
