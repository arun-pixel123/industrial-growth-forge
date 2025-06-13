
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-industrial-blue/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-white font-montserrat font-bold text-xl">
              pixel studios
            </div>
            <div className="text-precision-teal text-sm">
              Technology is colorful
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-precision-teal transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-white hover:text-precision-teal transition-colors font-medium">
              About
            </a>
            <a href="#portfolio" className="text-white hover:text-precision-teal transition-colors font-medium">
              Portfolio
            </a>
            <a href="#contact" className="text-white hover:text-precision-teal transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-industrial-blue"
            >
              LET'S DISCUSS BUSINESS
            </Button>
            <Button className="bg-precision-teal hover:bg-precision-teal/90 text-white">
              CALL 080 6919-3462
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-white hover:text-precision-teal transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-white hover:text-precision-teal transition-colors font-medium">
                About
              </a>
              <a href="#portfolio" className="text-white hover:text-precision-teal transition-colors font-medium">
                Portfolio
              </a>
              <a href="#contact" className="text-white hover:text-precision-teal transition-colors font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-industrial-blue"
                >
                  LET'S DISCUSS BUSINESS
                </Button>
                <Button className="bg-precision-teal hover:bg-precision-teal/90 text-white">
                  CALL 080 6919-3462
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
