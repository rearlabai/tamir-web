import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { storeLinks } from '@/lib/store-links';

export default function CTASection() {
  return <section className="bg-white px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-sky-400 px-6 py-14 text-slate-950 sm:px-12 sm:py-20"><div className="max-w-3xl"><span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-sm font-medium text-white"><ShieldCheck size={16} /> Düzenli kayıt, daha güçlü servis</span><h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Atölyenin bilgisi, herkesin ulaşabileceği düzende.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-800">Bugünün işini kapatırken yarının takibini de hazırla. AutoLog ile ücretsiz başla.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href={storeLinks.android.href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800">{storeLinks.android.label}<ArrowRight size={18} /></Link><Link href={storeLinks.ios.href} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-950/20 px-5 py-3 font-semibold transition hover:bg-white/30">{storeLinks.ios.label}</Link></div></div></div></section>;
}
