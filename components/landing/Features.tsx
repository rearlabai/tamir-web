const features = [
  {
    emoji: '🤖',
    color: 'violet',
    title: 'AI Usta Asistanı',
    description:
      'Her araca özel AI destekli chat. Fotoğrafla hasar incelemesi, teşhis önerisi ve parça uyum kontrolü.',
  },
  {
    emoji: '📊',
    color: 'amber',
    title: 'Araç Sağlık Raporu',
    description:
      'Servis geçmişini okuyan AI, aracın sağlık durumunu özetler. Tekrarlayan sorunları ve yaklaşan bakımları gösterir.',
  },
  {
    emoji: '📸',
    color: 'emerald',
    title: 'Foto & Video Kayıt',
    description:
      'Her serviste hasar, öncesi-sonrası, fatura fotoları. Premium\'da 2 dakikaya kadar video kayıt.',
  },
  {
    emoji: '🔍',
    color: 'sky',
    title: 'Barkod Okuma',
    description:
      'Parça kutusundaki barkodu okut — ürün otomatik eklensin. Kendi ürün kataloğunu zamanla oluştur.',
  },
  {
    emoji: '⚡',
    color: 'rose',
    title: 'Hızlı Servis Girişi',
    description:
      'Filtreler, sıvılar, ağır bakım kalemleri tek dokunuşla. Tekrar yazma, zaman kaybetme.',
  },
  {
    emoji: '📋',
    color: 'indigo',
    title: 'Servis Defter Yönetimi',
    description:
      'Müşteri, araç, servis geçmişi tek yerde. Plaka/telefonla saniyelerde aracı bul.',
  },
  {
    emoji: '📲',
    color: 'green',
    title: 'QR Kod ile Müşteri Erişimi',
    description:
      'Her araca özel QR kod. Müşterin okutsun, servis geçmişini (finans detayları hariç) görsün.',
  },
  {
    emoji: '🔔',
    color: 'orange',
    title: 'Bakım Hatırlatma',
    description:
      'KM veya tarih bazlı otomatik hatırlatmalar. Müşterin geri gelsin, aracı bakımsız kalmasın.',
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  violet: { bg: 'bg-violet-100', text: 'text-violet-600' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-600' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Özellikler
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ustanın İşini Kolaylaştıran Özellikler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kağıt defter, WhatsApp mesajları, karışık not kağıtları — hepsini
            tek uygulamada topla. İş emri, ödeme, fotoğraf, barkod ve AI desteği.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 text-2xl`}
                >
                  {feature.emoji}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* AI highlight strip */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                🤖 AI Öne Çıkan
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                25 yıllık deneyime sahip AI Usta
              </h3>
              <p className="text-violet-100 mb-6 leading-relaxed">
                Her araca özel chat açılır. Foto çekersin, AI hasarı tespit eder
                ve yapılacakları listeler. Servis geçmişini okur, tekrar eden
                sorunları yakalar. Profesyonel bir danışman gibi hep yanında.
              </p>
              <ul className="space-y-2 text-sm text-violet-100">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-0.5">✓</span>
                  Fotoğrafta hasar tespiti + şiddet derecesi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-0.5">✓</span>
                  Servis geçmişini dikkate alan teşhis önerisi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-0.5">✓</span>
                  Otomatik araç sağlık raporu
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-0.5">✓</span>
                  Parça–araç uyum kontrolü
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
              <div className="text-xs text-violet-200 mb-2 font-semibold">
                🤖 Usta · AI Danışman
              </div>
              <div className="bg-white/95 rounded-xl p-4 text-gray-800 text-sm">
                <p className="mb-2">
                  <strong>Parça:</strong> Triger Kayışı (KRİTİK)
                </p>
                <p className="mb-2 text-xs text-gray-500">
                  Son triger değişimi 125.000 km&apos;de (2025-04-20).
                  Şu an 145.000 km — üretici önerisi aşıldı.
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded">
                    ACIL
                  </span>
                  <span className="text-[10px] bg-violet-600 text-white px-2 py-0.5 rounded">
                    ~3s
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-violet-200 mt-3 italic">
                AI önerisi tahmindir; kesin karar muayene sonrası verilmelidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
