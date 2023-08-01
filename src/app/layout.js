import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exdecode',
  description: 'Community focused on software development and information technology that provides a place for developers, coders, designers, and technology enthusiasts to share knowledge, experiences, and new ideas in the world of information technology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
          key="desc"
        />
        <meta property="og:title" content={metadata.title} key="ogtitle" />
        <meta property="og:description" content={metadata.description} key="ogdesc" />
        <link rel="icon" href="/logo-exdecode-bgblue.png" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
