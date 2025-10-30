import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | YelloTickell Pvt Ltd',
  description: 'Learn about YelloTickell Pvt Ltd, our history, vision, and commitment to fashioning possibilities across multiple industries.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
<h1 className="font-heading text-5xl text-primary mb-6">About YelloTickell Pvt Ltd</h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Fashioning possibilities through innovation and sustainable growth across multiple domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg leading-relaxed mb-6">
YelloTickell Pvt Ltd is a modern, multi-domain company built on craftsmanship, technology, and design.
              We operate across fabric & apparel, engineering and manufacturing, retail experiences, and digital products—
              bringing together creativity and precision to ship real-world impact.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our purpose is to fashion possibilities: enabling better materials, smarter supply chains, and memorable brand 
              experiences. We prioritize sustainability, responsible sourcing, and human-centered design in everything we build.
            </p>

            <p className="text-lg leading-relaxed">
              As we grow, we continue to invest in innovation—pairing modern tooling with timeless attention to detail—
              while staying true to our values of integrity, excellence, and community.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-primary mb-4">Our Vision</h2>
            <p className="font-body text-lg text-muted-foreground">
              To be an innovation-led company that creates sustainable value across sectors, 
              empowering partners and communities while building products people love.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}