"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@/lib/funnel";

export function DualPathSplit() {
  const [hovered, setHovered] = useState<"rent" | "buy" | null>(null);

  const panelBase = "relative overflow-hidden cursor-pointer";
  const transitionStyle =
    "transition-[flex] duration-500" as const;

  return (
    <section
      aria-label="Rent or Buy"
      className="flex h-[540px] md:h-[680px]"
    >
      {/* RENT */}
      <div
        className={`${panelBase} ${transitionStyle}`}
        style={{
          flex: hovered === "rent" ? 1.5 : hovered === "buy" ? 0.667 : 1,
          transition: "flex 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={() => setHovered("rent")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/material.png"
          alt="Surfboard rental rack"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean/75" />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-white/60"
          >
            Start Here
          </motion.p>

          <h2
            className="font-display font-bold uppercase leading-none text-white"
            style={{
              fontSize: hovered === "rent" ? "clamp(3.5rem,6vw,5.5rem)" : "clamp(2.5rem,4.5vw,4rem)",
              transition: "font-size 0.55s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Rent
            <br />
            A Board
          </h2>

          <p className="mt-3 font-body text-sm text-white/70 md:text-base">
            Rent it today. Own it forever.
          </p>

          <motion.div
            animate={{ opacity: hovered === "rent" ? 1 : 0, y: hovered === "rent" ? 0 : 12 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <Link
              href="/#rent"
              onClick={() => track("intent")}
              className="inline-block bg-sun px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-dark"
            >
              See Rentals →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* BUY */}
      <div
        className={`${panelBase} ${transitionStyle}`}
        style={{
          flex: hovered === "buy" ? 1.5 : hovered === "rent" ? 0.667 : 1,
          transition: "flex 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={() => setHovered("buy")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/detail.png"
          alt="Surf gear close-up"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/75" />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-white/60"
          >
            Build Your Quiver
          </motion.p>

          <h2
            className="font-display font-bold uppercase leading-none text-white"
            style={{
              fontSize: hovered === "buy" ? "clamp(3.5rem,6vw,5.5rem)" : "clamp(2.5rem,4.5vw,4rem)",
              transition: "font-size 0.55s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Own
            <br />
            Your Board
          </h2>

          <p className="mt-3 font-body text-sm text-white/70 md:text-base">
            Built for this break.
          </p>

          <motion.div
            animate={{ opacity: hovered === "buy" ? 1 : 0, y: hovered === "buy" ? 0 : 12 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <Link
              href="/shop"
              className="inline-block bg-white px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-dark"
            >
              Shop Boards →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
