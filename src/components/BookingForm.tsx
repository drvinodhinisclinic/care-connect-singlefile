import { useState } from 'react';
import { Calendar, Clock, MessageCircle, Mail, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const services = [
    'Antenatal Care',
    'Postnatal Care', 
    'Gynecology Consultation',
    'Pediatric Consultation',
    'Immunization',
    'Growth & Development Check',
    'Family Planning Counseling',
    'General Check-up'
  ];

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppBooking = () => {
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, phone, and service required.",
        variant: "destructive"
      });
      return;
    }

    // Save booking to localStorage
    const booking = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };

    const existingBookings = JSON.parse(localStorage.getItem('clinicBookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('clinicBookings', JSON.stringify(existingBookings));

    // Create WhatsApp message
    const message = `Hello Dr. Vinodhini,

I would like to book an appointment:

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📅 Preferred Date: ${formData.date || 'Flexible'}
⏰ Preferred Time: ${formData.time || 'Flexible'}
🏥 Service: ${formData.service}
📝 Notes: ${formData.notes || 'None'}

Please confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/918825561124?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking Submitted",
      description: "Your booking has been saved and WhatsApp opened. Please send the message to confirm.",
    });
  };

  const handleEmailBooking = () => {
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information", 
        description: "Please fill in your name, phone, and service required.",
        variant: "destructive"
      });
      return;
    }

    const subject = `Appointment Request - ${formData.name}`;
    const body = `Dear Dr. Vinodhini,

I would like to book an appointment with the following details:

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.date || 'Flexible'}
Preferred Time: ${formData.time || 'Flexible'}
Service Required: ${formData.service}
Additional Notes: ${formData.notes || 'None'}

Please confirm my appointment at your earliest convenience.

Thank you!
${formData.name}`;

    const mailtoUrl = `mailto:clinic@drvinodhini.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="py-20 bg-medical-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-medical-primary">
              Book Your Appointment
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule your visit with our experienced doctors
            </p>
          </div>

          <div className="medical-card p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-medical-primary"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-medical-primary">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-medical-primary"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-medical-primary">
                  Additional Notes
                </label>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any specific concerns or questions..."
                  rows={3}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 bg-medical-primary hover:bg-medical-primary-dark text-white py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleEmailBooking}
                  className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white py-3"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send by Email
                </Button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-medical-accent/10 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> This form creates a booking request. 
                We'll confirm your appointment via WhatsApp or phone within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;