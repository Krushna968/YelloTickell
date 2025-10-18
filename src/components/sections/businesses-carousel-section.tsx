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
    <section className="bg-[#9d2449] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-eyebrow text-white/80 mb-2 font-body">
            Our Businesses
          </h4>
          <h1 className="font-heading text-4xl md:text-5xl text-white font-light">
            Fashioning Growth
          </h1>
        </div>
      </div>
      
      <div className="relative w-full">
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
            {[...businesses, ...businesses].map((business, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 group">
                <div className="relative h-[450px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${business.imageUrl})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h2 className="font-body text-2xl font-semibold mb-4">{business.name}</h2>
                    <a
                      href={business.link}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider border border-white rounded-sm px-4 py-2 hover:bg-white hover:text-[#9d2449] transition-colors duration-300 w-fit"
                    >
                      Discover Now
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/arrowwhite-13.png?"
                        width={12}
                        height={12}
                        alt="Arrow"
                        className="ml-2 invert-0 group-hover:invert"
                      />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-black/30 text-white border-none rounded-full hover:bg-black/50 transition-colors hidden md:flex" />
          <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-black/30 text-white border-none rounded-full hover:bg-black/50 transition-colors hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default BusinessesCarouselSection;