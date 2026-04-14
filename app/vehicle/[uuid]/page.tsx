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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { uuid } = await params;

  if (!isValidUuidV4(uuid)) {
    return { title: 'Araç Bulunamadı' };
  }

  const supabase = await createClient();
  const { data: vehicle } = await supabase
    .from('vehicles')
    .select('plate_number, brand_name, model_name')
    .eq('qr_uuid', uuid)
    .single();

  if (!vehicle) {
    return { title: 'Araç Bulunamadı' };
  }

  return {
    title: `${vehicle.plate_number} - ${vehicle.brand_name} ${vehicle.model_name}`,
    description: `${vehicle.brand_name} ${vehicle.model_name} (${vehicle.plate_number}) servis geçmişi`,
    robots: { index: false, follow: false }, // QR pages should not be indexed
  };
}

export default async function VehiclePage({ params }: PageProps) {
  const { uuid } = await params;

  // Validate UUID format before hitting the database
  if (!isValidUuidV4(uuid)) {
    notFound();
  }

  const supabase = await createClient();

  // Fetch vehicle with customer and shop info (no financial data)
  const { data: vehicle, error: vehicleError } = await supabase
    .from('vehicles')
    .select(
      `
      id,
      plate_number,
      brand_name,
      model_name,
      engine_name,
      fuel_type,
      manufacturing_year,
      trim_name,
      qr_uuid,
      created_at,
      customers!inner (
        id,
        full_name,
        phone_number
      ),
      shops!inner (
        id,
        name,
        phone_number,
        address
      )
    `
    )
    .eq('qr_uuid', uuid)
    .single();

  if (vehicleError || !vehicle) {
    notFound();
  }

  // Fetch service history - ONLY non-financial fields
  const { data: tickets } = await supabase
    .from('service_tickets')
    .select(
      `
      id,
      status,
      current_km,
      customer_complaint,
      diagnosis_notes,
      next_service_date,
      next_service_km,
      created_at,
      completed_at
    `
    )
    .eq('vehicle_id', vehicle.id)
    .order('created_at', { ascending: false })
    .limit(50);

  // Map Supabase response to our domain types
  const vehicleData: Vehicle = {
    id: vehicle.id,
    shop_id: (vehicle.shops as unknown as { id: string }).id,
    customer_id: (vehicle.customers as unknown as { id: string }).id,
    plate_number: vehicle.plate_number,
    brand_name: vehicle.brand_name,
    model_name: vehicle.model_name,
    engine_name: vehicle.engine_name,
    fuel_type: vehicle.fuel_type,
    manufacturing_year: vehicle.manufacturing_year,
    trim_name: vehicle.trim_name,
    qr_uuid: vehicle.qr_uuid,
    created_at: vehicle.created_at,
    customer: vehicle.customers as unknown as Vehicle['customer'],
    shop: vehicle.shops as unknown as Vehicle['shop'],
  };

  const serviceHistory: ServiceTicket[] = (tickets || []) as ServiceTicket[];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-bold text-gray-900">Tamir</span>
          </Link>
          <span className="text-xs text-gray-500">Servis Geçmişi</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <VehicleHeader vehicle={vehicleData} />

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Servis Geçmişi
          </h2>

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

        {/* App promotion */}
        <div className="mt-8 bg-primary-50 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Tamir uygulaması ile oluşturuldu
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Siz de kullanın
          </a>
        </div>
      </div>
    </div>
  );
}
