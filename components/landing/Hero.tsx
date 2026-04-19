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
              Sanayi ustaları için dijital servis defteri
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Kâğıt defteri bırak, {' '}
              <span className="text-primary-600">AI asistanlı servise geç</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              AutoLog; sanayi ustaları için tasarlanmış, AI destekli dijital
              servis defteri. Fotoğraftan hasar analizi, barkodla parça takibi,
              araç sağlık raporu ve tek tıkla servis girişi — hepsi telefonunda.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-700 text-xs font-medium px-3 py-1.5 rounded-full border border-violet-200">
                🤖 AI Usta Asistanı
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-200">
                📸 Foto & Video Kayıt
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full border border-amber-200">
                📊 Araç Sağlık Raporu
              </span>
              <span className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1.5 rounded-full border border-sky-200">
                🔍 Barkod Okuma
              </span>
            </div>

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

            <p className="text-sm text-gray-500 mt-4">
              Ücretsiz başla. Kart bilgisi gerekmez.
            </p>
          </div>

          {/* App mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 h-[580px] bg-gray-900 rounded-[40px] shadow-2xl p-3">
                <div className="w-full h-full bg-gradient-to-br from-primary-50 to-white rounded-[32px] overflow-hidden relative">
                  {/* Mock content */}
                  <div className="p-5 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-500">34 ABC 123</p>
                        <p className="font-bold text-gray-900">Ford Focus 1.6</p>
                      </div>
                      <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">🤖</span>
                      </div>
                    </div>

                    {/* Health card */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-amber-700 text-xs font-bold">⚠️ DİKKAT</span>
                        <span className="text-[10px] text-amber-600">AI Sağlık Raporu</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 text-center text-xs">
                        <div>
                          <p className="font-bold text-red-600">2</p>
                          <p className="text-[9px] text-gray-500">Sorun</p>
                        </div>
                        <div>
                          <p className="font-bold text-blue-600">1</p>
                          <p className="text-[9px] text-gray-500">Yaklaşan</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-700">12</p>
                          <p className="text-[9px] text-gray-500">Servis</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat bubble */}
                    <div className="bg-violet-50 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-violet-700 text-[10px] font-bold">🤖 Usta AI</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Fotoğrafta triger kayışı aşınma tespit ettim. Son değişim
                        125.000 km&apos;de. Kritik seviyede — değiştirilmeli.
                      </p>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                        <span className="text-xl">📸</span>
                        <p className="text-[10px] font-medium text-gray-700 mt-1">Foto Ekle</p>
                      </div>
                      <div className="bg-white rounded-lg p-2 border border-gray-200 text-center">
                        <span className="text-xl">🔍</span>
                        <p className="text-[10px] font-medium text-gray-700 mt-1">Barkod</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-60 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-200 rounded-full opacity-60 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
