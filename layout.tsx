import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://dmvheatpumps.com'),
  title: {
    default: 'DMV Heat Pumps - Installation, Rebates & Training | MD, DC, VA',
    template: '%s | DMV Heat Pumps',
  },
  description:
    'Complete heat pump resource for Maryland, DC & Northern Virginia. Get installation guides, up to $8,000 ZEHES rebates, A2L refrigerant safety info, contractor training, and AI-powered HVAC diagnostics.',
  keywords: [
    'heat pump Maryland',
    'heat pump DC',
    'heat pump Virginia',
    'ZEHES rebate',
    'A2L refrigerant',
    'cold climate heat pump',
    'heat pump installation DMV',
    'HVAC training',
    'heat pump sizing',
    'Maryland electrification',
  ],
  authors: [{ name: 'DMV Heat Pumps' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dmvheatpumps.com',
    siteName: 'DMV Heat Pumps',
    title: 'DMV Heat Pumps - Your Complete Electrification Resource',
    description:
      'Expert heat pump guidance for MD, DC & VA. Rebates up to $8,000, A2L safety, contractor training, and AI diagnostics.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMV Heat Pumps - Installation, Rebates & Training',
    description:
      'Expert heat pump guidance for Maryland, DC & Virginia. ZEHES rebates, A2L safety, contractor training.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'DMV Heat Pumps',
              description:
                'Heat pump education, installation guidance, and electrification resources for Maryland, DC & Northern Virginia',
              url: 'https://dmvheatpumps.com',
              areaServed: ['Maryland', 'Washington DC', 'Northern Virginia'],
              serviceType: [
                'Heat Pump Education',
                'HVAC Training',
                'Rebate Navigation',
                'Market Intelligence',
              ],
              knowsAbout: [
                'Heat Pumps',
                'A2L Refrigerants',
                'ZEHES Rebates',
                'HVAC Installation',
                'Cold Climate Heating',
                'AI Diagnostics',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
