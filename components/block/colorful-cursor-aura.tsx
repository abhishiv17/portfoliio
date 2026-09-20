// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";



interface ColorfulCursorAuraProps {
  children?: React.ReactNode;
  colors?: { color1: string; color2: string; color3: string };
  enableEntryAnimation?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ColorfulCursorAura({
  children,
  colors = {
    color1: "#7f7de4",
    color2: "#f79694",
    color3: "#f5dd94",
  },
  enableEntryAnimation = false,
  className = "",
  style,
}: ColorfulCursorAuraProps) {
  const container = useRef(null);
  const auraText = useRef(null);
  const maskedText = useRef(null);
  const motionEnabled = !useReducedMotion();
  const circleTrackers = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);


  useEffect(() => {
    const el = container.current;
    const maskEl = maskedText.current;
    const trackers = circleTrackers.current;
    if (!el || !maskEl || !motionEnabled) {
      gsap.killTweensOf(trackers);
      return;
    }

    const syncMaskVars = () => {
      maskEl.style.setProperty("--x-color1", `${circleTrackers.current[0].x}px`);
      maskEl.style.setProperty("--y-color1", `${circleTrackers.current[0].y}px`);
      maskEl.style.setProperty("--x-color2", `${circleTrackers.current[1].x}px`);
      maskEl.style.setProperty("--y-color2", `${circleTrackers.current[1].y}px`);
      maskEl.style.setProperty("--x-color3", `${circleTrackers.current[2].x}px`);
      maskEl.style.setProperty("--y-color3", `${circleTrackers.current[2].y}px`);
    };

    const rect = maskEl.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    circleTrackers.current.forEach((item) => {
      item.x = cx;
      item.y = cy;
    });
    syncMaskVars();

    const onMove = (event) => {
      const maskRect = maskEl.getBoundingClientRect();
      const localX = event.clientX - maskRect.left;
      const localY = event.clientY - maskRect.top;

      gsap.to(circleTrackers.current, {
        x: localX,
        y: localY,
        duration: 0.5,
        ease: "power1.out",
        stagger: -0.1,
        overwrite: "auto",
        onUpdate: syncMaskVars,
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      gsap.killTweensOf(trackers);
    };
  }, [motionEnabled]);

  useEffect(() => {
    if (!enableEntryAnimation || !motionEnabled) return;

    const ctx = gsap.context(() => {
      gsap.from(auraText.current, {
        opacity: 0,
        yPercent: 320,
        skewY: 30,
        duration: 3,
        ease: "expo.out",
      });
    }, container);

    return () => ctx.revert();
  }, [enableEntryAnimation, motionEnabled]);

  return (
    <div
      ref={container}
      className={cn("relative isolate w-full overflow-hidden", className)}
      style={style}
    >
      <div className="relative w-full h-full">
        <div ref={auraText} className="relative w-full">
          <div className="w-full">
            {children}
          </div>

          {motionEnabled && (
            <div
              ref={maskedText}
              aria-hidden
              className="pointer-events-none absolute inset-0 w-full text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [&_*]:!text-transparent"
              style={{
                "--x-color1": "50%",
                "--y-color1": "50%",
                "--x-color2": "50%",
                "--y-color2": "50%",
                "--x-color3": "50%",
                "--y-color3": "50%",
                backgroundImage: `
                  radial-gradient(circle min(135px, 14cqw) at var(--x-color3) var(--y-color3), ${colors.color3} 0 99%, transparent 100%),
                  radial-gradient(circle min(220px, 23cqw) at var(--x-color2) var(--y-color2), ${colors.color2} 0 99%, transparent 100%),
                  radial-gradient(circle min(325px, 34cqw) at var(--x-color1) var(--y-color1), ${colors.color1} 0 99%, transparent 100%)
                `,
              }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

