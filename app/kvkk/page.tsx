import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description:
    '6698 sayılı KVKK kapsamında AutoLog uygulamasında kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
};

const CONTACT_EMAIL = 'support@rearlabai.com';
const LAST_UPDATED = '19 Nisan 2026';

export default function KvkkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Ana Sayfa
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">KVKK Aydınlatma Metni</h1>
        <p className="text-gray-500 mb-8">Son güncelleme: {LAST_UPDATED}</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <section>
            <p className="text-gray-600">
              İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun
              (&quot;KVKK&quot;) 10. maddesi uyarınca, AutoLog uygulaması (&quot;Uygulama&quot;)
              kapsamında kişisel verilerinizin işlenmesi süreçleri hakkında sizi bilgilendirmek
              amacıyla hazırlanmıştır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Veri Sorumlusu</h2>
            <p className="text-gray-600">
              Türkiye Cumhuriyeti mevzuatı kapsamında bireysel mobil uygulama geliştirici
              statüsünde faaliyet göstermekteyiz. KVKK kapsamında veri sorumlusu sıfatıyla
              hareket edilmekte olup başvuru kanalı{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {CONTACT_EMAIL}
              </a>{' '}
              adresidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. İşlenen Kişisel Veri Kategorileri
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                <strong>Kimlik:</strong> Ad soyad (işletme/Kullanıcı), müşteri ad soyadı
              </li>
              <li>
                <strong>İletişim:</strong> E-posta, telefon numarası, opsiyonel adres
              </li>
              <li>
                <strong>Müşteri/Araç:</strong> Araç plakası, marka/model, şasi (VIN), kilometre,
                servis geçmişi
              </li>
              <li>
                <strong>Görsel/İşitsel:</strong> Araç, hasar, fatura fotoğrafları; kısa video
                kayıtları
              </li>
              <li>
                <strong>Finans:</strong> Servis tutarı, ödeme bilgileri, abonelik kayıtları
              </li>
              <li>
                <strong>İşlem Güvenliği:</strong> IP, cihaz modeli, OS, uygulama sürümü, hata
                kayıtları
              </li>
              <li>
                <strong>Pazarlama (opsiyonel):</strong> Açık rıza vermeniz halinde uygulama içi
                geri bildirim ve öneri talepleri
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. İşleme Amaçları</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Uygulama hizmetinin sunulması ve Kullanıcı hesabının yönetimi</li>
              <li>Servis, müşteri, araç kayıtlarının dijital defter olarak tutulması</li>
              <li>
                Yapay zekâ destekli hasar tespiti, tanı önerisi ve araç sağlık raporu üretilmesi
              </li>
              <li>QR kod ile araç sahibine geçmiş bilgilerinin (finansal veriler hariç) sunumu</li>
              <li>Abonelik yönetimi ve satın alma doğrulaması</li>
              <li>Güvenlik ve kötüye kullanım önleme</li>
              <li>Hata tespiti, performans iyileştirmeleri</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Hukuki Sebepler</h2>
            <p className="text-gray-600 mb-2">
              Kişisel verileriniz KVKK madde 5 kapsamında aşağıdaki hukuki sebeplere dayanılarak
              işlenir:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Sözleşmenin kurulması ve ifası (md. 5/2-c)</li>
              <li>Veri sorumlusunun meşru menfaati (md. 5/2-f)</li>
              <li>Yasal yükümlülük (md. 5/2-ç)</li>
              <li>
                Açık rıza (md. 5/1) — yapay zekâ analizleri, medya yükleme, yurt dışı aktarım vb.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Aktarım ve Yurt Dışı Transferi
            </h2>
            <p className="text-gray-600 mb-2">
              Verileriniz, hizmetin sunulabilmesi için aşağıdaki alt hizmet sağlayıcılarla
              paylaşılmaktadır:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Supabase (veritabanı, kimlik doğrulama, dosya depolama)</li>
              <li>Anthropic (AI analiz — Claude modeli)</li>
              <li>RevenueCat (abonelik yönetimi)</li>
              <li>Apple App Store / Google Play (dağıtım ve ödeme)</li>
              <li>Sentry (çökme raporları)</li>
              <li>Expo / Vercel (uygulama altyapısı)</li>
            </ul>
            <p className="text-gray-600 mt-3">
              Bu sağlayıcıların bir kısmı ABD merkezli olup veriler yurt dışına aktarılmaktadır.
              Yurt dışı aktarımı KVKK madde 9 kapsamında açık rızanıza veya yasal
              istisnalara dayanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Veri Toplama Yöntemleri</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Uygulama üzerinden Kullanıcı tarafından doğrudan girilmesi</li>
              <li>
                Cihaz API&apos;leri (kamera, galeri, bildirim) aracılığıyla izin verdiğiniz
                ölçüde
              </li>
              <li>Otomatik yazılım günlükleri (hata, çökme)</li>
              <li>Abonelik ve ödeme sistemlerinden gelen doğrulama yanıtları</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Haklarınız (KVKK md. 11)
            </h2>
            <p className="text-gray-600 mb-2">
              Kişisel verilerinize ilişkin olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>İşlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içi/yurt dışı aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
              <li>Silinmesini veya yok edilmesini isteme</li>
              <li>
                Düzeltme/silme/yok etme taleplerinizin aktarıldığı üçüncü kişilere bildirilmesini
                isteme
              </li>
              <li>
                Otomatik sistemlerle analiz sonucu aleyhinize bir sonuç çıkmasına itiraz etme
              </li>
              <li>Zarara uğramışsanız zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Başvuru Yöntemi</h2>
            <p className="text-gray-600">
              Haklarınızı kullanmak için, kimliğinizi tespit edici belgelerle birlikte
              başvurunuzu{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {CONTACT_EMAIL}
              </a>{' '}
              adresine iletebilirsiniz. Başvurularınız en geç 30 gün içinde cevaplanır;
              Kurul&apos;ca ücret tarifesi belirlenmesi halinde belirlenen ücret talep edilebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. İletişim</h2>
            <p className="text-gray-600">
              Her türlü soru ve bildirim için{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>

        <div className="mt-6 flex gap-4 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-primary-600">Gizlilik Politikası</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-primary-600">Kullanım Şartları</Link>
          <span>·</span>
          <Link href="/cookies" className="hover:text-primary-600">Çerez Politikası</Link>
        </div>
      </div>
    </div>
  );
}
