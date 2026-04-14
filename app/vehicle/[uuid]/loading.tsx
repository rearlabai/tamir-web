export default function VehicleLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header skeleton */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Vehicle info skeleton */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse" />
            <div className="flex-1">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>

        {/* Service cards skeleton */}
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-3" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse mb-2" />
            <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
