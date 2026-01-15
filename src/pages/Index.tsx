import { Header } from '@/components/Header';
import { ScrollProgress } from '@/components/ScrollProgress';
import { HeroSection } from '@/components/sections/HeroSection';
import { PainSection } from '@/components/sections/PainSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';

import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTAFormSection } from '@/components/sections/CTAFormSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollProgress />
      <main>
        <HeroSection />
        <div className="bg-[#F5F5F5]">
          <PainSection />
        </div>
        <HowItWorksSection />

        <SocialProofSection />
        <div className="bg-[#F5F5F5]">
          <PricingSection />
        </div>
        <FAQSection />
        <div className="bg-[#F5F5F5]">
          <CTAFormSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
