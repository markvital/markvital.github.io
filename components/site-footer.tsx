import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="shrink-0 px-5 pb-3 pt-10 text-neutral-500">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {site.copyrightName} © {new Date().getFullYear()}
        </div>
        <ul className="flex flex-wrap items-center gap-2">
          {site.socialLinks.map(link => (
            <li key={link.href}>
              <a
                className="inline-flex items-center rounded-md px-2 py-1 transition-colors hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200"
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
