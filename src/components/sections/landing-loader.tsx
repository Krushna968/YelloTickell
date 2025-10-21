"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LandingLoaderProps {
  onComplete: () => void;
}

// True handwriting animation with stroke drawing effect
const HandwritingText = ({ startDelay = 0 }: { startDelay?: number }) => {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  if (!isStarted) return null;

  return (
    <div className="relative flex items-center justify-center">
      {/* Main text with handwriting animation */}
      <div className="relative">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light tracking-normal"
          style={{ 
            fontFamily: 'var(--font-didone)',
            fontWeight: 300,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '0.05em'
          }}
        >
          {'ARVIND'.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative overflow-hidden"
              style={{
                maskImage: `linear-gradient(90deg, black 0%, black var(--progress, 0%), transparent var(--progress, 0%))`,
                WebkitMaskImage: `linear-gradient(90deg, black 0%, black var(--progress, 0%), transparent var(--progress, 0%))`,
              }}
              animate={{
                '--progress': '100%'
              } as any}
              transition={{
                duration: 0.4,
                delay: index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Handwriting pen trail effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 6, ease: "easeInOut" }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 200"
            fill="none"
          >
            <motion.path
              d="M50 150 Q100 50 150 150 Q200 50 250 150 Q300 50 350 150 Q400 50 450 150 Q500 50 550 150 Q600 50 650 150"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
              transition={{
                pathLength: { duration: 5, ease: "easeInOut" },
                opacity: { duration: 6, times: [0, 0.3, 1] }
              }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const LandingLoader: React.FC<LandingLoaderProps> = ({ onComplete }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
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

    // Hide logo first, then start transition
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }, 2200); // Hide logo at 2.2 seconds
    
    const transitionTimer = setTimeout(() => {
      setStartTransition(true);
    }, 2500); // Start color transition at 2.5 seconds

    // Complete animation and show main site
    const completeTimer = setTimeout(() => {
      setShowLoader(false);
      sessionStorage.setItem('arvind-animation-seen', 'true');
      onComplete();
    }, 4000); // Complete at 4 seconds

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideLogoTimer);
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
            y: startTransition ? "80vh" : 0,
            height: startTransition ? "20vh" : "100vh"
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'rgb(144, 27, 46)' }} // Exact RGB for vibrant color
        >
          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
            
            {/* ARVIND Text with Writing Animation */}
            {startAnimation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hideLogo ? 0 : 1, 
                  scale: hideLogo ? 0.8 : 1 
                }}
                transition={{ 
                  duration: hideLogo ? 0.5 : 0.8, 
                  ease: "easeOut" 
                }}
                className="flex items-center justify-center"
              >
                <HandwritingText startDelay={300} />
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
