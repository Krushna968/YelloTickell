import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedPage from '@/components/animated-page';

export const metadata: Metadata = {
  title: 'Sustainability | YelloTickell Pvt Ltd',
  description: 'Discover YelloTickell Pvt Ltd\'s commitment to sustainability through environmental stewardship, social responsibility, and governance excellence.',
};

export default function SustainabilityPage() {
  return (
    <AnimatedPage>
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary mb-6">Sustainability</h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Fashioning a sustainable future through environmental stewardship, social responsibility, and governance excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/sustainability-hero.jpg"
                alt="Sustainability initiatives at Arvind"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-heading text-center">
                  Building a Better Tomorrow
                </h2>
              </div>
            </div>
          </div>

          {/* ESG Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-heading text-2xl text-primary mb-4">Environment</h3>
              <p className="text-muted-foreground">
                Committed to reducing our environmental footprint through water recycling, 
                renewable energy adoption, and sustainable manufacturing practices.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-heading text-2xl text-primary mb-4">Social</h3>
              <p className="text-muted-foreground">
                Empowering communities through education, healthcare, skill development, 
                and women empowerment initiatives across India.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-heading text-2xl text-primary mb-4">Governance</h3>
              <p className="text-muted-foreground">
                Maintaining highest standards of corporate governance, ethical business 
                practices, and transparency in all our operations.
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="bg-primary text-white p-8 rounded-lg mb-16">
            <h2 className="font-heading text-3xl text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">4.29M+</div>
                <div className="text-sm uppercase tracking-wider">m³ Water Recycled</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150K+</div>
                <div className="text-sm uppercase tracking-wider">Acres under Better Cotton Initiative</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">778K+</div>
                <div className="text-sm uppercase tracking-wider">kWh Solar Energy Generated</div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">Environmental Stewardship</h2>
              <p className="text-lg leading-relaxed mb-4">
                At Arvind, environmental responsibility is integral to our business strategy. We have implemented 
                comprehensive water management systems, adopted renewable energy solutions, and continuously work 
                to minimize our carbon footprint across all operations.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment to the Better Cotton Initiative demonstrates our dedication to sustainable agriculture 
                and responsible sourcing practices that benefit both farmers and the environment.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">Social Impact</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our CSR initiatives focus on creating lasting positive change in the communities where we operate. 
                Through our various programs, we address critical social challenges including education, healthcare, 
                skill development, and women empowerment.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that sustainable business growth goes hand in hand with social development, and we are 
                committed to being a catalyst for positive change in society.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">Governance Excellence</h2>
              <p className="text-lg leading-relaxed mb-4">
                Strong corporate governance forms the foundation of our business operations. We maintain the highest 
                standards of transparency, accountability, and ethical conduct in all our business dealings.
              </p>
              <p className="text-lg leading-relaxed">
                Our governance framework ensures that we operate with integrity, comply with all regulatory requirements, 
                and create long-term sustainable value for all our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </AnimatedPage>
  );
}
