import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-medical-light shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 medical-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-primary">Dr. Vinodhini's</h1>
              <p className="text-sm text-muted-foreground">Women & Child Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-medical-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-medical-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-medical-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-medical-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-medical-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+918825561124')}
              className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="sm"
              onClick={() => window.open('https://wa.me/918825561124?text=Hello%20Dr.%20Vinodhini%2C%20I%20would%20like%20to%20book%20an%20appointment.', '_blank')}
              className="bg-medical-primary hover:bg-medical-primary-dark"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-medical-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-medical-light pt-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-foreground hover:text-medical-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-foreground hover:text-medical-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-foreground hover:text-medical-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-foreground hover:text-medical-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-foreground hover:text-medical-primary transition-colors">
              Contact
            </button>
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                variant="outline"
                onClick={() => window.open('tel:+918825561124')}
                className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/918825561124?text=Hello%20Dr.%20Vinodhini%2C%20I%20would%20like%20to%20book%20an%20appointment.', '_blank')}
                className="bg-medical-primary hover:bg-medical-primary-dark"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;