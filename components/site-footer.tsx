import { site } from "@/lib/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="shrink-0 px-5 pb-3 pt-10 text-[var(--muted-foreground)]">
      <div className="relative grid gap-4 text-center md:flex md:items-center md:justify-between md:text-left">
        <div>
          {site.copyrightName} © {new Date().getFullYear()}
        </div>
        <div className="flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
          <ThemeToggle showLabel />
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
