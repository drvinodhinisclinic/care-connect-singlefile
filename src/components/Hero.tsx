import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="hero-section text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert <span className="text-medical-accent">Gynecologist</span> in
            <span className="block text-medical-accent">Thiruvallur</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Dr. Vinodhini M.S(O&G)., D.G.O., - Leading gynecologist offering comprehensive women's health, 
            antenatal, postnatal and pediatric care in Thiruvallur.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              size="lg"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-medical-primary hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Book via WhatsApp
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('tel:+918825561124')}
              className="border-white text-medical-primary hover:bg-white hover:text-medical-primary text-lg px-8 py-4 h-auto font-semibold"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Clinic
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button 
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center space-x-3 text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-5 h-5 text-medical-accent" />
              <span>Theradi, Thiruvallur</span>
            </button>
            <button 
              onClick={() => document.getElementById('timings')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center space-x-3 text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <Clock className="w-5 h-5 text-medical-accent" />
              <span>Working Hours</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;