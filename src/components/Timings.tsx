import { Clock, AlertCircle, Phone } from 'lucide-react';

const Timings = () => {
  const schedule = [
    {
      day: 'Monday',
      ogTiming: '6:00 PM - 9:00 PM',
      pediatricTiming: '5:00 PM - 8:00 PM'
    },
    {
      day: 'Tuesday', 
      ogTiming: '6:00 PM - 9:00 PM',
      pediatricTiming: '5:00 PM - 8:00 PM'
    },
    {
      day: 'Wednesday',
      ogTiming: '6:00 PM - 9:00 PM', 
      pediatricTiming: '5:00 PM - 8:00 PM'
    },
    {
      day: 'Thursday',
      ogTiming: '6:00 PM - 9:00 PM',
      pediatricTiming: '5:00 PM - 8:00 PM'
    },
    {
      day: 'Friday',
      ogTiming: '6:00 PM - 9:00 PM',
      pediatricTiming: '5:00 PM - 8:00 PM'
    },
    {
      day: 'Saturday',
      ogTiming: '6:00 PM - 9:00 PM',
      pediatricTiming: '5:00 PM - 8:00 PM'
    },
    {
      day: 'Sunday',
      ogTiming: '10:00 AM - 1:00 PM',
      pediatricTiming: 'Closed'
    }
  ];

  return (
    <section id="timings" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-medical-primary">
              Clinic Timings
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here when you need us most
            </p>
          </div>

          <div className="medical-card p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* O&G Timings */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-medical-primary flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Obstetrics & Gynecology
                </h3>
                <div className="space-y-3">
                  {schedule.map((day, index) => (
                    <div key={`og-${index}`} className="flex justify-between items-center py-3 border-b border-medical-light last:border-b-0">
                      <span className="font-medium text-foreground">{day.day}</span>
                      <span className={`${day.ogTiming === 'Closed' ? 'text-red-500' : 'text-medical-primary'} font-medium`}>
                        {day.ogTiming}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-medical-primary/10 rounded-lg">
                  <p className="text-sm text-medical-primary font-medium">
                    Dr. P. Vinodhini - Women's Health Specialist
                  </p>
                </div>
              </div>

              {/* Pediatric Timings */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-medical-secondary flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Pediatrics
                </h3>
                <div className="space-y-3">
                  {schedule.map((day, index) => (
                    <div key={`ped-${index}`} className="flex justify-between items-center py-3 border-b border-medical-light last:border-b-0">
                      <span className="font-medium text-foreground">{day.day}</span>
                      <span className={`${day.pediatricTiming === 'Closed' ? 'text-red-500' : 'text-medical-secondary'} font-medium`}>
                        {day.pediatricTiming}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-medical-secondary/10 rounded-lg">
                  <p className="text-sm text-medical-secondary font-medium">
                    Dr. S. Janakiraman - Pediatric Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-red-800 mb-2">Emergency & Out of Hours</h4>
                  <p className="text-red-700 text-sm mb-3">
                    For urgent medical situations outside clinic hours, please contact us immediately or visit the nearest emergency department.
                  </p>
                  <button
                    onClick={() => window.open('tel:+918825561124')}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Emergency Contact: +91 88255 61124</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-6 p-4 bg-medical-accent/10 rounded-lg">
              <h4 className="font-semibold text-medical-primary mb-2">Important Notes:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Appointments are recommended to avoid waiting</li>
                <li>• Walk-ins are welcome during clinic hours</li>
                <li>• Last patient registration 30 minutes before closing</li>
                <li>• Please bring all previous medical records and reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timings;