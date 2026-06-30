# AGENTS.md

Project guidance for Codex and future maintainers.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui primitives when they add real value
- Yarn as the package manager

## Commands

```sh
yarn install
yarn dev
yarn build
yarn preview
```

## Content Rules

- Portfolio content lives in `content/portfolio/*/index.md`.
- Keep the existing markdown frontmatter shape for projects.
- Preserve `coverImage`, `thumbImage`, and optional `items`.
- Images referenced from markdown/frontmatter must remain static-export friendly.
- Treat `app/` as the source of truth for live pages.

## Editing Rules

- Prefer TypeScript or TSX for any new app code.
- Keep active implementation free of Gatsby code.
- Preserve the site structure and visual language unless a task explicitly asks for redesign.
- Keep changes scoped to the migration step in progress.

## Deployment

- Run `yarn deploy` to build and publish the static export to the `gh-pages` branch.
- GitHub Pages deployment is handled by `.github/workflows/deploy.yml`.
- The workflow runs on pushes to `master` and can also be started manually.
- Static output is exported to `out/`.

## Audit Expectations

- Verify builds with `yarn build`.
- Verify local static output when needed with the `out/` preview server.
- Capture screenshots for visually sensitive changes.
- Run Lighthouse when changing layout, navigation, images, or content rendering.
