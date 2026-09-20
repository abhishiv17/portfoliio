"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 10;
const MIN_DISTANCE = 32;
const MAX_AGE = 500; // ms

interface TrailNode {
  el: HTMLDivElement;
  active: boolean;
  x: number;
  y: number;
  angle: number;
  age: number;
}

export default function TextArrowTrailCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return;
    if (!containerRef.current) return;

    // Initialize nodes
    const nodes: TrailNode[] = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const el = document.createElement("div");
      el.textContent = "ABHISHEK MS";
      Object.assign(el.style, {
        position: "absolute",
        top: "0",
        left: "0",
        pointerEvents: "none",
        willChange: "transform, opacity",
        opacity: "0",
        fontFamily: "var(--font-mono), monospace",
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "0.15em",
        color: "var(--text-tertiary)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        transformOrigin: "center center",
      });

      containerRef.current.appendChild(el);

      nodes.push({
        el,
        active: false,
        x: 0,
        y: 0,
        angle: 0,
        age: 0,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let lastDropX = -1000;
    let lastDropY = -1000;
    let currentIndex = 0;
    let lastTime = performance.now();
    let isMouseMoving = false;
    let rafId: number;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMouseMoving) {
        lastDropX = mouseX;
        lastDropY = mouseY;
        isMouseMoving = true;
      }
    };

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (isMouseMoving) {
        const dx = mouseX - lastDropX;
        const dy = mouseY - lastDropY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist >= MIN_DISTANCE) {
          const steps = Math.floor(dist / MIN_DISTANCE);
          const dirX = dx / dist;
          const dirY = dy / dist;
          const angle = Math.atan2(dy, dx);

          for (let i = 1; i <= steps; i++) {
            const x = lastDropX + dirX * MIN_DISTANCE * i;
            const y = lastDropY + dirY * MIN_DISTANCE * i;

            const node = nodes[currentIndex];
            node.x = x;
            node.y = y;
            node.angle = angle;
            node.age = 0;
            node.active = true;

            currentIndex = (currentIndex + 1) % TRAIL_LENGTH;
          }

          lastDropX = lastDropX + dirX * MIN_DISTANCE * steps;
          lastDropY = lastDropY + dirY * MIN_DISTANCE * steps;
        }
      }

      // Render nodes
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const node = nodes[i];
        if (node.active) {
          node.age += delta;
          if (node.age > MAX_AGE) {
            node.active = false;
            node.el.style.opacity = "0";
          } else {
            const progress = node.age / MAX_AGE;
            // Smooth ease out cubic for opacity and scale
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const opacity = (1 - easeProgress) * 0.9;
            const scale = 1 - easeProgress * 0.3;

            // Offset by approx half width (40px) and half height (6px) to center the text exactly on the path
            node.el.style.opacity = opacity.toFixed(3);
            node.el.style.transform = `translate3d(calc(${node.x}px - 50%), calc(${node.y}px - 50%), 0) rotate(${node.angle}rad) scale(${scale})`;
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9998,
        overflow: "hidden",
      }}
    />
  );
}
