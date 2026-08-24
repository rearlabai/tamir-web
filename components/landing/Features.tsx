import { BellRing, BrainCircuit, Camera, ChartNoAxesCombined, ClipboardList, QrCode, ScanLine, Wrench } from 'lucide-react';

const features = [
  [BrainCircuit, 'Yardımcı zekâ, son karar ustanda', 'Fotoğraftan ön inceleme ve araç geçmişine göre düzenli öneriler.'],
  [ClipboardList, 'İş emirleri tek yerde', 'İşçilik, parça, not ve teslim adımı her araç için eksiksiz kayıtlı.'],
  [Camera, 'Kanıt niteliğinde medya kaydı', 'Öncesi-sonrası fotoğraf ve videoları iş emrine bağlayın.'],
  [ScanLine, 'Barkodla hızlı parça girişi', 'Parçayı tarayın, ürün bilgisini iş emrine doğrudan aktarın.'],
  [ChartNoAxesCombined, 'Net operasyon görünümü', 'Açık işler, tahsilatlar ve yaklaşan bakım kayıtları görünür kalsın.'],
  [BellRing, 'Zamanında bakım hatırlatmaları', 'KM ve tarihe göre müşteriyi doğru zamanda geri çağırın.'],
  [QrCode, 'Müşteri için şeffaf geçmiş', 'QR bağlantısıyla servis geçmişini güvenli biçimde paylaşın.'],
  [Wrench, 'Sanayi temposuna göre tasarlandı', 'Karmaşık ekranlar değil, günlük iş akışına uyan net adımlar.'],
] as const;

export default function Features() {
  return <section id="features" className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Operasyonun tamamı" title="Defter değil, işleyen bir servis sistemi." description="Günlük iş akışını hızlandıran araçlar; gösterişli vaatler yerine sahada kullanılacak net bir düzen." /><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{features.map(([Icon, title, description]) => <article key={title} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"><div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-sky-300"><Icon size={21} aria-hidden="true" /></div><h3 className="mt-5 font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>)}</div></div></section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">{eyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p></div>;
}
