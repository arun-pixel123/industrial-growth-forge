import { TrendingUp, Users, Target, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudySection = () => {
  const results = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: "3X",
      title: "increase in organic leads",
      description: "for automotive component manufacturer"
    },
    {
      icon: <Target className="w-8 h-8" />,
      metric: "50+",
      title: "industrial keywords ranked",
      description: "in top 3 positions on Google"
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: "2X",
      title: "engagement on LinkedIn",
      description: "for B2B manufacturing content"
    }
  ];

  return (
    <section className="py-20 bg-factory-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-engine-gray mb-6">
            Proven Results with
            <span className="block text-gradient">Industrial Clients</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Real measurable outcomes from our manufacturing-focused digital marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-precision-teal rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {result.icon}
              </div>
              <div className="text-4xl font-montserrat font-bold text-machinery-orange mb-2">
                {result.metric}
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-engine-gray mb-3">
                {result.title}
              </h3>
              <p className="text-steel-gray">
                {result.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-industrial-blue to-precision-teal rounded-2xl p-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl font-montserrat font-medium mb-6">
              "Pixel Studios transformed our digital presence completely. Within 6 months, we saw a 200% increase in qualified leads and significantly improved our market positioning."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-white/80">VP Marketing, Industrial Solutions Inc.</div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="mt-6 border-machinery-orange text-machinery-orange hover:bg-machinery-orange hover:text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
