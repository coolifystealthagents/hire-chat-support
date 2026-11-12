import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer } from '@/components/SiteChrome';
import { MotionEnhancements } from '@/components/MotionEnhancements';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Specialist remote staff`, template: `%s | ${site.name}` },
  description: site.heroBody,
  icons: { icon: '/icon.svg' },
  openGraph: { type: 'website', siteName: site.name, images: ['/editorial/chat-support-home-hero.jpg'] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design={site.design}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}><Header /><div id="main-content" tabIndex={-1}>{children}</div><Footer /><MotionEnhancements /><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
  <Script
    id="databull-analytics"
    src="https://databull.stealthagents.us/js/script.js"
    data-website-id="dc_kyz6b95yugx89m"
    data-domain="hirechatsupport.com"
    strategy="afterInteractive"
  /></body></html>;
}
