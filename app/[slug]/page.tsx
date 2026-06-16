import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/site-shell"
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectParams,
} from "@/lib/portfolio"

export function generateStaticParams() {
  return getProjectParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
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
  const project = getProjectBySlug(slug)
  const { previous, next } = getAdjacentProjects(slug)

  if (!project) {
    notFound()
  }

  return (
    <SiteShell>
      {project.coverImage ? (
        <div className="mx-auto mt-2 max-w-[950px] md:-mx-[75px] lg:-mx-[150px]">
          <Image
            src={project.coverImage}
            alt=""
            width={950}
            height={500}
            className="h-auto w-full"
            priority
          />
        </div>
      ) : null}

      <article itemScope itemType="http://schema.org/Article">
        <header className="relative left-1/2 w-screen -translate-x-1/2 text-center">
          <h1
            className="px-3 text-4xl font-bold max-md:text-3xl"
            itemProp="headline"
          >
            {project.title}
          </h1>
        </header>

        <section
          className="prose-markdown"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />

        {project.items.length > 0 ? (
          <section className="mt-12 clear-both" id="items">
            <h2>Project items</h2>
            <ul className="mx-0 mt-8 grid list-none justify-center gap-10 p-0 [grid-template-columns:repeat(auto-fill,300px)] lg:-mx-[175px]">
              {project.items.map(item => (
                <li className="m-0" key={item.slug}>
                  <Link
                    className="text-[var(--accent)] no-underline hover:text-[#2C2060]"
                    href={`/${project.slug}/${item.slug}/`}
                    title={item.title}
                  >
                    <figure className="m-0">
                      <Image
                        src={item.imageUrl}
                        alt=""
                        width={300}
                        height={300}
                        className="aspect-square w-[300px] object-cover shadow-[0_0_8px_2px_#ddd]"
                      />
                      <figcaption className="mt-1 max-w-[255px]">
                        {item.title}
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>

      <nav className="mt-8 border-t border-neutral-200 pt-5">
        <ul className="flex list-none flex-wrap justify-between p-0">
          <li>
            {previous ? (
              <Link
                href={`/${previous.slug}/`}
                rel="prev"
                title={previous.title}
              >
                previous
              </Link>
            ) : null}
          </li>
          <li>
            {next ? (
              <Link href={`/${next.slug}/`} rel="next" title={next.title}>
                next
              </Link>
            ) : null}
          </li>
        </ul>
      </nav>
    </SiteShell>
  )
}
