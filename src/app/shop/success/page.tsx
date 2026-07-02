"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@/lib/funnel";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function ShopSuccessPage() {
  useEffect(() => {
    track("purchase");
    track("convert");
  }, []);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-forest"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
              <path
                d="M7 18L15 26L29 10"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-8 font-display text-5xl font-bold uppercase text-dark md:text-7xl"
          >
            You&apos;re
            <br />
            Stoked
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            className="mt-6 max-w-sm font-body text-lg text-dark/60"
          >
            Your order is confirmed. Check your inbox — then go surf.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/shop"
              className="inline-block border-2 border-dark px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-dark transition-colors hover:bg-dark hover:text-white"
            >
              Keep Shopping
            </Link>
            <Link
              href="/"
              className="inline-block bg-ocean px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-85"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
