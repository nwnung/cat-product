import { HeroSection } from '@/components/marketing/hero-section';
import { Features } from '@/components/marketing/features';
import { ContactForm } from '@/components/marketing/contact-form';
import { StockCounter } from '@/components/ui/stock-counter';

export default function Home() {
  return (
    <>
      <div className="container mx-auto pt-6 px-4">
        <StockCounter />
      </div>
      <HeroSection />
      <Features />
      <ContactForm />
    </>
  );
} 