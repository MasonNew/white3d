"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { GeometricObject } from "./GeometricObject";
import { Lighting } from "./Lighting";

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 50 }}
      className="h-screen w-screen"
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#000000"]} />
      <Lighting />
      <Suspense fallback={null}>
        <GeometricObject />
      </Suspense>
    </Canvas>
  );
}