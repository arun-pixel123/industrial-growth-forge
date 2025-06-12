
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <ServicesGrid />
      <PortfolioShowcase />
      <DifferentiatorsSection />
      <TestimonialSection />
      <ConversionSection />
      <Footer />
    </div>
  );
};

export default Index;
