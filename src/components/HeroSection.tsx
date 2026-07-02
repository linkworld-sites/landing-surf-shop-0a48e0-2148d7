"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["0%", "20%"],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["0%", "35%"],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.png"
          alt="Cinematic wave at Pipeline, dawn light"
          className="h-full w-full object-cover"
          priority-hint="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-dark/10" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display font-bold uppercase leading-[0.88] tracking-tight text-white"
          style={{ fontSize: "clamp(4.5rem, 13vw, 12rem)" }}
        >
          Pipeline
          <br />
          Surf Co.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
          className="mt-5 max-w-sm font-body text-lg text-white/75 md:text-xl"
        >
          Your first wave or your thousandth —<br />we&apos;ve got the board.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.18 }}>
            <Link
              href="/#rent"
              onClick={() => track("intent")}
              className="inline-block bg-sun px-8 py-4 font-display text-[0.9rem] font-bold uppercase tracking-widest text-dark"
            >
              Rent Gear
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.18 }}>
            <Link
              href="/shop"
              className="inline-block border-2 border-white/80 px-8 py-4 font-display text-[0.9rem] font-bold uppercase tracking-widest text-white"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex"
      >
        <p className="rotate-90 font-body text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
          Scroll
        </p>
        <motion.div
          className="h-12 w-px origin-top bg-white/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
