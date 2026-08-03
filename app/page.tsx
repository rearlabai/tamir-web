import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Pricing from '@/components/landing/Pricing';
import CTASection from '@/components/landing/CTASection';
import { getPublishedBillingPlans } from '@/lib/billing-catalog';

export default async function HomePage() {
  const plans = await getPublishedBillingPlans();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing plans={plans} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
