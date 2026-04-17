// Formatting utilities for AutoLog Web

/**
 * Format a date string to a localized display string
 */
export function formatDate(dateString: string, locale: string = 'tr-TR'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format mileage with thousand separators
 */
export function formatMileage(km: number, locale: string = 'tr-TR'): string {
  return `${km.toLocaleString(locale)} km`;
}

/**
 * Get status label for service ticket
 */
export function getStatusLabel(
  status: string,
  locale: string = 'tr'
): string {
  const labels: Record<string, Record<string, string>> = {
    tr: {
      PENDING: 'Beklemede',
      IN_PROGRESS: 'Devam Ediyor',
      COMPLETED: 'Tamamlandı',
      CANCELLED: 'İptal Edildi',
    },
    en: {
      PENDING: 'Pending',
      IN_PROGRESS: 'In Progress',
      COMPLETED: 'Completed',
      CANCELLED: 'Cancelled',
    },
  };
  return labels[locale]?.[status] ?? status;
}
