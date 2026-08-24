import Link from 'next/link';
import { ArrowRight, BadgeCheck, BrainCircuit, Camera, ClipboardCheck, ScanLine, Wrench } from 'lucide-react';
import { storeLinks } from '@/lib/store-links';

const proofPoints = [
  { icon: BrainCircuit, label: 'Akıllı teşhis' },
  { icon: Camera, label: 'Görsel servis kaydı' },
  { icon: ScanLine, label: 'Barkodla hızlı giriş' },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 pb-16 pt-28 text-white sm:pb-24 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,.24),transparent_28%),radial-gradient(circle_at_25%_65%,rgba(99,102,241,.18),transparent_32%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-sky-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Oto servisler için operasyon yazılımı
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Servis operasyonunuzu{' '}
            <span className="text-sky-300">kontrol altına alın.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Müşteri, araç, iş emri, parça ve tahsilat süreçleri tek, hızlı ve güvenilir bir iş akışında.
            Usta karar verir; AutoLog düzeni korur.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {proofPoints.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                <Icon size={16} className="text-sky-300" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row" id="download">
            <Link href={storeLinks.android.href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
              {storeLinks.android.label}<ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href={storeLinks.ios.href} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              {storeLinks.ios.label}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Ücretsiz başla · Kart bilgisi gerekmez</p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-sky-400/20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/15 bg-slate-900/85 p-3 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-900 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-white"><Wrench size={19} /></div><div><p className="text-xs text-slate-500">Aktif iş emri</p><p className="font-semibold">34 ABC 123 · Ford Focus</p></div></div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">Teslim bekliyor</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <Metric label="Açık iş" value="12" /><Metric label="Bugün" value="₺18.450" /><Metric label="Hatırlatma" value="8" />
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold"><BrainCircuit size={18} className="text-indigo-600" />İş emri özeti</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">Triger seti ve devirdaim değişimi için parça ve işçilik kalemleri hazır. Sonraki bakım önerisi kayda eklendi.</p>
                <div className="mt-4 flex items-center justify-between"><span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700"><BadgeCheck size={15} /> Kayıt tamam</span><span className="text-xs font-medium text-slate-500">2 dk önce</span></div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-950 px-4 py-3 text-sm text-white"><ClipboardCheck size={18} className="text-sky-300" /> Her işlem, araç geçmişinde izlenebilir.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl bg-slate-100 p-3"><p className="text-xs text-slate-500">{label}</p><p className="mt-1 text-lg font-semibold tracking-tight">{value}</p></div>;
}
