
import { Shield, Settings, TrendingUp, Globe, Clock, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Shorten 6-12 month sales cycles",
      description: "with targeted lead nurturing",
      detail: "Our automated drip campaigns and lead scoring systems reduce time-to-close by 40% for complex industrial sales."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Dominate niche industrial keywords",
      description: "competitors overlook",
      detail: "We identify long-tail technical terms that your prospects actually search for, driving qualified traffic."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Convert technical expertise",
      description: "into compelling brand storytelling",
      detail: "Transform complex manufacturing processes into clear value propositions that resonate with buyers."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Secure 24/7 lead generation",
      description: "from global procurement teams",
      detail: "Capture international leads while your team sleeps with geo-targeted campaigns and multilingual content."
    }
  ];

  return (
    <section className="py-20 bg-factory-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-industrial-blue to-precision-teal rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="relative">
                  <Settings className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '8s' }} />
                  <Shield className="w-6 h-6 text-warning-yellow absolute -top-1 -right-1" />
                </div>
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-industrial-blue/20 to-precision-teal/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-engine-gray mb-4">
            Why Manufacturing Leaders
            <span className="block text-gradient">Choose Pixel Studios</span>
          </h2>
          
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            We understand the unique challenges of B2B industrial marketing and deliver solutions that drive measurable results for manufacturing companies.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden relative"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-factory-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-precision-teal rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {point.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-montserrat font-semibold text-engine-gray mb-2 group-hover:text-industrial-blue transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-machinery-orange font-medium mb-3">
                      {point.description}
                    </p>
                    <p className="text-steel-gray leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-precision-teal/30 rounded-2xl transition-colors duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-industrial-blue to-precision-teal text-white px-6 py-3 rounded-full font-medium shadow-lg">
            <TrendingUp className="w-5 h-5" />
            <span>Ready to accelerate your manufacturing growth?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
