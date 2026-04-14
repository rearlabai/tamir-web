'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Tamir</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Özellikler
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Nasıl Çalışır
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Fiyatlandırma
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#download"
              className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ücretsiz Başlayın
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMenuOpen(false)}>
                Özellikler
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMenuOpen(false)}>
                Nasıl Çalışır
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium" onClick={() => setMenuOpen(false)}>
                Fiyatlandırma
              </Link>
              <Link
                href="#download"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Ücretsiz Başlayın
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
