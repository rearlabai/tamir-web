import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Tamir - Profesyonel Araç Servis Takibi',
    template: '%s | Tamir',
  },
  description:
    'Tamir uygulaması ile oto servisler araç bakım kayıtlarını kolayca yönetir. Müşteriler QR kod ile servis geçmişlerini anında görüntüler.',
  keywords: ['oto servis', 'araç bakım', 'servis takip', 'qr kod', 'tamir'],
  authors: [{ name: 'Tamir' }],
  creator: 'Tamir',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tamirapp.com'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    siteName: 'Tamir',
    title: 'Tamir - Profesyonel Araç Servis Takibi',
    description:
      'Tamir uygulaması ile oto servisler araç bakım kayıtlarını kolayca yönetir.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tamir - Profesyonel Araç Servis Takibi',
    description:
      'Tamir uygulaması ile oto servisler araç bakım kayıtlarını kolayca yönetir.',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
