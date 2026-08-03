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

export async function getPublishedBillingPlans(): Promise<PublishedBillingPlan[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('billing_catalog')
    .select('id, plan_code, billing_period, currency_code, price_minor, display_name, description, features, is_popular')
    .eq('is_active', true)
    .order('price_minor', { ascending: true });

  if (error) throw new Error(`Published billing catalog is unavailable: ${error.message}`);
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
