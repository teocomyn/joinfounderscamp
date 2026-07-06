"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import createGlobe from "cobe";

export interface LiveMarker {
  id: string;
  location: [number, number];
  label: string;
  status: string;
}

interface GlobeLiveProps {
  markers?: LiveMarker[];
  className?: string;
  speed?: number;
}

export const defaultMarkers: LiveMarker[] = [
  { id: "lisbon", location: [38.72, -9.14], label: "Lisbonne", status: "Session 01 · Ouverte" },
  { id: "gozo", location: [36.04, 14.25], label: "Gozo", status: "Bientôt · 2027" },
  { id: "bali", location: [-8.34, 115.09], label: "Bali", status: "À annoncer" },
];

export function GlobeLive({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobeLiveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const [liveCount, setLiveCount] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((v) => Math.min(10, Math.max(8, v + (Math.random() > 0.5 ? 1 : -1))));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId: number;
    let phi = 0;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [0.95, 0.95, 0.95],
        markerColor: [0.77, 0.42, 0.24],
        glowColor: [0.12, 0.18, 0.15],
        markerElevation: 0.04,
        markers: markers.map((m) => ({ location: m.location, size: 0.06, id: m.id })),
        opacity: 0.92,
      });

      function animate() {
        if (!isPausedRef.current) phi += speed;
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1";
      }, 100);
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [markers, speed]);

  return (
    <div className={`globe-live ${className}`.trim()}>
      <canvas
        ref={canvasRef}
        className="globe-live-canvas"
        onPointerDown={handlePointerDown}
        aria-label="Globe interactif des destinations Founders Camp"
      />
      <div className="globe-live-legend">
        {markers.map((m) => (
          <div key={m.id} className="globe-live-tag">
            <span className="globe-live-dot" aria-hidden="true" />
            <span className="globe-live-tag-label">{m.label}</span>
            <span className="globe-live-tag-status">{m.status}</span>
          </div>
        ))}
        <p className="globe-live-capacity">
          <strong>{liveCount}</strong> places · groupe calibré
        </p>
      </div>
    </div>
  );
}
