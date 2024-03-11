import { HeroBanner } from "@/components/hero-banner";
import { VinStairs } from "@/components/vin-stair";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden min-h-full">
      <HeroBanner />
      <VinStairs />
    </main>
  );
}
