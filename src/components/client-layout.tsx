"use client";

import { useState } from "react";
import NavigationHeader from "@/components/sections/navigation-header";
import LandingLoader from "@/components/sections/landing-loader";
import ErrorReporter from "@/components/ErrorReporter";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import Script from "next/script";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <>
      <ErrorReporter />
      <Script
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
        strategy="afterInteractive"
        data-target-origin="*"
        data-message-type="ROUTE_CHANGE"
        data-include-search-params="true"
        data-only-in-iframe="true"
        data-debug="true"
        data-custom-data='{"appName": "ArvindWebsite", "version": "1.0.0", "greeting": "hi"}'
      />
      
      <LandingLoader 
        onComplete={() => {
          setAnimationComplete(true);
        }} 
      />
      
      {animationComplete && (
        <>
          <NavigationHeader />
          {children}
        </>
      )}
      
      <VisualEditsMessenger />
    </>
  );
}