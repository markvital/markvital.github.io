import Link from "next/link"
import { site } from "@/lib/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="shrink-0 px-5 pb-3 pt-10 text-[var(--muted-foreground)]">
      <div className="flex flex-col items-center gap-y-2 text-center 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:text-left">
        <div className="flex flex-col items-center gap-y-2 2xl:flex-row 2xl:items-center 2xl:gap-x-3">
          <div className="whitespace-nowrap">
            <Link href="/">{site.copyrightName}</Link> © {new Date().getFullYear()}
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-col items-center gap-y-2 2xl:flex-row 2xl:gap-x-3 2xl:gap-y-0"
          >
          <ThemeToggle showLabel />
          <Link
            className="inline-flex items-center whitespace-nowrap rounded-md px-2 py-1 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
            href="/about/"
          >
            about
          </Link>
          <Link
            className="inline-flex items-center whitespace-nowrap rounded-md px-2 py-1 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
            href="/contact/"
          >
            contact
          </Link>
          </nav>
        </div>
        <ul className="flex flex-col items-center gap-y-2 2xl:flex-row 2xl:justify-end 2xl:gap-x-3 2xl:gap-y-0">
          {site.socialLinks.map(link => (
            <li key={link.href}>
              <a
                className="inline-flex items-center whitespace-nowrap rounded-md px-2 py-1 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
                href={link.href}
                rel="noreferrer noopener"
                target="_blank"
                aria-label={link.label}
                title={link.label}
              >
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
