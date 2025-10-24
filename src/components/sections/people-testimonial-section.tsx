import Image from 'next/image';
import Link from 'next/link';

const CarouselDots = () => (
  <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
    <div className="flex flex-col items-center space-y-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#F7941D]"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
    </div>
  </div>
);

const PeopleTestimonialSection = () => {
  return (
    <section className="bg-white pt-16 pb-12 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-primary text-[42px] leading-none">
          Fashioning Inspiration
        </h1>
      </div>

      <div className="mt-12 lg:mt-16 relative">
        <Link href="/vicksit-mehta" className="block relative group w-full">
          <div className="hidden lg:block relative w-full h-[650px]">
            <Image
              src="/images/vicksit-resized21.jpg"
              alt="Vicksit Mehta"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{ objectPosition: '50% 45%' }}
              quality={100}
            />
          </div>
          <div className="block lg:hidden relative w-full aspect-[3/4]">
            <Image
              src="/images/vicksit-resized21.jpg"
              alt="Vicksit Mehta"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{ objectPosition: '50% 45%' }}
              quality={100}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent flex items-center justify-end">
            <div className="container mx-auto px-4 lg:px-8 flex justify-end">
              <div className="w-full lg:w-[45%] text-white">
                <blockquote className="font-heading text-3xl lg:text-[40px] leading-tight font-light">
                  'In over a decade that I have been at Arvind, the mission has been to find for each design, its purpose.'
                </blockquote>
                <cite className="block font-body text-sm lg:text-base mt-4 lg:mt-6 not-italic">
                  Vicksit Mehta - Creative Director, Fabric and Apparel, Arvind
                </cite>
              </div>
            </div>
          </div>
        </Link>
        <CarouselDots />
      </div>

    </section>
  );
};

export default PeopleTestimonialSection;