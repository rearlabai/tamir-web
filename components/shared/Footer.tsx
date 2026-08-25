import Link from 'next/link';
import BrandMark from './BrandMark';

export default function Footer() {
  const year = new Date().getFullYear();
  return <footer className="bg-slate-950 text-slate-400"><div className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]"><div><div className="flex items-center gap-2 text-lg font-semibold text-white"><BrandMark />AutoLog</div><p className="mt-4 max-w-sm text-sm leading-6">Oto servislerin günlük işlerini düzenleyen, kayıt kalitesini yükselten servis operasyon uygulaması.</p></div><FooterLinks title="Ürün" links={[['#features', 'Ürün'], ['#how-it-works', 'Nasıl çalışır'], ['#pricing', 'Fiyatlandırma'], ['#download', 'Uygulamayı indir']]} /><FooterLinks title="Yasal" links={[['/privacy', 'Gizlilik'], ['/account-deletion', 'Hesap silme'], ['/terms', 'Kullanım şartları'], ['/kvkk', 'KVKK'], ['/support', 'Destek']]} /></div><div className="mt-12 border-t border-white/10 pt-6 text-sm">© {year} AutoLog. Tüm hakları saklıdır.</div></div></footer>;
}

function FooterLinks({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) { return <div><h2 className="font-semibold text-white">{title}</h2><ul className="mt-4 space-y-3 text-sm">{links.map(([href, label]) => <li key={href}><Link href={href} className="transition hover:text-white">{label}</Link></li>)}</ul></div>; }
