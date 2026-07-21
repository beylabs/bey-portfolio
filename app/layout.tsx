import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://bey-portfolio.vercel.app'),
  title: 'Khalid Sani Umar (Bey) | Digital Transformation Architect',
  description: 'Bridging high-level public administration with enterprise software engineering. Specializing in the digital transformation of institutional workflows.',
  openGraph: {
    title: 'Khalid Sani Umar (Bey) | Digital Transformation Architect',
    description: 'Bridging high-level public administration with enterprise software engineering.',
    url: 'https://bey-portfolio.vercel.app',
    siteName: 'Khalid Sani Umar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalid Sani Umar (Bey) | Digital Transformation Architect',
    description: 'Bridging high-level public administration with enterprise software engineering.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-ghost text-slateC font-sans">
        {children}
      </body>
    </html>
  );
}
