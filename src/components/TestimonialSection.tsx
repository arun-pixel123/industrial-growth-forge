
import { Card } from "@/components/ui/card";
import { Quote, Star, Building2 } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-factory-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Testimonial Card */}
          <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden relative">
            {/* Gradient Top Border */}
            <div className="h-1 bg-gradient-to-r from-industrial-blue via-precision-teal to-machinery-orange"></div>
            
            <div className="p-12 lg:p-16">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-precision-teal to-industrial-blue rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-warning-yellow text-warning-yellow" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center mb-12">
                <p className="text-2xl lg:text-3xl font-montserrat font-medium text-engine-gray leading-relaxed mb-6">
                  "Pixel Studios tripled our inbound leads from aerospace procurement teams within 10 months. Finally, an agency that 
                  <span className="text-gradient bg-gradient-to-r from-industrial-blue to-precision-teal bg-clip-text text-transparent"> speaks manufacturing</span>."
                </p>
                <p className="text-lg text-steel-gray leading-relaxed">
                  Their deep understanding of our supply chain complexities and technical specifications transformed our digital presence. We're now the go-to supplier for three major OEMs.
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-center space-x-6">
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-machinery-orange to-precision-teal rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">ER</span>
                </div>
                
                {/* Details */}
                <div className="text-left">
                  <div className="text-xl font-montserrat font-bold text-engine-gray">
                    Elena Rodriguez
                  </div>
                  <div className="text-machinery-orange font-semibold mb-1">
                    Chief Operating Officer
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-steel-gray" />
                    <span className="text-steel-gray font-medium">Titanium Precision Components</span>
                  </div>
                </div>
              </div>

              {/* Company Logo Placeholder */}
              <div className="flex justify-center mt-8">
                <div className="bg-factory-white px-6 py-3 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-industrial-blue to-precision-teal rounded"></div>
                    <span className="font-montserrat font-bold text-engine-gray">TPC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 border border-precision-teal/10 rounded-2xl transform rotate-12"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border border-machinery-orange/10 rounded-xl transform -rotate-12"></div>
          </Card>

          {/* Supporting Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-industrial-blue mb-2">
                3X
              </div>
              <div className="text-steel-gray font-medium">
                Increase in Qualified Leads
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-precision-teal mb-2">
                10 Months
              </div>
              <div className="text-steel-gray font-medium">
                To Achieve Results
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-machinery-orange mb-2">
                3 Major
              </div>
              <div className="text-steel-gray font-medium">
                OEM Partnerships
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
