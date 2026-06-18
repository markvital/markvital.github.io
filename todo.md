# Gatsby to Next.js Migration Todo

## Step 1: Migration Foundation

- [x] Replace Gatsby dependency stack with Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, and Yarn-managed scripts.
- [x] Add Next.js app structure and static export configuration for GitHub Pages.
- [x] Preserve existing markdown content structure under `content/portfolio`.
- [x] Verify the new foundation builds or identify concrete blockers.
- [x] Capture a screenshot of the migrated foundation.

## Step 2: Content Pipeline

- [x] Replace Gatsby GraphQL markdown loading with filesystem-based markdown/frontmatter parsing.
- [x] Generate portfolio project routes from `content/portfolio/*/index.md`.
- [x] Generate project item routes from each markdown file's `items` frontmatter.
- [x] Render markdown body content with support for embedded HTML such as iframes.
- [x] Preserve image references from the existing content folders.
- [x] Capture screenshots for homepage, work page, project page, and project item page.

## Step 3: UI Parity Pass

- [x] Rebuild layout, navigation, bio, portfolio grid, about, work, contact, project, and project item views.
- [x] Translate existing theme styling to Tailwind CSS.
- [x] Use shadcn/ui primitives where they add value without changing the site's structure.
- [x] Fix known UI issues: mobile grid behavior, contrast, spacing, and invalid nested paragraphs.
- [x] Capture desktop and mobile screenshots.

## Step 4: GitHub Pages Deployment

- [x] Add GitHub Actions workflow with `workflow_dispatch` for on-demand deployment.
- [x] Configure static export output for GitHub Pages.
- [x] Verify deployment artifact generation locally.

## Step 5: Agent Support

- [x] Add `AGENTS.md` with project conventions, commands, content rules, deployment notes, and audit expectations.

## Step 6: Audit and Fix Pass

- [x] Run production build.
- [x] Run local preview.
- [ ] Run Lighthouse audit.
- [ ] Fix performance, UI, accessibility, and SEO regressions found during migration.
- [ ] Capture final screenshots and summarize scores.

## Step 7: Multi-item Projects

- [x] Move multi-item projects from `index.md` frontmatter into per-item folders.
- [x] Render parent projects with child project grids from `items/`.
- [x] Render child projects with the same cover/title/description layout as parents.
- [x] Capture screenshots for updated parent and child project pages.
