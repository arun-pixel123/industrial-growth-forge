
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-industrial-blue via-steel-gray to-engine-gray overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-precision-teal rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-machinery-orange rounded-full opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-warning-yellow rounded-full opacity-25 animate-pulse delay-2000"></div>

      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-montserrat font-bold text-white leading-tight">
                Digital Marketing That Powers
                <span className="block text-gradient bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
                  Manufacturing Growth
                </span>
              </h1>
              <p className="text-2xl font-montserrat font-medium text-white/90">
                Drive leads, improve visibility, and grow smarter with Pixel Studios — the specialists in digital marketing for manufacturers.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp className="w-5 h-5 text-precision-teal" />
                <span className="text-sm font-medium">3X Lead Growth</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5 text-precision-teal" />
                <span className="text-sm font-medium">12+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-5 h-5 text-precision-teal" />
                <span className="text-sm font-medium">Manufacturing Focused</span>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="relative">
            <Card className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-montserrat font-bold text-machinery-orange mb-2">
                  BOOK A FREE
                </h2>
                <h2 className="text-2xl font-montserrat font-bold text-machinery-orange mb-2">
                  CONSULTATION
                </h2>
                <p className="text-engine-gray font-medium">No Obligation!</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full border-b-2 border-t-0 border-l-0 border-r-0 border-steel-gray rounded-none bg-transparent px-0 py-3 placeholder:text-steel-gray focus:border-machinery-orange focus-visible:ring-0"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full border-b-2 border-t-0 border-l-0 border-r-0 border-steel-gray rounded-none bg-transparent px-0 py-3 placeholder:text-steel-gray focus:border-machinery-orange focus-visible:ring-0"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full border-b-2 border-t-0 border-l-0 border-r-0 border-steel-gray rounded-none bg-transparent px-0 py-3 placeholder:text-steel-gray focus:border-machinery-orange focus-visible:ring-0"
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
