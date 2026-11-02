import clsx from "clsx";

import type { TechLogo } from "@/content/site";

import { BgParallax } from "./BgParallax";

// near logos are bright, far ones small and dim; near ones move most with the mouse
const depths = {
  near: { size: "size-10 min-[601px]:size-14", opacity: "opacity-50", slowdown: 12, shift: -48 },
  mid: { size: "size-6 min-[601px]:size-8", opacity: "opacity-25", slowdown: 0, shift: -20 },
  far: { size: "size-3.5 min-[601px]:size-4", opacity: "opacity-15", slowdown: 0, shift: -8 },
};

// hand-placed so the logos frame the name and greeting, with big and small ones spread evenly
// instead of grouping; one spot per logo, in the same order as site.techLogos
const spots = [
  { top: "6%", left: "6%", depth: depths.near },
  { top: "3%", left: "27%", depth: depths.mid },
  { top: "14%", left: "66%", depth: depths.mid },
  { top: "50%", left: "7%", depth: depths.mid },
  { top: "16%", left: "17%", depth: depths.far },
  { top: "5%", left: "83%", depth: depths.near },
  { top: "42%", left: "72%", depth: depths.far },
  { top: "56%", left: "30%", depth: depths.near, hideOnPhone: true },
  { top: "99%", left: "62%", depth: depths.far },
  { top: "11%", left: "43%", depth: depths.near },
  { top: "30%", left: "90%", depth: depths.mid },
  { top: "82%", left: "41%", depth: depths.mid },
  { top: "90%", left: "8%", depth: depths.near },
  { top: "15%", left: "97%", depth: depths.far },
  { top: "52%", left: "96%", depth: depths.near, hideOnPhone: true },
  { top: "99%", left: "86%", depth: depths.mid },
];

export function Bg({ logos }: { logos: TechLogo[] }) {
  return (
    <div aria-hidden className="absolute inset-0 text-teal2 opacity-0 animate-fade-in">
      <BgParallax>
        {/* fixed so the glow spans the whole screen instead of stopping at the max-w-site hero */}
        <div className="fixed -inset-10 bg-glow transition-[translate] duration-500 ease-out [translate:calc(var(--px,0)*-12px)_calc(var(--py,0)*-12px)]" />
        {/* inset by the part of the hero below the fold plus the logo size and movement, so none leave the screen */}
        <div className="absolute top-0 right-20 bottom-[calc(var(--spacing-header)+6.5rem)] left-6 min-[601px]:right-28">
          {logos.map(({ title, Icon }, index) => {
            const { depth, hideOnPhone, ...position } = spots[index % spots.length];

            return (
              <span
                key={title}
                data-tooltip={title}
                className={clsx(
                  "absolute transition-[opacity,translate] duration-500 ease-out animate-drift after:absolute after:top-full after:left-1/2 after:mt-1 after:hidden after:-translate-x-1/2 after:bg-muted after:px-2.5 after:py-1 after:text-xs after:whitespace-nowrap after:text-light after:content-[attr(data-tooltip)] hover:z-10 hover:opacity-100 hover:[animation-play-state:paused] hover:after:block pointer-coarse:after:hidden",
                  depth.opacity,
                  hideOnPhone && "max-[600px]:hidden",
                )}
                // a different length and start point per logo keeps the drift from ever lining up
                style={{
                  ...position,
                  animationDuration: `${24 + (index * 5) % 17 + depth.slowdown}s`,
                  animationDelay: `-${index * 4}s`,
                  translate: `calc(var(--px, 0) * ${depth.shift}px) calc(var(--py, 0) * ${depth.shift}px)`,
                }}
              >
                <Icon className={clsx("block", depth.size)} />
              </span>
            );
          })}
        </div>
      </BgParallax>
    </div>
  );
}
