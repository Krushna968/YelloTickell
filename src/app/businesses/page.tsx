import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { Factory, ShoppingBag, Cpu, Globe, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Businesses | YelloTickell Pvt Ltd',
  description: 'Explore YelloTickell\'s diverse business portfolio across fabric & apparel, engineering, retail, and digital products.',
};

const businesses = [
  {
    title: 'Textiles & Apparel',
    description: 'Leading manufacturer of premium fabrics, denim, and ready-to-wear garments for global brands.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    link: '/businesses/fabric-apparel',
    stats: [
      { label: 'Annual Production', value: '120M+ Meters' },
      { label: 'Export Markets', value: '70+ Countries' },
      { label: 'Employees', value: '25,000+' }
    ],
    features: ['Sustainable Fabrics', 'Denim Innovation', 'Ready-to-Wear', 'Technical Textiles']
  },
  {
    title: 'Retail & Brands',
    description: 'Multi-brand retail presence with exclusive stores and franchise operations across India.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    link: '#',
    stats: [
      { label: 'Retail Stores', value: '500+' },
      { label: 'Brand Partners', value: '50+' },
      { label: 'Cities Present', value: '120+' }
    ],
    features: ['Fashion Retail', 'Brand Management', 'E-commerce', 'Franchise Operations']
  },
  {
    title: 'Advanced Materials',
    description: 'Engineering advanced materials and composites for aerospace, automotive, and industrial applications.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800',
    link: '#',
    stats: [
      { label: 'R&D Investment', value: '₹500+ Cr' },
      { label: 'Patents', value: '50+' },
      { label: 'Industries Served', value: '15+' }
    ],
    features: ['Composites', 'Smart Textiles', 'Industrial Fabrics', 'Nano Materials']
  },
  {
    title: 'Digital Commerce',
    description: 'Digital-first brands and platforms leveraging technology for next-generation retail experiences.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    link: '#',
    stats: [
      { label: 'Digital Brands', value: '10+' },
      { label: 'Monthly Users', value: '5M+' },
      { label: 'Growth Rate', value: '150% YoY' }
    ],
    features: ['D2C Brands', 'Marketplace', 'Tech Solutions', 'Data Analytics']
  }
];

export default function BusinessesPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Our Businesses</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              A diversified portfolio driving innovation and growth across industries
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl text-primary mb-6">Creating Value Across Verticals</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From textiles to technology, our businesses are united by a commitment to excellence, 
              innovation, and sustainable growth. Each vertical leverages our core strengths while 
              addressing unique market opportunities.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹15,000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Crore Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30,000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">70+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Core Verticals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="font-heading text-3xl text-primary">{business.title}</h2>
                    </div>
                    <p className="text-xl text-muted-foreground mb-8">
                      {business.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {business.stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">Key Areas:</h3>
                      <div className="flex flex-wrap gap-2">
                        {business.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={business.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={business.image}
                        alt={business.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Global Footprint</h2>
            <p className="text-xl text-muted-foreground">
              Operating across continents, serving customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">Manufacturing</h3>
              <p className="text-muted-foreground mb-4">
                15 state-of-the-art facilities across India with world-class infrastructure
              </p>
              <div className="text-3xl font-bold text-primary">15 Plants</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">Distribution</h3>
              <p className="text-muted-foreground mb-4">
                Extensive network ensuring timely delivery to customers globally
              </p>
              <div className="text-3xl font-bold text-primary">500+ Centers</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">Innovation</h3>
              <p className="text-muted-foreground mb-4">
                R&D centers driving innovation and product development
              </p>
              <div className="text-3xl font-bold text-primary">3 R&D Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Partner With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore partnership opportunities across our business verticals
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
