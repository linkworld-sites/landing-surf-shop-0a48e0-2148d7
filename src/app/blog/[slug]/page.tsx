import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand">
        {/* Header */}
        <div className="bg-dark px-6 pb-12 pt-28 md:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="font-body text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-white/70"
            >
              ← Journal
            </Link>
            {post.date && (
              <p className="mt-4 font-body text-xs uppercase tracking-wider text-white/40">
                {post.date}
              </p>
            )}
            <h1 className="mt-2 font-display text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-4 font-body text-lg text-white/60">{post.description}</p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-14 md:px-8 md:py-18">
          <div className="mx-auto max-w-3xl">
            <article
              className="post-body font-body text-dark/80"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-14 border-t border-dark/10 pt-8">
              <Link
                href="/blog"
                className="font-body text-sm uppercase tracking-wider text-dark/50 transition-colors hover:text-ocean"
              >
                ← All stories
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
