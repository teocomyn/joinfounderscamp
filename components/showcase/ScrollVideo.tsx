"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  src: string;
  className?: string;
};

function isHlsSource(src: string) {
  return src.includes(".m3u8");
}

export default function ScrollVideo({ src, className = "" }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    let hls: { destroy: () => void } | null = null;
    let cancelled = false;

    const markReady = () => {
      if (!cancelled) setLoading(false);
    };

    const onCanPlay = () => markReady();
    const onLoadedData = () => markReady();
    const onError = () => markReady();

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("error", onError);

    // Never block the page : dismiss loader after 4s max
    const timeout = window.setTimeout(markReady, 4000);

    const setup = async () => {
      if (isHlsSource(src)) {
        const { default: Hls } = await import("hls.js");
        if (cancelled) return;

        if (Hls.isSupported()) {
          const instance = new Hls({
            maxBufferLength: 120,
            maxMaxBufferLength: 600,
            maxBufferSize: 200 * 1024 * 1024,
            startLevel: -1,
            autoStartLoad: true,
          });
          instance.loadSource(src);
          instance.attachMedia(video);
          hls = instance;
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src;
        }
      } else {
        video.preload = "auto";
        video.src = src;
        video.load();
      }
    };

    void setup();

    let currentTarget = 0;
    let seekPending = false;

    const doSeek = () => {
      if (!video.duration) return;
      if (!video.seeking) {
        video.currentTime = currentTarget;
      } else {
        seekPending = true;
      }
    };

    const onSeeked = () => {
      if (seekPending) {
        seekPending = false;
        doSeek();
      }
    };
    video.addEventListener("seeked", onSeeked);

    const st = ScrollTrigger.create({
      trigger: "#scroll-driver",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        if (!video.duration) return;
        currentTarget = self.progress * video.duration;
        doSeek();
      },
    });

    const onMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 2;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(wrapper, {
        x: moveX * -20,
        y: moveY * -20,
        duration: 1.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("error", onError);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("mousemove", onMouseMove);
      st.kill();
      hls?.destroy();
    };
  }, [src]);

  return (
    <>
      <div className="sc-video-fallback" aria-hidden="true" />
      {loading && (
        <div className="sc-video-loader" aria-live="polite">
          <span className="sc-video-loader-dot" />
          Chargement de l&apos;expérience…
        </div>
      )}
      <div ref={wrapperRef} className="sc-video-wrap">
        <video
          ref={videoRef}
          className={className}
          muted
          playsInline
          preload="auto"
          crossOrigin={isHlsSource(src) ? "anonymous" : undefined}
        />
      </div>
    </>
  );
}
