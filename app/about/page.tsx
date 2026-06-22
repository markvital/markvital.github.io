import type { Metadata } from "next"
import Image from "next/image"
import { SiteShell } from "@/components/site-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: site.profile.about.title,
  description: site.profile.about.description,
}

export default function AboutPage() {
  return (
    <SiteShell>
      <article>
        <header className="text-center">
          <h1 className="my-8 text-4xl font-bold">{site.profile.about.title}</h1>
        </header>
        <div className="space-y-6">
          {site.profile.about.paragraphs.map(paragraph => (
            <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
        <Image
          src={site.profile.about.cover}
          alt={site.profile.about.coverAlt}
          className="mt-8 h-auto w-full"
          priority
        />
      </article>
    </SiteShell>
  )
}
