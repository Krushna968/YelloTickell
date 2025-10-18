"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

const HeroVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://www.arvind.com/sites/all/themes/arvind/video/arvind.webm" type="video/webm" />
          <source src="https://www.arvind.com/sites/all/themes/arvind/video/arvind.mp4" type="video/mp4" />
          <source src="https://www.arvind.com/sites/all/themes/arvind/video/arvind.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/svgs/arvindLogot-3.svg?"
              alt="Line art globe illustration"
              width={500}
              height={500}
              className="w-full max-w-[320px] md:max-w-md lg:max-w-lg"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15vh] md:h-[20vh] pointer-events-none">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/svgs/arvindLogob-4.svg?"
              alt="Decorative wavy line"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
          
          <div className="relative z-20 flex flex-col items-center justify-center">
            <h1 className="font-serif text-[42px] md:text-5xl lg:text-[54px] font-light text-[#9d2449] tracking-[-0.01em] leading-tight text-center">
              Click here to watch our
              <br />
              story
            </h1>
            <button
              onClick={() => setShowVideo(true)}
              className="mt-8 group"
              aria-label="Play video: Click here to watch our story"
            >
              <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-accent-orange flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 md:w-9 md:h-9 text-white fill-white ml-1" />
              </div>
            </button>
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