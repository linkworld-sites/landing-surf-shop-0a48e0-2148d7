"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function EditorialBlock() {
  return (
    <section className="bg-sand px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-sm"
            style={{ aspectRatio: "3/4" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/process.png"
              alt="Local surfer at golden hour, mid-turn with spray catching light"
              className="h-full w-full object-cover"
            />
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 h-16 w-16 bg-sun" />
            <div className="absolute bottom-2 right-2 h-16 w-16 border-2 border-white/30" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-dark/40">Our Story</p>

            <h2
              className="mt-4 font-display font-bold uppercase leading-none text-dark"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Built For
              <br />
              This Break
            </h2>

            <div className="mt-6 h-px w-16 bg-ocean" />

            <p className="mt-6 font-body text-lg leading-relaxed text-dark/70">
              We&apos;ve been surfing this break for fifteen years. Not because we had to —
              because the ocean here is genuinely special. The sandbars, the morning offshores,
              the way a southwest swell wraps around the point at first light.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-dark/70">
              Everything in the water, nothing you don&apos;t need. That&apos;s how we built
              this shop and that&apos;s how we still run it — one good board, the right conditions,
              and someone who actually knows this break.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/blog"
                  className="inline-block border-2 border-dark px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-dark transition-colors hover:bg-dark hover:text-white"
                >
                  Read the Journal →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
