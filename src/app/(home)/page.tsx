import HeroSection from "./sections/hero";

export default async function Home() {
  return (
    <main className="h-screen flex items-center justify-center gap-6 flex-col">
      <h1 className="text-center text-3xl font-semibold text-zinc-700">
        Styled components
      </h1>
      <HeroSection />
    </main>
  );
}
