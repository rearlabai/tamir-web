'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import BrandMark from './BrandMark';

const links = [['#features', 'Ürün'], ['#how-it-works', 'Nasıl çalışır'], ['#pricing', 'Fiyatlandırma']] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 text-white backdrop-blur-xl"><div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/" className="flex items-center gap-2 font-semibold tracking-tight"><BrandMark /><span>AutoLog</span></Link><nav className="hidden items-center gap-7 md:flex">{links.map(([href, label]) => <Link key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</Link>)}</nav><Link href="#download" className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-100 md:inline-flex">Uygulamayı indir</Link><button className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden" aria-label="Menüyü aç" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>{menuOpen && <nav className="border-t border-white/10 px-5 py-4 md:hidden">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-slate-200">{label}</Link>)}<Link href="#download" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950">Uygulamayı indir</Link></nav>}</header>;
}
