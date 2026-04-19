'use client';

import { useState } from 'react';

type PlanFeature =
  | { label: string; included: true }
  | { label: string; included: false }
  | { label: string; note: string };

interface Plan {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  sections: Array<{ title: string; features: PlanFeature[] }>;
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: 'Ücretsiz',
    priceMonthly: '₺0',
    priceYearly: '₺0',
    description: 'Denemek için ideal başlangıç',
    sections: [
      {
        title: 'Temel',
        features: [
          { label: '5 müşteri, 5 araç', included: true },
          { label: 'Ayda 15 servis kaydı', included: true },
          { label: 'QR kod ile müşteri erişimi', included: true },
        ],
      },
      {
        title: 'Medya',
        features: [
          { label: 'Servis başına 3 foto', included: true },
          { label: '100 MB toplam depolama', included: true },
          { label: 'Video kayıt', included: false },
          { label: 'Fatura / hasar etiketleme', included: false },
        ],
      },
      {
        title: 'AI & Barkod',
        features: [
          { label: 'AI Usta Asistanı', included: false },
          { label: 'Barkod okuma + ürün kataloğu', included: false },
          { label: 'Araç sağlık raporu', included: false },
        ],
      },
    ],
    cta: 'Ücretsiz Başla',
    highlighted: false,
  },
  {
    name: 'Temel',
    priceMonthly: '₺399',
    priceYearly: '₺3.599',
    description: 'Büyüyen atölyeler için',
    sections: [
      {
        title: 'Temel',
        features: [
          { label: '50 müşteri, 50 araç', included: true },
          { label: 'Ayda 200 servis kaydı', included: true },
          { label: 'QR kod + özel katalog düzenleme', included: true },
        ],
      },
      {
        title: 'Medya',
        features: [
          { label: 'Servis başına 10 foto', included: true },
          { label: '5 GB toplam depolama', included: true },
          { label: '30 sn video kayıt', included: true },
          { label: 'Fatura / hasar etiketleme', included: true },
        ],
      },
      {
        title: 'AI & Barkod',
        features: [
          { label: 'AI Hasar Tespiti · 10/ay', included: true },
          { label: 'Araç sağlık raporu', included: true },
          { label: 'Barkod + 100 ürün', included: true },
          { label: 'AI teşhis önerisi (Diagnosis)', note: 'Premium' },
        ],
      },
    ],
    cta: 'Hemen Başla',
    highlighted: true,
    badge: 'Popüler',
  },
  {
    name: 'Premium',
    priceMonthly: '₺999',
    priceYearly: '₺8.999',
    description: 'Profesyonel atölyeler için sınırsız güç',
    sections: [
      {
        title: 'Temel',
        features: [
          { label: 'Sınırsız müşteri, araç, servis', included: true },
          { label: 'Öncelikli destek', included: true },
        ],
      },
      {
        title: 'Medya',
        features: [
          { label: 'Servis başına sınırsız foto', included: true },
          { label: '50 GB toplam depolama', included: true },
          { label: '2 dk video kayıt', included: true },
          { label: 'Fatura/tarih watermark', included: true },
        ],
      },
      {
        title: 'AI & Barkod',
        features: [
          { label: 'AI Hasar Tespiti · 100/ay', included: true },
          { label: 'AI Teşhis Önerisi · 50/ay', included: true },
          { label: 'Sınırsız ürün + stok takibi', included: true },
          { label: 'AI fatura OCR', included: true },
        ],
      },
    ],
    cta: 'Premium\'a Geç',
    highlighted: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Fiyatlandırma
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Atölyene Göre Plan Seç
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ücretsiz başla. İhtiyacın büyüdükçe yükselt. Her an iptal et.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yıllık
              <span className="ml-1 text-xs text-primary-600 font-semibold">
                %25 indirim
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-primary-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-primary-100' : 'text-gray-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-opacity-30 border-white/30">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.highlighted ? 'text-primary-200' : 'text-gray-500'
                  }`}
                >
                  {isYearly ? '/yıl' : '/ay'}
                </span>
              </div>

              <div className="space-y-5 mb-8">
                {plan.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    <p
                      className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                        plan.highlighted ? 'text-primary-200' : 'text-gray-400'
                      }`}
                    >
                      {section.title}
                    </p>
                    <ul className="space-y-2">
                      {section.features.map((f, fIdx) => {
                        const isIncluded = 'included' in f && f.included;
                        const isMissing = 'included' in f && !f.included;
                        const hasNote = 'note' in f;
                        return (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-sm"
                          >
                            {isIncluded && (
                              <svg
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                  plan.highlighted
                                    ? 'text-emerald-300'
                                    : 'text-emerald-600'
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                            {isMissing && (
                              <svg
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                  plan.highlighted
                                    ? 'text-primary-300 opacity-60'
                                    : 'text-gray-300'
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            )}
                            {hasNote && (
                              <span className="text-amber-500 text-xs mt-0.5">
                                ★
                              </span>
                            )}
                            <span
                              className={
                                plan.highlighted
                                  ? isIncluded
                                    ? 'text-white'
                                    : 'text-primary-200 line-through opacity-50'
                                  : isIncluded
                                  ? 'text-gray-700'
                                  : isMissing
                                  ? 'text-gray-400 line-through'
                                  : 'text-gray-600'
                              }
                            >
                              {f.label}
                              {'note' in f && (
                                <span
                                  className={`ml-1 text-xs ${
                                    plan.highlighted
                                      ? 'text-amber-300'
                                      : 'text-amber-600'
                                  }`}
                                >
                                  ({f.note})
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <a
                href="#download"
                className={`block text-center py-3 px-6 rounded-xl font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Abonelikler App Store ve Google Play üzerinden yönetilmektedir. KDV dahildir.
          İstediğiniz an mağazadan iptal edebilirsiniz.
        </p>
      </div>
    </section>
  );
}
