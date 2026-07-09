"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [onLink, setOnLink] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const down  = () => setClicking(true);
    const up    = () => setClicking(false);

    const checkLink = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setOnLink(!!(el.closest("a") || el.closest("button")));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousemove", checkLink, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));

    // Lerp the ring
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkLink);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          width: clicking ? "6px" : "8px",
          height: clicking ? "6px" : "8px",
          borderRadius: "50%",
          backgroundColor: "#e0271c",
          transition: "width 0.15s, height 0.15s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform"
        style={{
          width: onLink ? "48px" : "40px",
          height: onLink ? "48px" : "40px",
          borderRadius: "50%",
          border: `1.5px solid ${onLink ? "#e0271c" : "rgba(224,39,28,0.4)"}`,
          backgroundColor: onLink ? "rgba(224,39,28,0.08)" : "transparent",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s",
          marginLeft: onLink ? "-4px" : "0",
          marginTop: onLink ? "-4px" : "0",
        }}
      />
    </>
  );
}
