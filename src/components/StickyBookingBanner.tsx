"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@/lib/funnel";

export function StickyBookingBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.75;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-ocean border-t-2 border-sun shadow-2xl"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:py-4">
            <div className="flex items-center gap-3">
              <span className="hidden h-2 w-2 animate-pulse rounded-full bg-sun md:block" />
              <p className="font-display text-sm font-bold uppercase tracking-wider text-white md:text-lg">
                Rent a Board Today →
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/#rent"
                onClick={() => track("intent")}
                className="shrink-0 bg-sun px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-dark md:px-7 md:py-3 md:text-sm"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
