import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { Heart, GraduationCap, Home, Users, TreePine, Award, TrendingUp, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CSR Overview | YelloTickell Pvt Ltd',
  description: 'Overview of YelloTickell\'s Corporate Social Responsibility initiatives and community impact programs.',
};

const impactMetrics = [
  { value: '5M+', label: 'Lives Impacted', icon: Users },
  { value: '500+', label: 'Villages Reached', icon: Home },
  { value: '1000+', label: 'Schools Supported', icon: GraduationCap },
  { value: '₹500Cr+', label: 'CSR Investment', icon: Heart }
];

const focusAreas = [
  {
    title: 'Education',
    description: 'Providing quality education through schools, scholarships, and skill development programs',
    impact: '2M+ students benefited',
    initiatives: ['YelloTickell Schools', 'Digital Literacy', 'Vocational Training', 'Scholarships'],
    link: '/education',
    color: 'bg-blue-50 text-blue-600',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800'
  },
  {
    title: 'Healthcare',
    description: 'Ensuring accessible healthcare through medical camps, hospitals, and wellness programs',
    impact: '1M+ patients treated',
    initiatives: ['Mobile Health Units', 'Free Medical Camps', 'Maternal Care', 'Nutrition Programs'],
    link: '/health',
    color: 'bg-red-50 text-red-600',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
  },
  {
    title: 'Women Empowerment',
    description: 'Empowering women through skill development, entrepreneurship, and self-help groups',
    impact: '50K+ women empowered',
    initiatives: ['Skill Training', 'Self-Help Groups', 'Micro-enterprises', 'Financial Literacy'],
    link: '/empowering-tribal-women',
    color: 'bg-purple-50 text-purple-600',
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800'
  },
  {
    title: 'Rural Development',
    description: 'Building sustainable rural communities through infrastructure and livelihood programs',
    impact: '500+ villages developed',
    initiatives: ['Water Conservation', 'Sanitation', 'Rural Infrastructure', 'Agriculture Support'],
    link: '/slum-rehabilitation',
    color: 'bg-green-50 text-green-600',
    image: 'https://images.unsplash.com/photo-1609003740001-a3ac45937064?w=800'
  }
];

const sdgGoals = [
  { number: 1, title: 'No Poverty', progress: 85 },
  { number: 3, title: 'Good Health', progress: 90 },
  { number: 4, title: 'Quality Education', progress: 95 },
  { number: 5, title: 'Gender Equality', progress: 80 },
  { number: 6, title: 'Clean Water', progress: 75 },
  { number: 8, title: 'Decent Work', progress: 88 }
];

export default function CSROverviewPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920"
          alt="CSR Impact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Creating Shared Value</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transforming communities through sustainable development and inclusive growth
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CSR Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl text-primary mb-6">Our CSR Philosophy</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              At YelloTickell, we believe that business success and social progress go hand in hand. 
              Our CSR initiatives are designed to create lasting positive impact in the communities we serve, 
              focusing on sustainable development that empowers individuals and transforms societies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl mb-2">Strategic Impact</h3>
                <p className="text-muted-foreground">Aligned with SDGs and national priorities for maximum impact</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl mb-2">Community Partnership</h3>
                <p className="text-muted-foreground">Working with communities to understand and address their needs</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl mb-2">Sustainable Solutions</h3>
                <p className="text-muted-foreground">Creating self-sustaining models for long-term development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Our Focus Areas</h2>
            <p className="text-xl text-muted-foreground">Creating impact across four key pillars</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-heading text-2xl mb-1">{area.title}</h3>
                    <div className="text-sm opacity-90">{area.impact}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-primary mb-2">Key Initiatives:</div>
                    <div className="flex flex-wrap gap-2">
                      {area.initiatives.map((initiative, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                          {initiative}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={area.link}
                    className="text-primary font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">UN SDG Alignment</h2>
            <p className="text-xl text-muted-foreground">Contributing to global sustainable development goals</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sdgGoals.map((goal) => (
              <div key={goal.number} className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  {goal.number}
                </div>
                <div className="text-sm font-semibold mb-2">{goal.title}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{goal.progress}% Progress</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Impact Stories</h2>
            <p className="text-xl text-muted-foreground">Real stories of transformation and hope</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-heading text-xl mb-3">Education Transform</h3>
              <p className="text-muted-foreground mb-4">
                "The YelloTickell school in our village has changed my daughter's future. She's now pursuing engineering."
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">Ramesh Kumar</div>
                <div>Parent, Gujarat</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-heading text-xl mb-3">Women Empowerment</h3>
              <p className="text-muted-foreground mb-4">
                "The skill training program helped me start my own tailoring business. Now I support my entire family."
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">Sunita Devi</div>
                <div>Entrepreneur, Rajasthan</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-heading text-xl mb-3">Healthcare Access</h3>
              <p className="text-muted-foreground mb-4">
                "The mobile health unit saved my life. I received timely treatment for a condition I didn't know I had."
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">Mohan Lal</div>
                <div>Farmer, Madhya Pradesh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Recognition & Awards</h2>
            <p className="text-xl text-muted-foreground">Acknowledged for our commitment to social development</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold">CSR Excellence Award</div>
              <div className="text-sm text-muted-foreground">FICCI 2023</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold">Best Education Initiative</div>
              <div className="text-sm text-muted-foreground">CII 2023</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold">Sustainability Leader</div>
              <div className="text-sm text-muted-foreground">UN Global Compact</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold">Rural Impact Award</div>
              <div className="text-sm text-muted-foreground">Govt of India 2022</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us in creating sustainable change and building inclusive communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
            >
              Partner With Us
            </Link>
            <Link
              href="/csr"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-sm"
            >
              View Annual Report
            </Link>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
