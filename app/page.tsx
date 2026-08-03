import { Bio } from "@/components/bio"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { SiteShell } from "@/components/site-shell"
import { getTopLevelProjects } from "@/lib/portfolio"

export default function Home() {
  const projects = getTopLevelProjects()

  return (
    <SiteShell full>
      <Bio />
      <p className="mb-10 mt-11 text-center text-xl text-[var(--muted-foreground)]">
        Recent works
      </p>
      <PortfolioGrid projects={projects} />
    </SiteShell>
  )
}
