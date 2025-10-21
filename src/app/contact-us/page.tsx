import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Arvind Ltd.',
  description: 'Get in touch with Arvind Limited. Find our contact information, office locations, and reach out to us for business inquiries.',
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary mb-6">Contact Us</h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with us to explore opportunities and partnerships
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl text-primary mb-8">Get in Touch</h2>
              
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">India Headquarters</h3>
                <div className="text-muted-foreground">
                  <p>Ahmedabad</p>
                  <p>Naroda Road, Near Chamunda Bridge,</p>
                  <p>Ahmedabad – 382 345, Gujarat, India.</p>
                  <p className="mt-4">
                    Tel: <a href="tel:+917968268000" className="text-primary hover:underline">+91-79-68268000</a>
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Business Inquiries</h3>
                <p className="text-muted-foreground mb-2">
                  For partnership opportunities and business inquiries:
                </p>
                <a href="mailto:info@arvind.com" className="text-primary hover:underline">
                  info@arvind.com
                </a>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Media Inquiries</h3>
                <p className="text-muted-foreground mb-2">
                  For media-related questions and press inquiries:
                </p>
                <a href="mailto:media@arvind.com" className="text-primary hover:underline">
                  media@arvind.com
                </a>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Careers</h3>
                <p className="text-muted-foreground mb-2">
                  Explore career opportunities:
                </p>
                <a 
                  href="https://careers.arvind.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  careers.arvind.com
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-primary mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 font-semibold uppercase tracking-wider hover:bg-[#8a1f3d] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}