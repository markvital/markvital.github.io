import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import profilePic from "@/legacy-gatsby/src/images/profile-pic.png"
import { site } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white shadow-sm">
      <nav className="flex items-center px-5 py-1 text-sm font-bold text-neutral-500">
        <Link className="flex items-center gap-3 px-0 py-2 sm:px-3" href="/">
          <Image
            src={profilePic}
            alt={site.author.name}
            width={35}
            height={35}
            className="h-[35px] w-[35px]"
            priority
          />
          <span>{site.author.name}</span>
        </Link>
        <Link className="px-5 py-3 hover:text-neutral-400" href="/about/">
          about
        </Link>
        <Link
          className="hidden px-5 py-3 hover:text-neutral-400 sm:inline"
          href="/work/"
        >
          works
        </Link>
        <a
          className="ml-auto px-3 py-3 text-neutral-500 hover:text-neutral-400"
          href={`https://twitter.com/${site.author.twitter}`}
          aria-label="Twitter"
        >
          <ExternalLink size={22} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
