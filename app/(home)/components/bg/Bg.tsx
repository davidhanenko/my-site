import clsx from "clsx";

import type { TechLogo } from "@/content/site";

// hand-placed so the logos frame the name and greeting instead of landing behind them
const spots = [
  { top: "8%", left: "10%" },
  { top: "6%", left: "38%" },
  { top: "10%", left: "64%" },
  { top: "14%", left: "86%" },
  { top: "34%", left: "90%" },
  { top: "52%", left: "6%" },
  { top: "46%", left: "30%" },
  { top: "72%", left: "12%" },
  { top: "66%", left: "34%" },
  { top: "88%", left: "26%" },
  { top: "90%", left: "56%" },
  { top: "84%", left: "84%" },
  { top: "4%", left: "22%" },
  { top: "58%", left: "18%" },
  { top: "80%", left: "46%" },
  { top: "92%", left: "72%" },
];

// near, mid and far layers — bigger logos are brighter and drift slower
const depths = [
  { size: "size-11 min-[601px]:size-16", opacity: "opacity-35", slowdown: 10 },
  { size: "size-9 min-[601px]:size-14", opacity: "opacity-25", slowdown: 0 },
  { size: "size-7 min-[601px]:size-10", opacity: "opacity-15", slowdown: 0 },
];

export function Bg({ logos }: { logos: TechLogo[] }) {
  return (
    <div aria-hidden className="absolute inset-0 text-teal2 opacity-0 animate-fade-in">
      {logos.map(({ title, Icon }, index) => {
        const depth = depths[index % depths.length];

        return (
          <span
            key={title}
            data-tooltip={title}
            className={clsx(
              "absolute transition-opacity duration-350 animate-drift after:absolute after:top-full after:left-1/2 after:mt-1 after:hidden after:-translate-x-1/2 after:bg-muted after:px-2.5 after:py-1 after:text-xs after:whitespace-nowrap after:text-light after:content-[attr(data-tooltip)] hover:z-10 hover:opacity-100 hover:[animation-play-state:paused] hover:after:block pointer-coarse:after:hidden",
              depth.opacity,
            )}
            // a different length and start point per logo keeps the drift from ever lining up
            style={{
              ...spots[index % spots.length],
              animationDuration: `${24 + (index * 5) % 17 + depth.slowdown}s`,
              animationDelay: `-${index * 4}s`,
            }}
          >
            <Icon className={clsx("block", depth.size)} />
          </span>
        );
      })}
    </div>
  );
}
