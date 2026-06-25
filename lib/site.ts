import fs from "node:fs"
import path from "node:path"

export type SiteConfig = {
  metadataBase: string
  title: string
  description: string
  copyrightName: string
  socialLinks: Array<{
    label: string
    href: string
    icon?: "twitter" | "linkedin" | "github" | "stackoverflow" | "external"
  }>
  profile: {
    name: string
    avatar: string
    logo: string
    bioTitle: string
    bioSummary: string
    about: {
      title: string
      description: string
      paragraphs: string[]
      cover: string
      coverAlt: string
    }
    contact: {
      title: string
      description: string
      intro: string
    }
  }
  nav: {
    about: string
    works: string
  }
}

const sitePath = path.join(process.cwd(), "content", "site.json")

export const site = JSON.parse(
  fs.readFileSync(sitePath, "utf8"),
) as SiteConfig
