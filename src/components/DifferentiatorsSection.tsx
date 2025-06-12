
import { Card } from "@/components/ui/card";
import { CheckCircle, BarChart3, Award, Users, Target, Zap } from "lucide-react";

const DifferentiatorsSection = () => {
  const processItems = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Supply chain-informed buyer journey mapping",
      description: "We map your customers' procurement processes to create touchpoints at every decision stage."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance-ready content frameworks (ISO/AS9100)",
      description: "All content meets industry standards and regulatory requirements for quality management systems."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Machine learning-driven lead scoring",
      description: "AI algorithms analyze prospect behavior to identify purchase-ready manufacturing companies."
    }
  ];

  const impactItems = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "82% client retention rate since 2018",
      description: "Long-term partnerships built on consistent results and deep manufacturing industry expertise."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Average 5.3x ROI across manufacturing clients",
      description: "Measurable returns that justify marketing investments to even the most cost-conscious CFOs."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Dedicated shop-floor-to-boardroom reporting",
      description: "Metrics that matter to operations teams and executive leadership, delivered in formats they prefer."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-steel-gray to-engine-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-40 h-40 border border-precision-teal/10 rounded-3xl transform rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-warning-yellow/10 rounded-2xl transform -rotate-12"></div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
            What Sets Our Industrial
            <span className="block bg-gradient-to-r from-precision-teal to-warning-yellow bg-clip-text text-transparent">
              Approach Apart
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Deep manufacturing expertise combined with cutting-edge digital marketing technology
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Process */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-montserrat font-bold text-white mb-6">
                Our Process
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Methodical approaches designed specifically for the manufacturing sales cycle
              </p>
            </div>

            <div className="space-y-6">
              {processItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-sm border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-precision-teal to-warning-yellow rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-montserrat font-semibold text-white mb-2 group-hover:text-precision-teal transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Impact */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-montserrat font-bold text-white mb-6">
                Proven Impact
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Measurable results that drive manufacturing business growth
              </p>
            </div>

            <div className="space-y-6">
              {impactItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-sm border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-machinery-orange to-industrial-blue rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-montserrat font-semibold text-white mb-2 group-hover:text-machinery-orange transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Manufacturing Clients" },
            { number: "214%", label: "Average Traffic Growth" },
            { number: "$47M+", label: "Pipeline Generated" },
            { number: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
