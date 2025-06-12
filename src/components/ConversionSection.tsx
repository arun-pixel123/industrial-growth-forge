
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Calendar, Shield, ArrowRight, CheckCircle } from "lucide-react";

const ConversionSection = () => {
  const guaranteeFeatures = [
    "90-day performance roadmap",
    "Manufacturing industry expertise", 
    "Risk-free consultation",
    "Dedicated account management"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-industrial-blue to-steel-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-precision-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-machinery-orange/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Header */}
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
              Engineer Your Marketing
              <span className="block bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Start building a manufacturing marketing machine that generates qualified leads, shortens sales cycles, and drives sustainable growth.
            </p>
          </div>

          {/* Dual CTA Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Primary CTA - Download */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-machinery-orange/20 to-warning-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-machinery-orange to-warning-yellow rounded-xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Download className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-warning-yellow transition-colors duration-300">
                  Manufacturing Marketing Playbook
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Comprehensive 47-page guide with proven strategies, templates, and checklists specifically for manufacturing companies.
                </p>

                <ul className="text-left space-y-2 mb-8 text-white/70">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-precision-teal flex-shrink-0" />
                    <span className="text-sm">B2B lead generation frameworks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-precision-teal flex-shrink-0" />
                    <span className="text-sm">Industrial SEO keyword research</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-precision-teal flex-shrink-0" />
                    <span className="text-sm">Supply chain marketing strategies</span>
                  </li>
                </ul>

                <Button 
                  size="lg" 
                  className="w-full bg-machinery-orange hover:bg-machinery-orange/90 text-white py-3 text-lg font-semibold rounded-lg shadow-xl hover:shadow-machinery-orange/25 transition-all duration-300"
                >
                  Download Free Playbook (PDF)
                  <Download className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Secondary CTA - Schedule */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-precision-teal/20 to-industrial-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-precision-teal to-industrial-blue rounded-xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Calendar className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-precision-teal transition-colors duration-300">
                  Executive Briefing
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  30-minute strategic consultation with our manufacturing marketing experts to discuss your specific challenges and opportunities.
                </p>

                <ul className="text-left space-y-2 mb-8 text-white/70">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-precision-teal flex-shrink-0" />
                    <span className="text-sm">Custom growth opportunity analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-precision-teal flex-shrink-0" />
                    <span className="text-sm">Competitive landscape review</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-precision-teal flex-shrink-0" />
                    <span className="text-sm">90-day action plan outline</span>
                  </li>
                </ul>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-industrial-blue py-3 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule Executive Briefing
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Guarantee Section */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-2xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-precision-teal to-warning-yellow rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">
                  90-Day Performance Roadmap or Fee Waived
                </h3>
                <p className="text-white/80 leading-relaxed">
                  We're so confident in our manufacturing expertise that if we don't deliver a comprehensive 90-day performance roadmap that exceeds your expectations, we'll waive our consulting fee entirely.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {guaranteeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/70">
                  <CheckCircle className="w-4 h-4 text-precision-teal flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Final CTA */}
          <div className="mt-12">
            <p className="text-white/60 text-sm mb-4">
              Join 500+ manufacturing companies already accelerating their growth
            </p>
            <Button 
              size="lg" 
              className="bg-warning-yellow hover:bg-warning-yellow/90 text-engine-gray px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-warning-yellow/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Manufacturing Growth Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
