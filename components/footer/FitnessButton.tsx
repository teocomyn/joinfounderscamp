"use client";

import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import type { ReactNode, MouseEventHandler } from "react";

type FitnessButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
};

export default function FitnessButton({
  children,
  icon,
  variant = "primary",
  className = "",
  onClick,
  href,
}: FitnessButtonProps) {
  const classes = [
    "fitness-btn",
    variant === "primary" ? "fitness-btn--primary" : "fitness-btn--secondary",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {variant === "primary" && (icon ?? <Rocket className="fitness-btn-icon" aria-hidden="true" />)}
      {variant === "secondary" && icon}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
