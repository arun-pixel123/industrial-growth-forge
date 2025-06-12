
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, TrendingUp, Users, Award } from "lucide-react";

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
                Drive Industrial
                <span className="block text-gradient bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
                  Growth
                </span>
              </h1>
              <p className="text-2xl font-montserrat font-medium text-white/90">
                Digital Marketing for Manufacturers
              </p>
            </div>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Proven Strategies to Generate Qualified B2B Leads, Strengthen Brand Authority & Accelerate Sales Cycles
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-machinery-orange hover:bg-machinery-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-machinery-orange/25 transition-all duration-300 transform hover:scale-105"
              >
                Request Your Free Manufacturing Marketing Audit
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-industrial-blue px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Case Study
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp className="w-5 h-5 text-precision-teal" />
                <span className="text-sm font-medium">214% Avg Growth</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5 text-precision-teal" />
                <span className="text-sm font-medium">500+ Manufacturers</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-5 h-5 text-precision-teal" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-2xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-montserrat font-semibold text-xl">Factory Analytics Dashboard</h3>
                    <div className="w-3 h-3 bg-precision-teal rounded-full animate-pulse-glow"></div>
                  </div>
                  
                  {/* Mock Analytics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="text-precision-teal text-2xl font-bold">247%</div>
                      <div className="text-white/70 text-sm">Lead Growth</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="text-warning-yellow text-2xl font-bold">$1.8M</div>
                      <div className="text-white/70 text-sm">Pipeline Value</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="text-machinery-orange text-2xl font-bold">5.3x</div>
                      <div className="text-white/70 text-sm">ROI Increase</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="text-precision-teal text-2xl font-bold">82%</div>
                      <div className="text-white/70 text-sm">Retention Rate</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-white/70 text-sm mb-1">
                        <span>Organic Traffic</span>
                        <span>89%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-precision-teal h-2 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-white/70 text-sm mb-1">
                        <span>Conversion Rate</span>
                        <span>76%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-warning-yellow h-2 rounded-full" style={{ width: '76%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Background geometric shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/10 rounded-2xl transform rotate-12"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-precision-teal/20 rounded-2xl transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
