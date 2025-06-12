
import { Award, Users, BarChart3, Shield, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "12+ Years Experience",
      description: "Over a decade of specialized experience in manufacturing digital marketing"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manufacturing-Focused Portfolio",
      description: "Dedicated expertise with industrial clients across all manufacturing sectors"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "In-House Experts",
      description: "Full team of specialists who understand manufacturing challenges"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Transparent Reporting",
      description: "Clear, data-driven reports that show real impact on your business"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strategic & Technical Know-How",
      description: "Deep understanding of both marketing strategy and technical products"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-engine-gray to-steel-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Your Digital Partner for
            <span className="block bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
              Manufacturing Excellence
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Why manufacturing leaders choose Pixel Studios as their digital marketing partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-precision-teal to-machinery-orange rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4 group-hover:text-precision-teal transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}
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

export default WhyChooseSection;
