import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)] shadow-sm">
      <nav className="flex items-center px-5 py-1 text-base font-normal text-[var(--muted-foreground)]">
        <Link className="flex items-center gap-3 px-0 py-2 sm:px-3" href="/">
          <Image
            src={site.profile.logo}
            alt={site.profile.name}
            width={35}
            height={35}
            className="h-[35px] w-[35px]"
            priority
          />
          <span>{site.profile.name}</span>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <Link
            className="hidden rounded-md px-4 py-2 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)] sm:inline"
            href="/work/"
          >
            {site.nav.works}
          </Link>
          <Link
            className="rounded-md px-4 py-2 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
            href="/about/"
          >
            {site.nav.about}
          </Link>
          <Link
            className="rounded-md px-4 py-2 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
            href="/contact/"
          >
            contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
