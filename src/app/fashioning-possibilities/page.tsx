import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedPage from '@/components/animated-page';
import { Lightbulb, Leaf, Users, TrendingUp, Award, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fashioning Possibilities | YelloTickell Pvt Ltd',
  description: 'Discover how YelloTickell is fashioning possibilities through innovation, design, and sustainable practices.',
};

const innovations = [
  {
    title: 'Sustainable Fabrics',
    description: 'Pioneering eco-friendly textiles using recycled materials and innovative dyeing processes that reduce water consumption by 70%.',
    icon: Leaf,
    stats: '70% Less Water',
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Smart Manufacturing',
    description: 'AI-powered production lines that optimize efficiency, reduce waste, and ensure consistent quality across all products.',
    icon: Lightbulb,
    stats: '40% More Efficient',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Digital Integration',
    description: 'End-to-end digital supply chain management providing real-time tracking and transparency for all stakeholders.',
    icon: Globe,
    stats: '100% Traceable',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Community Impact',
    description: 'Empowering local artisans and farmers through fair trade practices and skill development programs.',
    icon: Users,
    stats: '50K+ Lives Impacted',
    color: 'bg-orange-50 text-orange-600'
  }
];

const milestones = [
  { year: '2020', achievement: 'Launched India\'s first carbon-neutral textile line' },
  { year: '2021', achievement: 'Achieved 100% renewable energy in manufacturing' },
  { year: '2022', achievement: 'Introduced blockchain-based supply chain transparency' },
  { year: '2023', achievement: 'Won Global Sustainability Excellence Award' },
  { year: '2024', achievement: 'Expanded eco-friendly product range to 60% of portfolio' }
];

export default function FashioningPossibilitiesPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920"
          alt="Innovation at YelloTickell"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Fashioning Possibilities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Where innovation meets tradition to create sustainable solutions for tomorrow
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl text-primary mb-6">Our Innovation Philosophy</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At YelloTickell, we believe in creating possibilities that transform industries and improve lives. 
              Our innovation journey combines cutting-edge technology with sustainable practices to deliver 
              solutions that are good for business, people, and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Innovation Areas</h2>
            <p className="text-xl text-muted-foreground">Transforming ideas into impactful solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full">
                        {item.stats}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* R&D Centers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">Research & Development</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our state-of-the-art R&D facilities drive innovation across all business verticals
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">3 Innovation Centers</h3>
                    <p className="text-sm text-muted-foreground">Located in Ahmedabad, Bangalore, and Mumbai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">200+ R&D Professionals</h3>
                    <p className="text-sm text-muted-foreground">Scientists, engineers, and design experts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">50+ Patents Filed</h3>
                    <p className="text-sm text-muted-foreground">Innovative solutions and processes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800"
                alt="R&D Center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Innovation Milestones</h2>
            <p className="text-xl text-muted-foreground">Our journey of continuous innovation</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
              
              {/* Timeline items */}
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2" />
                  <div className="ml-20">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading text-xl mt-2">{milestone.achievement}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Partner With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in fashioning possibilities that create value for businesses and communities worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
            >
              Get in Touch
            </a>
            <a
              href="/businesses"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-sm"
            >
              Explore Our Businesses
            </a>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
