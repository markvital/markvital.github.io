import Image from "next/image"
import Link from "next/link"
import profilePic from "@/assets/profile-pic.png"
import { site } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white shadow-sm">
      <nav className="flex items-center px-5 py-1 text-base font-normal text-[#9f9c9d]">
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
        <Link
          className="ml-auto rounded-md px-4 py-2 transition-colors hover:bg-neutral-100 hover:text-neutral-700 active:bg-neutral-200 active:text-neutral-800"
          href="/about/"
        >
          about
        </Link>
        <Link
          className="hidden rounded-md px-4 py-2 transition-colors hover:bg-neutral-100 hover:text-neutral-700 active:bg-neutral-200 active:text-neutral-800 sm:inline"
          href="/work/"
        >
          works
        </Link>
      </nav>
    </header>
  )
}
