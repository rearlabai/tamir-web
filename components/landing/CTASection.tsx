import Link from 'next/link';
import { storeLinks } from '@/lib/store-links';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-violet-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          🚀 Hemen Başla
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Ustanın Yeni Sağ Kolu
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          İş emrini aç, parçaları ve tahsilatı kaydet, müşterine WhatsApp ile
          haber ver. Ücretsiz başla, servisinin düzenini telefonuna taşı.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={storeLinks.ios.href}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {storeLinks.ios.label}
          </Link>
          <Link
            href={storeLinks.android.href}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.37.2.8.2 1.18.01l12.93-7.46-2.79-2.79-11.32 10.24zm-1.76-21.4C1.16 2.72 1 3.18 1 3.7v16.6c0 .52.16.98.42 1.34l.06.06 9.3-9.3v-.22L1.42 2.3zm19.44 8.66l-2.59-1.5-3.07 3.07 3.07 3.07 2.61-1.51c.74-.43.74-1.12-.02-1.63zM4.36.24L17.29 7.7 14.5 10.5 3.18.26C3.56.07 4 .07 4.36.24z" />
            </svg>
            {storeLinks.android.label}
          </Link>
        </div>

        <p className="text-sm text-primary-200 mt-6">
          Ücretsiz plan · Kart bilgisi gerekmez · İstediğin an iptal
        </p>
      </div>
    </section>
  );
}
