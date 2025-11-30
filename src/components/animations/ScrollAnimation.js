"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation({ 
  children, 
  className = "", 
  animationType = "fadeInUp",
  delay = 0 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeInUp: isVisible 
      ? "opacity-100 translate-y-0" 
      : "opacity-0 translate-y-8",
    fadeIn: isVisible 
      ? "opacity-100" 
      : "opacity-0",
    fadeInLeft: isVisible 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 -translate-x-8",
    fadeInRight: isVisible 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 translate-x-8",
    scaleIn: isVisible 
      ? "opacity-100 scale-100" 
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${animationClasses[animationType]} ${className}`}
    >
      {children}
    </div>
  );
}

