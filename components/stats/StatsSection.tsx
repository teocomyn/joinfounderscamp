"use client";

import { motion } from "motion/react";
import Typewriter from "@/components/stats/Typewriter";
import AnimatedCounter from "@/components/stats/AnimatedCounter";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4";

/* Triangle Founders Camp — viewBox 0 0 100 100 */
const LOGO_MASK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 8 L88 92 H12 Z'/%3E%3C/svg%3E")`;

const maskStyle = {
  WebkitMaskImage: LOGO_MASK,
  WebkitMaskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskImage: LOGO_MASK,
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
} as const;

const fadeStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const statsGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export default function StatsSection() {
  return (
    <section id="stats" className="stats-section" aria-labelledby="stats-heading">
      <div className="stats-section-bg" aria-hidden="true" />
      <div className="stats-section-scrim" aria-hidden="true" />

      <div className="stats-section-inner">
        <div className="stats-layout">
          <motion.div
            className="stats-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeStagger}
          >
            <span className="stats-eyebrow">La tribu</span>

            <h2 id="stats-heading" className="stats-heading">
              <Typewriter text="Des sessions qui accélèrent" delay={0} speed={0.012} />
              <br />
              <Typewriter text="les " delay={0.25} speed={0.012} />
              <span className="stats-heading-accent">
                <Typewriter text="fondateurs qui performent." delay={0.35} speed={0.012} />
              </span>
            </h2>

            <p className="stats-lead">
              <Typewriter
                text="Des villas aux quatre coins du monde, des entrepreneurs à 10k€+/mois travaillent, explorent et construisent leur réseau — entourés de gens plus forts qu'eux."
                delay={0.1}
                speed={0.008}
              />
            </p>

            <motion.div
              className="stats-grid"
              variants={statsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div className="stats-item" variants={statItem}>
                <span className="stats-num stats-num--text">8–10</span>
                <span className="stats-label">Places par session</span>
              </motion.div>
              <motion.div className="stats-item" variants={statItem}>
                <span className="stats-num">
                  <AnimatedCounter value={10} suffix="k€+" />
                </span>
                <span className="stats-label">CA minimum mensuel</span>
              </motion.div>
              <motion.div className="stats-item" variants={statItem}>
                <span className="stats-num">
                  <AnimatedCounter value={3} />
                </span>
                <span className="stats-label">Destinations 2027</span>
              </motion.div>
              <motion.div className="stats-item" variants={statItem}>
                <span className="stats-num">
                  <AnimatedCounter value={100} suffix="%" />
                </span>
                <span className="stats-label">Entrepreneurs vérifiés</span>
              </motion.div>
              <motion.div className="stats-item" variants={statItem}>
                <span className="stats-num">
                  <AnimatedCounter value={72} suffix="h" />
                </span>
                <span className="stats-label">Réponse candidature</span>
              </motion.div>
            </motion.div>

            <a href="#candidature" className="btn btn-light stats-cta">
              Rejoindre la Session 01
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </motion.div>

          <div className="stats-visual-wrap">
            <motion.div
              className="stats-video-mask"
              style={maskStyle}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
            >
              <video autoPlay loop muted playsInline className="stats-video">
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
