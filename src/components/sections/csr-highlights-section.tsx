import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CSRInitiative {
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
}

const csrInitiatives: CSRInitiative[] = [
  {
    title: "Empowering Tribal Women",
    description: "Supporting tribal communities through skill development and sustainable livelihood programs.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/home-fp-1-2.jpg?",
    href: "/empowering-tribal-women",
    alt: "Tribal women working in textile production"
  },
  {
    title: "Slum Rehabilitation",
    description: "Creating better living conditions and opportunities for underprivileged communities.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/home-fp-2-3.jpg?",
    href: "/slum-rehabilitation",
    alt: "Community development and rehabilitation activities"
  },
  {
    title: "Health & Education",
    description: "Improving healthcare access and educational opportunities for underserved populations.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/home-fp-3-4.jpg?",
    href: "/health-education",
    alt: "Healthcare and education initiatives"
  }
];

const CSRHighlightsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[42px] text-primary font-normal leading-tight">
            Fashioning Social Impact
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Our commitment to corporate social responsibility drives meaningful change in communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {csrInitiatives.map((initiative, index) => (
            <Link 
              key={index}
              href={initiative.href}
              className="group bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={initiative.image}
                  alt={initiative.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl text-white font-semibold">
                    {initiative.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {initiative.description}
                </p>
                <div className="flex items-center text-primary group-hover:text-[#8a1f3d] transition-colors">
                  <span className="font-semibold text-sm uppercase tracking-wider">
                    Learn More
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/csr-overview"
            className="inline-flex items-center justify-center border border-primary text-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            View All CSR Initiatives
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CSRHighlightsSection;