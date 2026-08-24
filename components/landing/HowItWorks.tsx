import { CarFront, CheckCircle2, ClipboardPlus, Download } from 'lucide-react';
import { SectionHeading } from './Features';

const steps = [[Download, '01', 'Kurulumu tamamla', 'Uygulamayı indir, atölye bilgilerini birkaç dakikada oluştur.'], [CarFront, '02', 'Araç ve müşteriyi ekle', 'Plaka ve müşteri bilgilerini kaydet; geçmiş hep aynı kayıtta kalır.'], [ClipboardPlus, '03', 'İş emrini oluştur', 'İşlemleri, parçaları, fotoğrafları ve tahsilatı sade bir akışla gir.'], [CheckCircle2, '04', 'Teslim et, geçmişi koru', 'Kayıt kapanır; müşteri erişimi ve sonraki bakım adımı hazırdır.']] as const;

export default function HowItWorks() {
  return <section id="how-it-works" className="bg-slate-100 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Net akış" title="Her gün kullandığın dört adım." description="İş emrini baştan sona izlenebilir kılan, ustayı gereksiz ekrandan uzak tutan yalın bir düzen." /><ol className="mt-14 grid gap-4 lg:grid-cols-4">{steps.map(([Icon, number, title, description]) => <li key={number} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-sky-700">{number}</span><Icon size={22} className="text-slate-950" aria-hidden="true" /></div><h3 className="mt-12 text-xl font-semibold tracking-tight text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></li>)}</ol></div></section>;
}
