import type { Metadata } from "next"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { SiteShell } from "@/components/site-shell"
import { getAllProjects } from "@/lib/portfolio"

export const metadata: Metadata = {
  title: "My Works",
  description: "Most important works of Mark Vital",
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <SiteShell full>
      <p className="my-8 text-center text-xl text-neutral-500">
        Here is my portfolio:
      </p>
      <PortfolioGrid projects={projects} />
    </SiteShell>
  )
}
