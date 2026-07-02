"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const CONDITIONS = [
  { label: "Wave Height", value: 5, suffix: "FT", sub: "Beach break" },
  { label: "Wind", value: 8, suffix: "KTS", sub: "Offshore" },
  { label: "Water Temp", value: 72, suffix: "°F", sub: "No wetsuit needed" },
  { label: "Crowd", value: 3, suffix: "/10", sub: "Wide open" },
];

const TESTIMONIALS = [
  {
    text: "Rented a longboard for my birthday. Caught my first green wave and I'll never forget it.",
    name: "Sarah M.",
    location: "@ Pipeline",
  },
  {
    text: "Best board selection on the North Shore. Staff actually surfs this break every single morning.",
    name: "Jake R.",
    location: "Local regular",
  },
  {
    text: "The shortboard setup was perfect for the conditions. Already booked three more sessions.",
    name: "Tom L.",
    location: "Repeat visitor",
  },
  {
    text: "Got here knowing nothing. Left absolutely addicted. They put me on exactly the right board.",
    name: "Mia K.",
    location: "First time surfer",
  },
];

function NumberTicker({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 1400;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function ConditionsStrip() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="bg-dark">
      {/* Conditions band */}
      <div className="border-b border-white/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/10" />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-white/40">
              Today at the break
            </p>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {CONDITIONS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display font-bold text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
                  <NumberTicker target={c.value} suffix={c.suffix} />
                </p>
                <p className="mt-1 font-body text-sm font-medium uppercase tracking-wider text-sun">
                  {c.label}
                </p>
                <p className="mt-0.5 font-body text-xs text-white/40">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 font-body text-xs uppercase tracking-[0.25em] text-white/40">
            From the lineup
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
                onMouseEnter={() => setActiveTestimonial(i)}
                className={`cursor-default rounded-sm p-6 transition-colors duration-300 ${
                  activeTestimonial === i ? "bg-white/8" : "bg-white/4"
                }`}
              >
                <p className="font-body text-sm italic leading-relaxed text-white/70">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-right">
                    <p className="font-body text-xs font-semibold text-white/70">{t.name}</p>
                    <p className="font-body text-[10px] text-white/30">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
