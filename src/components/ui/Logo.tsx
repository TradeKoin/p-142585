import React from "react";

interface LogoProps {
  src: string;
  alt?: string;
  className?: string;
}

export function Logo({ src, alt = "Logo", className = "" }: LogoProps) {
  return <img src={src} alt={alt} className={`object-contain ${className}`} />;
}
