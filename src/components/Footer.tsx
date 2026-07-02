"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark px-6 pt-16 pb-8 text-white/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-bold uppercase tracking-widest text-white">
              Pipeline<br />Surf Co.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed">
              Everything in the water,<br />nothing you don&apos;t need.
            </p>
            <div className="mt-5 flex gap-4">
              {["IG", "FB", "YT"].map((s) => (
                <span
                  key={s}
                  className="flex h-8 w-8 items-center justify-center border border-white/20 font-body text-xs text-white/50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">
              Shop
            </h3>
            <ul className="space-y-2 font-body text-sm">
              {[
                { href: "/shop", label: "All Products" },
                { href: "/#rent", label: "Rent Gear" },
                { href: "/shop", label: "Boards" },
                { href: "/shop", label: "Accessories" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-sun">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white">
              Visit
            </h3>
            <address className="space-y-2 font-body text-sm not-italic">
              <p>1 Pipeline Road</p>
              <p>North Shore, HI 96712</p>
              <p className="mt-3 text-white/40">Open Daily</p>
              <p>6 AM – 6 PM</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-widest text-white">
              Surf Report
            </h3>
            <p className="mb-4 font-body text-xs">Get the local forecast in your inbox.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email for surf report"
                className="border border-white/20 bg-transparent px-3 py-2 font-body text-sm text-white placeholder-white/30 outline-none focus:border-sun"
              />
              <button
                type="submit"
                className="border border-sun px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-sun transition-colors hover:bg-sun hover:text-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 font-body text-xs text-white/30">
          <p>© {year} Pipeline Surf Co. All rights reserved.</p>
          <nav className="flex flex-wrap gap-6">
            <Link href="/blog" className="hover:text-white/60">
              Journal
            </Link>
            <Link href="/legal/privacy" className="hover:text-white/60">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="hover:text-white/60">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
