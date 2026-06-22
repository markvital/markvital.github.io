import Image from "next/image"
import { site } from "@/lib/site"

export function Bio() {
  return (
    <section className="mx-auto mt-7 flex max-w-[725px] items-center gap-5 text-xl max-sm:text-lg">
      <aside className="shrink-0">
        <Image
          src={site.profile.avatar}
          alt={site.profile.name}
          width={125}
          height={125}
          className="h-[125px] w-[125px]"
          priority
        />
      </aside>
      <div>
        <p className="m-0 text-xl max-sm:text-lg">{site.profile.bioTitle}</p>
        <p>{site.profile.bioSummary}</p>
      </div>
    </section>
  )
}
