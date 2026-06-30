# Mark Vital Portfolio

Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui conventions, and Markdown content.

## Start Developing

Install dependencies:

```sh
yarn install
```

Run the local dev server:

```sh
yarn dev
```

Open `http://localhost:3000`.

## Test Production Export

Build the static site:

```sh
yarn build
```

Serve the exported output locally:

```sh
yarn preview
```

Open `http://127.0.0.1:8001`.

## Edit Site Content

Portfolio projects live in `content/portfolio`. Each project has an `index.md` file and optional image assets in the same folder.

Each project frontmatter should keep the existing thumbnail and cover fields:

```md
---
title: My Project
coverImage: ./thumb/cover.jpg
thumbImage: ./thumb/thumb.jpg
---
```

Project item pages are generated from the optional `items` frontmatter list. Images referenced by markdown and frontmatter are copied into `public/portfolio` during `yarn dev` and `yarn build`.

Static pages such as About, Contact, and 404 live in `app/`.

## Deploy

Build and publish the static export to the `gh-pages` branch:

```sh
yarn deploy
```

The GitHub Actions workflow also runs this command on pushes to `master`.

## Notes

We use Markdown for project content. Read the [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet) for syntax help.

The original visual theme was derived from `gatsby-starter-blog`; the Gatsby implementation has been removed.
