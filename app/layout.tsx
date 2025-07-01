import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { AnimatedCursor } from '@/components/animated-cursor';
import { LanguageProvider } from '@/components/language-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raka Arfi - Fullstack Developer',
  description: 'Fullstack developer specializing in Golang, Python, and JavaScript. Building scalable applications with modern web technologies.',
  keywords: 'fullstack developer, golang, python, javascript, nextjs, react, backend architecture',
  authors: [{ name: 'Raka Arfi' }],
  creator: 'Raka Arfi',
  openGraph: {
    title: 'Raka Arfi - Fullstack Developer',
    description: 'Fullstack developer specializing in Golang, Python, and JavaScript. Building scalable applications with modern web technologies.',
    url: 'https://rakaarfi.dev',
    siteName: 'Raka Arfi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raka Arfi - Fullstack Developer',
    description: 'Fullstack developer specializing in Golang, Python, and JavaScript.',
    creator: '@rakaarfi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ScrollProgress />
            <AnimatedCursor />
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}