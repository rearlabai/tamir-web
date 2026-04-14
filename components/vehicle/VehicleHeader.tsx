import type { Vehicle } from '@/types';

interface VehicleHeaderProps {
  vehicle: Vehicle;
}

export default function VehicleHeader({ vehicle }: VehicleHeaderProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {vehicle.brand_name} {vehicle.model_name}
          </h1>
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono font-semibold rounded-lg mt-1">
            {vehicle.plate_number}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-xs text-gray-500 mb-1">Yıl</p>
          <p className="font-semibold text-gray-900">{vehicle.manufacturing_year}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-xs text-gray-500 mb-1">Yakıt Tipi</p>
          <p className="font-semibold text-gray-900">{vehicle.fuel_type}</p>
        </div>
        {vehicle.engine_name && (
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-1">Motor</p>
            <p className="font-semibold text-gray-900">{vehicle.engine_name}</p>
          </div>
        )}
        {vehicle.customer && (
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-1">Araç Sahibi</p>
            <p className="font-semibold text-gray-900">{vehicle.customer.full_name}</p>
          </div>
        )}
      </div>

      {vehicle.shop && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Servis</p>
          <p className="font-medium text-gray-900">{vehicle.shop.name}</p>
          {vehicle.shop.phone_number && (
            <a
              href={`tel:${vehicle.shop.phone_number}`}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              {vehicle.shop.phone_number}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
