
import HeroSection from "@/components/HeroSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import ServicesGrid from "@/components/ServicesGrid";
import CaseStudySection from "@/components/CaseStudySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeServeSection />
      <ServicesGrid />
      <CaseStudySection />
      <WhyChooseSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
