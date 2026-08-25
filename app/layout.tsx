import type { Metadata } from 'next';
import { env } from '@/lib/env';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AutoLog - Profesyonel Araç Servis Takibi',
    template: '%s | AutoLog',
  },
  description:
    'AutoLog uygulaması ile oto servisler araç bakım kayıtlarını kolayca yönetir. Müşteriler QR kod ile servis geçmişlerini anında görüntüler.',
  keywords: ['oto servis', 'araç bakım', 'servis takip', 'qr kod', 'autolog'],
  authors: [{ name: 'AutoLog' }],
  creator: 'AutoLog',
  icons: {
    apple: '/autolog-app-icon.png',
    icon: '/autolog-app-icon.png',
  },
  metadataBase: new URL(env.appUrl),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    siteName: 'AutoLog',
    title: 'AutoLog - Profesyonel Araç Servis Takibi',
    description:
      'AutoLog uygulaması ile oto servisler araç bakım kayıtlarını kolayca yönetir.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoLog - Profesyonel Araç Servis Takibi',
    description:
      'AutoLog uygulaması ile oto servisler araç bakım kayıtlarını kolayca yönetir.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
