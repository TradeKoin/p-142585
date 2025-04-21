import React from "react";
import { Logo } from "@/components/ui/Logo";
import { HeroHeading } from "./HeroHeading";

interface HeroSectionProps {
  backgroundImage: string;
  overlayImage: string;
  logoSrc: string;
  title: string;
  subtitle: string;
}

export function HeroSection({
  backgroundImage,
  overlayImage,
  logoSrc,
  title,
  subtitle,
}: HeroSectionProps) {
  return (
    <section className="bg-[rgba(21,25,52,0.9)] overflow-hidden">
      <div className="flex flex-col relative min-h-[1200px] w-full max-md:max-w-full">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative bg-black w-full pt-[22px] max-md:max-w-full">
          <div className="flex flex-col relative min-h-[1178px] w-full pt-[155px] pb-[608px] px-[74px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
            <img
              src={overlayImage}
              alt="Overlay"
              className="absolute h-full w-full object-cover inset-0"
            />
            <Logo
              src={logoSrc}
              alt="Logo"
              className="aspect-[1.59] w-[35px] ml-[108px] max-md:ml-2.5"
            />
            <div className="relative mb-[-122px] w-[615px] max-w-full mt-[115px] max-md:mt-10 max-md:mb-2.5">
              <HeroHeading title={title} subtitle={subtitle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
