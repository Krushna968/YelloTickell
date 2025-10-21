import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Arvind Ltd.',
  description: 'Learn about Arvind Limited, our history, vision, and commitment to fashioning possibilities across multiple industries.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary mb-6">About Arvind Ltd.</h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Fashioning possibilities across diverse industries for over seven decades
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Arvind Limited is one of India's leading textile and fashion conglomerates with a legacy spanning over 70 years. 
              From our humble beginnings in textile manufacturing, we have evolved into a diversified business group with 
              operations spanning fabric & apparel, brands & retail, real estate, engineering, environmental solutions, 
              advanced materials, and telecom.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our journey is guided by our mission to fashion possibilities - creating opportunities that transform 
              industries, communities, and lives. We believe in sustainable growth, innovation, and social responsibility 
              as the cornerstones of our business philosophy.
            </p>

            <p className="text-lg leading-relaxed">
              Today, Arvind Limited continues to be at the forefront of innovation, setting new standards in quality, 
              sustainability, and corporate governance while remaining committed to our core values of integrity, 
              excellence, and community service.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-primary mb-4">Our Vision</h2>
            <p className="font-body text-lg text-muted-foreground">
              To be a globally admired conglomerate that fashions possibilities across diverse sectors, 
              creating sustainable value for all stakeholders while contributing to society's progress.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}