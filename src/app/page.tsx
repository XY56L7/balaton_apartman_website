import Hero from '@/components/Hero';
import About from '@/components/About';
import Luxury from '@/components/Luxury';
import Services from '@/components/Services';
import LocalInfo from '@/components/LocalInfo';
import TrustBadges from '@/components/TrustBadges';
import FAQSection from '@/components/FAQSection';
import Lifestyle from '@/components/Lifestyle';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Luxury />
      <Services />
      <LocalInfo />
      <TrustBadges />
      <FAQSection />
      <Lifestyle />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
