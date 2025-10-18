"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// Custom hook for animated counter with ease-out effect
const useAnimatedCounter = (targetValue: number, duration: number = 2500) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLAnchorElement>(null); 

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTime: number | null = null;
                    
                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        
                        const currentProgress = Math.min(progress / duration, 1);
                        // easeOutCubic easing function for a smoother animation
                        const easedProgress = 1 - Math.pow(1 - currentProgress, 3);
                        const currentCount = Math.floor(easedProgress * targetValue);
                        
                        setCount(currentCount);
                        
                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(targetValue); // Ensure it lands on the exact number
                        }
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.1 } // Start animation when 10% of the element is visible
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [targetValue, duration]);

    return { count, ref };
};

interface StatItemProps {
  label: string;
  value: number;
  unit: string;
  description: string;
  href: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, unit, description, href }) => {
    const { count, ref } = useAnimatedCounter(value);

    return (
        <a href={href} ref={ref} className="flex flex-col items-center text-center">
            <span className="text-muted-foreground uppercase tracking-[1px] font-semibold text-xs mb-3">
                {label}
            </span>
            <p className="font-body text-foreground font-bold text-[54px] leading-none">
                {count.toLocaleString()}
                <sup className="text-2xl font-light ml-1.5">+&nbsp;{unit}</sup>
            </p>
            <div className="h-16 mt-3 flex items-center justify-center">
                <p className="text-muted-foreground uppercase tracking-[0.5px] text-xs max-w-[240px] leading-snug">
                    {description}
                </p>
            </div>
        </a>
    );
};

const statsData = [
  { label: 'WATER', value: 4294159, unit: 'm³', description: 'WATER RECYCLED', href: 'https://www.arvind.com/water' },
  { label: 'COTTON', value: 150000, unit: 'acres', description: 'AREA CULTIVATED UNDER THE BETTER COTTON INITIATIVE', href: 'https://www.arvind.com/cotton' },
  { label: 'ENERGY', value: 778581, unit: 'kWh', description: 'ENERGY GENERATED FROM SOLAR PLANTS', href: 'https://www.arvind.com/energy' }
];

const SustainabilityStatsSection: React.FC = () => {
    return (
        <section className="bg-background py-24">
            <div className="container">
                <h1 className="font-heading text-primary text-[42px] font-normal leading-none text-center mb-20">
                    Fashioning Sustainability
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 max-w-6xl mx-auto">
                    {statsData.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
                <div className="flex justify-center mt-20">
                    <a 
                        href="https://www.arvind.com/sustainability"
                        className="inline-flex items-center justify-center text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 px-8 py-3 text-xs font-semibold uppercase tracking-[1.5px]"
                    >
                        Read More
                        <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SustainabilityStatsSection;