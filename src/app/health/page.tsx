import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { Heart, Stethoscope, Activity, Users, Shield, Baby, Pill, Ambulance } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Health Initiatives | YelloTickell Pvt Ltd',
  description: 'Explore YelloTickell\'s healthcare initiatives providing medical services and wellness programs to communities.',
};

const programs = [
  {
    title: 'Mobile Health Units',
    description: 'Bringing healthcare to remote villages through fully-equipped mobile clinics',
    beneficiaries: '500K+ Patients',
    services: ['General Check-ups', 'Diagnostic Tests', 'Medicine Distribution', 'Emergency Care'],
    icon: Ambulance,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'Maternal & Child Care',
    description: 'Comprehensive healthcare for mothers and children including pre and post-natal care',
    beneficiaries: '100K+ Mothers & Children',
    services: ['Prenatal Care', 'Immunization', 'Nutrition Support', 'Health Education'],
    icon: Baby,
    color: 'bg-pink-50 text-pink-600'
  },
  {
    title: 'Disease Prevention',
    description: 'Preventive healthcare programs focusing on communicable and lifestyle diseases',
    beneficiaries: '250K+ Screened',
    services: ['Health Screening', 'Vaccination Drives', 'Awareness Campaigns', 'Follow-up Care'],
    icon: Shield,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Mental Health Support',
    description: 'Addressing mental health through counseling and awareness programs',
    beneficiaries: '50K+ Beneficiaries',
    services: ['Counseling Services', 'Stress Management', 'Support Groups', 'Awareness Programs'],
    icon: Heart,
    color: 'bg-purple-50 text-purple-600'
  }
];

const healthMetrics = [
  { value: '1M+', label: 'Patients Treated' },
  { value: '100+', label: 'Medical Camps' },
  { value: '50', label: 'Mobile Units' },
  { value: '500+', label: 'Partner Hospitals' }
];

export default function HealthPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920"
          alt="Healthcare Initiative"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Healthcare for All</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ensuring accessible and quality healthcare for underserved communities
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl text-primary mb-6">Our Healthcare Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are committed to bridging the healthcare gap in rural and underserved communities. 
              Through innovative delivery models, partnerships with healthcare providers, and focus on 
              preventive care, we ensure that quality healthcare reaches those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Our Healthcare Programs</h2>
            <p className="text-xl text-muted-foreground">Comprehensive healthcare solutions for communities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-lg ${program.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-primary mb-3">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                          {program.beneficiaries}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {program.services.map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Health Units Feature */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">Mobile Health Units</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our fleet of mobile health units brings quality healthcare directly to remote villages
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fully Equipped</h3>
                    <p className="text-sm text-muted-foreground">Complete diagnostic equipment and pharmacy onboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Regular Visits</h3>
                    <p className="text-sm text-muted-foreground">Weekly visits to designated villages on fixed schedule</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Pill className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Free Medicines</h3>
                    <p className="text-sm text-muted-foreground">Essential medicines provided free of cost</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"
                alt="Mobile Health Unit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Camps */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Specialized Health Camps</h2>
            <p className="text-xl text-muted-foreground">Regular camps addressing specific health needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-heading text-xl mb-3">Eye Care Camps</h3>
              <p className="text-muted-foreground mb-4">
                Free eye check-ups, cataract surgeries, and spectacle distribution
              </p>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Eye Surgeries</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-heading text-xl mb-3">Cardiac Camps</h3>
              <p className="text-muted-foreground mb-4">
                Heart health screening, ECG tests, and specialist consultations
              </p>
              <div className="text-2xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">Screenings</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-heading text-xl mb-3">Dental Camps</h3>
              <p className="text-muted-foreground mb-4">
                Dental check-ups, treatments, and oral hygiene education
              </p>
              <div className="text-2xl font-bold text-primary">75K+</div>
              <div className="text-sm text-muted-foreground">Treatments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Impact Stories</h2>
            <p className="text-xl text-muted-foreground">Real stories of lives transformed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-heading text-xl mb-3">Life-Saving Surgery</h3>
              <p className="text-muted-foreground mb-4">
                "The free cardiac surgery at YelloTickell health camp saved my life. I couldn't afford 
                the treatment, but they gave me a second chance at life."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=60&h=60"
                  alt="Patient"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">Ramesh Patel</div>
                  <div className="text-sm text-muted-foreground">Heart Surgery Patient</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Baby className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="font-heading text-xl mb-3">Healthy Mother & Child</h3>
              <p className="text-muted-foreground mb-4">
                "Regular check-ups at the mobile health unit ensured my safe delivery. Both my baby 
                and I are healthy thanks to their care."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=60&h=60"
                  alt="Mother"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">Sunita Devi</div>
                  <div className="text-sm text-muted-foreground">New Mother</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Healthcare Partners</h2>
            <p className="text-xl text-muted-foreground">Collaborating with leading healthcare institutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-lg font-semibold">Apollo Hospitals</div>
              <div className="text-sm text-muted-foreground">Specialist Services</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-lg font-semibold">Fortis Healthcare</div>
              <div className="text-sm text-muted-foreground">Medical Camps</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-lg font-semibold">AIIMS</div>
              <div className="text-sm text-muted-foreground">Training & Research</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-lg font-semibold">WHO</div>
              <div className="text-sm text-muted-foreground">Global Health Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Join Our Healthcare Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to bring quality healthcare to every corner of the nation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
            >
              Support Our Cause
            </Link>
            <Link
              href="/csr-overview"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-sm"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
