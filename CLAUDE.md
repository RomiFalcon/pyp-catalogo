# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static wholesale product catalog for **P&P Distribuidora** (Argentine "dietética" wholesaler). Single-page site, no build step, no framework tooling, no backend. Deployed on Vercel from this repo's `main` branch (auto-deploys on every push); live at the project's `pyp-catalogo.vercel.app` domain.

## Running locally

There is no dev server config, package manager, or build step. Serve the directory with any static file server and open `index.html`:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/index.html`. Use a fresh port (or a hard reload) after editing `catalog/CatalogApp.jsx` — browsers aggressively cache `<script src>` tags for this file even across reloads, which can make edits appear not to have taken effect.

There is no lint, test, or build command — none are configured for this project.

## Architecture

Three files do all the work, loaded directly by `index.html` with no bundler:

1. **`catalog/products.js`** — the entire product catalog as plain data, exposed as `window.PYP_CATALOG` (`{ whatsapp, categories, products }`). This is the file almost every content change touches.
2. **`catalog/CatalogApp.jsx`** — the React app (function components, no JSX build step — transformed in-browser by Babel standalone, loaded via `<script type="text/babel">` in `index.html`). Renders into `#root`.
3. **`index.html`** — page shell, all CSS (inline `<style>` + `colors_and_type.css` for design tokens/fonts), and the script tags that load React/ReactDOM/Babel/Lucide from CDN plus the two files above, in order (`products.js` before `CatalogApp.jsx`, since the app reads `window.PYP_CATALOG` at load).

### Product data model (`catalog/products.js`)

Each entry in `products`:
```js
{ id, cat, brand, name, img, desc, tags: [...], price, variants? }
```
- `price` is a flat number (ARS). Omit it only if the product genuinely has no listed price.
- `variants` is optional and shows a flavor/size selector chip row on the card. Two shapes are supported, and can be mixed as needed:
  - Plain strings (`"Chocolate"`) — variant only changes the cart line label; price/image stay the product's base `price`/`img`.
  - Objects (`{ name, img?, price? }`) — a variant can carry its own image and/or its own price (e.g. Arroyito alfajores price by flavor, Miel Pampa price by size). Missing `price`/`img` on a variant falls back to the product's own.
- When a product line comes in more than one real flavor/format with its own photo and the business wants each browsable/orderable separately (the common case), model it as **separate product entries** with distinct `id`s rather than `variants` — that's the pattern used throughout (e.g. each Chok alfajor flavor, each Pepas Yaiza flavor, each Pan de Molde variety are their own product). Reserve `variants` for cases where a single SKU is sold as "pick one of these," or where the business explicitly wants one card with a size/flavor selector on it (Miel Pampa sizes, Arroyito flavors).
- `cat` must match a `categories[].id`. A category with zero products still shows as an empty chip if left in the array with `active === "todos"` — remove the category entry when removing its last product.
- Product `id`s are kebab-case and roughly `<brand-abbrev>-<slug>` (`ac-brownie`, `ya-pepas-frutilla`, `pz-molde-centeno`). Follow the existing convention when adding products so ids stay greppable.

### Image handling (`R()` / `__RES_IDS` / `window.__resources`)

Every `img:` value in `products.js` is wrapped in `R("assets/catalog-pub/whatever.png")`. `R()` checks `window.__resources` (populated only inside the claude.ai Design bundler preview, unused in this deployed app) and otherwise returns the path as-is — so in the real deployed site `R()` is a no-op passthrough and images just load from `assets/`. The `__RES_IDS` map at the top of the file is bundler plumbing; it doesn't need to be kept in sync with every asset (many current images aren't in it) and is safe to ignore when adding products.

Asset filenames aren't fully consistent in resolution/format — some are small legacy `.png`/`.jpeg` (~280×280, from the original design import), most newer ones are `.webp` at much higher resolution (customer-supplied product photos, ~1200px+). When the user supplies a new product photo, save it under `assets/catalog-pub/` as `.webp` and reference it directly; don't downscale or convert existing images.

### Cart, pricing, and WhatsApp checkout (`CatalogApp.jsx`)

- Cart state lives in `localStorage` (`pyp_pedido_v1`), keyed by `` `${productId}::${variantName}` `` when a variant is selected, or just `productId` otherwise (see `splitKey`/cart key construction). Comercio/zona/comentario form fields also persist to `localStorage` independently.
- `priceFor(product, selectedVariant)` is the single source of truth for "what does this line cost" — variant price if present, else product price. It's duplicated in three places (`ProductCard`, `OrderDrawer`, `App`'s FAB total) because there's no shared cart-derived-state hook; if you touch pricing logic, update all three call sites.
- The "Enviar pedido por WhatsApp" button builds a `wa.me` link with a prefilled, URL-encoded message (itemized by category, with per-line and grand total) — no backend, no order persistence beyond localStorage. This is the only checkout path.

## Deploy workflow

No CI config — deploys are pure `git push`:
```bash
git add -A
git commit -m "..."
git push origin main
```
Vercel picks this up automatically (no `vercel.json`, framework preset is "static/other"). After pushing, verify the live change with a **cache-busting fetch** before trusting a browser reload — Vercel/browser caching has repeatedly shown a stale `catalog/products.js` even after a successful deploy in this project's history:
```js
fetch('/catalog/products.js?bust=' + Date.now()).then(r => r.text()).then(t => t.includes('some-new-id'))
```
Then verify in a **freshly opened tab** (not a reloaded one) — reloading an existing tab has been unreliable for picking up the new `CatalogApp.jsx`/`products.js` in this project's testing.

Always test locally (see *Running locally*) before pushing when the change is non-trivial; this project has a history of iterating live with the user reviewing localhost before agreeing to deploy.
