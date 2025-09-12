import { Award, Heart, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-medical-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-medical-primary">
            Expert Gynecologist & Pediatrician in Thiruvallur
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dr. Vinodhini M.S(O&G)., D.G.O., - Leading gynecologist and Dr. Janakiraman MD - experienced pediatrician providing exceptional women and child healthcare
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Dr. Vinodhini */}
          <div className="medical-card p-8 text-center">
            <div className="w-32 h-32 mx-auto mb-6 medical-gradient rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">DV</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-medical-primary">Dr. P. Vinodhini</h3>
            <p className="text-medical-secondary font-semibold mb-4">M.S.(O&G), D.G.O., - Gynecologist in Thiruvallur</p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <span className="bg-medical-primary/10 text-medical-primary px-3 py-1 rounded-full text-sm font-medium">
                Founder & Gynecologist
              </span>
              <span className="bg-medical-secondary/10 text-medical-secondary px-3 py-1 rounded-full text-sm font-medium">
                Laparascopic Surgeon
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dr. Vinodhini is an experienced gynecologist in Thiruvallur with DGO and MS (O&G) qualifications, 
              specializing in comprehensive women's healthcare from adolescence through menopause. 
              As a trusted gynecologist, her patient-centered approach ensures personalized care for every woman's unique needs.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-medical-primary" />
                <span>Mon-Sat 6PM-9PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-medical-primary" />
                <span>Sun 10AM-1PM</span>
              </div>
            </div>
          </div>

          {/* Dr. Janakiraman */}
          <div className="medical-card p-8 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-medical-secondary rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">DJ</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-medical-primary">Dr. S. Janakiraman</h3>
            <p className="text-medical-secondary font-semibold mb-4">M.D.(Paediatrics)</p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <span className="bg-medical-secondary/10 text-medical-secondary px-3 py-1 rounded-full text-sm font-medium">
                Pediatric Specialist
              </span>
              <span className="bg-medical-primary/10 text-medical-primary px-3 py-1 rounded-full text-sm font-medium">
                Child Development Expert
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dr. Janakiraman is dedicated to providing comprehensive pediatric care from newborn to adolescence. 
              His gentle approach and extensive experience in child development ensures the best possible 
              healthcare outcomes for your little ones.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-medical-secondary" />
                <span>Mon-Sat 5PM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-medical-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-medical-primary" />
            </div>
            <h4 className="font-semibold mb-2 text-medical-primary">Compassionate Care</h4>
            <p className="text-sm text-muted-foreground">Patient-centered approach with empathy and understanding</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-medical-secondary/10 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-medical-secondary" />
            </div>
            <h4 className="font-semibold mb-2 text-medical-primary">Expert Qualifications</h4>
            <p className="text-sm text-muted-foreground">Highly qualified specialists with years of experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-medical-accent/10 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-medical-accent" />
            </div>
            <h4 className="font-semibold mb-2 text-medical-primary">Family-Focused</h4>
            <p className="text-sm text-muted-foreground">Comprehensive care for the whole family</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
