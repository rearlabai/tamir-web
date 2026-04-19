const steps = [
  {
    number: '01',
    emoji: '📱',
    title: 'Uygulamayı İndir, Servisini Kur',
    description:
      'App Store veya Google Play\'den indirin. Atölye bilgilerinizi girin, saniyeler içinde hazır.',
  },
  {
    number: '02',
    emoji: '🚗',
    title: 'Aracı ve Müşteriyi Ekle',
    description:
      'Plaka, marka, model, şasi numarası. Otomobil, kamyon, motosiklet — hepsi desteklenir.',
  },
  {
    number: '03',
    emoji: '🤖',
    title: 'Usta Asistanı ile Çalış',
    description:
      'Foto çek, AI teşhis etsin. Katalogdan işlemleri seç, barkodla parça ekle. AI önerilerini tek tık servise ekle.',
  },
  {
    number: '04',
    emoji: '✅',
    title: 'Kaydet ve Müşteriye Teslim Et',
    description:
      'Servisi kaydet. QR kodu müşterine ver — aracının tüm geçmişini görür. AI bir sonraki bakımı hatırlatır.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Nasıl Çalışır
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            4 Adımda Dijital Servise Geç
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kağıt deftere veda. AI destekli, telefonunuzda çalışan profesyonel
            servis yönetimi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center bg-white rounded-2xl p-6 border border-gray-100 h-full">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 bg-white rounded-full border-2 border-primary-100 flex items-center justify-center text-xl shadow-sm">
                    {step.emoji}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefit strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-primary-600">⏱️ ~%60</p>
            <p className="text-sm text-gray-600 mt-1">Daha hızlı servis girişi</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-600">🤖 AI</p>
            <p className="text-sm text-gray-600 mt-1">Destekli teşhis & sağlık raporu</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-600">📲 QR</p>
            <p className="text-sm text-gray-600 mt-1">Müşteri memnuniyeti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
