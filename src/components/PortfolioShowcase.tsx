
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, Award, ArrowRight, ExternalLink } from "lucide-react";

const PortfolioShowcase = () => {
  const caseStudies = [
    {
      industry: "CNC Machinery Manufacturer",
      title: "214% Organic Traffic Growth",
      timeframe: "in 8 months",
      description: "Transformed technical documentation into SEO-optimized content that ranks for high-value manufacturing keywords.",
      metrics: [
        { label: "Organic Traffic", value: "214%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Lead Quality Score", value: "89%", icon: <Target className="w-5 h-5" /> },
        { label: "Page 1 Rankings", value: "47", icon: <Award className="w-5 h-5" /> }
      ],
      tags: ["SEO", "Technical Content", "Lead Generation"],
      bgGradient: "from-industrial-blue to-precision-teal"
    },
    {
      industry: "Industrial Coatings Supplier", 
      title: "$1.2M Pipeline Generated",
      timeframe: "from geo-targeted campaigns",
      description: "Developed location-based marketing strategy targeting regional manufacturing hubs and industrial zones.",
      metrics: [
        { label: "Pipeline Value", value: "$1.2M", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Cost Per Lead", value: "-63%", icon: <Target className="w-5 h-5" /> },
        { label: "Geographic Reach", value: "12", icon: <TrendingUp className="w-5 h-5" /> }
      ],
      tags: ["Geo-Targeting", "B2B Marketing", "Pipeline Development"],
      bgGradient: "from-precision-teal to-warning-yellow"
    },
    {
      industry: "Automotive Tier-1 Supplier",
      title: "37% Cost Reduction",
      timeframe: "per qualified lead",
      description: "Optimized lead qualification process using AI-powered scoring and automated nurturing sequences.",
      metrics: [
        { label: "Cost Reduction", value: "37%", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Lead Quality", value: "+156%", icon: <Award className="w-5 h-5" /> },
        { label: "Sales Cycle", value: "-28%", icon: <TrendingUp className="w-5 h-5" /> }
      ],
      tags: ["Lead Optimization", "Marketing Automation", "ROI Improvement"],
      bgGradient: "from-warning-yellow to-machinery-orange"
    }
  ];

  const trustBadges = [
    { name: "ISO 9001 Certified Clients", count: "47+" },
    { name: "Manufacturing Awards", count: "23" },
    { name: "Industry Certifications", count: "156+" },
    { name: "Global Reach", count: "31 Countries" }
  ];

  return (
    <section className="py-20 bg-factory-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-engine-gray mb-4">
            Proven Results on the
            <span className="block text-gradient">Factory Floor</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Real manufacturing companies achieving measurable growth through our specialized digital marketing strategies
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 rounded-2xl overflow-hidden relative"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${study.bgGradient}`}></div>
              
              <div className="p-8">
                {/* Industry Badge */}
                <div className="inline-block bg-factory-white px-3 py-1 rounded-full text-sm font-medium text-steel-gray mb-4">
                  {study.industry}
                </div>

                {/* Title & Timeframe */}
                <h3 className="text-2xl font-montserrat font-bold text-engine-gray mb-2 group-hover:text-industrial-blue transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-machinery-orange font-semibold mb-4">
                  {study.timeframe}
                </p>

                {/* Description */}
                <p className="text-steel-gray leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-factory-white rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="text-precision-teal">
                          {metric.icon}
                        </div>
                        <span className="text-sm text-steel-gray">{metric.label}</span>
                      </div>
                      <span className="font-bold text-engine-gray">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-precision-teal/10 text-precision-teal text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white transition-all duration-300"
                >
                  View Full Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-precision-teal/30 rounded-2xl transition-colors duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-montserrat font-bold text-center text-engine-gray mb-8">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-industrial-blue mb-1">
                  {badge.count}
                </div>
                <div className="text-sm text-steel-gray">
                  {badge.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-machinery-orange hover:bg-machinery-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-machinery-orange/25 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
