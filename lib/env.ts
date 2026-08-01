function required(name: string, value: string | undefined): string {
  if (!value?.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

function requiredUrl(name: string, value: string | undefined): string {
  const parsed = required(name, value);
  try {
    return new URL(parsed).toString().replace(/\/$/, '');
  } catch {
    throw new Error(`Environment variable ${name} must be an absolute URL`);
  }
}

function optionalUrl(name: string, value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    return new URL(value.trim()).toString();
  } catch {
    throw new Error(`Environment variable ${name} must be an absolute URL`);
  }
}

export const env = {
  appUrl: requiredUrl('NEXT_PUBLIC_APP_URL', process.env.NEXT_PUBLIC_APP_URL),
  supabaseUrl: requiredUrl(
    'NEXT_PUBLIC_SUPABASE_URL',
    process.env.NEXT_PUBLIC_SUPABASE_URL,
  ),
  supabaseAnonKey: required(
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  ),
  appStoreUrl: optionalUrl(
    'NEXT_PUBLIC_APP_STORE_URL',
    process.env.NEXT_PUBLIC_APP_STORE_URL,
  ),
  playStoreUrl: optionalUrl(
    'NEXT_PUBLIC_PLAY_STORE_URL',
    process.env.NEXT_PUBLIC_PLAY_STORE_URL,
  ),
  isProduction: process.env.NODE_ENV === 'production',
} as const;
