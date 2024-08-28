import Hero from "./ui/hero";
import { LandingPageGrid } from "./ui/landingpage-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <LandingPageGrid />
    </main>
  );
}
