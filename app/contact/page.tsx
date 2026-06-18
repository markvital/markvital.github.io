import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Contact Mark Vital",
  description: "Please submit additional details to contact Mark Vital.",
}

export default function ContactPage() {
  return (
    <SiteShell>
      <h1 className="my-8 text-4xl font-bold">Contact Me</h1>
      <p>Please fill out the form below to contact me.</p>
      <p>&lt; not implemented yet &gt;</p>
    </SiteShell>
  )
}
