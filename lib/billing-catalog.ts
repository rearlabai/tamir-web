import { createClient } from '@/lib/supabase/server';

export type BillingPeriod = 'MONTHLY' | 'ANNUAL';

export interface PublishedBillingPlan {
  id: string;
  planCode: 'FREE' | 'BASIC' | 'PREMIUM';
  billingPeriod: BillingPeriod;
  currencyCode: string;
  priceMinor: number;
  displayName: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

interface BillingCatalogRow {
  id: string;
  plan_code: PublishedBillingPlan['planCode'];
  billing_period: BillingPeriod;
  currency_code: string;
  price_minor: number;
  display_name: string;
  description: string;
  features: unknown;
  is_popular: boolean;
}

const fallbackPlans: PublishedBillingPlan[] = [
  {
    id: 'fallback-free-monthly',
    planCode: 'FREE',
    billingPeriod: 'MONTHLY',
    currencyCode: 'TRY',
    priceMinor: 0,
    displayName: 'Ücretsiz',
    description: 'Denemek için ideal başlangıç',
    features: ['5 müşteri · 5 araç · ayda 15 servis', '100 MB depolama · servis başına 5 foto', '5 AI sorgusu / ay'],
    isPopular: false,
  },
  {
    id: 'fallback-basic-monthly',
    planCode: 'BASIC',
    billingPeriod: 'MONTHLY',
    currencyCode: 'TRY',
    priceMinor: 39_900,
    displayName: 'Temel',
    description: 'Büyüyen atölyeler için',
    features: ['50 müşteri · 50 araç · ayda 200 servis', '5 GB depolama · servis başına 10 foto', '100 AI sorgusu / ay'],
    isPopular: true,
  },
  {
    id: 'fallback-premium-monthly',
    planCode: 'PREMIUM',
    billingPeriod: 'MONTHLY',
    currencyCode: 'TRY',
    priceMinor: 99_900,
    displayName: 'Premium',
    description: 'Profesyonel atölyeler için sınırsız güç',
    features: ['Sınırsız müşteri · araç · servis', '50 GB depolama · sınırsız foto', '1.000 AI sorgusu / ay'],
    isPopular: false,
  },
  {
    id: 'fallback-basic-annual',
    planCode: 'BASIC',
    billingPeriod: 'ANNUAL',
    currencyCode: 'TRY',
    priceMinor: 359_900,
    displayName: 'Temel',
    description: 'Büyüyen atölyeler için',
    features: ['50 müşteri · 50 araç · ayda 200 servis', '5 GB depolama · servis başına 10 foto', '100 AI sorgusu / ay'],
    isPopular: false,
  },
  {
    id: 'fallback-premium-annual',
    planCode: 'PREMIUM',
    billingPeriod: 'ANNUAL',
    currencyCode: 'TRY',
    priceMinor: 899_900,
    displayName: 'Premium',
    description: 'Profesyonel atölyeler için sınırsız güç',
    features: ['Sınırsız müşteri · araç · servis', '50 GB depolama · sınırsız foto', '1.000 AI sorgusu / ay'],
    isPopular: false,
  },
];

export async function getPublishedBillingPlans(): Promise<PublishedBillingPlan[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('billing_catalog')
    .select('id, plan_code, billing_period, currency_code, price_minor, display_name, description, features, is_popular')
    .eq('is_active', true)
    .order('price_minor', { ascending: true });

  if (error) return fallbackPlans;
  return (data as unknown as BillingCatalogRow[]).map(toPublishedPlan);
}

function toPublishedPlan(row: BillingCatalogRow): PublishedBillingPlan {
  return {
    id: row.id,
    planCode: row.plan_code,
    billingPeriod: row.billing_period,
    currencyCode: row.currency_code,
    priceMinor: row.price_minor,
    displayName: row.display_name,
    description: row.description,
    features: Array.isArray(row.features) ? row.features.filter(isString) : [],
    isPopular: row.is_popular,
  };
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}
