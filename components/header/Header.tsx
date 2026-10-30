"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { useAnimation } from "@/lib/animation";
import { MediaLinks } from "@/components/media/MediaLinks";

import logo from "@/public/logo.png";

const noopSubscribe = () => () => {};

export function Header() {
  const { nameAnimationEnd } = useAnimation();

  // already saw the intro this session → show the header immediately
  const seenIntro = useSyncExternalStore(
    noopSubscribe,
    () => sessionStorage.getItem("showNav") === "true",
    () => false,
  );

  return (
    <header
      className={clsx(
        "fixed top-0 z-20 flex h-header w-full items-center justify-between px-2.5 pt-[0.9375rem] pb-2.5 transition-all duration-500",
        seenIntro ? "opacity-100" : "opacity-0",
        !seenIntro && nameAnimationEnd && "animate-header-in",
      )}
    >
      <Link href="/" aria-label="Home" className="z-3">
        <Image src={logo} alt="DH logo" width={100} height={55} className="h-[55px] w-[100px] object-scale-down" priority />
      </Link>
      <MediaLinks className="mr-5" />
    </header>
  );
}
