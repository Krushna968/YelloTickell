import HeroVideoSection from '@/components/sections/hero-video-section';
import BusinessesCarouselSection from '@/components/sections/businesses-carousel-section';
import InnovationCarouselSection from '@/components/sections/innovation-carousel-section';
import SustainabilityStatsSection from '@/components/sections/sustainability-stats-section';
import PeopleTestimonialSection from '@/components/sections/people-testimonial-section';
import ContactFooterSection from '@/components/sections/contact-footer-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroVideoSection />
      <BusinessesCarouselSection />
      <InnovationCarouselSection />
      <SustainabilityStatsSection />
      <PeopleTestimonialSection />
      <ContactFooterSection />
    </main>
  );
}