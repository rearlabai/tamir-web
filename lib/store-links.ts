import { env } from './env';

export const storeLinks = {
  ios: {
    href: env.appStoreUrl ?? '/support',
    label: env.appStoreUrl ? 'App Store' : 'iOS Demo Talebi',
  },
  android: {
    href: env.playStoreUrl ?? '/support',
    label: env.playStoreUrl ? 'Google Play' : 'Android Demo Talebi',
  },
} as const;
