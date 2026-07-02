import { notFound } from "next/navigation";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand">
        <div className="bg-dark px-6 pb-10 pt-28 md:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="font-body text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-white/70"
            >
              ← Home
            </Link>
          </div>
        </div>
        <div className="px-6 py-14 md:px-8">
          <div className="mx-auto max-w-3xl">
            <article
              className="post-body font-body text-dark/80"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
