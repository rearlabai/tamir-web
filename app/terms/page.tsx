import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'Tamir uygulaması kullanım koşulları ve hizmet şartları.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Ana Sayfa
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Kullanım Koşulları</h1>
        <p className="text-gray-500 mb-8">Son güncelleme: Şubat 2026</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Hizmet Tanımı</h2>
            <p className="text-gray-600">
              Tamir, oto servis işletmeleri için tasarlanmış bir araç servis takip uygulamasıdır.
              Uygulama; müşteri yönetimi, araç kaydı, servis geçmişi takibi ve QR kod paylaşımı
              hizmetleri sunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Kullanım Şartları</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Uygulamayı yalnızca meşru ticari amaçlarla kullanabilirsiniz</li>
              <li>Sisteme girdiğiniz müşteri bilgileri için onay almış olmanız gerekmektedir</li>
              <li>Başkalarının kişisel verilerini izinsiz paylaşamazsınız</li>
              <li>Sistemi kötüye kullanmak veya güvenliği tehdit etmek yasaktır</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Abonelik ve Ödeme</h2>
            <p className="text-gray-600">
              Abonelikler App Store (iOS) ve Google Play (Android) üzerinden yönetilmektedir.
              Abonelik ücretleri, iptal edilene kadar otomatik olarak yenilenir.
              İptal işlemleri App Store veya Google Play üzerinden yapılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Sorumluluk Sınırlaması</h2>
            <p className="text-gray-600">
              Tamir, sisteme girilen verilerin doğruluğundan sorumlu değildir.
              Kullanıcı hatalarından kaynaklanan veri kayıpları için sorumluluk kabul edilmemektedir.
              Teknik sorunlar nedeniyle oluşabilecek kesintiler için ücretsiz plan kullanıcılarına
              tazminat ödenmez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Hesap Sonlandırma</h2>
            <p className="text-gray-600">
              Bu koşulları ihlal etmeniz durumunda hesabınız askıya alınabilir veya kapatılabilir.
              Hesabınızı silmek için destek ile iletişime geçebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Değişiklikler</h2>
            <p className="text-gray-600">
              Bu koşullar zaman zaman güncellenebilir. Önemli değişiklikler uygulama üzerinden
              bildirilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. İletişim</h2>
            <p className="text-gray-600">
              Kullanım koşulları hakkında sorularınız için{' '}
              <Link href="/support" className="text-primary-600 hover:text-primary-700">
                destek sayfamızdan
              </Link>{' '}
              bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
