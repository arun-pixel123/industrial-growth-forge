
import { Factory, Car, Cog, Wrench, Globe, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhoWeServeSection = () => {
  const clientTypes = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "OEMs and Tier-1 Suppliers",
      description: "Original equipment manufacturers and their key supply chain partners"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto Component Manufacturers",
      description: "Automotive parts, systems, and component manufacturers"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Heavy Machinery & Engineering",
      description: "Industrial equipment, construction machinery, and engineering companies"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Industrial Equipment & Automation",
      description: "Manufacturing automation, robotics, and industrial technology providers"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Exporters & Fabricators",
      description: "Metal fabrication, export-oriented manufacturers, and custom fabricators"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electronics & Tech Manufacturing",
      description: "Electronic component manufacturers, PCB fabricators, and tech hardware producers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-engine-gray to-steel-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            We Help All Types of
            <span className="block bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
              Manufacturers
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our specialized approach works across the entire manufacturing ecosystem, from small fabricators to large OEMs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((type, index) => (
            <Card 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-precision-teal to-machinery-orange rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4 group-hover:text-precision-teal transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {type.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-precision-teal/30 rounded-2xl transition-colors duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
