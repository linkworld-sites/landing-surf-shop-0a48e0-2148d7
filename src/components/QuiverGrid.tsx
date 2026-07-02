"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const GEAR = [
  {
    name: "FCS II Thruster Fins",
    category: "Fins",
    price: "$85",
    span: "col-span-2",
    height: "h-48",
    bg: "bg-ocean/8",
    accentBg: "bg-ocean",
  },
  {
    name: "Premium Leash 9ft",
    category: "Leash",
    price: "$35",
    span: "col-span-1",
    height: "h-48",
    bg: "bg-forest/8",
    accentBg: "bg-forest",
  },
  {
    name: "Surf Wax Pack",
    category: "6 bars",
    price: "$24",
    span: "col-span-1",
    height: "h-48",
    bg: "bg-sun/10",
    accentBg: "bg-sun",
  },
  {
    name: "UV Rash Guard L/S",
    category: "Apparel",
    price: "$55",
    span: "col-span-2",
    height: "h-52",
    bg: "bg-dark/8",
    accentBg: "bg-dark",
  },
  {
    name: "Wax Comb & Scraper",
    category: "Accessories",
    price: "$12",
    span: "col-span-1",
    height: "h-52",
    bg: "bg-ocean/6",
    accentBg: "bg-ocean",
  },
  {
    name: "Board Nose Guard",
    category: "Safety",
    price: "$18",
    span: "col-span-1",
    height: "h-52",
    bg: "bg-forest/6",
    accentBg: "bg-forest",
  },
];

function GearCard({
  item,
  index,
}: {
  item: (typeof GEAR)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      className={`group relative ${item.span} ${item.height} rounded-sm ${item.bg} overflow-hidden`}
    >
      {/* Background accent stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.accentBg}`} />

      <div className="flex h-full flex-col justify-between p-5 pl-7">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.15em] text-dark/40">{item.category}</p>
          <h3 className="mt-2 font-display text-xl font-bold uppercase leading-tight text-dark md:text-2xl">
            {item.name}
          </h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="font-display text-2xl font-bold text-dark">{item.price}</p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="opacity-0 group-hover:opacity-100"
          >
            <Link
              href="/shop"
              className="inline-block bg-dark px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-ocean"
            >
              + Add
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function QuiverGrid() {
  return (
    <section className="bg-sand px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-dark/40">
              Everything you need
            </p>
            <h2 className="mt-2 font-display font-bold uppercase leading-tight text-dark" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
              The
              <br />
              Quiver
            </h2>
          </div>
          <Link
            href="/shop"
            className="font-body text-sm uppercase tracking-wider text-ocean underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            View All Gear →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GEAR.map((item, i) => (
            <GearCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
