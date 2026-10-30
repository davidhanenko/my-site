"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import type { TechLogo } from "@/content/site";
import { useAnimation } from "@/lib/animation";

type Props = {
  logo: TechLogo;
  bgRef: React.RefObject<HTMLDivElement | null>;
  /** seconds per appear/disappear cycle; the logo jumps to a new random spot each cycle */
  cycle: number;
};

export function BgElement({ logo, bgRef, cycle }: Props) {
  const { nameAnimationEnd } = useAnimation();
  const [position, setPosition] = useState<{ top: number; left: number }>();

  useEffect(() => {
    if (!nameAnimationEnd) return;

    const interval = setInterval(() => {
      const bg = bgRef.current;
      if (!bg) return;
      setPosition({
        top: Math.random() * bg.offsetHeight,
        left: Math.random() * bg.offsetWidth,
      });
    }, cycle * 1000);

    return () => clearInterval(interval);
  }, [nameAnimationEnd, bgRef, cycle]);

  return (
    <span
      className={clsx("absolute -left-full opacity-0", nameAnimationEnd && "animate-appear")}
      style={{ ...position, animationDuration: `${cycle}s` }}
    >
      <span className="relative block h-[55px] w-[100px]">
        <Image src={logo.src} alt="" fill sizes="100px" className="object-scale-down" />
      </span>
    </span>
  );
}
