import type { Metadata } from "next"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { SiteShell } from "@/components/site-shell"
import { getTopLevelProjects } from "@/lib/portfolio"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "My Works",
  description: `Most important works of ${site.profile.name}`,
}

export default function WorkPage() {
  const projects = getTopLevelProjects()

  return (
    <SiteShell full>
      <p className="my-8 text-center text-xl text-[var(--muted-foreground)]">
        Recent works
      </p>
      <PortfolioGrid projects={projects} />
    </SiteShell>
  )
}
