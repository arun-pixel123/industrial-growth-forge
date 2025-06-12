
import { Monitor, Search, Zap, Share2, Palette, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesGrid = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      subtitle: "Industrial-Grade Digital Experiences",
      description: "Mobile-optimized portals with CAD integration & distributor portals",
      features: [
        "Equipment specification databases",
        "Secure distributor login portals", 
        "Mobile-responsive technical documentation",
        "Real-time inventory integration"
      ],
      color: "from-industrial-blue to-precision-teal"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO",
      subtitle: "Technical Content Optimization", 
      description: "Technical content for MRO suppliers + industrial keyword mapping",
      features: [
        "Technical specification SEO",
        "Long-tail industrial keywords",
        "Local manufacturing directory listings",
        "Compliance-focused content strategy"
      ],
      color: "from-precision-teal to-warning-yellow"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "GEO",
      subtitle: "Generative Engine Optimization",
      description: "Next-generation AI-powered search optimization for manufacturing",
      features: [
        "AI chatbot content optimization",
        "Voice search for technical queries", 
        "Manufacturing process explanations",
        "Equipment comparison optimization"
      ],
      color: "from-warning-yellow to-machinery-orange"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "SMO",
      subtitle: "B2B Social Media Mastery",
      description: "LinkedIn lead gen for manufacturers + equipment demo videos",
      features: [
        "LinkedIn executive thought leadership",
        "Equipment demonstration videos",
        "Trade show content amplification", 
        "Industry association networking"
      ],
      color: "from-machinery-orange to-industrial-blue"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding",
      subtitle: "Industrial Authority Building",
      description: "Safety-certification storytelling + OEM partner ecosystems",
      features: [
        "ISO certification showcasing",
        "Supply chain partnership stories",
        "Safety record highlighting",
        "Quality assurance messaging"
      ],
      color: "from-precision-teal to-industrial-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-engine-gray to-steel-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 border border-precision-teal/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-warning-yellow/20 rounded-2xl transform rotate-45"></div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
            Industrial-Strength
            <span className="block bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Specialized services designed for the unique demands of manufacturing and industrial B2B marketing
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2 group-hover:text-precision-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-precision-teal font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-white/70">
                      <div className="w-2 h-2 bg-precision-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white/20 text-white hover:bg-white hover:text-engine-gray transition-all duration-300 group-hover:border-precision-teal"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-precision-teal/30 rounded-2xl transition-colors duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-machinery-orange hover:bg-machinery-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-machinery-orange/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Your Custom Manufacturing Strategy
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
