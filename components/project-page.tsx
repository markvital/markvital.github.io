import Image from "next/image"
import Link from "next/link"
import type { PortfolioProject } from "@/lib/portfolio"

type ProjectPageProps = {
  project: PortfolioProject
  previous?: PortfolioProject
  next?: PortfolioProject
}

export function ProjectPage({ project, previous, next }: ProjectPageProps) {
  return (
    <>
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
        <header className="relative left-1/2 mt-10 mb-8 w-screen -translate-x-1/2 text-center">
          <h1 className="px-3 text-4xl font-bold max-md:text-3xl" itemProp="headline">
            {project.title}
          </h1>
        </header>

        <section
          className="prose-markdown mt-0"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />

        {project.children.length > 0 ? (
          <section className="mt-12 clear-both" id="items">
            <h2>Project items</h2>
            <ul className="relative left-1/2 mt-8 grid w-[min(calc(100vw-2rem),980px)] -translate-x-1/2 list-none justify-center gap-10 p-0 [grid-template-columns:repeat(auto-fill,minmax(min(300px,100%),300px))]">
              {project.children.map(child => (
                <li className="m-0" key={child.slug}>
                  <Link
                    className="text-[var(--accent)] no-underline hover:text-[#2C2060]"
                    href={`/${child.urlSlug}/`}
                    title={child.title}
                  >
                    <figure className="m-0">
                      <Image
                        src={child.thumbImage ?? child.coverImage ?? ""}
                        alt=""
                        width={300}
                        height={300}
                        className="aspect-square w-[300px] object-cover shadow-[0_0_8px_2px_#ddd]"
                      />
                      <figcaption className="mt-1 max-w-[255px]">
                        {child.title}
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
                href={`/${previous.urlSlug}/`}
                rel="prev"
                title={previous.title}
              >
                previous
              </Link>
            ) : null}
          </li>
          <li>
            {next ? (
              <Link href={`/${next.urlSlug}/`} rel="next" title={next.title}>
                next
              </Link>
            ) : null}
          </li>
        </ul>
      </nav>
    </>
  )
}
