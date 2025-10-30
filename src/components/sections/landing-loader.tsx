"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LandingLoaderProps {
  onComplete: () => void;
}

// Loader shows only the main logo animation

const LandingLoader: React.FC<LandingLoaderProps> = ({ onComplete }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    // For testing, let's always show the animation (comment out session storage check)
    // const hasSeenAnimation = sessionStorage.getItem('arvind-animation-seen');
    // if (hasSeenAnimation) {
    //   setShowLoader(false);
    //   onComplete();
    //   return;
    // }

    // Start animation immediately
    const startTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 300);

    const transitionTimer = setTimeout(() => {
      setStartTransition(true);
    }, 2500); // Start slide + background fade after logo reveal

    // Complete animation and show main site
    const completeTimer = setTimeout(() => {
      setShowLoader(false);
      sessionStorage.setItem('arvind-animation-seen', 'true');
      onComplete();
    }, 4000); // Complete at 4 seconds

    return () => {
      clearTimeout(startTimer);
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ y: 0, height: "100vh" }}
          animate={{ 
            y: startTransition ? "100vh" : 0,
            height: "100vh"
          }}
          transition={{ 
            duration: 0.9, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Background overlay stays constant; reveal happens via slide-down only */}
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: '#F5F5F5' }}
          />


          {/* Subtle brand radial glow behind logo */}
          <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
            <div
              className="w-[70vw] max-w-[720px] aspect-[3/1] rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(closest-side, rgba(157,36,73,0.18), rgba(157,36,73,0.0) 70%)'
              }}
            />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
            
            {/* ARVIND Text with Writing Animation */}
            {startAnimation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 } as any}
                animate={{ opacity: startTransition ? 0 : 1, scale: startTransition ? 0.98 : 1, '--reveal': '100%' } as any}
                transition={{
                  ['--reveal' as any]: { duration: 2.6, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: { duration: 0.8, ease: 'easeOut' },
                  scale: { duration: 0.8, ease: 'easeOut' }
                } as any}
                className="flex flex-col items-center justify-center"
                style={{
                  ['--reveal' as any]: '0%',
                  maskImage: 'linear-gradient(90deg, white 0%, white var(--reveal, 0%), transparent var(--reveal, 0%))',
                  WebkitMaskImage: 'linear-gradient(90deg, white 0%, white var(--reveal, 0%), transparent var(--reveal, 0%))'
                }}
              >
                <Image
                  src="/images/landing_logo.png"
                  alt="Arvind Logo"
                  width={720}
                  height={216}
                  className="h-40 md:h-56 w-auto"
                  priority
                  style={{ filter: 'brightness(1.18) contrast(1.08) saturate(1.12) drop-shadow(0 0 16px rgba(255,255,255,0.28))' }}
                />
              </motion.div>
            )}

            {/* Skip button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ delay: 3 }}
              onClick={() => {
                setShowLoader(false);
                sessionStorage.setItem('arvind-animation-seen', 'true');
                onComplete();
              }}
              className="absolute bottom-8 right-8 text-xs text-white/60 hover:text-white transition-colors duration-300 uppercase tracking-wider font-light"
            >
              Skip
            </motion.button>
          </div>
          
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingLoader;
