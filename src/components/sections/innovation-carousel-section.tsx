"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const innovationStories = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/khadi-1.jpg?",
    title: "When History Fashions a Modern Day Classic",
    href: "https://www.arvind.com/fashioning-possibilities/innovation/when-history-fashions-a-modern-day-classic",
    alt: "A person weaving on a traditional loom, representing Khadi fabric production.",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/home-fp-1-2.jpg?",
    title: "Empowering a Nation by Empowering its Women",
    href: "https://www.arvind.com/fashioning-possibilities/innovation/empowering-a-nation-by-empowering-its-women",
    alt: "A group of smiling women working together in a textile factory.",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/home-fp-2-3.jpg?",
    title: "Planting the Seeds to a Better Tomorrow",
    href: "https://www.arvind.com/fashioning-possibilities/innovation/planting-the-seeds-to-a-better-tomorrow",
    alt: "A close-up of hands holding a small green plant sprouting from the soil.",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/home-fp-3-4.jpg?",
    title: "Bringing Global Brands to India",
    href: "https://www.arvind.com/fashioning-possibilities/innovation/how-we-gave-your-wardrobe-a-makeover",
    alt: "A modern, stylish retail store interior with clothing racks.",
  },
   {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/images/khadi-1.jpg?",
    title: "When History Fashions a Modern Day Classic",
    href: "https://www.arvind.com/fashioning-possibilities/innovation/when-history-fashions-a-modern-day-classic",
    alt: "A person weaving on a traditional loom, representing Khadi fabric production.",
  },
];

export default function InnovationCarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );
  
  // As the carousel loops, we only want to show dots for the unique items
  const uniqueCount = Math.ceil(count / 2);

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="font-heading text-[42px] text-primary text-center mb-12">
          Fashioning a Better Tomorrow
        </h1>

        <Carousel setApi={setApi} className="relative " opts={{ loop: true }}>
          <CarouselContent className="-ml-4">
            {innovationStories.map((story, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                <div className="group">
                  <a href={story.href} className="block">
                    <div className="overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.alt}
                        width={400}
                        height={300}
                        className="object-cover w-full h-[260px] transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-6">
                      <h3 className="font-heading text-xl lg:text-2xl text-primary mb-3 h-[84px]">
                        {story.title}
                      </h3>
                      <div className="inline-flex items-center text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex bg-transparent border-none text-primary hover:text-primary hover:bg-transparent disabled:opacity-50" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex bg-transparent border-none text-primary hover:text-primary hover:bg-transparent disabled:opacity-50" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: uniqueCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                current % uniqueCount === index ? "bg-primary scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.arvind.com/fashioning-possibilities"
            className="inline-flex items-center justify-center border border-primary text-primary text-sm font-semibold tracking-wider uppercase px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
          >
            VIEW MORE
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}