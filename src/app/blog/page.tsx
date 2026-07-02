import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Journal — Pipeline Surf Co.",
  description: "Stories from the lineup, tips for beginners, and dispatches from the North Shore.",
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand">
        {/* Header */}
        <div className="bg-dark px-6 pb-12 pt-28 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-white/40">
              Pipeline Surf Co.
            </p>
            <h1 className="mt-2 font-display text-5xl font-bold uppercase text-white md:text-7xl">
              Journal
              <span className="text-sun">.</span>
            </h1>
            <p className="mt-3 font-body text-white/60">
              Stories from the lineup. Dispatches from the North Shore.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            {posts.length === 0 ? (
              <p className="font-body text-dark/50">
                New stories are on the way — check back soon.
              </p>
            ) : (
              <ul className="divide-y divide-dark/10">
                {posts.map((p) => (
                  <li key={p.slug} className="py-10">
                    <Link href={`/blog/${p.slug}`} className="group block">
                      {p.date && (
                        <p className="font-body text-xs uppercase tracking-wider text-dark/40">
                          {p.date}
                        </p>
                      )}
                      <h2 className="mt-2 font-display text-3xl font-bold uppercase text-dark transition-colors group-hover:text-ocean md:text-4xl">
                        {p.title}
                      </h2>
                      {p.description && (
                        <p className="mt-3 font-body text-lg leading-relaxed text-dark/60">
                          {p.description}
                        </p>
                      )}
                      <p className="mt-4 font-body text-sm font-medium text-ocean transition-opacity group-hover:opacity-60">
                        Read story →
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-12 pt-6 border-t border-dark/10">
              <Link
                href="/"
                className="font-body text-sm uppercase tracking-wider text-dark/50 transition-colors hover:text-ocean"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
