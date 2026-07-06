"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import GlowHorizonFM from "@/components/ui/glow-horizon";
import { AnimatedTitleFM } from "@/components/ui/glow-horizon-utils/animated-title-fm";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function GlowHorizonDemo() {
  return (
    <div className="glow-horizon-demo">
      <GlowHorizonFM variant="top" />
      <div className="glow-horizon-demo-content">
        <AnimatedTitleFM open />
      </div>
    </div>
  );
}

export default function GlowHorizonSection() {
  return (
    <section id="horizon" className="section-glow-horizon" aria-label="The Founders Camp">
      <GlowHorizonDemo />

      <div className="glow-horizon-overlay">
        <motion.div
          className="glow-horizon-meta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 2.2 }}
        >
          <span className="glow-horizon-pill">
            <Sparkles className="glow-horizon-pill-icon" strokeWidth={2} aria-hidden="true" />
            Session 01 · Été 2027
          </span>

          <p className="glow-horizon-lead">
            Le camp de base privé des fondateurs à 10k€+/mois : deep work, sport et
            aventure depuis Lisbonne, Gozo et Bali.
          </p>

          <div className="glow-horizon-actions">
            <a href="#candidature" className="btn btn-light btn-lg">
              Déposer ma candidature
              <ArrowRight className="glow-horizon-btn-icon" strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="#destinations" className="glow-horizon-link">
              Voir les destinations
            </a>
          </div>
        </motion.div>
      </div>

      <div className="glow-horizon-scrim" aria-hidden="true" />
    </section>
  );
}
