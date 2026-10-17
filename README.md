# Emmanuel Akinjogunla — Portfolio

Personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons.

## Development

```sh
pnpm install
pnpm dev
```

```sh
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

The production build downloads DM Sans and Cormorant Garamond through `next/font/google`, so it needs access to Google Fonts.

## Structure

```text
app/                    Routes, metadata, root layout, and global theme
  about/page.tsx        About page
  projects/page.tsx     Filterable work index
  projects/[id]/        Data-driven project detail pages
components/
  about/                About intro, stats, journey, qualities, and interests
  home/                 Homepage sections
  layout/               Shared navigation and contact/footer
  projects/             Work header/index, showcase, and laptop preview
    detail/             Project hero, overview, features, related work, and media helper
  ui/                   Welcome intro
data/                  Project and technology content, types, and selectors
styles/                 Welcome intro animations
public/                 Images, technology logos, and asset source/license notes
docs/                   Design verification notes
```

Imports use the `@/` alias, which resolves to the repository root. Keep route files in `app/` and reusable UI in the relevant `components/` folder. The root layout renders the header, contact/footer, and welcome intro once for all routes.

## Add a project

Add an entry to `data/projects.ts` with a unique `id`. That ID becomes `/projects/<id>`. Set `featured: true` to show it on the homepage. Private projects are excluded from public lists and detail routes; limited projects use placeholders or explicitly supplied case-study cover images.

The optional `caseStudy` fields provide the overview, problem, approach, focus/features, and cover imagery. Only add confirmed project claims. Add images to `public/` and reference them with root-relative paths.

Use `getVisibleProjects()` and `getFeaturedProjects()` for public project lists so visibility rules stay consistent.

## Add a technology

Add an entry to `data/technologies.ts` and its logo to `public/technologies/`. Technology IDs connect project stacks to their names and logos. Array order controls display order; category filters and learning lists update automatically. Preserve the logo license and photo source notes.

## Welcome intro

`components/ui/WelcomeGreeting.tsx` manages the once-per-tab-session intro. Animation styles live in `styles/welcome.css`. It supports automatic dismissal, skipping, Escape, and reduced motion. To replay during development, clear the `emmanuel-welcome-seen` entry in browser session storage and refresh.

## Verification notes

See `docs/design-qa.md` for outstanding visual checks. Type checking alone does not verify browser appearance or animation behavior.
