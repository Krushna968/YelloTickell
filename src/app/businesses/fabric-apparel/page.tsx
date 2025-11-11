import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { Factory, Shirt, Droplets, Leaf, Award, TrendingUp, Globe, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fabric & Apparel | YelloTickell Pvt Ltd',
  description: 'Explore YelloTickell\'s fabric and apparel division offering innovative textile solutions and sustainable fashion.',
};

const products = [
  {
    category: 'Denim',
    description: 'Premium denim fabrics with innovative washes and sustainable production',
    capacity: '30 Million Meters/Year',
    features: ['Eco-friendly processing', 'Laser technology', 'Water-saving techniques'],
    image: 'https://images.unsplash.com/photo-1603252109303-2751778293c0?w=800'
  },
  {
    category: 'Shirting',
    description: 'High-quality shirting fabrics for formal and casual wear',
    capacity: '40 Million Meters/Year',
    features: ['Wrinkle-free finish', 'Premium cotton blends', 'Custom designs'],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800'
  },
  {
    category: 'Knits',
    description: 'Versatile knitted fabrics for activewear and casual clothing',
    capacity: '25 Million Meters/Year',
    features: ['Moisture management', 'Stretch technology', 'Anti-microbial finish'],
    image: 'https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?w=800'
  },
  {
    category: 'Bottomweights',
    description: 'Durable fabrics for trousers, workwear, and casual bottoms',
    capacity: '35 Million Meters/Year',
    features: ['High durability', 'Comfort stretch', 'Stain resistance'],
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800'
  }
];

const capabilities = [
  {
    icon: Factory,
    title: 'Integrated Manufacturing',
    description: 'Complete value chain from fiber to finished garments under one roof'
  },
  {
    icon: Leaf,
    title: 'Sustainable Production',
    description: 'Zero liquid discharge, renewable energy, and recycled materials'
  },
  {
    icon: Award,
    title: 'Quality Certifications',
    description: 'ISO 9001, OEKO-TEX, GOTS certified facilities ensuring global standards'
  },
  {
    icon: Globe,
    title: 'Global Supply Chain',
    description: 'Direct presence in 70+ countries with quick turnaround times'
  }
];

export default function FabricApparelPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"
          alt="Fabric & Apparel Manufacturing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Fabric & Apparel</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Crafting premium textiles with innovation, sustainability, and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">India's Leading Textile Manufacturer</h2>
              <p className="text-xl text-muted-foreground mb-6">
                With over 90 years of textile expertise, we are pioneers in fabric innovation and sustainable manufacturing. 
                Our integrated operations span from fiber processing to finished garments, serving the world's leading fashion brands.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">130M+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Meters Annual Capacity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Global Brand Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Manufacturing Plants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">70+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Export Countries</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1550062179-bf3e66b8a209?w=800"
                alt="Textile Manufacturing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground">Diverse portfolio catering to every textile need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-heading text-2xl mb-2">{product.category}</h3>
                    <div className="text-sm opacity-90">{product.capacity}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground">What sets us apart in the global textile industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">Sustainability First</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our commitment to sustainable manufacturing drives every aspect of our operations
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Droplets className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Water Conservation</h3>
                    <p className="text-muted-foreground">70% reduction in water usage through advanced recycling systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Renewable Energy</h3>
                    <p className="text-muted-foreground">40% of energy needs met through solar and wind power</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Circular Economy</h3>
                    <p className="text-muted-foreground">30% of raw materials from recycled and upcycled sources</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">GOTS</div>
                <div className="text-sm text-muted-foreground">Certified Organic</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">BCI</div>
                <div className="text-sm text-muted-foreground">Better Cotton</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">GRS</div>
                <div className="text-sm text-muted-foreground">Recycled Standard</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">ZDHC</div>
                <div className="text-sm text-muted-foreground">Zero Discharge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Innovation Lab</h2>
            <p className="text-xl text-muted-foreground">Where textile technology meets creative design</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">R&D Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Patents Filed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">New Designs Annually</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-heading text-2xl text-primary mb-4">Focus Areas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="font-semibold">Smart Textiles</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="font-semibold">Bio Materials</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="font-semibold">Nano Finishing</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="font-semibold">Digital Printing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Partner With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the world's leading brands in creating sustainable, innovative textile solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
            >
              Get in Touch
            </Link>
            <Link
              href="/sustainability"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-sm"
            >
              Explore Sustainability
            </Link>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
