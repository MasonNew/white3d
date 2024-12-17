"use client";

import { Scene } from "@/components/three/Scene";
import { Background } from "@/components/Background";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Background />
      <Scene />
    </main>
  );
}