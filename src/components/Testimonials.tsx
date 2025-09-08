import { useState } from 'react';
import { Star, Quote, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Testimonials = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const testimonials = [
    {
      name: "Priya S.",
      rating: 5,
      comment: "Dr. Vinodhini provided excellent care during my pregnancy. Her gentle approach and thorough explanations made me feel comfortable throughout.",
      service: "Antenatal Care"
    },
    {
      name: "Rajesh K.",
      rating: 5,
      comment: "Dr. Janakiraman is wonderful with children. My son was at ease during his check-up, and the doctor explained everything clearly.",
      service: "Pediatric Consultation"
    },
    {
      name: "Meera R.",
      rating: 5,
      comment: "The clinic provides comprehensive women's health services. Professional staff and clean facilities. Highly recommend!",
      service: "Gynecology"
    },
    {
      name: "Suresh M.",
      rating: 5,
      comment: "Timely appointments and excellent care for our newborn. The doctors are knowledgeable and caring.",
      service: "Postnatal Care"
    },
    {
      name: "Lakshmi A.",
      rating: 5,
      comment: "Great experience with immunizations for my daughter. The staff made her comfortable and the process was smooth.",
      service: "Immunizations"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-medical-accent fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleSubmitTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.comment) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and feedback.",
        variant: "destructive"
      });
      return;
    }

    // Save to localStorage
    const testimonial = {
      ...newTestimonial,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    const existingTestimonials = JSON.parse(localStorage.getItem('clinicTestimonials') || '[]');
    existingTestimonials.push(testimonial);
    localStorage.setItem('clinicTestimonials', JSON.stringify(existingTestimonials));

    toast({
      title: "Thank You!",
      description: "Your feedback has been submitted and saved locally. To publish publicly, please contact the clinic admin.",
    });

    // Reset form
    setNewTestimonial({ name: '', rating: 5, comment: '' });
    setShowForm(false);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-medical-primary">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from families who trust us with their healthcare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="medical-card p-6 relative">
              <Quote className="w-8 h-8 text-medical-primary/20 absolute top-4 right-4" />
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-medical-primary">{testimonial.name}</h4>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <span className="text-xs bg-medical-secondary/10 text-medical-secondary px-2 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Review Section */}
        <div className="text-center mb-8">
          <div className="medical-card p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-medical-primary">
              Love Our Care?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Share your experience on Google to help other families find us
            </p>
            <Button
              asChild
              className="bg-medical-accent hover:bg-medical-accent-dark text-white"
            >
              <a
                href="https://g.page/r/CYZkrSLt3wGwEBM/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="w-4 h-4 mr-2" />
                Leave Google Review
              </a>
            </Button>
          </div>
        </div>

        {/* Add Testimonial Section */}
        <div className="max-w-2xl mx-auto">
          {!showForm ? (
            <div className="text-center medical-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-medical-primary">
                Share Your Experience
              </h3>
              <p className="text-muted-foreground mb-6">
                Help other families by sharing your experience with our clinic
              </p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-medical-primary hover:bg-medical-primary-dark"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your Testimonial
              </Button>
            </div>
          ) : (
            <div className="medical-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-medical-primary">
                Share Your Feedback
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={newTestimonial.name}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                    placeholder="Enter your name (or initials for privacy)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setNewTestimonial({ ...newTestimonial, rating })}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            rating <= newTestimonial.rating
                              ? 'text-medical-accent fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-medical-primary">
                    Your Experience
                  </label>
                  <Textarea
                    value={newTestimonial.comment}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, comment: e.target.value })}
                    placeholder="Share your experience with our clinic..."
                    rows={4}
                  />
                </div>

                <div className="flex space-x-4">
                  <Button
                    onClick={handleSubmitTestimonial}
                    className="flex-1 bg-medical-primary hover:bg-medical-primary-dark"
                  >
                    Submit Testimonial
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white"
                  >
                    Cancel
                  </Button>
                </div>
              </div>

              <div className="mt-4 p-3 bg-medical-accent/10 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Privacy Note:</strong> Submitted testimonials are saved locally on your device. 
                  To publish publicly on the website, please contact the clinic administration.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;