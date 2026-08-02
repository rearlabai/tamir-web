import type { MetadataRoute } from 'next';
import { env } from '@/lib/env';

const publicRoutes = [
  '',
  '/account-deletion',
  '/cookies',
  '/kvkk',
  '/privacy',
  '/support',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((path, index) => ({
    url: `${env.appUrl}${path}`,
    lastModified,
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.5,
  }));
}
