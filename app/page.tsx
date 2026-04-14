import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Pricing from '@/components/landing/Pricing';
import CTASection from '@/components/landing/CTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
