"use client";

import { useEffect, useRef } from "react";

// writes the mouse position to CSS vars so the layers can shift without re-rendering
export function BgParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;

      ref.current?.style.setProperty("--px", `${e.clientX / window.innerWidth - 0.5}`);
      ref.current?.style.setProperty("--py", `${e.clientY / window.innerHeight - 0.5}`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {children}
    </div>
  );
}
