import { Baby, Heart, Shield, Stethoscope, Syringe, UserCheck, Activity, Scissors } from 'lucide-react';

const Services = () => {
  const services = [
    // Women's Health
    {
      icon: Heart,
      title: "Antenatal Care",
      description: "Comprehensive pregnancy monitoring, regular check-ups, and guidance for a healthy pregnancy journey.",
      category: "Women's Health"
    },
    {
      icon: Baby,
      title: "Postnatal Care", 
      description: "Expert care for new mothers including recovery support, breastfeeding guidance, and postpartum wellness.",
      category: "Women's Health"
    },
    {
      icon: UserCheck,
      title: "Routine Gynecology",
      description: "Regular women's health check-ups, preventive screenings, and treatment of gynecological conditions.",
      category: "Women's Health"
    },
    {
      icon: Shield,
      title: "Family Planning",
      description: "Personalized counseling and guidance for family planning decisions and contraceptive options.",
      category: "Women's Health"
    },
    // Fertility Care
    {
      icon: Shield,
      title: "Contraception & Fertility Restoration",
      description: "Comprehensive contraceptive counseling and fertility restoration services to help you plan your family according to your needs.",
      category: "Fertility Care"
    },
    {
      icon: Activity,
      title: "Infertility Treatment",
      description: "Specialized diagnosis and treatment for infertility issues with personalized care plans and advanced therapeutic options.",
      category: "Fertility Care"
    },
    // Surgical Care
    {
      icon: Scissors,
      title: "Laparoscopic Surgeries",
      description: "Minimally invasive surgical procedures with faster recovery times, reduced scarring, and improved outcomes.",
      category: "Surgical Care"
    },
    // Specialized Services
    {
      icon: Baby,
      title: "Labor Delivery Services",
      description: "Conducting labor (Normal and C-Section - At partner hospitals) with comprehensive care throughout delivery.",
      category: "Women's Health"
    },
    {
      icon: Scissors,
      title: "Hysterectomy by Laparoscopy",
      description: "Uterus removal (Hysterectomy by Laparoscopy) using minimally invasive techniques for faster recovery.",
      category: "Surgical Care"
    },
    {
      icon: Heart,
      title: "Uterus & Ovary Care",
      description: "All Uterus and Ovary related issues with specialized treatment and comprehensive care solutions.",
      category: "Women's Health"
    },
    // Child Health
    {
      icon: Stethoscope,
      title: "Pediatric Consultations",
      description: "Complete health assessment and treatment for children from newborn to adolescence.",
      category: "Child Health"
    },
    {
      icon: Syringe,
      title: "Immunizations",
      description: "Age-appropriate vaccination schedules to protect your child from preventable diseases.",
      category: "Child Health"
    },
    {
      icon: Baby,
      title: "Neonatal Care",
      description: "Specialized care for newborns including health assessments, feeding support, and early intervention services.",
      category: "Child Health"
    },
    {
      icon: Activity,
      title: "Growth and Development",
      description: "Comprehensive monitoring of child development milestones, growth tracking, and developmental assessments.",
      category: "Child Health"
    }
  ];

  const additionalServices = [
    "Growth & Development Monitoring",
    "Nutritional Counseling", 
    "Minor Procedures",
    "Health Education & Wellness",
    "Emergency Consultations",
    "Routine Health Screenings"
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-medical-primary">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services for women and children with personalized, expert care
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="medical-card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 medical-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-medical-secondary bg-medical-secondary/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2 mb-2 text-medical-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="medical-card p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6 text-medical-primary">
            Additional Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-medical-light/50 rounded-lg">
                <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need specific medical advice or have questions about our services?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => window.open('https://wa.me/918825561124?text=Hello%20Dr.%20Vinodhini%2C%20I%20have%20questions%20about%20your%20services.', '_blank')}
              className="bg-medical-primary hover:bg-medical-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Chat with Us
            </button>
            <button
              onClick={() => window.open('tel:+918825561124')}
              className="border border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Call for Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;