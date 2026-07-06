"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export const FOUNDERS_CAMP_GLOBE_CONFIG: Omit<COBEOptions, "width" | "height"> = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.96, 0.95, 0.92],
  markerColor: [197 / 255, 106 / 255, 62 / 255],
  glowColor: [0.12, 0.18, 0.15],
  markers: [
    { location: [38.7223, -9.1393], size: 0.09 },
    { location: [36.0443, 14.2512], size: 0.07 },
    { location: [-8.3405, 115.092], size: 0.07 },
  ],
};

type GlobeProps = {
  className?: string;
  config?: Omit<COBEOptions, "width" | "height">;
};

export function Globe({ className, config = FOUNDERS_CAMP_GLOBE_CONFIG }: GlobeProps) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const dragPhiRef = useRef(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (value === null) {
      phiRef.current += dragPhiRef.current;
      dragPhiRef.current = 0;
      pointerInteractionMovement.current = 0;
    }
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      dragPhiRef.current = delta / 200;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId = 0;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    const init = () => {
      onResize();
      if (widthRef.current === 0 || globe) return;

      globe = createGlobe(canvas, {
        ...config,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
      });

      const animate = () => {
        if (pointerInteracting.current === null) {
          phiRef.current += 0.005;
        }
        globe!.update({
          phi: phiRef.current + dragPhiRef.current,
          width: widthRef.current * 2,
          height: widthRef.current * 2,
        });
        animationId = requestAnimationFrame(animate);
      };
      animate();

      window.setTimeout(() => {
        canvas.style.opacity = "1";
      }, 80);
    };

    init();
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => {
      if (!globe && canvas.offsetWidth > 0) init();
      else onResize();
    });
    ro.observe(canvas);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [config]);

  return (
    <div className={cn("globe-canvas-wrap", className)}>
      <canvas
        ref={canvasRef}
        className="globe-canvas"
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
        aria-hidden="true"
      />
    </div>
  );
}
