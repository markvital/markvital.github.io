import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="shrink-0 px-5 pb-3 pt-10 text-[var(--muted-foreground)]">
      <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          {site.copyrightName} © {new Date().getFullYear()}
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-end">
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
