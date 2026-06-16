import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import MarkdownIt from "markdown-it"

const portfolioDir = path.join(process.cwd(), "content", "portfolio")

export type ProjectItem = {
  title: string
  description?: string
  image: string
  slug: string
  imageUrl: string
}

export type PortfolioProject = {
  slug: string
  title: string
  date: string
  description: string
  excerpt: string
  body: string
  html: string
  coverImage?: string
  thumbImage?: string
  items: ProjectItem[]
}

type RawFrontmatter = {
  title?: string
  date?: string | Date
  description?: string
  coverImage?: string
  thumbImage?: string
  items?: Array<{
    title?: string
    description?: string
    image?: string
  }>
}

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

function getProjectSlugs() {
  return fs
    .readdirSync(portfolioDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith("."))
    .map(entry => entry.name)
    .filter(slug => fs.existsSync(path.join(portfolioDir, slug, "index.md")))
    .sort()
}

function stripDotSlash(value: string) {
  return value.replace(/^\.\//, "")
}

function publicAssetUrl(projectSlug: string, source?: string) {
  if (!source) {
    return undefined
  }

  if (/^(https?:)?\/\//.test(source) || source.startsWith("/")) {
    return source
  }

  return `/portfolio/${projectSlug}/${stripDotSlash(source)}`
}

function itemSlug(image: string) {
  return path.basename(image, path.extname(image))
}

function excerptFromMarkdown(body: string) {
  return body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[[^\]]+]\([^)]*\)/g, "$1")
    .replace(/[#*_>`-]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 160)
}

function renderMarkdown(projectSlug: string, body: string) {
  const localMarkdown = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  const defaultImageRule = localMarkdown.renderer.rules.image

  localMarkdown.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const srcIndex = token.attrIndex("src")

    if (srcIndex >= 0) {
      const currentSrc = token.attrs?.[srcIndex]?.[1]
      const nextSrc = publicAssetUrl(projectSlug, currentSrc)

      if (nextSrc && token.attrs) {
        token.attrs[srcIndex][1] = nextSrc
      }
    }

    return defaultImageRule
      ? defaultImageRule(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options)
  }

  return localMarkdown.render(body)
}

export function getAllProjects(): PortfolioProject[] {
  return getProjectSlugs()
    .map(getProjectBySlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getProjectBySlug(slug: string): PortfolioProject {
  const filePath = path.join(portfolioDir, slug, "index.md")
  const file = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(file)
  const frontmatter = data as RawFrontmatter

  const items =
    frontmatter.items
      ?.filter(
        (
          item,
        ): item is { title: string; description?: string; image: string } =>
          Boolean(item.title && item.image),
      )
      .map(item => ({
        title: item.title,
        description: item.description,
        image: item.image,
        slug: itemSlug(item.image),
        imageUrl: publicAssetUrl(slug, `items/${item.image}`) ?? "",
      })) ?? []

  return {
    slug,
    title: frontmatter.title ?? slug,
    date: frontmatter.date ? new Date(frontmatter.date).toISOString() : "",
    description: frontmatter.description ?? excerptFromMarkdown(content),
    excerpt: excerptFromMarkdown(content),
    body: content,
    html: renderMarkdown(slug, content),
    coverImage: publicAssetUrl(slug, frontmatter.coverImage),
    thumbImage: publicAssetUrl(slug, frontmatter.thumbImage),
    items,
  }
}

export function getAdjacentProjects(slug: string) {
  const projects = getAllProjects()
  const index = projects.findIndex(project => project.slug === slug)

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next:
      index >= 0 && index < projects.length - 1
        ? projects[index + 1]
        : undefined,
  }
}

export function getProjectItem(projectSlug: string, item: string) {
  const project = getProjectBySlug(projectSlug)
  const projectItem = project.items.find(candidate => candidate.slug === item)

  return projectItem ? { project, item: projectItem } : undefined
}

export function getProjectParams() {
  return getProjectSlugs().map(slug => ({ slug }))
}

export function getProjectItemParams() {
  return getAllProjects().flatMap(project =>
    project.items.map(item => ({
      slug: project.slug,
      item: item.slug,
    })),
  )
}
