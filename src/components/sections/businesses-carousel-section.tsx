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
    name: "Real Estate",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/smartspaces-14.jpg?",
    link: "https://www.arvind.com/businesses/real-estate",
  },
  {
    name: "Engineering",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/engineering-15.jpg?",
    link: "https://www.arvind.com/businesses/engineering",
  },
  {
    name: "Environmental Solutions",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/environment-16.jpg?",
    link: "https://www.arvind.com/businesses/environmental-solution",
  },
  {
    name: "Advanced Materials",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/advaaravind-17.jpg?",
    link: "https://www.arvind.com/businesses/advanced-materials",
  },
  {
    name: "Telecom",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/telecom1-18.jpg?",
    link: "https://www.arvind.com/businesses/telecom",
  },
  {
    name: "Fabric and Apparel",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/fabrics-and-apparel-19.jpg?",
    link: "https://www.arvind.com/businesses/fabric-apparel",
  },
  {
    name: "Brands and Retail",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/brand-&-retail-20.jpg?",
    link: "https://www.arvind.com/brands-retail",
  },
];

const BusinessesCarouselSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="bg-[#901B2E] h-[20vh] flex flex-col justify-center overflow-hidden relative" style={{ 
      minHeight: '20vh',
      backgroundColor: 'rgb(144, 27, 46)' // Exact RGB to ensure vibrant color
    }}>
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-4">
          <h4 className="text-xs text-[#F7941D] mb-1 font-body uppercase tracking-wider font-medium">
            Our Businesses
          </h4>
          <h1 className="font-heading text-2xl md:text-3xl text-white font-light leading-tight">
            Fashioning Growth
          </h1>
        </div>
      </div>
      
      {/* Carousel Section */}
      <div className="relative w-full px-4">
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
                <div className="relative h-[120px] md:h-[140px] overflow-hidden rounded-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${business.imageUrl})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-3">
                    <h2 className="font-body text-sm md:text-base font-semibold mb-2 text-white leading-tight">{business.name}</h2>
                    <a
                      href={business.link}
                      className="inline-flex items-center text-[10px] md:text-xs font-semibold uppercase tracking-wider border border-white rounded-sm px-2 py-1 hover:bg-white hover:text-[#901B2E] transition-colors duration-300 w-fit"
                    >
                      Discover Now
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/arrowwhite-13.png?"
                        width={8}
                        height={8}
                        alt="Arrow"
                        className="ml-1 invert-0 group-hover:invert"
                      />
                    </a>
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