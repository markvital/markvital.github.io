import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"

export function SiteShell({
  children,
  full = false,
}: Readonly<{
  children: React.ReactNode
  full?: boolean
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main
        className={`mx-auto w-full flex-1 px-4 ${full ? "max-w-[1300px]" : "max-w-[650px]"}`}
      >
        {children}
      </main>
      <footer className="shrink-0 px-5 pb-3 pt-10 text-neutral-500">
        {site.author.name} © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
