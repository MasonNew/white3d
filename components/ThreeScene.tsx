"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import { useScroll } from "framer-motion";
import * as THREE from "three";

export function GeometricObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Torus ref={meshRef} args={[3, 1, 32, 100]}>
      <meshStandardMaterial
        color="#6366f1"
        roughness={0.3}
        metalness={0.8}
        wireframe
      />
    </Torus>
  );
}