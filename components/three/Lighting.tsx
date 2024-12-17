"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Lighting() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);
  const light3 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.3) * 15;
      light1.current.position.z = Math.cos(time * 0.3) * 15;
      light1.current.intensity = 1 + Math.sin(time * 0.5) * 0.3;
    }
    
    if (light2.current) {
      light2.current.position.x = Math.sin(time * 0.4 + Math.PI) * 15;
      light2.current.position.z = Math.cos(time * 0.4 + Math.PI) * 15;
      light2.current.intensity = 1 + Math.sin(time * 0.6 + Math.PI) * 0.3;
    }
    
    if (light3.current) {
      light3.current.position.y = Math.sin(time * 0.2) * 10;
      light3.current.intensity = 1 + Math.sin(time * 0.3) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight
        ref={light1}
        position={[10, 5, 10]}
        color="#4444ff"
        intensity={1}
        distance={50}
        decay={2}
      />
      <pointLight
        ref={light2}
        position={[-10, -5, -10]}
        color="#ff4444"
        intensity={1}
        distance={50}
        decay={2}
      />
      <pointLight
        ref={light3}
        position={[0, 10, 0]}
        color="#ffffff"
        intensity={1}
        distance={40}
        decay={2}
      />
    </>
  );
}