import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../styles/tailwind.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Dr. Mostaque Hassan — AI & Data Science Researcher',
  description:
    'Personal portal of Dr. Mostaque Md. Morshedur Hassan, Assistant Professor at Brainware University. Research in AI, Data Science, Network Security, and Fuzzy Logic.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Dr. Mostaque Hassan — Researcher & Educator',
    description: 'AI, Data Science & Network Security researcher at Brainware University, Kolkata.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className={nunito.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}