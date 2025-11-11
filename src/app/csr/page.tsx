import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { Droplets, Zap, Users, Heart, Shield, TreePine, Recycle, Award, Globe, Target, CheckCircle, Factory } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Social Responsibility | YelloTickell Pvt Ltd',
  description:
    'YelloTickell\'s commitment to sustainable manufacturing, social responsibility, and community development through comprehensive CSR initiatives.',
};

const sustainabilityMetrics = [
  { value: '60%', label: 'Water Recycled', icon: Droplets },
  { value: '40%', label: 'Energy from Solar', icon: Zap },
  { value: '80%', label: 'Waste Reduction', icon: Recycle },
  { value: 'Zero', label: 'Liquid Discharge', icon: Shield }
];

const socialImpactPrograms = [
  {
    title: 'Healthcare Excellence',
    description: 'Providing quality healthcare facilities to underserved communities',
    stats: '100K+ patients treated annually',
    initiatives: ['Free Medical Camps', 'Mobile Health Units', 'Hospital Infrastructure', 'Preventive Care']
  },
  {
    title: 'Education for All',
    description: 'Promoting education through schools, scholarships, and skill development',
    stats: '50K+ students supported',
    initiatives: ['School Infrastructure', 'Digital Literacy', 'Teacher Training', 'Merit Scholarships']
  },
  {
    title: 'Women Empowerment',
    description: 'Supporting female workforce and community development programs',
    stats: '70% female workforce',
    initiatives: ['Skill Development', 'Self-Help Groups', 'Health Programs', 'Leadership Training']
  },
  {
    title: 'Rural Development',
    description: 'Building sustainable infrastructure and livelihood opportunities',
    stats: '200+ villages impacted',
    initiatives: ['Water Conservation', 'Sanitation Facilities', 'Agricultural Support', 'Community Centers']
  }
];

const certifications = [
  { name: 'ISO 14001', description: 'Environmental Management' },
  { name: 'SA8000', description: 'Social Accountability' },
  { name: 'SMETA 4-Pillar', description: 'Ethical Trade Audit' },
  { name: 'OEKO-TEX', description: 'Sustainable Textiles' },
  { name: 'BSCI', description: 'Business Social Compliance' },
  { name: 'GOTS', description: 'Organic Textile Standard' }
];

export default function CSRPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920"
          alt="CSR Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Corporate Social Responsibility</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Building a sustainable future through responsible manufacturing and community development
            </p>
            <div className="mt-8">
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold">
                2% of Annual Profits Invested in CSR
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Manufacturing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Factory className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-4xl text-primary">Clean Manufacturing</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to sustainable production through eco-friendly processes and renewable energy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-heading text-3xl text-primary mb-6">Sustainable Production Excellence</h3>
              <p className="text-lg text-muted-foreground mb-6">
                At YelloTickell, we believe in manufacturing that respects both people and the planet. 
                Our state-of-the-art facilities incorporate the latest green technologies to minimize 
                environmental impact while maintaining the highest quality standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Zero Liquid Discharge</h4>
                    <p className="text-muted-foreground">100% water recycling through advanced treatment systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Solar Power Integration</h4>
                    <p className="text-muted-foreground">40% of energy needs met through renewable sources</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Eco-Friendly Materials</h4>
                    <p className="text-muted-foreground">Using sustainable and organic raw materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                alt="Clean Manufacturing"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Sustainability Metrics */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sustainabilityMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Water & Energy Conservation */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Water & Energy Conservation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the industry in resource conservation through innovative technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-heading text-2xl">Water Management</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>Rainwater Harvesting:</strong> 5 million liters capacity
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>ETP & STP Plants:</strong> Advanced treatment facilities
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>Water Recycling:</strong> 60% water reused in production
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>Drip Irrigation:</strong> For landscape maintenance
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">30%</div>
                <div className="text-sm text-muted-foreground">Reduction in water consumption (YoY)</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl">Energy Efficiency</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>Solar Panels:</strong> 5MW rooftop installation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>LED Lighting:</strong> 100% LED across facilities
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>Energy Monitoring:</strong> IoT-based real-time tracking
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <strong>Heat Recovery:</strong> Waste heat utilization systems
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">25%</div>
                <div className="text-sm text-muted-foreground">Reduction in carbon footprint</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-4xl text-primary">Social Impact</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contributing 2% of our annual profits towards improving healthcare facilities and promoting education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {socialImpactPrograms.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl text-primary mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                    {program.stats}
                  </span>
                </div>
                <div className="space-y-2">
                  {program.initiatives.map((initiative, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{initiative}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CSR Investment Breakdown */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="font-heading text-2xl text-center mb-8">Annual CSR Investment Distribution</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">35%</div>
                <div className="text-sm text-muted-foreground">Healthcare</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">30%</div>
                <div className="text-sm text-muted-foreground">Education</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">20%</div>
                <div className="text-sm text-muted-foreground">Women Empowerment</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">15%</div>
                <div className="text-sm text-muted-foreground">Rural Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-4xl text-primary">Compliance & Certifications</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meeting global standards for ethical and sustainable business practices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-heading text-2xl text-center mb-6">Our Commitment to Ethical Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">UN Global Compact</h4>
                <p className="text-sm text-muted-foreground">Signatory to the world's largest corporate sustainability initiative</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Fair Labor Practices</h4>
                <p className="text-sm text-muted-foreground">Ensuring safe working conditions and fair wages for all employees</p>
              </div>
              <div className="text-center">
                <TreePine className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Carbon Neutral by 2030</h4>
                <p className="text-sm text-muted-foreground">Committed to achieving net-zero carbon emissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Welfare */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="Employee Welfare"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">Employee Welfare & Development</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our employees are our greatest asset. We invest in their growth, well-being, and future.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Health & Safety</h4>
                    <p className="text-muted-foreground">Comprehensive health insurance and regular health check-ups</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Skill Development</h4>
                    <p className="text-muted-foreground">Regular training programs and career advancement opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Work-Life Balance</h4>
                    <p className="text-muted-foreground">Flexible working hours and employee wellness programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Gender Equality</h4>
                    <p className="text-muted-foreground">70% female workforce with equal opportunities for growth</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">70%</div>
                  <div className="text-sm text-muted-foreground">Women Workforce</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Join Us in Creating Positive Impact</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with us in our journey towards sustainable development and social responsibility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/csr-overview"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-sm"
            >
              Explore Our Programs
            </Link>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
