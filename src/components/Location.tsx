import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-medical-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-medical-primary">
              Visit Our Clinic
            </h2>
            <p className="text-xl text-muted-foreground">
              Conveniently located in Thiruvallur for easy access
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Address & Contact Info */}
            <div className="medical-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-medical-primary flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Clinic Address
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-medical-light/50 rounded-lg">
                  <p className="text-lg font-medium text-medical-primary mb-2">
                    Dr. Vinodhini's Women and Child Clinic
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    No 19/45, Kanagavallipuram Street,<br />
                    Theradi, Thiruvallur 602001<br />
                    Tamil Nadu, India
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-medical-primary" />
                    <div>
                      <p className="font-medium text-medical-primary">Phone</p>
                      <button 
                        onClick={() => window.open('tel:+918825561124')}
                        className="text-muted-foreground hover:text-medical-primary transition-colors"
                      >
                        +91 88255 61124
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-medical-secondary" />
                    <div>
                      <p className="font-medium text-medical-primary">Hours</p>
                      <p className="text-muted-foreground text-sm">Mon-Sat Evening</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={() => window.open('https://maps.app.goo.gl/Hi6R1YESau7EsBff7', '_blank')}
                    className="bg-medical-primary hover:bg-medical-primary-dark flex-1"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => window.open('tel:+918825561124')}
                    className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white flex-1"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="medical-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-medical-primary">
                Location Map
              </h3>
              
              <div className="aspect-video rounded-lg overflow-hidden bg-medical-light border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3110319837315!2d79.90389887830857!3d13.142770354155076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a529100712c9d59%3A0xb001dfed22ad6486!2sDr%20Vinodhini&#39;s%20women%20and%20child%20clinic!5e0!3m2!1sen!2sin!4v1757340989323!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Vinodhini's Women and Child Clinic Location"
                />
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Can't find us? Use the map above or call us for directions
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://maps.app.goo.gl/Hi6R1YESau7EsBff7', '_blank')}
                  className="border-medical-secondary text-medical-secondary hover:bg-medical-secondary hover:text-white"
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Transportation Info */}
          <div className="medical-card p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4 text-medical-primary">Transportation & Parking</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-medical-primary mb-2">By Car</h4>
                <p className="text-muted-foreground">Free parking available near the clinic. Located on Kanagavallipuram Street with easy road access.</p>
              </div>
              <div>
                <h4 className="font-medium text-medical-primary mb-2">Public Transport</h4>
                <p className="text-muted-foreground">Well connected by local buses. Thiruvallur railway station is approximately 3 km away.</p>
              </div>
              <div>
                <h4 className="font-medium text-medical-primary mb-2">Accessibility</h4>
                <p className="text-muted-foreground">Ground floor clinic with wheelchair accessible entrance and facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;