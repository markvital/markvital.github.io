import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/site-shell"
import { getProjectItem, getProjectItemParams } from "@/lib/portfolio"

export function generateStaticParams() {
  return getProjectItemParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; item: string }>
}): Promise<Metadata> {
  const { slug, item } = await params
  const match = getProjectItem(slug, item)

  if (!match) {
    return {}
  }

  return {
    title: match.item.title,
    description: match.item.description ?? match.project.description,
    alternates: {
      canonical: `/${match.project.slug}/${match.item.slug}/`,
    },
  }
}

export default async function ProjectItemPage({
  params,
}: {
  params: Promise<{ slug: string; item: string }>
}) {
  const { slug, item } = await params
  const match = getProjectItem(slug, item)

  if (!match) {
    notFound()
  }

  return (
    <SiteShell>
      <article className="mt-3" itemScope itemType="http://schema.org/Article">
        <div className="relative left-1/2 w-screen -translate-x-1/2 pb-3 pl-5">
          <Link
            className="text-[#a095af] no-underline hover:text-[#2C2060]"
            href={`/${match.project.slug}/#items`}
            title={`Back to ${match.project.title}`}
          >
            ◀ Back to {match.project.title}
          </Link>
        </div>

        <section>
          <Image
            src={match.item.imageUrl}
            alt=""
            width={1000}
            height={700}
            className="h-auto w-full shadow-[0_0_8px_2px_#ddd]"
            priority
          />
          <header className="text-center">
            <h1
              className="text-4xl font-bold max-md:text-3xl"
              itemProp="headline"
            >
              {match.item.title}
            </h1>
          </header>
          {match.item.description ? <p>{match.item.description}</p> : null}
        </section>
      </article>
    </SiteShell>
  )
}
