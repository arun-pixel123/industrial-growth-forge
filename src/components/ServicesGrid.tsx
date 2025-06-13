
import { Monitor, Search, Zap, Share2, Palette, Target, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesGrid = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      subtitle: "Conversion-Ready Websites for Manufacturing Brands",
      description: "Your website is your digital factory floor. We build B2B manufacturing websites that are fast, functional, and built for lead generation.",
      features: [
        "Industry-specific UI/UX",
        "RFQ forms with CRM integration", 
        "Case study, catalog, and product page design",
        "Mobile-responsive and SEO-optimized"
      ],
      color: "from-industrial-blue to-precision-teal"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO",
      subtitle: "Search Engine Optimization for Industrial Growth", 
      description: "From machine tools to OEM parts, we help you rank for the terms that matter. Our SEO strategy attracts qualified decision-makers and boosts organic traffic.",
      features: [
        "Industrial keyword research",
        "On-page & technical SEO",
        "Local and export-focused SEO",
        "Blog & landing page content creation"
      ],
      color: "from-precision-teal to-machinery-orange"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "GEO",
      subtitle: "AI-Powered SEO for the Future of Manufacturing",
      description: "Stand out in the age of AI search. We optimize your content for next-gen engines like ChatGPT, Perplexity & voice search to future-proof your digital reach.",
      features: [
        "AI-friendly product and process descriptions",
        "Voice & chatbot content optimization", 
        "Technical FAQs & schema markup",
        "Comparison & recommendation content"
      ],
      color: "from-machinery-orange to-industrial-blue"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "SMO",
      subtitle: "Strengthen Your Industrial Presence on LinkedIn & Beyond",
      description: "Reach buyers, engineers, and industry influencers on the platforms they trust.",
      features: [
        "LinkedIn lead generation",
        "Technical storytelling via posts, videos, carousels",
        "Recruitment branding", 
        "Trade show & event promotion"
      ],
      color: "from-precision-teal to-machinery-orange"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding",
      subtitle: "Build a Strong Industrial Identity",
      description: "We create distinctive, credible brand identities for manufacturers.",
      features: [
        "Logo, tagline, and brand kit",
        "Brand messaging & tone-of-voice",
        "Visual consistency across all touchpoints"
      ],
      color: "from-precision-teal to-industrial-blue"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Campaigns",
      subtitle: "Performance-Driven Campaigns for B2B Manufacturing Leads",
      description: "Run targeted campaigns that deliver real inquiries, not just clicks.",
      features: [
        "Google Ads & LinkedIn Ads",
        "Retargeting & competitor conquesting",
        "Industry-specific campaign landing pages",
        "Monthly reporting & lead tracking"
      ],
      color: "from-industrial-blue to-machinery-orange"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-engine-gray to-steel-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 border border-precision-teal/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-machinery-orange/20 rounded-2xl transform rotate-45"></div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
            Industrial-Strength
            <span className="block bg-gradient-to-r from-precision-teal to-machinery-orange bg-clip-text text-transparent">
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
                  className="border-machinery-orange text-machinery-orange hover:bg-machinery-orange hover:text-white transition-all duration-300"
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
