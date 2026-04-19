import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { isValidUuidV4 } from '@/lib/validations/uuid';
import VehicleHeader from '@/components/vehicle/VehicleHeader';
import ServiceCard from '@/components/vehicle/ServiceCard';
import EmptyHistory from '@/components/vehicle/EmptyHistory';
import type { Vehicle, ServiceTicket } from '@/types';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

/**
 * Public QR page payload — matches the shape returned by the
 * `get_public_vehicle_page(qr_uuid)` Supabase RPC (SECURITY DEFINER).
 * Anonymous users ONLY access vehicle data through this RPC; direct table
 * queries are blocked by RLS.
 */
interface PublicPagePayload {
  vehicle: {
    id: string;
    plate_number: string;
    brand_name: string;
    model_name: string;
    engine_name: string;
    fuel_type: string;
    manufacturing_year: number;
    trim_name: string | null;
    vehicle_type?: string;
    qr_uuid: string;
    created_at: string;
  };
  customer: { full_name: string; phone_number: string } | null;
  shop: { id: string; name: string; phone: string } | null;
  services: Array<{
    id: string;
    status: string;
    current_km: number;
    customer_complaint: string | null;
    diagnosis_notes: string | null;
    next_service_date: string | null;
    next_service_km: number | null;
    created_at: string;
    ticket_items: Array<{ description: string; quantity: number }>;
  }>;
}

async function fetchPublicPage(uuid: string): Promise<PublicPagePayload | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc('get_public_vehicle_page', {
    p_qr_uuid: uuid,
  });
  if (error) {
    console.error('[public QR] RPC error:', error);
    return null;
  }
  return (data as PublicPagePayload | null) ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { uuid } = await params;

  if (!isValidUuidV4(uuid)) {
    return { title: 'Araç Bulunamadı' };
  }

  const payload = await fetchPublicPage(uuid);
  if (!payload?.vehicle) {
    return { title: 'Araç Bulunamadı' };
  }

  const v = payload.vehicle;
  return {
    title: `${v.plate_number} - ${v.brand_name} ${v.model_name}`,
    description: `${v.brand_name} ${v.model_name} (${v.plate_number}) servis geçmişi`,
    robots: { index: false, follow: false },
  };
}

export default async function VehiclePage({ params }: PageProps) {
  const { uuid } = await params;

  // 1. Validate UUID format before hitting the DB (prevents enumeration noise)
  if (!isValidUuidV4(uuid)) {
    notFound();
  }

  // 2. Single RPC call — all data comes from SECURITY DEFINER function
  //    which enforces proper scoping. No direct table access from anon.
  const payload = await fetchPublicPage(uuid);
  if (!payload?.vehicle) {
    notFound();
  }

  // 3. Map to domain types
  const vehicleData: Vehicle = {
    id: payload.vehicle.id,
    shop_id: payload.shop?.id ?? '',
    customer_id: '', // not exposed on public page
    plate_number: payload.vehicle.plate_number,
    brand_name: payload.vehicle.brand_name,
    model_name: payload.vehicle.model_name,
    engine_name: payload.vehicle.engine_name,
    fuel_type: payload.vehicle.fuel_type,
    manufacturing_year: payload.vehicle.manufacturing_year,
    trim_name: payload.vehicle.trim_name,
    qr_uuid: payload.vehicle.qr_uuid,
    created_at: payload.vehicle.created_at,
    customer: payload.customer
      ? { full_name: payload.customer.full_name, phone_number: payload.customer.phone_number }
      : undefined,
    shop: payload.shop
      ? { id: payload.shop.id, name: payload.shop.name, phone_number: payload.shop.phone, address: null }
      : undefined,
  } as Vehicle;

  const serviceHistory: ServiceTicket[] = (payload.services ?? []).map((s) => ({
    id: s.id,
    status: s.status,
    current_km: s.current_km,
    customer_complaint: s.customer_complaint,
    diagnosis_notes: s.diagnosis_notes,
    next_service_date: s.next_service_date,
    next_service_km: s.next_service_km,
    created_at: s.created_at,
    // Financial fields intentionally blank on public page
    total_price: null,
    paid_amount: 0,
    remaining_amount: 0,
    completed_at: null,
    ticket_items: s.ticket_items,
  })) as unknown as ServiceTicket[];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="font-bold text-gray-900">AutoLog</span>
          </Link>
          <span className="text-xs text-gray-500">Servis Geçmişi</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <VehicleHeader vehicle={vehicleData} />

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Servis Geçmişi</h2>

          {serviceHistory.length === 0 ? (
            <EmptyHistory />
          ) : (
            <div className="space-y-4">
              {serviceHistory.map((ticket) => (
                <ServiceCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8 pb-4">
          Bu sayfa atölyeniz tarafından paylaşılmıştır. Finansal detaylar gösterilmez.
        </p>
      </div>
    </div>
  );
}
