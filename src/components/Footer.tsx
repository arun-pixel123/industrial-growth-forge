
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Manufacturing Web Design",
    "Industrial SEO",
    "B2B Lead Generation", 
    "Manufacturing Branding",
    "Supply Chain Marketing"
  ];

  const industries = [
    "CNC Machining",
    "Industrial Coatings",
    "Automotive Suppliers",
    "Aerospace Components",
    "Heavy Equipment"
  ];

  const resources = [
    "Manufacturing Marketing Blog",
    "Industry Case Studies",
    "B2B Marketing Templates",
    "Compliance Guidelines",
    "ROI Calculator"
  ];

  return (
    <footer className="bg-engine-gray text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-precision-teal to-industrial-blue rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-montserrat font-bold">Pixel Studios</span>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                The premier digital marketing agency specializing in manufacturing and industrial B2B marketing solutions. We help manufacturers build digital engines that drive growth.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-precision-teal" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-precision-teal" />
                  <span>hello@pixelstudios.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-precision-teal" />
                  <span>Manufacturing Hub District</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-engine-gray">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-engine-gray">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-6 text-precision-teal">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-precision-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-6 text-machinery-orange">
                Industries
              </h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-machinery-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-6 text-warning-yellow">
                Resources
              </h3>
              <ul className="space-y-3 mb-8">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-warning-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-semibold mb-2">Manufacturing Insights</h4>
                <p className="text-sm text-white/70 mb-3">
                  Get monthly insights on manufacturing marketing trends
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-precision-teal hover:bg-precision-teal/90 text-white"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-white/60 text-sm">
                © 2024 Pixel Studios. All rights reserved. | Privacy Policy | Terms of Service
              </div>
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <span>ISO 9001 Certified Partner</span>
                <span>•</span>
                <span>SOC 2 Compliant</span>
                <span>•</span>
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
