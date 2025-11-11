import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { Home, Droplet, Zap, School, Heart, Building2, Users, TreePine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Slum Rehabilitation | YelloTickell Pvt Ltd',
  description: 'Discover YelloTickell\'s slum rehabilitation programs improving lives through housing, sanitation, and infrastructure.',
};

const programs = [
  {
    title: 'Housing Development',
    description: 'Building affordable, dignified housing with proper ventilation and natural light',
    beneficiaries: '50,000+ Families',
    features: ['Pucca Houses', 'Individual Toilets', 'Kitchen Space', 'Proper Ventilation'],
    icon: Home,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Sanitation & Hygiene',
    description: 'Comprehensive sanitation infrastructure and hygiene awareness programs',
    beneficiaries: '200,000+ Residents',
    features: ['Community Toilets', 'Sewage Systems', 'Waste Management', 'Clean Water Access'],
    icon: Droplet,
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    title: 'Education Centers',
    description: 'Establishing schools and learning centers within rehabilitated communities',
    beneficiaries: '25,000+ Children',
    features: ['Primary Schools', 'Adult Literacy', 'Skill Training', 'Digital Learning'],
    icon: School,
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Healthcare Facilities',
    description: 'Setting up health centers and ensuring access to medical services',
    beneficiaries: '100,000+ Patients',
    features: ['Health Centers', 'Mobile Clinics', 'Vaccination Drives', 'Health Insurance'],
    icon: Heart,
    color: 'bg-red-50 text-red-600'
  }
];

const transformationMetrics = [
  { value: '100+', label: 'Slums Transformed' },
  { value: '500K+', label: 'Lives Impacted' },
  { value: '10K+', label: 'Houses Built' },
  { value: '90%', label: 'Quality of Life Improvement' }
];

const infrastructure = [
  {
    title: 'Clean Water Supply',
    description: '24/7 piped water connection to every household',
    icon: Droplet
  },
  {
    title: 'Electricity Connection',
    description: 'Legal power connections with street lighting',
    icon: Zap
  },
  {
    title: 'Community Spaces',
    description: 'Parks, playgrounds, and community centers',
    icon: Users
  },
  {
    title: 'Green Initiatives',
    description: 'Tree plantation and urban farming projects',
    icon: TreePine
  }
];

export default function SlumRehabilitationPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=1920"
          alt="Slum Rehabilitation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-800/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Slum Rehabilitation</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transforming slums into sustainable, dignified communities
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {transformationMetrics.map((metric, index) => (
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
            <h2 className="font-heading text-4xl text-primary mb-6">Building Dignified Communities</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our slum rehabilitation program goes beyond just building houses. We create integrated 
              communities with proper infrastructure, healthcare, education, and livelihood opportunities. 
              Working closely with residents, we ensure that rehabilitation preserves community bonds 
              while dramatically improving quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Comprehensive Rehabilitation</h2>
            <p className="text-xl text-muted-foreground">Holistic approach to community transformation</p>
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
                        {program.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                            {feature}
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

      {/* Before & After */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Transformation Impact</h2>
            <p className="text-xl text-muted-foreground">From slums to sustainable communities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl mb-6 text-center">Before</h3>
              <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800"
                  alt="Before Rehabilitation"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  Temporary structures with poor ventilation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  No access to clean water or sanitation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  Illegal electricity connections
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  No proper drainage or waste management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  Limited access to education and healthcare
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-2xl mb-6 text-center">After</h3>
              <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
                  alt="After Rehabilitation"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Permanent houses with proper amenities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  24/7 water supply and individual toilets
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Legal electricity with street lighting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Modern drainage and waste management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Schools, health centers, and community spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Infrastructure Development</h2>
            <p className="text-xl text-muted-foreground">Building foundations for better living</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Life-Changing Stories</h2>
            <p className="text-xl text-muted-foreground">Real people, real transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Building2 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="font-heading text-xl mb-3">From Slum to Home</h3>
              <p className="text-muted-foreground mb-4">
                "We lived in a 10x10 feet shanty with no water or toilet. Now we have a proper 
                two-room house with all facilities. My children can study properly, and we live 
                with dignity. This is more than a house; it's a new life."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?w=60&h=60"
                  alt="Resident"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">Ravi Kumar</div>
                  <div className="text-sm text-muted-foreground">Dharavi Rehabilitation Project</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <School className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-heading text-xl mb-3">Education Within Reach</h3>
              <p className="text-muted-foreground mb-4">
                "Earlier, my daughter had to walk 3 km to school through unsafe areas. Now there's 
                a school in our community. She's first in her class and dreams of becoming a doctor. 
                The rehabilitation didn't just give us a home; it gave us hope."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60"
                  alt="Mother"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">Anjali Patil</div>
                  <div className="text-sm text-muted-foreground">Mumbai Slum Rehabilitation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">Community-Centric Approach</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We work hand-in-hand with residents to ensure rehabilitation meets their needs
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Participatory Planning</h3>
                    <p className="text-sm text-muted-foreground">
                      Residents are involved in design and planning decisions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Skill Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Training programs for employment in construction and other sectors
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Programs to maintain community bonds and cultural practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Economic Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Creating markets, shops, and workspaces within communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
                alt="Community Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-12">
            <h2 className="font-heading text-3xl text-primary mb-6 text-center">Sustainable Development Goals</h2>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Our rehabilitation projects align with UN SDGs for sustainable urban development
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">SDG 1</div>
                <div className="text-sm text-muted-foreground">No Poverty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">SDG 3</div>
                <div className="text-sm text-muted-foreground">Good Health</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">SDG 6</div>
                <div className="text-sm text-muted-foreground">Clean Water</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">SDG 11</div>
                <div className="text-sm text-muted-foreground">Sustainable Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Join the Transformation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to create dignified living spaces for millions living in slums
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
            >
              Partner With Us
            </Link>
            <Link
              href="/csr-overview"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-sm"
            >
              View All CSR Initiatives
            </Link>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
