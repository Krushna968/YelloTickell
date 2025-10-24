"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

const HeroVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="relative h-[80vh] w-full overflow-hidden bg-white">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
            priority
          />
        </div>

        <div className="relative z-10 h-full">
          {/* Center content */}
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <div className="relative z-20 flex flex-col items-center justify-center">
              <h1 className="font-serif text-[42px] md:text-[50px] lg:text-[58px] xl:text-[66px] font-extralight text-foreground tracking-[-0.01em] leading-tight text-center">
                Click here to watch our
                <br />
                story
              </h1>
              <button
                onClick={() => setShowVideo(true)}
                className="mt-8 group"
                aria-label="Play video: Click here to watch our story"
              >
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-accent-orange flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110 shadow-[0_0_0_3px_#111_inset]">
                  <Play className="w-8 h-8 md:w-9 md:h-9 text-[#111111] fill-[#111111] ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <button 
            onClick={() => setShowVideo(false)} 
            className="absolute top-4 right-4 text-white z-50"
            aria-label="Close video player"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/hPD1nAE_hKM?autoplay=1" 
              title="Arvind Ltd. | Our Story"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroVideoSection;