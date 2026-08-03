import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | AutoLog',
  description:
    'AutoLog uygulamasında kişisel verilerin toplanması, kullanımı, aktarımı, saklanması ve silinmesine ilişkin gizlilik politikası.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

const CONTACT_EMAIL = 'autolog@rearlabai.com';
const LAST_UPDATED = '3 Ağustos 2026';

const providers = [
  ['Supabase', 'Kimlik doğrulama, veritabanı, dosya depolama ve sunucu işlevleri'],
  ['Anthropic', 'Yalnızca kullanıcı AI özelliğini kullandığında metin ve görsel girdiler üzerinden analiz'],
  ['RevenueCat', 'Abonelik durumunun yönetimi ve mağaza satın alma doğrulaması'],
  [
    'Google Firebase Analytics ve Crashlytics',
    'Kullanım analitiği, teknik tanımlayıcılar ile uygulama hatalarının ve çökme kayıtlarının izlenmesi',
  ],
  ['Expo', 'Bildirim belirtecinin işlenmesi ve anlık bildirim teslimi'],
  ['Google Play / Apple App Store', 'Uygulama dağıtımı, satın alma ve abonelik altyapısı'],
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
          </svg>
          Ana Sayfa
        </Link>

        <header className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">
            AutoLog
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-3 text-gray-600">
            Bu politika, AutoLog mobil uygulamasında kişisel verilerin nasıl işlendiğini açıklar.
          </p>
          <p className="mt-3 text-sm text-gray-500">Son güncelleme: {LAST_UPDATED}</p>
        </header>

        <article className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Veri sorumlusu ve kapsam</h2>
            <p className="text-gray-600">
              AutoLog uygulamasının geliştiricisi, bu politika kapsamındaki kişisel veri işleme
              faaliyetleri bakımından veri sorumlusu olarak hareket eder. Uygulama, oto servis
              işletmelerinin müşteri, araç, servis, stok ve abonelik süreçlerini yönetmesine
              yardımcı olur. Gizlilik soruları ve KVKK kapsamındaki başvurular için{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-600 hover:text-primary-700">
                {CONTACT_EMAIL}
              </a>{' '}
              adresine ulaşabilirsiniz.
            </p>
            <p className="mt-3 text-gray-600">
              Servis işletmesi, kendi müşterilerine ait verileri AutoLog&apos;a girdiğinde, bu
              verilerin hukuka uygun olarak toplanmasından ve müşterilerini aydınlatmaktan
              sorumludur. AutoLog bu verileri hizmeti sunmak için işler.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">2. İşlediğimiz veriler</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>
                <strong>Hesap ve işletme bilgileri:</strong> e-posta adresi, hesap kimliği,
                işletme adı, telefon numarası ve isteğe bağlı adres bilgisi. Parolanız
                uygulamaya düz metin olarak iletilmez veya uygulama tarafından görüntülenmez.
              </li>
              <li>
                <strong>Müşteri, araç ve servis kayıtları:</strong> müşteri adı ve iletişim
                bilgileri; plaka, araç özellikleri, isteğe bağlı şasi numarası; kilometre,
                şikâyet, tanı notları, yapılan işlemler ve servis geçmişi.
              </li>
              <li>
                <strong>İşletme ve ödeme kayıtları:</strong> ürün/stok bilgileri, servis tutarı,
                tahsilat durumu ve abonelik durumu. Kart numarası veya kart güvenlik kodu
                AutoLog tarafından saklanmaz.
              </li>
              <li>
                <strong>Medya ve AI girdileri:</strong> kullanıcı tarafından seçilen fotoğraf,
                fatura görüntüsü, video ve bunlara bağlı açıklamalar; AI özelliği kullanılırsa
                metin/görsel girdi ve üretilen sonuç. Video analizi şu an kullanıma açık
                değildir; videolar AI analizi için gönderilmez.
              </li>
              <li>
                <strong>Cihaz ve kullanım verileri:</strong> uygulama sürümü, işletim sistemi,
                cihaz türü, hata/çökme kayıtları, bildirim belirteci, Firebase Analytics
                tarafından işlenebilen reklam kimliği ve satın alma/abonelik doğrulaması için
                gerekli teknik tanımlayıcılar.
              </li>
            </ul>
            <p className="mt-3 text-gray-600">
              Kamera, fotoğraf/video kitaplığı ve bildirim izinleri yalnızca ilgili özelliği
              kullanmayı seçtiğinizde ve cihazınızda izin verdiğiniz ölçüde kullanılır.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Amaçlar ve hukuki sebepler</h2>
            <p className="mb-3 text-gray-600">
              Verileri hesabı oluşturmak, uygulamayı sunmak, servis kayıtlarını yönetmek,
              aboneliği doğrulamak, destek sağlamak, güvenliği korumak, hata gidermek ve yasal
              yükümlülükleri yerine getirmek için işleriz. AI çıktıları yalnızca kullanıcının
              talep ettiği analiz/öneri işlevini sunmak için üretilir; kesin teknik teşhis veya
              güvenlik kararı olarak değerlendirilmemelidir.
            </p>
            <p className="text-gray-600">
              Türkiye&apos;deki kişiler bakımından işleme, somut işleme faaliyetine göre KVKK
              madde 5&apos;teki sözleşmenin kurulması veya ifası, hukuki yükümlülük, bir hakkın
              tesisi/kullanılması/korunması, meşru menfaat ve gerekli hallerde açık rıza
              şartlarına dayanır. Özel nitelikli veri girmemeniz gerekir; böyle bir veri
              işlenmesi gerekirse KVKK madde 6&apos;daki koşullar ayrıca uygulanır.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Alıcılar ve yurt dışına aktarım</h2>
            <p className="mb-3 text-gray-600">
              Veriler, hizmeti çalıştırmak için aşağıdaki hizmet sağlayıcılara ve zorunlu
              olduğunda yetkili kamu kurumlarına aktarılabilir:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left text-sm text-gray-600">
                <thead className="bg-gray-100 text-gray-900">
                  <tr>
                    <th className="border-b px-3 py-2 font-semibold">Alıcı</th>
                    <th className="border-b px-3 py-2 font-semibold">Aktarım amacı</th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map(([provider, purpose]) => (
                    <tr key={provider}>
                      <td className="border-b px-3 py-2 font-medium text-gray-800">{provider}</td>
                      <td className="border-b px-3 py-2">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-gray-600">
              Bu sağlayıcıların altyapısı Türkiye dışında bulunabilir. Yurt dışı aktarımı
              gerektiğinde, KVKK madde 9&apos;daki uygulanabilir aktarım şartları, uygun güvenceler
              ve/veya istisnai hâller değerlendirilerek gerçekleştirilir. Sağlayıcılar verileri
              kendi hizmet koşulları ve gizlilik politikalarına göre de işleyebilir.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Saklama, silme ve güvenlik</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>
                Hesap ve aktif hizmet verileri, hesabınız açık olduğu ve hizmetin sunulması için
                gerekli olduğu süre boyunca saklanır.
              </li>
              <li>
                Doğrulanmış hesap silme talebinden sonra hesap ve aktif hizmet verileri en geç
                30 gün içinde silinir veya anonimleştirilir; güvenli yedeklerdeki kopyalar en
                geç 90 gün içinde silinir.
              </li>
              <li>
                Vergi, muhasebe, uyuşmazlık veya diğer kanuni yükümlülükler için zorunlu olan
                kayıtlar, ilgili zorunlu saklama süresince tutulabilir.
              </li>
            </ul>
            <p className="mt-3 text-gray-600">
              Aktarım sırasında TLS kullanır, erişimi rol ve yetki kontrolleriyle sınırlarız.
              Buna rağmen hiçbir internet iletimi veya saklama yöntemi mutlak güvenli değildir;
              şüpheli bir güvenlik olayı fark ederseniz lütfen bizimle iletişime geçin.
            </p>
            <p className="mt-3 text-gray-600">
              Hesap silme veya belirli verilerin kaldırılması için{' '}
              <Link href="/account-deletion" className="text-primary-600 hover:text-primary-700">
                Hesap ve Veri Silme sayfasını
              </Link>{' '}
              kullanabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">6. KVKK kapsamındaki haklarınız</h2>
            <p className="text-gray-600">
              KVKK madde 11 uyarınca verilerinizin işlenip işlenmediğini öğrenme, işlenmişse
              bilgi talep etme, amacı ve aktarılan kişileri öğrenme, eksik/yanlış verinin
              düzeltilmesini, silinmesini veya yok edilmesini isteme, bu işlemlerin aktarılan
              üçüncü kişilere bildirilmesini isteme, otomatik analiz sonucuna itiraz etme ve
              zararın giderilmesini talep etme haklarınız vardır.
            </p>
            <p className="mt-3 text-gray-600">
              Başvurunuzu, talebinizi ve hesabınıza kayıtlı e-posta adresini belirterek{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-600 hover:text-primary-700">
                {CONTACT_EMAIL}
              </a>{' '}
              adresine gönderebilirsiniz. Başvurular, kanunda öngörülen süre içinde yanıtlanır.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">7. Değişiklikler ve iletişim</h2>
            <p className="text-gray-600">
              Bu politika, uygulama veya veri işleme faaliyetlerindeki değişikliklere göre
              güncellenebilir. Güncel sürüm bu sayfada yayınlanır. Sorularınız için{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-600 hover:text-primary-700">
                {CONTACT_EMAIL}
              </a>{' '}
              adresiyle veya{' '}
              <Link href="/support" className="text-primary-600 hover:text-primary-700">
                destek sayfası
              </Link>{' '}
              üzerinden iletişim kurabilirsiniz.
            </p>
          </section>
        </article>

        <nav aria-label="Yasal bağlantılar" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
          <Link href="/account-deletion" className="hover:text-primary-600">Hesap ve Veri Silme</Link>
          <Link href="/kvkk" className="hover:text-primary-600">KVKK Aydınlatma Metni</Link>
          <Link href="/terms" className="hover:text-primary-600">Kullanım Şartları</Link>
          <Link href="/cookies" className="hover:text-primary-600">Çerez Politikası</Link>
        </nav>
      </div>
    </main>
  );
}
