import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
