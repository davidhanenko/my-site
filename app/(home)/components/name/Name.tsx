"use client";

import clsx from "clsx";

import { useAnimation } from "@/lib/animation";

export function Name() {
  const { nameAnimationEnd, setNameAnimationEnd } = useAnimation();

  // child animations bubble up here too — only react to the final move-up of the whole name
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;

    setNameAnimationEnd(true);
    // show the header straight away on later visits during this session
    sessionStorage.setItem("showNav", "true");
  };

  // [transform:...] rather than translate-*: those set the standalone property and would stack with the keyframes
  return (
    <h1 className="mx-auto flex min-w-full flex-wrap items-center justify-center text-[9vw] font-semibold text-teal2 [transform:translateX(-7.5%)] animate-name-x max-[600px]:text-[37px] max-[385px]:text-[30px] min-[1400px]:text-[110px]">
      <div
        className={clsx(
          "font-display whitespace-nowrap",
          nameAnimationEnd
            ? "[transform:translateY(-25vh)] max-[600px]:[transform:translateY(-30vh)]"
            : "[transform:translateY(0%)] animate-name-y max-[600px]:animate-name-y-sm",
        )}
        onAnimationEnd={handleAnimationEnd}
      >
        <span className="relative z-10 inline-block [transform:translateX(116%)] animate-first-left max-[768px]:[transform:translateX(120%)] max-[600px]:[transform:translateX(124%)] max-[385px]:[transform:translateX(126%)]">
          <span>D</span>
          <span className="animate-fade-in-l">avid</span>
        </span>
        <span className="relative z-20 inline-block px-2.5 animate-last-r">
          <span>H</span>
          <span className="animate-fade-in-r">anenko</span>
          <span
            className={clsx(
              "absolute left-0 z-20 h-[110%] w-full origin-right bg-dark [transform:translateX(26%)] animate-last-r-rest max-[768px]:[transform:translateX(29%)] max-[768px]:animate-last-r-rest-md",
              nameAnimationEnd && "hidden",
            )}
          />
        </span>
      </div>
    </h1>
  );
}
