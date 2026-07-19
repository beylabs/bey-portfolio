import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Khalid Sani Umar (Bey) | Digital Transformation Architect',
  description: 'Bridging High-Level Public Administration and AI Engineering.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-ghost text-slateC`}>
        {children}
      </body>
    </html>
  );
}
