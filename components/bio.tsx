import Image from "next/image"
import profilePic from "@/legacy-gatsby/src/images/profile-pic.png"
import { site } from "@/lib/site"

export function Bio() {
  return (
    <section className="mx-auto mt-7 flex max-w-[725px] items-center gap-5 text-xl max-sm:text-lg">
      <aside className="shrink-0">
        <Image
          src={profilePic}
          alt={site.author.name}
          width={125}
          height={125}
          className="h-[125px] w-[125px]"
          priority
        />
      </aside>
      <div>
        <p className="m-0 text-xl max-sm:text-lg">
          Developing Software From Web2 to Web3
        </p>
        <p>{site.author.summary}</p>
      </div>
    </section>
  )
}
