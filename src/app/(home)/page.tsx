"use client";

import { Button, GradientButton, SubmitButton } from "@/components/button";
import Logo from "../../../public/globe.svg";
import { SpinningImage } from "@/components/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center gap-6 flex-col">
      <Button type="button">Solid Button</Button>
      <Button variant="outline">Outline Button</Button>
      <GradientButton as={"a"}>Gradient Button</GradientButton>
      <SubmitButton variant="outline">Submit Button</SubmitButton>
      <SpinningImage
        src={Logo}
        alt="Logo"
        height={80}
        width={80}
        sizes="80px"
      />
    </main>
  );
}
