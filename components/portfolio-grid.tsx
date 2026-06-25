import Image from "next/image"
import Link from "next/link"
import type { PortfolioProject } from "@/lib/portfolio"

export function PortfolioGrid({
  projects,
}: Readonly<{ projects: PortfolioProject[] }>) {
  return (
    <div className="grid justify-center gap-x-[50px] gap-y-[50px] [grid-template-columns:repeat(auto-fill,minmax(280px,350px))]">
      {projects.map(project => (
        <Link
          className="group block h-[400px] text-center no-underline"
          href={`/${project.slug}/`}
          itemProp="url"
          key={project.slug}
        >
          {project.thumbImage ? (
            <Image
              src={project.thumbImage}
              alt=""
              width={350}
              height={350}
              placeholder={project.thumbBlurDataURL ? "blur" : "empty"}
              blurDataURL={project.thumbBlurDataURL}
              className="aspect-square w-full rounded-[5px] border-2 border-neutral-300 object-cover saturate-[25%] transition group-hover:saturate-100"
            />
          ) : (
            <div className="aspect-square w-full rounded-[5px] border-2 border-neutral-300 bg-neutral-100" />
          )}
          <h2 className="mt-4 text-base font-bold text-neutral-400 transition group-hover:text-neutral-600">
            {project.title}
          </h2>
        </Link>
      ))}
    </div>
  )
}
