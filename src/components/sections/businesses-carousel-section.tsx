"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const businesses = [
  {
    name: "Denim",
    imageUrl: "/images/fashioning-growth/denim.jpg",
    link: "/businesses/denim",
  },
  {
    name: "Wovens",
    imageUrl: "/images/fashioning-growth/wovens.jpg",
    link: "/businesses/wovens",
  },
  {
    name: "Knits",
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=1200&fit=crop&q=80",
    link: "/businesses/knits",
  },
  {
    name: "Uniforms",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=1200&fit=crop&q=80",
    link: "/businesses/uniforms",
  },
  {
    name: "Bedsheets",
    imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=1200&fit=crop&q=80",
    link: "/businesses/bedsheets",
  },
];

const BusinessesCarouselSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="bg-secondary flex flex-col justify-center overflow-x-hidden relative py-16" style={{
      minHeight: '70vh'
    }}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h4 className="text-sm text-primary mb-3 font-body uppercase tracking-wider font-medium">
            Our Businesses
          </h4>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-tight">
            Fashioning Growth
          </h1>
        </div>
      </div>
      
      {/* Carousel Section */}
      <div className="relative w-full px-4 pb-8 overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {businesses.map((business, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[280px] md:basis-[320px] group">
                <div className="relative h-[360px] md:h-[420px] overflow-hidden rounded-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${business.imageUrl})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h2 className="font-body text-base md:text-lg font-semibold text-white leading-tight">{business.name}</h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-black/30 text-white border-none rounded-full hover:bg-black/50 transition-colors" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-black/30 text-white border-none rounded-full hover:bg-black/50 transition-colors" />
        </Carousel>
      </div>
      
      {/* Subtle gradient overlay to match original */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none"></div>
    </section>
  );
};

export default BusinessesCarouselSection;