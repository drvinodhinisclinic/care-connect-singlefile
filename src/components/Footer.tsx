import { Heart, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dr. Vinodhini's</h3>
                <p className="text-white/80 text-sm">Women & Child Clinic</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Providing comprehensive, compassionate healthcare for women and children 
              in Thiruvallur with expertise in obstetrics, gynecology, and pediatrics.
            </p>
            <div className="text-white/80 text-sm">
              <p className="mb-1"><strong>Dr. P. Vinodhini</strong> - M.S.(O&G), D.G.O.</p>
              <p><strong>Dr. S. Janakiraman</strong> - M.D.(Paediatrics)</p>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <button
                onClick={() => window.open('tel:+918825561124')}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors w-full text-left"
              >
                <Phone className="w-4 h-4" />
                <span>+91 88255 61124</span>
              </button>
              
              <button
                onClick={() => window.open('https://wa.me/918825561124', '_blank')}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors w-full text-left"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              
              <button
                onClick={() => window.open('mailto:clinic@drvinodhini.com')}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors w-full text-left"
              >
                <Mail className="w-4 h-4" />
                <span>clinic@drvinodhini.com</span>
              </button>
              
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  No 19/45, Kanagavallipuram Street,<br />
                  Theradi, Thiruvallur 602001
                </span>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Clinic Hours</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div>
                <h5 className="font-medium text-white mb-1">Obstetrics & Gynecology</h5>
                <p>Monday - Saturday: 6:00 PM - 9:00 PM</p>
                <p>Sunday: 10:00 AM - 1:00 PM</p>
              </div>
              <div>
                <h5 className="font-medium text-white mb-1">Pediatrics</h5>
                <p>Monday - Saturday: 5:00 PM - 8:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm text-center md:text-left">
              &copy; 2024 Dr. Vinodhini's Women and Child Clinic. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button
                onClick={() => window.open('https://wa.me/918825561124?text=Hello%20Dr.%20Vinodhini%2C%20I%20would%20like%20to%20book%20an%20appointment.', '_blank')}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-white/60 text-center">
            <p>For medical emergencies, please call immediately or visit the nearest emergency department.</p>
          </div>
        </div>
      </div>

      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dr. Vinodhini's Women and Child Clinic",
            "description": "Comprehensive antenatal, postnatal and pediatric care with compassionate, evidence-based treatment for women and children in Thiruvallur",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No 19/45, Kanagavallipuram Street, Theradi",
              "addressLocality": "Thiruvallur",
              "postalCode": "602001",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "telephone": "+91-88255-61124",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "17:00",
                "closes": "21:00",
                "description": "Obstetrics & Gynecology"
              },
              {
                "@type": "OpeningHoursSpecification", 
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "17:00",
                "closes": "20:00",
                "description": "Pediatrics"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00", 
                "closes": "13:00",
                "description": "Obstetrics & Gynecology"
              }
            ],
            "medicalSpecialty": ["Obstetrics", "Gynecology", "Pediatrics"],
            "priceRange": "$$",
            "paymentAccepted": "Cash, Card",
            "currenciesAccepted": "INR"
          })
        }}
      />
    </footer>
  );
};

export default Footer;