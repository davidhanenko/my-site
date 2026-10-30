"use client";

import clsx from "clsx";

import { useAnimation } from "@/lib/animation";

import styles from "./Name.module.css";

export function Name() {
  const { nameAnimationEnd, setNameAnimationEnd } = useAnimation();

  // child animations bubble up here too — only react to the final move-up of the whole name
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;

    setNameAnimationEnd(true);
    // show the header straight away on later visits during this session
    sessionStorage.setItem("showNav", "true");
  };

  return (
    <h1 className={clsx(styles.container, nameAnimationEnd && styles.ended)}>
      <div className={styles.name} onAnimationEnd={handleAnimationEnd}>
        <span className={styles.firstName}>
          <span>D</span>
          <span className={styles.firstNameRest}>avid</span>
        </span>
        <span className={styles.lastName}>
          <span>H</span>
          <span className={styles.lastNameRest}>anenko</span>
          <span className={styles.overlay} />
        </span>
      </div>
    </h1>
  );
}
