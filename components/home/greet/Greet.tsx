"use client";

import clsx from "clsx";

import { useAnimation } from "@/lib/animation";

export function Greet({ text }: { text: string }) {
  const { nameAnimationEnd } = useAnimation();

  return (
    <section
      className={clsx(
        "absolute right-[5%] -bottom-[40%] w-[85%] text-light min-[601px]:w-[65%] min-[769px]:w-1/2",
        nameAnimationEnd && "animate-greet-sm min-[601px]:animate-greet",
      )}
    >
      <p className="text-sm font-light min-[601px]:text-base min-[769px]:text-[1.4375rem]">{text}</p>
    </section>
  );
}
