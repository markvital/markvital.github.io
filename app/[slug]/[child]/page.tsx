import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectPage as ProjectPageView } from "@/components/project-page"
import { SiteShell } from "@/components/site-shell"
import {
  getChildProjectParams,
  getProjectBySlug,
  getProjectNeighbors,
  projectExists,
} from "@/lib/portfolio"

export function generateStaticParams() {
  return getChildProjectParams().map(({ slug, child }) => ({ slug, child }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; child: string }>
}): Promise<Metadata> {
  const { slug, child } = await params
  const contentSlug = `${slug}/items/${child}`
  if (!projectExists(contentSlug)) {
    notFound()
  }
  const project = getProjectBySlug(contentSlug)

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/${project.urlSlug}/`,
    },
  }
}

export default async function ChildProjectPage({
  params,
}: {
  params: Promise<{ slug: string; child: string }>
}) {
  const { slug, child } = await params
  const contentSlug = `${slug}/items/${child}`
  if (!projectExists(contentSlug)) {
    notFound()
  }
  const project = getProjectBySlug(contentSlug)
  const { previous, next } = getProjectNeighbors(project.slug)

  return (
    <SiteShell>
      <ProjectPageView project={project} previous={previous} next={next} />
    </SiteShell>
  )
}
