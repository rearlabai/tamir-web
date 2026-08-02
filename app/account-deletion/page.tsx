import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hesap ve Veri Silme',
  description:
    'AutoLog hesabınızı ve ilişkili verilerinizi silme veya belirli verilerinizin silinmesini isteme adımları.',
};

const CONTACT_EMAIL = 'autolog@rearlabai.com';
const LAST_UPDATED = '2 Ağustos 2026';
const deletionSubject = encodeURIComponent('AutoLog Hesap Silme Talebi');
const deletionBody = encodeURIComponent(`Merhaba,

AutoLog hesabımın ve ilişkili verilerimin silinmesini talep ediyorum.

Kayıtlı e-posta adresim:
İşletme adım:

Bu talebin hesabıma erişimi sonlandıracağını ve aşağıdaki saklama istisnalarının geçerli olabileceğini kabul ediyorum.
`);
const deletionRequest = `mailto:${CONTACT_EMAIL}?subject=${deletionSubject}&body=${deletionBody}`;

export default function AccountDeletionPage() {
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
            Hesap ve veri silme
          </h1>
          <p className="mt-3 text-gray-600">
            AutoLog hesabınızın silinmesini veya hesabınızı kapatmadan belirli verilerinizin
            kaldırılmasını isteyebilirsiniz.
          </p>
          <p className="mt-3 text-sm text-gray-500">Son güncelleme: {LAST_UPDATED}</p>
        </header>

        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <section aria-labelledby="account-deletion-request">
            <h2 id="account-deletion-request" className="mb-3 text-xl font-semibold text-gray-900">
              Hesabınızı silmek için
            </h2>
            <ol className="list-decimal space-y-2 pl-5 text-gray-600">
              <li>Aşağıdaki “Silme talebi oluştur” düğmesini kullanın.</li>
              <li>
                Talebi, AutoLog hesabınıza kayıtlı e-posta adresinden gönderin; kayıtlı e-posta
                adresinizi ve işletme adınızı yazın.
              </li>
              <li>
                Hesabın size ait olduğunu doğrulamak için gerekirse kayıtlı e-posta adresinize
                yanıt veririz. Doğrulama tamamlanmadan silme işlemi başlatılmaz.
              </li>
            </ol>
            <a
              href={deletionRequest}
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Silme talebi oluştur
            </a>
            <p className="mt-3 text-sm text-gray-500">
              E-posta uygulamanız açılmazsa talebinizi{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-600 hover:text-primary-700">
                {CONTACT_EMAIL}
              </a>{' '}
              adresine aynı bilgilerle gönderebilirsiniz.
            </p>
          </section>

          <section aria-labelledby="what-is-deleted" className="border-t border-gray-100 pt-6">
            <h2 id="what-is-deleted" className="mb-3 text-xl font-semibold text-gray-900">
              Silinen veriler
            </h2>
            <p className="mb-3 text-gray-600">
              Doğrulanmış hesap silme talebinde hesabınız ve hesabınıza bağlı aktif verileriniz
              silinmek üzere işleme alınır:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-gray-600">
              <li>Hesap kimliği, e-posta, işletme adı ve telefon numarası</li>
              <li>Müşteri, araç, servis, ödeme ve ürün/stok kayıtları</li>
              <li>Yüklenen fotoğraf, video ve diğer ekler</li>
              <li>AI asistanı sohbetleri, analiz istekleri ve uygulama içi bildirim kayıtları</li>
              <li>Cihaz bildirim belirteçleri ve uygulama içi profil ilişkilendirmeleri</li>
            </ul>
          </section>

          <section aria-labelledby="retention" className="border-t border-gray-100 pt-6">
            <h2 id="retention" className="mb-3 text-xl font-semibold text-gray-900">
              Saklanan veriler ve süreleri
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>
                Hesabınız ve aktif hizmet verileriniz, kimlik doğrulaması tamamlanan talebin
                ardından en geç 30 gün içinde silinir veya anonimleştirilir.
              </li>
              <li>
                Güvenli yedeklerde kalmış kopyalar, yedek döngüsü sonunda en geç 90 gün içinde
                silinir.
              </li>
              <li>
                Vergi, muhasebe ya da diğer yasal yükümlülükler nedeniyle tutulması gereken
                kayıtlar, ilgili mevzuatın zorunlu kıldığı süre boyunca (gerektiğinde 10 yıla
                kadar) saklanabilir.
              </li>
              <li>
                Google Play veya Apple App Store üzerinden yapılan satın alma işlemlerinin ödeme
                kayıtları, ilgili mağazanın kendi saklama kurallarına tabidir.
              </li>
            </ul>
          </section>

          <section aria-labelledby="partial-deletion" className="border-t border-gray-100 pt-6">
            <h2 id="partial-deletion" className="mb-3 text-xl font-semibold text-gray-900">
              Hesabı kapatmadan veri silme
            </h2>
            <p className="text-gray-600">
              Hesabınızı kapatmadan müşteri, araç, servis, ödeme, ürün ve medya kayıtlarını
              uygulama içinden silebilirsiniz. Uygulama içinden silinemeyen bir veri için aynı
              e-posta kanalından silme talebi gönderebilirsiniz.
            </p>
          </section>

          <section aria-labelledby="more-information" className="border-t border-gray-100 pt-6">
            <h2 id="more-information" className="mb-3 text-xl font-semibold text-gray-900">
              Daha fazla bilgi
            </h2>
            <p className="text-gray-600">
              Kişisel verilerin işlenmesi ve hizmet sağlayıcılar hakkında ayrıntı için{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                Gizlilik Politikamızı
              </Link>{' '}
              inceleyin.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
