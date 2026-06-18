import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteShell } from "@/components/site-shell"

export default function NotFound() {
  return (
    <SiteShell>
      <h1 className="my-8 text-4xl font-bold">404: Not Found</h1>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
      <Button asChild className="mt-4">
        <Link href="/">Back home</Link>
      </Button>
    </SiteShell>
  )
}
