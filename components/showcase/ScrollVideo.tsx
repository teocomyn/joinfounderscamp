"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
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
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    let hls: Hls | null = null;

    const onCanPlay = () => setReady(true);
    video.addEventListener("canplay", onCanPlay);

    const updateBufferProgress = () => {
      if (!video.duration) return;
      const bufferedEnd =
        video.buffered.length > 0
          ? video.buffered.end(video.buffered.length - 1)
          : 0;
      setProgress(Math.min(100, Math.round((bufferedEnd / video.duration) * 100)));
    };

    const onProgress = () => updateBufferProgress();
    video.addEventListener("progress", onProgress);

    if (isHlsSource(src)) {
      if (Hls.isSupported()) {
        hls = new Hls({
          maxBufferLength: 120,
          maxMaxBufferLength: 600,
          maxBufferSize: 200 * 1024 * 1024,
          startPosition: 0,
          capLevelToPlayerSize: false,
          startLevel: -1,
          autoStartLoad: true,
        });
        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (!hls) return;
          const maxLevel = hls.levels.length - 1;
          hls.currentLevel = maxLevel;
          hls.startLevel = maxLevel;
        });

        hls.on(Hls.Events.FRAG_BUFFERED, updateBufferProgress);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    } else {
      video.preload = "auto";
      video.src = src;
      video.load();
    }

    // ---- Scroll-to-seek (throttled against the decoder) ----
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
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        if (!video.duration) return;
        currentTarget = self.progress * video.duration;
        doSeek();
      },
    });

    // ---- Mouse parallax on the video wrapper ----
    const onMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 2;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(wrapper, {
        x: moveX * -30,
        y: moveY * -30,
        duration: 1.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("mousemove", onMouseMove);
      st.kill();
      if (hls) hls.destroy();
    };
  }, [src]);

  return (
    <>
      {!ready && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontFamily: "Manrope, sans-serif" }}>
            Loading... {progress}%
          </span>
        </div>
      )}
      <div
        ref={wrapperRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          transform: "scale(1.05)",
          transformOrigin: "center",
        }}
      >
        <video
          ref={videoRef}
          className={className}
          muted
          playsInline
          preload="auto"
          crossOrigin={isHlsSource(src) ? "anonymous" : undefined}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.35)",
          }}
        />
      </div>
    </>
  );
}
