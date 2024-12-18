"use client";

import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center gap-6 flex-col">
      <Button>Solid Button</Button>
      <Button variant="outline">Outline Button</Button>
    </main>
  );
}
