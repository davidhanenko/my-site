"use client";

import { useRef } from "react";

import type { TechLogo } from "@/content/site";

import { BgElement } from "./BgElement";

export function Bg({ logos }: { logos: TechLogo[] }) {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={bgRef} aria-hidden className="absolute inset-0 px-[1.875rem]">
      {logos.map((logo, index) => (
        // stagger: each logo gets its own cycle length, 2s, 3s, 4s...
        <BgElement key={logo.src} logo={logo} bgRef={bgRef} cycle={index + 2} />
      ))}
    </div>
  );
}
