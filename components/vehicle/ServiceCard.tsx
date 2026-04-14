import type { ServiceTicket } from '@/types';
import { formatDate, formatMileage } from '@/lib/utils/format';

interface ServiceCardProps {
  ticket: ServiceTicket;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  PENDING: {
    label: 'Beklemede',
    className: 'bg-yellow-100 text-yellow-800',
  },
  IN_PROGRESS: {
    label: 'Devam Ediyor',
    className: 'bg-blue-100 text-blue-800',
  },
  COMPLETED: {
    label: 'Tamamlandı',
    className: 'bg-green-100 text-green-800',
  },
  CANCELLED: {
    label: 'İptal Edildi',
    className: 'bg-gray-100 text-gray-800',
  },
};

export default function ServiceCard({ ticket }: ServiceCardProps) {
  const status = statusConfig[ticket.status] ?? statusConfig.PENDING;
  const displayDate = ticket.completed_at || ticket.created_at;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">{formatDate(displayDate)}</p>
          {ticket.current_km > 0 && (
            <p className="text-sm font-medium text-gray-700 mt-1">
              {formatMileage(ticket.current_km)}
            </p>
          )}
        </div>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      {ticket.customer_complaint && (
        <div className="mb-3">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
            Müşteri Şikayeti
          </p>
          <p className="text-sm text-gray-700">{ticket.customer_complaint}</p>
        </div>
      )}

      {ticket.diagnosis_notes && (
        <div className="mb-3">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
            Teşhis
          </p>
          <p className="text-sm text-gray-700">{ticket.diagnosis_notes}</p>
        </div>
      )}

      {ticket.next_service_date && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-primary-600">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>Sonraki servis: {formatDate(ticket.next_service_date)}</span>
          {ticket.next_service_km && (
            <span>veya {formatMileage(ticket.next_service_km)}</span>
          )}
        </div>
      )}
    </div>
  );
}
