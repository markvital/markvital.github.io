import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://markvital.github.io'),
  title: {
    default: 'Mark Vital - software developer and information designer',
    template: '%s | Mark Vital - software developer and information designer',
  },
  description: 'Mark Vital, software developer and information designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
