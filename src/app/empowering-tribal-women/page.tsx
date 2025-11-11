import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { Users, Briefcase, Heart, GraduationCap, Home, HandHeart, Sparkles, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Empowering Tribal Women | YelloTickell Pvt Ltd',
  description: 'Learn about YelloTickell\'s initiatives to empower tribal women through skill development and economic opportunities.',
};

const programs = [
  {
    title: 'Skill Development Centers',
    description: 'Training tribal women in traditional crafts, modern skills, and entrepreneurship',
    beneficiaries: '50,000+ Women Trained',
    features: ['Handicrafts Training', 'Digital Literacy', 'Business Skills', 'Financial Literacy'],
    icon: GraduationCap,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Self-Help Groups',
    description: 'Forming and supporting women\'s collectives for economic empowerment',
    beneficiaries: '5,000+ SHGs Formed',
    features: ['Microfinance Support', 'Collective Marketing', 'Peer Learning', 'Leadership Development'],
    icon: Users,
    color: 'bg-pink-50 text-pink-600'
  },
  {
    title: 'Market Linkages',
    description: 'Connecting tribal artisans to urban and global markets for sustainable income',
    beneficiaries: '25,000+ Artisans Connected',
    features: ['E-commerce Platform', 'Export Opportunities', 'Fair Trade', 'Brand Development'],
    icon: Briefcase,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Healthcare & Nutrition',
    description: 'Ensuring health and wellness for tribal women and their families',
    beneficiaries: '100,000+ Women Reached',
    features: ['Health Camps', 'Nutrition Programs', 'Maternal Care', 'Health Education'],
    icon: Heart,
    color: 'bg-red-50 text-red-600'
  }
];

const impactMetrics = [
  { value: '200K+', label: 'Women Empowered' },
  { value: '500+', label: 'Villages Covered' },
  { value: '₹100Cr+', label: 'Income Generated' },
  { value: '95%', label: 'Sustainability Rate' }
];

const successFactors = [
  {
    title: 'Cultural Preservation',
    description: 'Protecting and promoting traditional tribal arts and crafts',
    icon: Sparkles
  },
  {
    title: 'Economic Independence',
    description: 'Creating sustainable livelihood opportunities',
    icon: TrendingUp
  },
  {
    title: 'Social Empowerment',
    description: 'Building leadership and decision-making capabilities',
    icon: HandHeart
  },
  {
    title: 'Community Development',
    description: 'Holistic development of tribal communities',
    icon: Home
  }
];

export default function EmpoweringTribalWomenPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920"
          alt="Tribal Women Empowerment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-800/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Empowering Tribal Women</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Creating sustainable livelihoods and preserving cultural heritage
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactMetrics.map((metric, index) => (
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
            <h2 className="font-heading text-4xl text-primary mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are dedicated to empowering tribal women by providing them with skills, resources, and 
              opportunities to become self-reliant. Our programs focus on preserving their rich cultural 
              heritage while integrating modern skills that open doors to sustainable livelihoods. Through 
              education, healthcare, and economic opportunities, we\'re creating a transformative impact 
              in tribal communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground">Comprehensive initiatives for holistic empowerment</p>
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

      {/* Craft & Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">Preserving Tribal Heritage</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our initiatives help tribal women preserve their traditional arts while creating sustainable income sources
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Traditional Crafts</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600 mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Master Artisans</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Products Created</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Export Countries</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                From intricate beadwork to traditional weaving, from bamboo crafts to natural dyes, 
                we help tribal women turn their ancestral skills into thriving businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400"
                  alt="Traditional Weaving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400"
                  alt="Handicrafts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?w=400"
                  alt="Tribal Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=400"
                  alt="Women at Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground">Holistic development for sustainable impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
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
            <h2 className="font-heading text-4xl text-primary mb-4">Transformation Stories</h2>
            <p className="text-xl text-muted-foreground">Real stories of empowerment and change</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100"
                  alt="Success Story"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="font-heading text-xl text-center mb-3">From Artisan to Entrepreneur</h3>
              <p className="text-muted-foreground text-center mb-4">
                "The training program helped me start my own handicraft business. Today, I employ 15 women from my village."
              </p>
              <div className="text-sm text-center text-muted-foreground">
                <div className="font-semibold">Lakshmi Bai</div>
                <div>Madhya Pradesh</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=100&h=100"
                  alt="Success Story"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="font-heading text-xl text-center mb-3">Community Leader</h3>
              <p className="text-muted-foreground text-center mb-4">
                "Through the SHG program, I learned leadership skills. I\'m now the sarpanch of my village."
              </p>
              <div className="text-sm text-center text-muted-foreground">
                <div className="font-semibold">Meera Devi</div>
                <div>Jharkhand</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100"
                  alt="Success Story"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="font-heading text-xl text-center mb-3">Digital Success</h3>
              <p className="text-muted-foreground text-center mb-4">
                "Digital literacy training helped me sell my products online. My income has tripled in two years."
              </p>
              <div className="text-sm text-center text-muted-foreground">
                <div className="font-semibold">Sunita Murmu</div>
                <div>Odisha</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-12">
            <h2 className="font-heading text-3xl text-primary mb-6 text-center">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Join us in creating lasting change in tribal communities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Corporate Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  CSR collaborations, skill development programs, and market linkages
                </p>
              </div>
              <div className="text-center">
                <HandHeart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Volunteer Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Share your skills and expertise to train and mentor tribal women
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Support & Donate</h3>
                <p className="text-sm text-muted-foreground">
                  Fund education, healthcare, and livelihood programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Be Part of the Change</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create a future where every tribal woman has the opportunity to thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
            >
              Get Involved
            </Link>
            <Link
              href="/csr-overview"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-sm"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
