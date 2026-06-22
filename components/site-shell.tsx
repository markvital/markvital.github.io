import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
      <SiteFooter />
    </div>
  )
}
