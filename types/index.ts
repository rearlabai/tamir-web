// Domain Types for AutoLog Web

export interface Shop {
  id: string;
  name: string;
  phone_number: string | null;
  address: string | null;
  subscription_status: 'FREE' | 'BASIC' | 'PREMIUM';
  created_at: string;
}

export interface Customer {
  id: string;
  shop_id: string;
  full_name: string;
  phone_number: string | null;
  created_at: string;
}

export interface Vehicle {
  id: string;
  shop_id: string;
  customer_id: string;
  plate_number: string;
  brand_name: string;
  model_name: string;
  engine_name: string;
  fuel_type: string;
  manufacturing_year: number;
  trim_name: string | null;
  qr_uuid: string;
  created_at: string;
  // Relations
  customer?: Pick<Customer, 'id' | 'full_name' | 'phone_number'>;
  shop?: Pick<Shop, 'id' | 'name' | 'phone_number' | 'address'>;
}

export interface ServiceTicket {
  id: string;
  vehicle_id: string;
  shop_id: string;
  status:
    | 'PENDING'
    | 'INSPECTING'
    | 'WAITING_APPROVAL'
    | 'IN_PROGRESS'
    | 'READY'
    | 'DELIVERED'
    | 'COMPLETED'
    | 'CANCELLED';
  current_km: number;
  customer_complaint: string | null;
  diagnosis_notes: string | null;
  next_service_date: string | null;
  next_service_km: number | null;
  // Note: financial fields (total_price, paid_amount) excluded from public view
  created_at: string;
  completed_at: string | null;
}

export interface VehiclePublicData {
  vehicle: Vehicle;
  serviceHistory: ServiceTicket[];
}
