import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kullanım Şartları',
  description: 'AutoLog uygulaması kullanım şartları ve hizmet koşulları.',
};

const CONTACT_EMAIL = 'autolog@rearlabai.com';
const LAST_UPDATED = '19 Nisan 2026';

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Kullanım Şartları</h1>
        <p className="text-gray-500 mb-8">Son güncelleme: {LAST_UPDATED}</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Taraflar</h2>
            <p className="text-gray-600">
              İşbu Kullanım Şartları, AutoLog uygulamasını (&quot;Uygulama&quot;) sunan bireysel
              mobil uygulama geliştirici (&quot;Hizmet Sağlayıcı&quot;) ile Uygulama&apos;yı
              indirip kullanan kişi veya işletme (&quot;Kullanıcı&quot;) arasında akdedilmiştir.
              Uygulama&apos;yı indirerek ve/veya kullanarak bu şartları kabul etmiş olursunuz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Hizmetin Kapsamı</h2>
            <p className="text-gray-600 mb-2">AutoLog, başta oto servis ustaları olmak üzere:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Müşteri, araç ve servis kayıtlarının yönetimi</li>
              <li>Ürün/stok kataloğu ve barkod okutma</li>
              <li>Fotoğraf, video ve belge eklenebilen servis dosyaları</li>
              <li>Yapay zekâ destekli hasar tespiti, tanı önerisi ve araç sağlık raporu</li>
              <li>QR kod ile araç sahibiyle servis geçmişinin paylaşımı</li>
              <li>Abonelik tabanlı kademeli özellikler</li>
            </ul>
            <p className="text-gray-600 mt-3">
              Hizmetin belirli özellikleri abonelik kademesine göre değişkenlik gösterebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Hesap ve Güvenlik</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Kullanıcı, hesap bilgilerinin gizliliğini korumakla yükümlüdür</li>
              <li>Hesap üzerinden yapılan tüm işlemlerden Kullanıcı sorumludur</li>
              <li>
                Yetkisiz erişim durumunda derhal{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                adresine bildirim yapılmalıdır
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Kabul Edilebilir Kullanım</h2>
            <p className="text-gray-600 mb-2">Aşağıdaki davranışlar yasaktır:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Uygulama&apos;yı ters mühendislik, kopyalama veya yeniden satış amacıyla kullanmak</li>
              <li>Başkalarının kişisel verilerini açık rıza almaksızın sisteme girmek</li>
              <li>
                Yapay zekâ özelliklerini fiziksel, psikolojik veya mali zarar verebilecek
                şekilde kötüye kullanmak
              </li>
              <li>Sahte araç/müşteri/işlem kaydı girmek</li>
              <li>Sistemi veya altyapıyı aşırı yüklemek, zarar vermeye çalışmak</li>
              <li>Uygulama üzerinden üçüncü kişileri taciz, tehdit veya rahatsız etmek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Müşteri Verileri ve Sorumluluk</h2>
            <p className="text-gray-600">
              Kullanıcı, Uygulama&apos;ya girdiği müşteri ve araç bilgileri bakımından KVKK ve
              ilgili mevzuat kapsamında veri sorumlusu konumundadır. Müşterilerinden gerekli
              aydınlatma ve açık rızayı almakla yükümlüdür. Hizmet Sağlayıcı, bu bilgilerin
              işlenmesinde yalnızca veri işleyen olarak hareket eder.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Yapay Zekâ Özellikleri</h2>
            <p className="text-gray-600">
              AI asistanın ürettiği hasar tespitleri, tanı önerileri ve araç sağlık raporları
              <strong> yalnızca yardımcı niteliktedir</strong>. Güvenlik kritik konularda (fren,
              direksiyon, süspansiyon, şanzıman, lastik vb.) kesin karar daima fiziksel muayene
              sonrası yetkili teknisyen tarafından verilmelidir. Hizmet Sağlayıcı, AI
              önerilerinin doğruluğu veya uygulanmasından doğabilecek zararlardan sorumlu
              tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Abonelik ve Ödeme</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Abonelikler Apple App Store ve Google Play üzerinden satın alınır; ödeme, iptal
                ve iade işlemleri mağaza politikalarına tabidir
              </li>
              <li>
                Abonelik otomatik yenilenir; Kullanıcı mağaza ayarlarından her an iptal edebilir
              </li>
              <li>
                Abonelik kademeleri, limitleri ve fiyatları Hizmet Sağlayıcı tarafından önceden
                bildirilmek kaydıyla değiştirilebilir
              </li>
              <li>
                Yanlış/hatalı satın alma halinde iade talepleri ilgili mağaza üzerinden yapılır
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Fikri Mülkiyet</h2>
            <p className="text-gray-600">
              Uygulama&apos;nın tüm içeriği, kodu, tasarımı, markası ve yapay zekâ çıktıları
              Hizmet Sağlayıcı&apos;ya aittir. Kullanıcıya, Uygulama&apos;yı şahsi/ticari işi
              kapsamında kullanmak üzere sınırlı, devredilemez, münhasır olmayan bir lisans
              verilmiştir. Kullanıcı&apos;nın sisteme girdiği müşteri, araç ve medya içerikleri
              Kullanıcı&apos;ya aittir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Sorumluluk Sınırlaması</h2>
            <p className="text-gray-600">
              Hizmet Sağlayıcı, Uygulama&apos;yı &quot;olduğu gibi&quot; sunar. Yasaların izin
              verdiği azami ölçüde; hizmet kesintileri, veri kaybı, dolaylı zararlar, kâr kaybı
              veya üçüncü taraf kaynaklı zararlar için sorumluluk kabul edilmez. Toplam
              sorumluluk her halükârda Kullanıcı&apos;nın son 12 ayda ödediği abonelik ücretinin
              toplamı ile sınırlıdır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Hesap Sonlandırma</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Kullanıcı hesabını her an silmek için destek ile iletişime geçebilir</li>
              <li>
                Hizmet Sağlayıcı, bu şartların ihlali halinde hesabı bildirimli olarak
                askıya alabilir veya kapatabilir
              </li>
              <li>
                Hesap kapanışında veriler 30 gün içinde silinir veya anonimleştirilir; yasal
                yükümlülükler kapsamında saklanması gereken kayıtlar hariç
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Uyuşmazlık ve Yetki</h2>
            <p className="text-gray-600">
              İşbu şartlar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul
              Merkez Mahkemeleri ve İcra Daireleri yetkilidir. Kullanıcı, tüketici olması halinde
              kendi yerleşim yerindeki tüketici hakem heyeti veya tüketici mahkemelerine
              başvurabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Değişiklikler</h2>
            <p className="text-gray-600">
              Bu şartlar güncellenebilir. Önemli değişiklikler uygulama içi bildirim veya e-posta
              ile duyurulur. Yayımlandıktan sonra Uygulama&apos;nın kullanılmaya devam edilmesi
              yeni şartların kabulü anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. İletişim</h2>
            <p className="text-gray-600">
              Sorularınız için{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {CONTACT_EMAIL}
              </a>{' '}
              adresini kullanabilirsiniz.
            </p>
          </section>
        </div>

        <div className="mt-6 flex gap-4 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-primary-600">Gizlilik Politikası</Link>
          <span>·</span>
          <Link href="/kvkk" className="hover:text-primary-600">KVKK Aydınlatma Metni</Link>
          <span>·</span>
          <Link href="/cookies" className="hover:text-primary-600">Çerez Politikası</Link>
        </div>
      </div>
    </div>
  );
}
