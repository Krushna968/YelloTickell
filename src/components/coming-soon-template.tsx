import React from 'react';
import Link from 'next/link';
import AnimatedPage from '@/components/animated-page';

interface ComingSoonTemplateProps {
  title: string;
  description: string;
  category?: string;
}

export default function ComingSoonTemplate({ title, description, category }: ComingSoonTemplateProps) {
  return (
    <AnimatedPage>
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Badge */}
          {category && (
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider rounded-full">
                {category}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Coming Soon Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary/20 rounded-lg shadow-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="font-heading text-2xl text-primary uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="relative py-12">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-64 h-64 border-2 border-primary rounded-full"></div>
            </div>
            <div className="relative">
              <p className="text-lg text-muted-foreground mb-8">
                We're crafting something special for you.
                <br />
                This page will be available shortly.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:opacity-90 transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl"
            >
              Back to Home
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Brand Pattern */}
          <div className="mt-20 opacity-5">
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="aspect-square bg-primary rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
    </AnimatedPage>
  );
}
