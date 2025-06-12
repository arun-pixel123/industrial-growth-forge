
import { AlertTriangle, Clock, Target, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProblemStatementSection = () => {
  const challenges = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Long sales cycles",
      description: "Complex B2B purchasing decisions take months"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Complex products",
      description: "Technical specifications require specialized marketing"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Technical buyers",
      description: "Engineers and procurement teams need detailed information"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Outdated digital presence",
      description: "Traditional approaches don't work in digital manufacturing"
    }
  ];

  return (
    <section className="py-20 bg-factory-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-engine-gray mb-6">
            Why Manufacturing Needs a
            <span className="block text-gradient">Different Digital Strategy</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto mb-8">
            Manufacturing companies face unique digital marketing challenges that require specialized expertise and industry-focused strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-industrial-blue to-precision-teal rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                {challenge.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-engine-gray mb-2">
                {challenge.title}
              </h3>
              <p className="text-steel-gray text-sm">
                {challenge.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            className="border-2 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
          >
            Learn How We Solve These
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
