import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: site.profile.contact.title,
  description: site.profile.contact.description,
}

export default function ContactPage() {
  return (
    <SiteShell>
      <h1 className="my-8 text-4xl font-bold">{site.profile.contact.title}</h1>
      <p>{site.profile.contact.intro}</p>
      <p>&lt; not implemented yet &gt;</p>
    </SiteShell>
  )
}
