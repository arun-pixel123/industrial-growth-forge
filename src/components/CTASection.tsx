
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-factory-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-engine-gray mb-6">
            Let's Build Your
            <span className="block text-gradient">Digital Growth Plan</span>
          </h2>
          
          <p className="text-xl text-steel-gray mb-8 max-w-2xl mx-auto">
            No cost. No commitment. Just a roadmap to real results for your manufacturing business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-machinery-orange hover:bg-machinery-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-machinery-orange/25 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Download Manufacturing Playbook
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-steel-gray">
            <Shield className="w-5 h-5 text-precision-teal" />
            <span className="text-sm">90-day performance roadmap or fee waived</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
