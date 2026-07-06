"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export interface AnimatedTitleFMProps {
  open?: boolean;
}

export function AnimatedTitleFM({ open = true }: AnimatedTitleFMProps) {
  if (!open) return null;

  return (
    <div className="glow-title">
      <motion.span
        className="glow-title-the"
        initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
      >
        THE FOUNDERS
      </motion.span>

      <motion.h2
        className="glow-title-camp"
        initial={{ opacity: 0, y: 48, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: EASE, delay: 1.05 }}
      >
        Camp
      </motion.h2>

      <motion.p
        className="glow-title-tag"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 1.65 }}
      >
        Work. Escape. <span>Tribe.</span>
      </motion.p>
    </div>
  );
}
