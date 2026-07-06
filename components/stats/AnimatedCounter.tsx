"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(val) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${val.toFixed(decimals)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, value, prefix, suffix, decimals]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
