'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Ücretsiz',
    priceMonthly: '₺0',
    priceYearly: '₺0',
    description: 'Küçük servisler için ideal başlangıç',
    features: [
      '5 müşteriye kadar',
      '5 araca kadar',
      'Ayda 15 servise kadar',
      'QR kod erişimi',
    ],
    cta: 'Ücretsiz Başlayın',
    highlighted: false,
  },
  {
    name: 'Temel',
    priceMonthly: '₺399',
    priceYearly: '₺3.599',
    description: 'Büyüyen servisler için',
    features: [
      '50 müşteriye kadar',
      '50 araca kadar',
      'Ayda 200 servise kadar',
      'QR kod erişimi',
      'Öncelikli destek',
    ],
    cta: 'Hemen Başlayın',
    highlighted: true,
    badge: 'Popüler',
  },
  {
    name: 'Premium',
    priceMonthly: '₺999',
    priceYearly: '₺8.999',
    description: 'Büyük servisler için sınırsız',
    features: [
      'Sınırsız müşteri',
      'Sınırsız araç',
      'Sınırsız servis kaydı',
      'QR kod erişimi',
      'Öncelikli destek',
      'Erken erişim',
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Fiyatlandırma
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            İşletmenizin büyüklüğüne göre plan seçin
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

              <div className="mb-6">
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

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${
                        plan.highlighted ? 'text-primary-200' : 'text-primary-600'
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
                    <span
                      className={
                        plan.highlighted ? 'text-primary-100' : 'text-gray-600'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

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
          Abonelikler App Store ve Google Play üzerinden yönetilmektedir.
        </p>
      </div>
    </section>
  );
}
