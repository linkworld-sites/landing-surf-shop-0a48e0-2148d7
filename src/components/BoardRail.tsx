"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";

const BOARDS = [
  { name: "Pipeline Pro", type: "Shortboard", length: "6'2\"", price: "$649", bg: "bg-ocean", text: "text-white" },
  { name: "Malibu Classic", type: "Longboard", length: "9'0\"", price: "$749", bg: "bg-forest", text: "text-white" },
  { name: "Foam Wizard", type: "Softboard", length: "8'0\"", price: "$449", bg: "bg-sun", text: "text-dark" },
  { name: "Fish Stick", type: "Fish", length: "5'8\"", price: "$599", bg: "bg-dark", text: "text-white" },
  { name: "Step-Up", type: "Mid-Length", length: "6'6\"", price: "$699", bg: "bg-ocean", text: "text-white" },
  { name: "Log Driver", type: "Single Fin", length: "9'6\"", price: "$829", bg: "bg-forest", text: "text-white" },
];

function BoardSVG({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 80 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      <path
        d="M40 8 C54 8 66 55 66 130 C66 205 54 248 40 254 C26 248 14 205 14 130 C14 55 26 8 40 8 Z"
        fill={color}
        fillOpacity="0.28"
        stroke={color}
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      {/* Stringer line */}
      <line x1="40" y1="10" x2="40" y2="252" stroke={color} strokeOpacity="0.4" strokeWidth="0.5" />
      {/* Fin */}
      <path d="M40 235 C36 242 32 250 30 254 L40 254 Z" fill={color} fillOpacity="0.5" />
    </svg>
  );
}

export function BoardRail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    function calcConstraints() {
      if (!containerRef.current) return;
      const inner = containerRef.current.querySelector<HTMLElement>("[data-rail-inner]");
      if (!inner) return;
      const containerW = containerRef.current.clientWidth;
      const innerW = inner.scrollWidth;
      setConstraints({ left: -(innerW - containerW), right: 0 });
    }
    calcConstraints();
    window.addEventListener("resize", calcConstraints);
    return () => window.removeEventListener("resize", calcConstraints);
  }, []);

  return (
    <section className="overflow-hidden bg-sand py-20 md:py-28">
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between px-6 md:px-8">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-dark/40">Our Boards</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-tight text-dark md:text-6xl">
            Ride
            <br />
            Something
            <br />
            Great
          </h2>
        </div>
        <Link
          href="/shop"
          className="font-body text-sm uppercase tracking-wider text-ocean underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          Shop All →
        </Link>
      </div>

      <div
        ref={containerRef}
        className={`overflow-hidden px-6 md:px-8 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <motion.div
          data-rail-inner
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.05}
          style={{ x }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="flex gap-5 pb-4 select-none"
        >
          {BOARDS.map((board, i) => (
            <motion.div
              key={board.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className={`flex-none w-[260px] md:w-[300px] rounded-sm ${board.bg} p-6 flex flex-col`}
              style={{ height: 420 }}
            >
              {/* Board silhouette */}
              <div className="flex-1 flex items-center justify-center py-4">
                <div className="h-52 w-16">
                  <BoardSVG color={board.text === "text-white" ? "#ffffff" : "#1B1B1B"} />
                </div>
              </div>

              {/* Info */}
              <div className={`mt-auto ${board.text}`}>
                <p className="font-body text-xs uppercase tracking-[0.18em] opacity-60">
                  {board.type} · {board.length}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-tight">
                  {board.name}
                </h3>
                <p className="mt-2 font-display text-xl font-bold opacity-80">{board.price}</p>
              </div>
            </motion.div>
          ))}

          {/* Terminal CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
            className="flex-none w-[260px] md:w-[300px] flex items-center justify-center rounded-sm border-2 border-dark/20"
            style={{ height: 420 }}
          >
            <Link
              href="/shop"
              className="flex flex-col items-center gap-3 p-8 text-center font-display text-dark/60 transition-colors hover:text-ocean"
            >
              <span className="text-4xl font-bold">+</span>
              <span className="text-sm font-bold uppercase tracking-wider">View Full Shop</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <p className="mt-4 px-6 font-body text-xs text-dark/30 md:px-8">
        Drag to explore ←→
      </p>
    </section>
  );
}
