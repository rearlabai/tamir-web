import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl text-white">Tamir</span>
            </div>
            <p className="text-sm">
              Profesyonel araç servis takip uygulaması. Oto servisler için
              dijital çözüm.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Uygulama</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Özellikler
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Fiyatlandırma
                </Link>
              </li>
              <li>
                <Link href="#download" className="hover:text-white transition-colors">
                  İndir
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Yasal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  Destek
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {currentYear} Tamir. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
