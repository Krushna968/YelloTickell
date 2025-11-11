import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedPage from '@/components/animated-page';
import { Linkedin, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership | YelloTickell Pvt Ltd',
  description: 'Meet the leadership team at YelloTickell Pvt Ltd driving innovation and growth across industries.',
};

const leaders = [
  {
    name: 'Rajesh Kumar',
    role: 'Chairman & Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    bio: 'With over 30 years of experience in textiles and manufacturing, Rajesh has been instrumental in transforming YelloTickell into a diversified industrial powerhouse. His vision for sustainable growth has driven the company\'s expansion into new markets.',
    linkedin: '#',
    email: 'chairman@yellotickell.com'
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: 'Priya brings 25 years of strategic leadership experience across multiple sectors. She has spearheaded our digital transformation initiatives and oversees the company\'s operational excellence programs.',
    linkedin: '#',
    email: 'ceo@yellotickell.com'
  },
  {
    name: 'Amit Patel',
    role: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    bio: 'A chartered accountant with expertise in corporate finance and M&A, Amit has been crucial in optimizing our financial structure and driving profitable growth across all business verticals.',
    linkedin: '#',
    email: 'cfo@yellotickell.com'
  },
  {
    name: 'Dr. Meera Reddy',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: 'With a PhD in Materials Science and 20 years in R&D, Dr. Reddy leads our innovation initiatives, focusing on sustainable materials and cutting-edge manufacturing technologies.',
    linkedin: '#',
    email: 'cto@yellotickell.com'
  },
  {
    name: 'Vikram Singh',
    role: 'President - Textiles Division',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Vikram oversees our largest business vertical with a focus on sustainable fashion and innovation in fabric technology. He has pioneered our eco-friendly product lines.',
    linkedin: '#',
    email: 'vikram.s@yellotickell.com'
  },
  {
    name: 'Anita Desai',
    role: 'Chief Sustainability Officer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Anita champions our ESG initiatives and ensures sustainability is embedded in every aspect of our operations. She has led our carbon-neutral journey and community impact programs.',
    linkedin: '#',
    email: 'sustainability@yellotickell.com'
  }
];

export default function LeadershipPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">Leadership Team</h1>
            <p className="font-body text-xl text-muted-foreground">
              Visionary leaders driving innovation, sustainability, and growth across all our business verticals
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-primary mb-1">{leader.name}</h3>
                    <p className="text-sm font-medium text-accent-orange uppercase tracking-wider mb-4">
                      {leader.role}
                    </p>
                    <p className="text-muted-foreground mb-6 line-clamp-4">
                      {leader.bio}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a
                        href={leader.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${leader.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-primary mb-4">Leadership Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our leadership team is guided by core principles that drive our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">01</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Innovation First</h3>
              <p className="text-muted-foreground">
                Constantly pushing boundaries to create value through innovation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">02</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Sustainable Growth</h3>
              <p className="text-muted-foreground">
                Building for the long term with environmental responsibility
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">03</span>
              </div>
              <h3 className="font-heading text-xl mb-2">People Centric</h3>
              <p className="text-muted-foreground">
                Empowering our teams and communities to thrive together
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">04</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Global Excellence</h3>
              <p className="text-muted-foreground">
                Delivering world-class quality in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </AnimatedPage>
  );
}
