import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Omar Fandiño',
  description: "Omar Fandiño's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${ibmPlexSerif.className} antialiased`}
      >
        <Navbar />
        <div className="container w-full mx-auto mx-w-screen-xl px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
