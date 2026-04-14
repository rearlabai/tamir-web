import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Destek',
  description: 'Tamir uygulaması destek sayfası. Sorularınız için bizimle iletişime geçin.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Ana Sayfa
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Destek</h1>
        <p className="text-gray-500 mb-8">Sorunuzu çözmek için buradayız</p>

        <div className="space-y-6">
          {/* Contact card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h2>
            <p className="text-gray-600 mb-6">
              Uygulama ile ilgili sorularınız, önerileriniz veya teknik sorunlarınız için
              aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-posta</p>
                  <a
                    href="mailto:destek@tamirapp.com"
                    className="font-medium text-primary-600 hover:text-primary-700"
                  >
                    destek@tamirapp.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Uygulamayı nasıl indirebilirim?',
                  a: 'Tamir uygulamasını App Store (iOS) veya Google Play (Android) üzerinden ücretsiz indirebilirsiniz.',
                },
                {
                  q: 'Aboneliğimi nasıl iptal edebilirim?',
                  a: 'Aboneliğinizi App Store veya Google Play üzerinden hesap ayarlarından iptal edebilirsiniz.',
                },
                {
                  q: 'Verilerim güvende mi?',
                  a: 'Tüm veriler şifrelenmiş sunucularda saklanmaktadır. Finansal bilgileriniz hiçbir zaman QR kod sayfasında gösterilmez.',
                },
                {
                  q: 'QR kod nasıl paylaşılır?',
                  a: 'Araç detay sayfasından QR kodu görebilir, indirebilir veya müşterinizle paylaşabilirsiniz.',
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-medium text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal links */}
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-primary-600">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="hover:text-primary-600">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
