import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'AutoLog uygulaması gizlilik politikası ve KVKK kapsamında kişisel veri işleme bilgilendirmesi.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Ana Sayfa
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gizlilik Politikası</h1>
        <p className="text-gray-500 mb-8">Son güncelleme: Şubat 2026</p>

        <div className="prose prose-gray max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Giriş</h2>
              <p className="text-gray-600">
                AutoLog uygulaması (&quot;Uygulama&quot;), oto servis işletmelerinin araç bakım kayıtlarını
                dijital ortamda yönetmelerine yardımcı olmak amacıyla geliştirilmiştir. Bu gizlilik politikası,
                Uygulama aracılığıyla toplanan kişisel verilerin nasıl işlendiğini açıklamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Toplanan Veriler</h2>
              <p className="text-gray-600 mb-2">Uygulama kapsamında aşağıdaki veriler toplanmaktadır:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Servis işletme bilgileri (ad, adres, telefon numarası)</li>
                <li>Müşteri bilgileri (ad soyad, telefon numarası)</li>
                <li>Araç bilgileri (plaka, marka, model, yıl)</li>
                <li>Servis kayıtları (yapılan işlemler, tarih, kilometre bilgisi)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Verilerin Kullanım Amacı</h2>
              <p className="text-gray-600 mb-2">Toplanan veriler yalnızca aşağıdaki amaçlarla kullanılmaktadır:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Servis kayıtlarının takibi ve yönetimi</li>
                <li>QR kod aracılığıyla araç servis geçmişinin görüntülenmesi</li>
                <li>Müşterilere servis hatırlatması gönderilmesi</li>
                <li>Uygulama performansının iyileştirilmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Veri Güvenliği</h2>
              <p className="text-gray-600">
                Tüm veriler Supabase altyapısı üzerinde şifrelenmiş olarak saklanmaktadır.
                Veriler üçüncü taraflarla paylaşılmamakta ve ticari amaçla kullanılmamaktadır.
                Finansal bilgiler (ücret detayları) hiçbir zaman QR kod sayfasında gösterilmemektedir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. KVKK Hakları</h2>
              <p className="text-gray-600 mb-2">
                6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. İletişim</h2>
              <p className="text-gray-600">
                Gizlilik politikamız hakkında sorularınız için{' '}
                <Link href="/support" className="text-primary-600 hover:text-primary-700">
                  destek sayfamızdan
                </Link>{' '}
                bizimle iletişime geçebilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
