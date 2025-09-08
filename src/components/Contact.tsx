import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailContact = () => {
    const subject = contactForm.subject || 'General Inquiry';
    const body = `Name: ${contactForm.name}
Email: ${contactForm.email}
Phone: ${contactForm.phone}

Message:
${contactForm.message}`;

    const mailtoUrl = `mailto:clinic@drvinodhini.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppContact = () => {
    const message = `Hello Dr. Vinodhini,

Name: ${contactForm.name}
Subject: ${contactForm.subject || 'General Inquiry'}

${contactForm.message}

Please get back to me at your convenience.`;

    const whatsappUrl = `https://wa.me/918825561124?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-medical-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-medical-primary">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need medical advice? We're here to help you and your family
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-medical-primary">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="medical-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-medical-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-medical-primary mb-1">Phone</h4>
                    <button
                      onClick={() => window.open('tel:+918825561124')}
                      className="text-muted-foreground hover:text-medical-primary transition-colors"
                    >
                      +91 88255 61124
                    </button>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available during clinic hours for appointments and inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="medical-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-secondary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-medical-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-medical-primary mb-1">WhatsApp</h4>
                    <button
                      onClick={() => window.open('https://wa.me/918825561124', '_blank')}
                      className="text-muted-foreground hover:text-medical-secondary transition-colors"
                    >
                      +91 88255 61124
                    </button>
                    <p className="text-sm text-muted-foreground mt-1">
                      Quick responses for appointments and urgent queries
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="medical-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-medical-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-medical-primary mb-1">Email</h4>
                    <button
                      onClick={() => window.open('mailto:clinic@drvinodhini.com')}
                      className="text-muted-foreground hover:text-medical-accent transition-colors"
                    >
                      clinic@drvinodhini.com
                    </button>
                    <p className="text-sm text-muted-foreground mt-1">
                      For detailed inquiries and medical records
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="medical-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-medical-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-medical-primary mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      No 19/45, Kanagavallipuram Street,<br />
                      Theradi, Thiruvallur 602001
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="medical-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-medical-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-medical-primary mb-2">Clinic Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>O&G:</strong> Mon-Sat 6PM-9PM, Sun 10AM-1PM</p>
                      <p><strong>Pediatrics:</strong> Mon-Sat 5PM-8PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-medical-primary">
              Send us a Message
            </h3>
            
            <div className="medical-card p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-medical-primary">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-medical-primary">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    placeholder="Your message or inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="flex-1 bg-medical-primary hover:bg-medical-primary-dark"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleEmailContact}
                    className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send via Email
                  </Button>
                </div>
              </form>

              <div className="mt-6 p-4 bg-medical-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                  For urgent medical concerns, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;