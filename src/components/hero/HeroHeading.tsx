import React from "react";

interface HeroHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HeroHeading({
  title,
  subtitle,
  className = "",
}: HeroHeadingProps) {
  return (
    <div className={`w-full ${className}`}>
      <h2 className="text-[rgba(202,248,41,1)] text-[50px] font-medium leading-[85px] tracking-[-1px] max-md:max-w-full max-md:text-[40px] max-md:leading-[76px]">
        {title}
      </h2>
      <h1 className="text-white text-[80px] font-normal leading-[96px] tracking-[-3.2px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
        {subtitle}
      </h1>
    </div>
  );
}
