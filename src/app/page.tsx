import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { DualPathSplit } from "@/components/DualPathSplit";
import { BoardRail } from "@/components/BoardRail";
import { RentalStrip } from "@/components/RentalStrip";
import { QuiverGrid } from "@/components/QuiverGrid";
import { ConditionsStrip } from "@/components/ConditionsStrip";
import { EditorialBlock } from "@/components/EditorialBlock";
import { StickyBookingBanner } from "@/components/StickyBookingBanner";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <DualPathSplit />
        <BoardRail />
        <RentalStrip />
        <QuiverGrid />
        <ConditionsStrip />
        <EditorialBlock />
      </main>
      <Footer />
      <StickyBookingBanner />
    </>
  );
}
