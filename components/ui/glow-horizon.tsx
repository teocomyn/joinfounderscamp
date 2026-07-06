"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 2;

export type GlowHorizonVariant = "top" | "bottom" | "left" | "right";

const VARIANTS: Record<
  GlowHorizonVariant,
  {
    axis: "x" | "y";
    scaleAxis: "scaleX" | "scaleY";
    enterPct: string;
    restPct: string;
  }
> = {
  top: { axis: "y", scaleAxis: "scaleY", enterPct: "-100%", restPct: "-50%" },
  bottom: { axis: "y", scaleAxis: "scaleY", enterPct: "100%", restPct: "50%" },
  left: { axis: "x", scaleAxis: "scaleX", enterPct: "100%", restPct: "50%" },
  right: { axis: "x", scaleAxis: "scaleX", enterPct: "-100%", restPct: "-50%" },
};

export interface GlowHorizonProps {
  className?: string;
  variant?: GlowHorizonVariant;
}

export default function GlowHorizonFM({
  className,
  variant = "top",
}: GlowHorizonProps) {
  const { axis, scaleAxis, enterPct, restPct } = VARIANTS[variant];

  return (
    <motion.div
      className={cn("glow-horizon-root", className)}
      style={{ isolation: "isolate" }}
      initial={{
        [axis]: enterPct,
        [scaleAxis]: 1.5,
        opacity: 0,
        filter: "blur(15px)",
      }}
      animate={{
        [axis]: restPct,
        [scaleAxis]: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{ duration: DURATION, ease: EASE }}
    >
      <Arc
        variant={variant}
        color="#FFFFFF"
        size="132%"
        boxShadow="0px -4px 23px 0px rgba(197, 106, 62, 0.45)"
        delay={1.2}
      />
      <Arc
        variant={variant}
        color="#C56A3E"
        size="120%"
        initialOffset="10%"
        blur={31}
        delay={0.6}
      />
      <Arc
        variant={variant}
        color="#1A3529"
        size="124%"
        initialOffset="10%"
        blur={21}
        delay={0}
      />
      <Arc
        variant={variant}
        color="#0C1D16"
        size="120%"
        initialOffset="10%"
        blur={51}
        delay={0}
      />
    </motion.div>
  );
}

function Arc({
  variant,
  color,
  size,
  initialOffset,
  blur,
  boxShadow,
  delay,
}: {
  variant: GlowHorizonVariant;
  color: string;
  size: string;
  initialOffset?: string;
  blur?: number;
  boxShadow?: string;
  delay: number;
}) {
  const scale = parseFloat(size) / 100;
  const { axis, enterPct } = VARIANTS[variant];
  const sign = enterPct.startsWith("-") ? -1 : 1;
  const startPct = initialOffset
    ? `${sign * Math.abs(parseFloat(initialOffset) - 50)}%`
    : undefined;

  return (
    <motion.div
      aria-hidden
      className="glow-horizon-arc"
      style={{
        scale,
        background: color,
        ...(blur !== undefined && { filter: `blur(${blur}px)` }),
        ...(boxShadow && { boxShadow }),
      }}
      initial={startPct ? { [axis]: startPct } : false}
      animate={startPct ? { [axis]: 0 } : undefined}
      transition={{ duration: DURATION, ease: EASE, delay }}
    />
  );
}
