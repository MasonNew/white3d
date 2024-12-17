"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, MeshDistortMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function GeometricObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const logoRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Load the logo texture
  const logoTexture = useTexture("/pump-fun-logo.png");
  logoTexture.minFilter = THREE.LinearFilter;
  logoTexture.magFilter = THREE.LinearFilter;

  // Add error handling for texture loading
  logoTexture.onError = (err) => {
    console.error("Error loading texture:", err);
  };

  const glowMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color("#ffffff") },
      intensity: { value: 0.5 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      uniform float intensity;
      varying vec2 vUv;
      void main() {
        float strength = distance(vUv, vec2(0.5));
        float glow = sin(strength * 10.0 - time * 2.0) * 0.5 + 0.5;
        gl_FragColor = vec4(color, glow * intensity);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending
  }), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * (hovered ? 0.5 : 0.3);
      meshRef.current.rotation.y += delta * (hovered ? 0.6 : 0.4);
      meshRef.current.rotation.z += delta * (hovered ? 0.2 : 0.1);
      
      const time = state.clock.elapsedTime;
      // Hover-affected animations
      const hoverIntensity = hovered ? 0.5 : 0.3;
      meshRef.current.position.y = Math.sin(time * 0.5) * hoverIntensity;
      meshRef.current.scale.x = 1 + Math.sin(time * 0.8) * (hovered ? 0.2 : 0.1);
      meshRef.current.scale.y = 1 + Math.cos(time * 0.8) * (hovered ? 0.2 : 0.1);

      // Sync logo rotation and position
      if (logoRef.current) {
        logoRef.current.rotation.copy(meshRef.current.rotation);
        logoRef.current.position.y = meshRef.current.position.y;
        // Scale the logo slightly with hover state
        const logoScale = hovered ? 3.2 : 3;
        logoRef.current.scale.set(logoScale, logoScale, logoScale);
      }
    }
    
    if (glowRef.current) {
      glowRef.current.rotation.copy(meshRef.current!.rotation);
      glowRef.current.position.copy(meshRef.current!.position);
      glowRef.current.scale.copy(meshRef.current!.scale);
      glowMaterial.uniforms.time.value = state.clock.elapsedTime;
      glowMaterial.uniforms.intensity.value = hovered ? 0.8 : 0.5;
      glowMaterial.uniforms.color.value.setHex(hovered ? 0x88ffff : 0xffffff);
    }
  });

  return (
    <group>
      <Torus 
        ref={meshRef} 
        args={[6, 2, 64, 128]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#88ffff" : "#ffffff"}
          wireframe
          wireframeLinewidth={1.5}
          emissive={hovered ? "#88ffff" : "#ffffff"}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          transparent
          opacity={0.9}
          distort={hovered ? 0.6 : 0.3}
          speed={hovered ? 4 : 2}
        />
      </Torus>
      <Torus 
        ref={glowRef} 
        args={[6.2, 2.2, 64, 128]} 
        material={glowMaterial}
      />
      {/* Centered logo */}
      <mesh ref={logoRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial 
          map={logoTexture} 
          transparent={true} 
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}