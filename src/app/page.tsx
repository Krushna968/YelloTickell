import HeroVideoSection from '@/components/sections/hero-video-section';
import BusinessesCarouselSection from '@/components/sections/businesses-carousel-section';
import InnovationCarouselSection from '@/components/sections/innovation-carousel-section';
import SustainabilityStatsSection from '@/components/sections/sustainability-stats-section';
import PeopleTestimonialSection from '@/components/sections/people-testimonial-section';
import CSRHighlightsSection from '@/components/sections/csr-highlights-section';
import ContactFooterSection from '@/components/sections/contact-footer-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero and businesses sections */}
      <div className="flex flex-col">
        <HeroVideoSection />
        <BusinessesCarouselSection />
      </div>
      {/* All other sections come after */}
      <InnovationCarouselSection />
      <SustainabilityStatsSection />
      <PeopleTestimonialSection />
      <CSRHighlightsSection />
      <ContactFooterSection />
    </main>
  );
}
