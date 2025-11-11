import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';
import { GraduationCap, School, BookOpen, Users, Award, TrendingUp, Globe, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Education Programs | YelloTickell Pvt Ltd',
  description: 'Discover YelloTickell\'s education initiatives supporting schools, scholarships, and skill development programs.',
};

const programs = [
  {
    title: 'YelloTickell Schools',
    description: 'Operating 50+ schools providing free quality education to underprivileged children',
    beneficiaries: '100,000+ Students',
    features: ['English Medium', 'Science Labs', 'Computer Education', 'Sports Facilities'],
    icon: School,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Scholarship Program',
    description: 'Supporting meritorious students from economically weaker sections',
    beneficiaries: '10,000+ Scholars',
    features: ['Full Tuition Coverage', 'Mentorship', 'Career Guidance', 'Skill Development'],
    icon: Award,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Digital Literacy',
    description: 'Bridging the digital divide through computer education and internet access',
    beneficiaries: '50,000+ Learners',
    features: ['Computer Labs', 'Internet Access', 'Coding Classes', 'Digital Skills'],
    icon: Globe,
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Vocational Training',
    description: 'Skill development programs for employment and entrepreneurship',
    beneficiaries: '25,000+ Trainees',
    features: ['Industry Training', 'Job Placement', 'Entrepreneurship', 'Certification'],
    icon: Target,
    color: 'bg-orange-50 text-orange-600'
  }
];

const achievements = [
  { metric: '100+', label: 'Schools & Centers' },
  { metric: '2M+', label: 'Students Educated' },
  { metric: '95%', label: 'Literacy Rate' },
  { metric: '80%', label: 'Higher Education Rate' }
];

export default function EducationPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920"
          alt="Education Initiative"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">Education for All</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering communities through quality education and skill development
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl text-primary mb-6">Our Education Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe education is the foundation of social and economic progress. Our comprehensive 
              education initiatives aim to provide quality learning opportunities to every child, regardless 
              of their socio-economic background, creating a generation of empowered individuals who can 
              contribute to nation-building.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Our Education Programs</h2>
            <p className="text-xl text-muted-foreground">Comprehensive initiatives for holistic development</p>
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

      {/* Infrastructure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">World-Class Infrastructure</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our schools are equipped with modern facilities to provide a conducive learning environment
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Digital Libraries</h3>
                    <p className="text-sm text-muted-foreground">Access to thousands of e-books and learning resources</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Science & Computer Labs</h3>
                    <p className="text-sm text-muted-foreground">Hands-on learning with latest equipment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sports Facilities</h3>
                    <p className="text-sm text-muted-foreground">Playgrounds, courts, and indoor sports complexes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400"
                  alt="School Library"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
                  alt="Computer Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400"
                  alt="Students Learning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Transforming lives through education</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100"
                  alt="Student"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="font-heading text-xl text-center mb-3">From Village to IIT</h3>
              <p className="text-muted-foreground text-center mb-4">
                "YelloTickell School gave me the foundation to crack IIT-JEE. Today, I'm pursuing Computer Science at IIT Mumbai."
              </p>
              <div className="text-sm text-center text-muted-foreground">
                <div className="font-semibold">Priya Sharma</div>
                <div>Class of 2020</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100"
                  alt="Student"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="font-heading text-xl text-center mb-3">First Graduate</h3>
              <p className="text-muted-foreground text-center mb-4">
                "I'm the first in my family to complete graduation, thanks to the scholarship program. Now I work as a teacher."
              </p>
              <div className="text-sm text-center text-muted-foreground">
                <div className="font-semibold">Rajesh Kumar</div>
                <div>Scholarship Recipient</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100"
                  alt="Student"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="font-heading text-xl text-center mb-3">Digital Entrepreneur</h3>
              <p className="text-muted-foreground text-center mb-4">
                "The digital literacy program taught me coding. I now run my own web development business."
              </p>
              <div className="text-sm text-center text-muted-foreground">
                <div className="font-semibold">Anita Patel</div>
                <div>Digital Literacy Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Development */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="font-heading text-3xl text-primary mb-6 text-center">Teacher Development Program</h2>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Investing in teachers to ensure quality education delivery
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-sm text-muted-foreground">Teachers Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Training Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Partner Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-6">Support Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in providing quality education to every child and building a brighter future
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
              View All CSR Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
