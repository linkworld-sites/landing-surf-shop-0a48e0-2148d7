"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@/lib/funnel";

type Duration = "2hr" | "half-day" | "full-day";

const DURATIONS: Duration[] = ["2hr", "half-day", "full-day"];

const DURATION_LABELS: Record<Duration, string> = {
  "2hr": "2 Hours",
  "half-day": "Half Day",
  "full-day": "Full Day",
};

const RENTALS = [
  {
    type: "Softboard",
    desc: "Perfect for beginners. Foam deck, safe rails.",
    icon: "🤙",
    prices: { "2hr": 25, "half-day": 35, "full-day": 60 },
  },
  {
    type: "Shortboard",
    desc: "High performance. For surfers ready to carve.",
    icon: "🌊",
    prices: { "2hr": 30, "half-day": 40, "full-day": 70 },
  },
  {
    type: "Longboard",
    desc: "Cruise the lineup. Endless glide and trim.",
    icon: "🏄",
    prices: { "2hr": 35, "half-day": 45, "full-day": 80 },
  },
  {
    type: "Wetsuit",
    desc: "3/2mm full suit. All sizes in stock.",
    icon: "💧",
    prices: { "2hr": 15, "half-day": 20, "full-day": 30 },
  },
];

export function RentalStrip() {
  const [duration, setDuration] = useState<Duration>("half-day");

  return (
    <section id="rent" className="bg-ocean px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold uppercase leading-none text-white"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              Rent
              <br />
              Gear
              <br />
              Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 font-body text-white/60"
            >
              The ocean&apos;s open. Gear up.
            </motion.p>
          </div>

          {/* Duration toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1 rounded-full bg-white/10 p-1"
          >
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className="relative px-4 py-2 font-body text-sm uppercase tracking-wide"
              >
                {duration === d && (
                  <motion.span
                    layoutId="duration-pill"
                    className="absolute inset-0 rounded-full bg-sun"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors ${
                    duration === d ? "text-dark font-semibold" : "text-white/70"
                  }`}
                >
                  {DURATION_LABELS[d]}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Rental cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RENTALS.map((rental, i) => (
            <motion.div
              key={rental.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-sm bg-white/10 p-6 backdrop-blur-sm"
            >
              <span className="text-3xl">{rental.icon}</span>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase text-white">
                {rental.type}
              </h3>
              <p className="mt-2 font-body text-sm text-white/60 leading-relaxed flex-1">
                {rental.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <motion.span
                  key={`${rental.type}-${duration}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-4xl font-bold text-sun"
                >
                  ${rental.prices[duration]}
                </motion.span>
                <span className="font-body text-xs text-white/50">
                  / {DURATION_LABELS[duration].toLowerCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-body text-sm text-white/40">
            All rentals include fins, leash & wax. Subject to availability.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/shop"
              onClick={() => track("intent")}
              className="inline-block bg-sun px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-dark"
            >
              Book Your Session →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
