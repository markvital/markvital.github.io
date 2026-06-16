import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import profilePic from '@/legacy-gatsby/src/images/profile-pic.png';

const author = {
  name: 'Mark Vital',
  summary:
    'A web developer and information designer who lives in crypto universe and builds things with code.',
  twitter: 'markvitals',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-neutral-200 bg-white shadow-sm">
        <nav className="flex items-center px-5 py-1 text-sm font-bold text-neutral-500">
          <Link className="flex items-center gap-3 px-0 py-2 sm:px-3" href="/">
            <Image
              src={profilePic}
              alt={author.name}
              width={35}
              height={35}
              className="h-[35px] w-[35px]"
              priority
            />
            <span>{author.name}</span>
          </Link>
          <Link className="px-5 py-3 hover:text-neutral-400" href="/about/">
            about
          </Link>
          <Link className="hidden px-5 py-3 hover:text-neutral-400 sm:inline" href="/work/">
            works
          </Link>
          <a
            className="ml-auto px-3 py-3 text-neutral-500 hover:text-neutral-400"
            href={`https://twitter.com/${author.twitter}`}
            aria-label="Twitter"
          >
            <ExternalLink size={22} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1300px] flex-1 px-4">
        <section className="mx-auto mt-7 flex max-w-[725px] items-center gap-5 text-xl max-sm:text-lg">
          <aside className="shrink-0">
            <Image
              src={profilePic}
              alt={author.name}
              width={125}
              height={125}
              className="h-[125px] w-[125px]"
              priority
            />
          </aside>
          <div>
            <p className="m-0 text-xl max-sm:text-lg">Developing Software From Web2 to Web3</p>
            <p>{author.summary}</p>
          </div>
        </section>

        <p className="mb-10 mt-11 text-center text-xl text-neutral-400">Portfolio</p>
        <div className="rounded border border-dashed border-neutral-300 p-10 text-center text-neutral-500">
          Portfolio markdown rendering will be migrated in Step 2.
        </div>
      </main>

      <footer className="shrink-0 px-5 pb-3 pt-10 text-neutral-500">
        {author.name} © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
