"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/CartContext";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/shop", label: "Shop" },
    { href: "/#rent", label: "Rent" },
    { href: "/blog", label: "Journal" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link href="/" className="font-display text-lg font-bold uppercase tracking-widest text-white">
          Pipeline Surf Co.
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative font-body text-sm uppercase tracking-wider text-white/90"
              >
                <span className="transition-opacity group-hover:opacity-60">{l.label}</span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sun transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/shop" className="relative hidden font-body text-sm uppercase tracking-wider text-white/90 transition-opacity hover:opacity-60 md:block">
            Cart
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 1.4 }}
                animate={{ scale: 1 }}
                className="absolute -right-5 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sun text-[10px] font-bold text-dark"
              >
                {count}
              </motion.span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="flex flex-col gap-1.5 p-1 md:hidden"
          >
            {[
              mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 },
              { opacity: mobileOpen ? 0 : 1 },
              mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 },
            ].map((anim, i) => (
              <motion.span
                key={i}
                animate={anim}
                transition={{ duration: 0.25 }}
                className="block h-0.5 w-6 bg-white"
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-dark/96 backdrop-blur-sm"
          >
            <ul className="flex flex-col gap-4 px-6 pb-6 pt-2">
              {[...links, { href: "/shop", label: `Cart (${count})` }].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-body text-xl uppercase tracking-wider text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
