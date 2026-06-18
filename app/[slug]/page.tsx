import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectPage as ProjectPageView } from "@/components/project-page"
import { SiteShell } from "@/components/site-shell"
import {
  getProjectBySlug,
  getProjectNeighbors,
  projectExists,
  getTopLevelProjectParams,
} from "@/lib/portfolio"

export function generateStaticParams() {
  return getTopLevelProjectParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!projectExists(slug)) {
    notFound()
  }
  const project = getProjectBySlug(slug)

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/${project.slug}/`,
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!projectExists(slug)) {
    notFound()
  }
  const project = getProjectBySlug(slug)
  const { previous, next } = getProjectNeighbors(slug)

  if (!project) {
    notFound()
  }

  return (
    <SiteShell>
      <ProjectPageView project={project} previous={previous} next={next} />
    </SiteShell>
  )
}
