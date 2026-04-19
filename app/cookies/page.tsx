import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'AutoLog web sitesinde kullanılan çerezler ve benzer teknolojiler hakkında bilgi.',
};

const CONTACT_EMAIL = 'support@rearlabai.com';
const LAST_UPDATED = '19 Nisan 2026';

export default function CookiesPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Çerez Politikası</h1>
        <p className="text-gray-500 mb-8">Son güncelleme: {LAST_UPDATED}</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <section>
            <p className="text-gray-600">
              Bu sayfa, AutoLog web sitesinde (autlog.vercel.app) kullanılan çerezler
              (cookie) ve benzer teknolojiler hakkında bilgi vermektedir. Mobil uygulamada
              çerez kullanılmaz; onun yerine AsyncStorage üzerinde şifrelenmiş oturum anahtarları
              saklanır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Çerez Nedir?</h2>
            <p className="text-gray-600">
              Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza yerleştirilen
              küçük metin dosyalarıdır. Sitenin işlevselliğini sağlamak, kullanıcı deneyimini
              iyileştirmek ve trafiği analiz etmek için kullanılır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Kullandığımız Çerez Türleri</h2>

            <div className="space-y-3 text-gray-600">
              <div>
                <p className="font-semibold text-gray-800">Zorunlu Çerezler (Strictly Necessary)</p>
                <p>
                  Site&apos;nin temel işlevleri (örn. oturum yönetimi, dil tercihi) için
                  zorunludur ve rıza aranmaksızın kullanılır.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">İşlevsellik Çerezleri</p>
                <p>
                  Tercihlerinizi (tema, dil) hatırlamak için kullanılır. Silinirse deneyim
                  etkilenmez ancak tercihleriniz kaybolabilir.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Analitik Çerezler</p>
                <p>
                  Ziyaretçi davranışlarını anonim biçimde analiz etmek için kullanılır.
                  Tarayıcı ayarlarınızdan devre dışı bırakabilirsiniz.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. QR Kod Araç Geçmişi Sayfası
            </h2>
            <p className="text-gray-600">
              Araç sahibine paylaşılan QR kod bağlantısı (/vehicle/[uuid]) yalnızca sunucu
              tarafında session cookie kullanır. Finansal bilgiler bu sayfada gösterilmez;
              salt okuma moddadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Üçüncü Taraf Çerezler</h2>
            <p className="text-gray-600">
              Hosting (Vercel), veritabanı bağlantısı (Supabase) ve çökme izleme (Sentry)
              servisleri teknik amaçlarla bazı çerezler yerleştirebilir. Bu servisler kendi
              gizlilik politikalarına tabidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Çerez Tercihlerinin Yönetimi</h2>
            <p className="text-gray-600">
              Çerezleri tarayıcı ayarlarınızdan silebilir veya engelleyebilirsiniz. Zorunlu
              çerezleri engellemeniz halinde site&apos;nin bazı bölümlerinde erişim sorunları
              yaşayabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. İletişim</h2>
            <p className="text-gray-600">
              Sorularınız için{' '}
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
          <Link href="/kvkk" className="hover:text-primary-600">KVKK Aydınlatma Metni</Link>
        </div>
      </div>
    </div>
  );
}
