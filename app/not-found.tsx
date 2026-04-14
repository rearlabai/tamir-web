import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
