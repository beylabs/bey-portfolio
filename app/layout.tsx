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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khalid Sani Umar",
  "alternateName": "Bey",
  "url": "https://bey-portfolio.vercel.app",
  "jobTitle": "Digital Transformation Architect",
  "worksFor": {
    "@type": "Organization",
    "name": "National Board for Arabic and Islamic Studies (NBAIS)"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kano",
    "addressCountry": "NG"
  },
  "sameAs": [
    "https://linkedin.com/in/sanikhalidumar",
    "https://github.com/beylabs"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-ghost text-slateC font-sans">
        {children}
      </body>
    </html>
  );
}
