import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description:
    'AutoLog uygulaması gizlilik politikası ve KVKK kapsamında kişisel veri işleme bilgilendirmesi.',
};

const CONTACT_EMAIL = 'autolog@rearlabai.com';
const LAST_UPDATED = '19 Nisan 2026';

export default function PrivacyPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gizlilik Politikası</h1>
        <p className="text-gray-500 mb-8">Son güncelleme: {LAST_UPDATED}</p>

        <div className="prose prose-gray max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Veri Sorumlusu</h2>
              <p className="text-gray-600">
                Bu uygulama Türkiye Cumhuriyeti mevzuatı kapsamında bireysel mobil uygulama
                geliştirici statüsünde faaliyet göstermektedir. 6698 sayılı Kişisel Verilerin
                Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu sıfatıyla hareket
                edilmekte ve başvurular{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                adresi üzerinden karşılanmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Uygulama Tanıtımı</h2>
              <p className="text-gray-600">
                AutoLog, oto servis ustaları (&quot;Kullanıcı&quot;) için tasarlanmış dijital bir
                servis defteri ve işletme yönetim aracıdır. Kullanıcılar; müşterilerini,
                araçlarını, servis kayıtlarını, ürün kataloğunu, medya dosyalarını yönetebilir ve
                yapay zekâ destekli tanı/analiz hizmetlerinden faydalanabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Toplanan Veriler</h2>
              <p className="text-gray-600 mb-2">Uygulama aşağıdaki veri kategorilerini işler:</p>

              <div className="space-y-3 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">a) Hesap Bilgileri</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>E-posta adresi ve şifre (şifrelenmiş biçimde)</li>
                    <li>İşletme adı, telefonu, opsiyonel adres</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">b) Müşteri ve Araç Verileri</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Müşteri ad-soyad, telefon numarası</li>
                    <li>Araç plakası, marka/model/motor/yıl/yakıt, opsiyonel şasi (VIN) no</li>
                    <li>Servis geçmişi: tarih, kilometre, şikâyet, tanı notları, yapılan işlemler</li>
                    <li>Ödeme/finans bilgileri: tutar, ödenen, kalan</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">c) Medya Verileri</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Servis, araç veya hasar fotoğrafları</li>
                    <li>Fatura/fiş görüntüleri</li>
                    <li>Kısa video kayıtları (abonelik kademesine göre)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">d) Ürün/Stok Verileri</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Barkod, ürün adı, marka, stok miktarı, fiyat</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">e) Teknik ve Kullanım Verileri</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Cihaz modeli, işletim sistemi sürümü, uygulama sürümü</li>
                    <li>Hata kayıtları (çökme raporları, stack trace)</li>
                    <li>Abonelik durumu ve satın alma kayıtları</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">f) Yapay Zekâ Etkileşim Verileri</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>AI asistana gönderilen metin, fotoğraf ve videolar</li>
                    <li>AI tarafından üretilen analiz sonuçları ve araç sağlık raporları</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. İşleme Amaçları</h2>
              <p className="text-gray-600 mb-2">Toplanan veriler aşağıdaki amaçlarla işlenir:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Uygulamanın sunulması ve Kullanıcı hesabının yönetilmesi</li>
                <li>Servis kayıtlarının, araç geçmişinin ve ürün/stok takibinin yapılması</li>
                <li>QR kod üzerinden araç sahibine geçmiş bilgilerinin paylaşılması</li>
                <li>
                  Yapay zekâ destekli hasar tespiti, tanı önerisi, araç sağlık raporu ve OCR
                  hizmetlerinin sunulması
                </li>
                <li>Abonelik süreçlerinin yönetilmesi ve ödeme doğrulaması</li>
                <li>
                  Uygulama performansının iyileştirilmesi, çökme ve hata tespiti
                </li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Hukuki Dayanak</h2>
              <p className="text-gray-600">
                Veriler KVKK&apos;nın 5. maddesi uyarınca aşağıdaki hukuki sebeplere dayanılarak
                işlenmektedir: sözleşmenin kurulması ve ifası, meşru menfaat (hizmetin
                iyileştirilmesi), yasal yükümlülük ve açık rıza (yapay zekâ analizleri, medya
                yükleme vb.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Veri İşleyenler ve Aktarım</h2>
              <p className="text-gray-600 mb-2">
                Uygulama hizmetlerinin sunulabilmesi için aşağıdaki alt hizmet sağlayıcılar veri
                işleyen sıfatıyla yer almaktadır:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-600 border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left border-b">Hizmet Sağlayıcı</th>
                      <th className="px-3 py-2 text-left border-b">Amaç</th>
                      <th className="px-3 py-2 text-left border-b">Lokasyon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 border-b">Supabase (Supabase Inc.)</td>
                      <td className="px-3 py-2 border-b">Veritabanı, kimlik doğrulama, dosya depolama</td>
                      <td className="px-3 py-2 border-b">AB / ABD</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b">Anthropic (Anthropic PBC)</td>
                      <td className="px-3 py-2 border-b">Yapay zekâ analizi (Claude modeli)</td>
                      <td className="px-3 py-2 border-b">ABD</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b">RevenueCat</td>
                      <td className="px-3 py-2 border-b">Abonelik ve satın alma yönetimi</td>
                      <td className="px-3 py-2 border-b">ABD</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b">Apple App Store / Google Play</td>
                      <td className="px-3 py-2 border-b">Uygulama dağıtımı ve ödeme</td>
                      <td className="px-3 py-2 border-b">Küresel</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border-b">Sentry</td>
                      <td className="px-3 py-2 border-b">Çökme raporları ve hata izleme</td>
                      <td className="px-3 py-2 border-b">AB / ABD</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Expo / Vercel</td>
                      <td className="px-3 py-2">Uygulama altyapısı ve web yayını</td>
                      <td className="px-3 py-2">ABD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 mt-3">
                Yurt dışına aktarım, KVKK madde 9 kapsamında açık rızanıza veya yasal
                istisnalara dayanır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Saklama Süreleri</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Hesap verileri: hesap aktif olduğu sürece + 2 yıl</li>
                <li>
                  Müşteri ve servis kayıtları: Kullanıcı silene kadar; hesap kapatılırsa 30 gün
                  içinde anonimleştirilir
                </li>
                <li>Medya dosyaları: Kullanıcı silene kadar, ticari plan sınırları dahilinde</li>
                <li>AI etkileşim kayıtları: 12 ay; ardından özet olarak saklanabilir</li>
                <li>Hata kayıtları: 90 gün</li>
                <li>Yasal zorunlulukla saklanması gereken faturalar: 10 yıl (VUK)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Veri Güvenliği</h2>
              <p className="text-gray-600">
                Tüm veriler TLS 1.2+ ile şifrelenerek iletilir; Supabase altyapısında şifreli
                olarak saklanır. Dosyalara erişim yalnızca ilgili servis işletmesi kullanıcıları
                ile sınırlandırılmıştır (Row-Level Security). Finansal detaylar QR kod üzerinden
                paylaşılan araç sahibi görünümünde yer almaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Haklarınız (KVKK md. 11)</h2>
              <p className="text-gray-600 mb-2">
                Kişisel verileriniz bakımından aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse bilgi talep etme</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Eksik veya yanlış işlenmiş ise düzeltilmesini isteme</li>
                <li>Silinmesini veya yok edilmesini isteme</li>
                <li>
                  Otomatik sistemler vasıtasıyla analiz edilmesine itiraz etme ve zarara
                  uğramışsanız tazmin talep etme
                </li>
              </ul>
              <p className="text-gray-600 mt-3">
                Başvurularınızı{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                adresine iletebilirsiniz. Başvurular en geç 30 gün içinde yanıtlanır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Çocuklar</h2>
              <p className="text-gray-600">
                Uygulama 18 yaş altı bireylere yönelik değildir; bilinçli olarak çocuklardan veri
                toplanmaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Değişiklikler</h2>
              <p className="text-gray-600">
                Bu politika güncellenebilir. Önemli değişiklikler uygulama içi bildirim veya
                e-posta yoluyla duyurulur. En güncel hali her zaman bu sayfada erişilebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12. İletişim</h2>
              <p className="text-gray-600">
                Her türlü soru ve talepleriniz için{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                adresini kullanabilir veya{' '}
                <Link href="/support" className="text-primary-600 hover:text-primary-700">
                  destek sayfamıza
                </Link>{' '}
                göz atabilirsiniz.
              </p>
            </section>
          </div>

          <div className="mt-6 flex gap-4 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-primary-600">Kullanım Şartları</Link>
            <span>·</span>
            <Link href="/kvkk" className="hover:text-primary-600">KVKK Aydınlatma Metni</Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-primary-600">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
