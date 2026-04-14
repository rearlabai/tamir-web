import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
              Türkiye genelinde oto servisler tarafından kullanılmaktadır
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Aracınızın Servis Geçmişi{' '}
              <span className="text-primary-600">Her Zaman Yanınızda</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Tamir uygulaması ile oto servisler, araç bakım kayıtlarını
              kolayca yönetir. Müşteriler QR kod ile servis geçmişlerini
              anında görüntüler.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" id="download">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.8.2 1.18.01l12.93-7.46-2.79-2.79-11.32 10.24zm-1.76-21.4C1.16 2.72 1 3.18 1 3.7v16.6c0 .52.16.98.42 1.34l.06.06 9.3-9.3v-.22L1.42 2.3zm19.44 8.66l-2.59-1.5-3.07 3.07 3.07 3.07 2.61-1.51c.74-.43.74-1.12-.02-1.63zM4.36.24L17.29 7.7 14.5 10.5 3.18.26C3.56.07 4 .07 4.36.24z" />
                </svg>
                Google Play
              </Link>
            </div>
          </div>

          {/* App mockup placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-[520px] bg-gray-900 rounded-[40px] shadow-2xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">T</span>
                  </div>
                  <p className="text-sm font-medium text-white">Tamir</p>
                  <p className="text-xs mt-1">Uygulama Görseli</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-60 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-200 rounded-full opacity-60 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
