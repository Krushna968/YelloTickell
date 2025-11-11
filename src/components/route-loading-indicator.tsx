"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function RouteLoadingIndicator() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    // Only show loading indicator when route changes (not on initial load)
    if (pathname !== previousPath && previousPath !== null) {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        setPreviousPath(pathname);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setPreviousPath(pathname);
    }
  }, [pathname, previousPath]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-orange to-primary z-[9999] origin-left"
          transition={{ 
            scaleX: { duration: 0.4, ease: "easeOut" },
            opacity: { duration: 0.2 }
          }}
        />
      )}
    </AnimatePresence>
  );
}
