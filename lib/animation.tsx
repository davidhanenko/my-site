"use client";

import { createContext, useContext, useState } from "react";

// Shared flag: the intro name animation has finished.
// Header, greeting and background wait for it before animating in.
type AnimationState = {
  nameAnimationEnd: boolean;
  setNameAnimationEnd: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationState | null>(null);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [nameAnimationEnd, setNameAnimationEnd] = useState(false);

  return (
    <AnimationContext value={{ nameAnimationEnd, setNameAnimationEnd }}>
      {children}
    </AnimationContext>
  );
}

export function useAnimation() {
  const ctx = useContext(AnimationContext);
  if (!ctx) throw new Error("useAnimation must be used inside <AnimationProvider>");
  return ctx;
}
