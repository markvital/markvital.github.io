import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import MarkdownIt from "markdown-it"

const portfolioDir = path.join(process.cwd(), "content", "portfolio")

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
  order?: number
  children: PortfolioProject[]
  parentSlug?: string
}

type RawFrontmatter = {
  title?: string
  date?: string | Date
  description?: string
  coverImage?: string
  thumbImage?: string
  order?: number
}

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

function isVisibleDirectory(entry: fs.Dirent) {
  return entry.isDirectory() && !entry.name.startsWith(".")
}

function readVisibleDirectories(baseDir: string) {
  if (!fs.existsSync(baseDir)) {
    return []
  }

  return fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter(isVisibleDirectory)
    .map(entry => entry.name)
}

function hasProjectIndex(projectPath: string) {
  return fs.existsSync(path.join(portfolioDir, projectPath, "index.md"))
}

export function projectExists(slug: string) {
  return hasProjectIndex(slug)
}

function listTopLevelProjectPaths() {
  return readVisibleDirectories(portfolioDir).filter(hasProjectIndex)
}

function listDirectChildProjectPaths(parentProjectPath: string) {
  return readVisibleDirectories(path.join(portfolioDir, parentProjectPath, "items"))
    .map(child => `${parentProjectPath}/items/${child}`)
    .filter(hasProjectIndex)
}

function stripDotSlash(value: string) {
  return value.replace(/^\.\//, "")
}

function publicAssetUrl(projectPath: string, source?: string) {
  if (!source) {
    return undefined
  }

  if (/^(https?:)?\/\//.test(source) || source.startsWith("/")) {
    return source
  }

  return `/portfolio/${projectPath}/${stripDotSlash(source)}`
}

function excerptFromMarkdown(body: string) {
  return body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[#*_>`-]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 160)
}

function renderMarkdown(projectPath: string, body: string) {
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
      const nextSrc = publicAssetUrl(projectPath, currentSrc)

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

function sortProjects(projects: PortfolioProject[]) {
  return projects.sort((a, b) => {
    if (a.order !== undefined || b.order !== undefined) {
      return (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
    }

    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getTopLevelProjects(): PortfolioProject[] {
  return sortProjects(listTopLevelProjectPaths().map(getProjectBySlug))
}

export function getProjectBySlug(slug: string): PortfolioProject {
  const filePath = path.join(portfolioDir, slug, "index.md")
  const file = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(file)
  const frontmatter = data as RawFrontmatter
  const children = listDirectChildProjectPaths(slug).map(getProjectBySlug)

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
    order: frontmatter.order,
    children: sortProjects(children),
    parentSlug: slug.includes("/items/") ? slug.split("/items/")[0] : undefined,
  }
}

export function getProjectNeighbors(slug: string) {
  const siblings = sortProjects(
    (slug.includes("/items/")
      ? listDirectChildProjectPaths(slug.split("/items/")[0] ?? "")
      : listTopLevelProjectPaths()
    ).map(getProjectBySlug),
  )
  const index = siblings.findIndex(project => project.slug === slug)

  return {
    previous: index > 0 ? siblings[index - 1] : undefined,
    next:
      index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined,
  }
}

export function getTopLevelProjectParams() {
  return listTopLevelProjectPaths().map(slug => ({ slug }))
}

export function getChildProjectParams() {
  return listTopLevelProjectPaths().flatMap(parentSlug =>
    listDirectChildProjectPaths(parentSlug).map(childPath => ({
      slug: parentSlug,
      child: path.basename(childPath),
    })),
  )
}
