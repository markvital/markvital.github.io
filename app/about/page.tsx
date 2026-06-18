import type { Metadata } from "next"
import Image from "next/image"
import { SiteShell } from "@/components/site-shell"
import aboutCover from "@/assets/about-cover.jpg"

export const metadata: Metadata = {
  title: "About Me",
  description: "Mark Vital is an information designer and programmer.",
}

export default function AboutPage() {
  return (
    <SiteShell>
      <article>
        <header className="text-center">
          <h1 className="my-8 text-4xl font-bold">About Me</h1>
        </header>
        <div className="space-y-6">
          <p>
            I&apos;m a full stack developer with an eye for user interfaces and
            a sense of usability. I have worked in large corporations for half
            of my career and in a startups later on. I feel like I have now
            combined both the professionalism of working on advanced products
            with the hacker mindset of a startup. I lean towards using
            open-sources frameworks and tools to achieve fast results.
          </p>
          <p>
            Besides the software development my passion is an information
            design. Together with{" "}
            <a
              className="text-[var(--accent)]"
              href="http://twitter.com/annavitals"
            >
              @annavital
            </a>{" "}
            we created multiple{" "}
            <a className="text-[var(--accent)]" href="https://blog.adioma.com">
              infographics
            </a>{" "}
            and a data visualization tool.
          </p>
        </div>
        <Image
          src={aboutCover}
          alt="Mark Vital"
          className="mt-8 h-auto w-full"
          priority
        />
      </article>
    </SiteShell>
  )
}
