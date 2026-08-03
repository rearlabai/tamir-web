'use client';

import { useMemo, useState } from 'react';
import type { PublishedBillingPlan } from '@/lib/billing-catalog';

interface PricingProps {
  plans: PublishedBillingPlan[];
}

function formatPrice(plan: PublishedBillingPlan): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: plan.currencyCode,
    maximumFractionDigits: 0,
  }).format(plan.priceMinor / 100);
}

export default function Pricing({ plans }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  const visiblePlans = useMemo(
    () => plans.filter((plan) => plan.billingPeriod === (isYearly ? 'ANNUAL' : 'MONTHLY')),
    [isYearly, plans],
  );

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700">
            Fiyatlandırma
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Atölyene Göre Plan Seç</h2>
          <p className="mb-8 text-lg text-gray-600">Ücretsiz başla. İhtiyacın büyüdükçe yükselt. Her an iptal et.</p>
          <div className="inline-flex items-center gap-3 rounded-full bg-gray-100 p-1">
            <button onClick={() => setIsYearly(false)} className={`rounded-full px-4 py-2 text-sm font-medium ${!isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}>
              Aylık
            </button>
            <button onClick={() => setIsYearly(true)} className={`rounded-full px-4 py-2 text-sm font-medium ${isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}>
              Yıllık
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {visiblePlans.map((plan) => (
            <article key={plan.id} className={`relative rounded-2xl p-8 ${plan.isPopular ? 'scale-105 bg-primary-600 text-white shadow-2xl' : 'border border-gray-200 bg-white'}`}>
              {plan.isPopular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">Popüler</span>}
              <h3 className={`mb-2 text-xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.displayName}</h3>
              <p className={`mb-6 text-sm ${plan.isPopular ? 'text-primary-100' : 'text-gray-500'}`}>{plan.description}</p>
              <div className="mb-6 border-b border-white/30 pb-6">
                <span className={`text-4xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{formatPrice(plan)}</span>
                <span className={`ml-1 text-sm ${plan.isPopular ? 'text-primary-200' : 'text-gray-500'}`}>{isYearly ? '/yıl' : '/ay'}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm"><span aria-hidden="true">✓</span>{feature}</li>)}
              </ul>
              <a href="#download" className={`block rounded-xl px-6 py-3 text-center font-medium ${plan.isPopular ? 'bg-white text-primary-600' : 'bg-primary-600 text-white'}`}>
                {plan.planCode === 'FREE' ? 'Ücretsiz Başla' : 'Uygulamada İncele'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
