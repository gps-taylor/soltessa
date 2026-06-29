# Soltessa

**A design-center selections engine + lot-and-community management platform for residential home builders and interior-finishing contractors.**

This repository is a **clickable front-end prototype** — a static site you can host on GitHub Pages and share with the team to get everyone reacting to the same concrete thing. It is intentionally all HTML/CSS/JS with **no build step and no backend**. Every number, buyer, lot, and document in it is **fabricated demo data** for illustration only.

---

## What this is (and isn't)

- **Is:** a faithful, navigable picture of all ten modules, the shared shell, and the signature workflows — enough to validate scope, spark discussion, and align the team.
- **Isn't:** a working application. Nothing persists, forms don't submit, and the data is invented.

**Product identity.** Soltessa is its own brand. **Builders Design Group (BDG)** — a Las Vegas flooring / cabinetry / countertop finisher — is the pilot tenant, so the demo data is BDG-flavored. The shell is **multi-tenant-aware** (note the builder/client switcher top-left) even though the first deployment is BDG-only.

**Provenance tags** appear inline throughout the UI so reviewers can see where each idea comes from:
- `confirmed` — faithful to the real system being replaced (IBSWIN / Pharaoh, sunsetting Dec 31 2026)
- `assumption` — proposed freely; confirm before building
- `BOSS` — drawn from competitor analysis (BOSS for Builders)

---

## The ten modules

| # | Module | File | Highlights |
|---|--------|------|-----------|
| 1 | **Dashboard** | `index.html` | Full 9-step lineage rail, KPIs, needs-attention queue, allowance pulse, insurance-expiry alerts |
| 2 | **Design Studio** (the core) | `design-studio.html` | Room-by-room selections engine, live allowance panel, net-over-standard pricing, what-if scenarios, flooring calculator |
| 3 | **Pricing & Catalog** | `catalog.html` | Price book (cost→allowance→sell), builder-program availability matrix, suppliers & installers |
| 4 | **Selections & Quotes** | `quotes.html` | Selection → price request → quote → contract → purchasing workflow stepper |
| 5 | **Purchasing** | `purchasing.html` | PO register, change orders, one-click PO generation split by supplier |
| 6 | **Lot & Community Management** | `lots.html` | Interactive site map + the **lot detail drawer** where the whole lineage converges |
| 7 | **Scheduling** | `scheduling.html` | Install calendar, option cutoffs, master schedule template, crew load & conflicts |
| 8 | **Settings / Admin** | `settings.html` | Users & roles, security cutoff permissions, multi-tenant management, document/email templates, units-of-measure config |
| 9 | **Sales & Buyer Management** | `sales.html` | Buyers, deposits, escrow/contingency milestones, buyer agreements |
| 10 | **Customer Service / Warranty** | `service.html` | Service requests, work-order aging, subcontractor performance, work-order drawer |

### Cross-cutting foundations (visible throughout)
- **Data lineage chain:** Plan + Allowance → Selection → Price Request → Quote → Contract → POs → Lot → Schedule → Service. The stepped **lineage rail** is the product's signature element — full on the Dashboard, condensed in the Lot and Work-Order drawers.
- **Units of measure by category:** carpet = sq yd; tile / hardwood / stone / countertops = sq ft; cabinets = unit / lineal foot.
- **Net-option upgrade logic:** the buyer pays the *net* over the standard allowance, not the gross price.

---

## View it locally

No build step. Either open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `soltessa-prototype`).
2. Upload **all files in this folder**, preserving the `assets/` structure.
3. In the repo: **Settings → Pages**.
4. Under **Build and deployment**, set **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/ (root)`**, then **Save**.
5. Wait ~1 minute. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

GitHub Pages serves `index.html` (the Dashboard) automatically. The included `.nojekyll` file tells Pages to serve the `assets/` folder as-is.

---

## Structure

```
.
├── index.html              # 1 · Dashboard
├── design-studio.html      # 2 · Design Studio (core)
├── catalog.html            # 3 · Pricing & Catalog
├── quotes.html             # 4 · Selections & Quotes
├── purchasing.html         # 5 · Purchasing
├── lots.html               # 6 · Lot & Community Management
├── scheduling.html         # 7 · Scheduling
├── settings.html           # 8 · Settings / Admin
├── sales.html              # 9 · Sales & Buyer Management
├── service.html            # 10 · Customer Service / Warranty
├── .nojekyll
└── assets/
    ├── css/app.css         # design system
    ├── js/app.js           # shared shell (nav, top bar, tenant switcher, drawers, icons)
    └── data/demo.js        # fabricated demo dataset
```

---

*Prototype only. All data is fictitious.*
