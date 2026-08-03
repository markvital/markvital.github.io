import Link from "next/link"
import { site } from "@/lib/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="shrink-0 px-5 pb-3 pt-10 text-[var(--muted-foreground)]">
      <div className="flex flex-col gap-4 text-left md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-x-3">
          <nav
            aria-label="Footer navigation"
            className="flex items-center justify-start gap-x-3"
          >
            <ThemeToggle showLabel />
            <Link
              className="inline-flex items-center rounded-md px-2 py-1 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
              href="/about/"
            >
              about
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-2 py-1 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
              href="/contact/"
            >
              contact
            </Link>
          </nav>
          <div>
            <Link href="/">{site.copyrightName}</Link> © {new Date().getFullYear()}
          </div>
        </div>
        <ul className="flex flex-col items-center gap-y-2 md:flex-row md:justify-end md:gap-x-3 md:gap-y-0">
          {site.socialLinks.map(link => (
            <li key={link.href}>
              <a
                className="inline-flex items-center rounded-md px-2 py-1 transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] active:bg-[var(--surface-active)]"
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
