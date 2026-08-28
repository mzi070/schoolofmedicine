# Dear Future Doctors

A student-run guide to the Doctor of Medicine (MD) at The Maldives National University, School of Medicine.
Next.js App Router, TypeScript, Tailwind CSS v4.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home — hero, start-here cards, latest posts, five-year overview |
| `/years/1` … `/years/5` | One page per year: modules with codes and credit points, fees, assessment, tips |
| `/lecturers` | Faculty directory, flat grid |
| `/portals` | The two portals side by side |
| `/portals/mnu` | Six-step MNU student portal login guide |
| `/portals/mohe` | Six-step Kuri (MoHE) portal login guide |
| `/posts/[slug]` | Blog post template |
| `/about` | The university, the school, and this blog |
| `/archive` | Every post, filterable, plus module search |

`/years` redirects to `/years/1`. A 404 page and `sitemap.xml` / `robots.txt` are generated automatically.

## Running it locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

```bash
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # eslint
```

Node 20 or newer.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project**, import the repository.
3. Framework preset is detected as Next.js. Leave build command and output directory at their defaults.
4. Deploy.

No environment variables are needed. Once you have a domain, set `url` in `data/site.ts` — it feeds
canonical URLs, Open Graph tags and the sitemap.

## Where the content lives

| File | Holds |
| --- | --- |
| `data/modules.ts` | All 55 MD modules — code, name, credit points, year, section heading |
| `data/years.ts` | Per-year blurb, fees, assessment rows, tips, sidebar figures |
| `data/lecturers.ts` | The faculty directory |
| `data/posts.ts` | Blog post metadata |
| `data/site.ts` | Site name, description, URL, external links, nav |
| `public/README.md` | Every image the site expects, and where to put it |

Portal guide steps live in the page files: `app/portals/mnu/page.tsx` and `app/portals/mohe/page.tsx`.

Anything written in `[square brackets]` is a placeholder waiting on real information — assessment
weightings, lecturer names, helpdesk contacts, post copy. Search the repo for `[` to find them all.

### Programme facts, and where they came from

Module codes, names, credit points and fees are taken from the university's published course structure for
the Degree in Doctor of Medicine (course 245). Five years, ten semesters, 847 credit points, MVR 616,800 for
local students under the Free First Degree Scheme. Assessment weightings are not published there; they come
from individual module handbooks.

## Styling

Tailwind v4, configured in CSS. All design tokens are `@theme` variables in `app/globals.css`:

- `bg`, `surface`, `ink`, `divider` — the warm ivory ground
- `brand-*` — burgundy #6F2638, used for faculty, programme and primary actions
- `med-*` — medical blue #2F6FA3, used for student resources, links, icons and hover states
- `n100`–`n900` — warm neutrals
- Fonts: Caprasimo for headings, Figtree for body, both via `next/font`

Dark mode inverts the ground to a warm dark and keeps both accents. It follows the system setting until the
reader uses the toggle in the nav, then their choice is remembered in `localStorage`. A small inline script in
`app/layout.tsx` applies the class before first paint so there is no flash.

## Search

The nav search icon opens an overlay from any page — `Cmd/Ctrl+K` to open, `Escape` to close. It matches post
titles, post tags, and module names and codes. The archive page has its own filter with the same behaviour
plus tag chips.

## The original design

`public/legacy.html` is the standalone single-file HTML version this project was built from. It needs no build
step and opens directly in a browser. Delete it once you no longer need the reference.
