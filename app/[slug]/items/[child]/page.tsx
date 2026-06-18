import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectPage as ProjectPageView } from "@/components/project-page"
import { SiteShell } from "@/components/site-shell"
import {
  getProjectBySlug,
  getProjectNeighbors,
  getChildProjectParams,
  projectExists,
} from "@/lib/portfolio"

export function generateStaticParams() {
  return getChildProjectParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; child: string }>
}): Promise<Metadata> {
  const { slug, child } = await params
  if (!projectExists(`${slug}/items/${child}`)) {
    notFound()
  }
  const project = getProjectBySlug(`${slug}/items/${child}`)

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/${project.slug}/`,
    },
  }
}

export default async function ChildProjectPage({
  params,
}: {
  params: Promise<{ slug: string; child: string }>
}) {
  const { slug, child } = await params
  if (!projectExists(`${slug}/items/${child}`)) {
    notFound()
  }
  const project = getProjectBySlug(`${slug}/items/${child}`)
  const { previous, next } = getProjectNeighbors(project.slug)
  const parent = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <SiteShell>
      <ProjectPageView
        project={project}
        previous={previous}
        next={next}
        backHref={`/${slug}/#items`}
        backTitle={parent.title}
      />
    </SiteShell>
  )
}
