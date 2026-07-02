import { fetchProducts } from "@/lib/checkout";
import ShopClient from "@/components/ShopClient";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductViewTracker } from "@/components/ProductViewTracker";

export const metadata = {
  title: "Shop — Pipeline Surf Co.",
  description: "Boards, wetsuits, fins, leashes, wax and everything in the water. Shop the full Pipeline Surf Co. catalog.",
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <>
      <ProductViewTracker />
      <Nav />
      <main className="min-h-screen bg-sand pt-24 md:pt-28">
        {/* Page hero strip */}
        <div className="bg-dark px-6 pb-12 pt-10 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-white/40">
              Pipeline Surf Co.
            </p>
            <h1 className="mt-2 font-display text-5xl font-bold uppercase text-white md:text-7xl">
              Shop
              <span className="text-sun">.</span>
            </h1>
            <p className="mt-3 font-body text-white/60">
              Boards, gear and everything you need for the water.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="px-6 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            {products.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
                <p className="font-display text-2xl font-bold uppercase text-dark/30">
                  Checking the tide...
                </p>
                <p className="font-body text-dark/40">Products loading. Refresh if this persists.</p>
              </div>
            ) : (
              <ShopClient products={products} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
