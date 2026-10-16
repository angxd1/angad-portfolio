"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

type Pointer = { x: number; y: number };

function Finger({
  position,
  rotation = [0, 0, 0],
  length = 0.55,
  bendRef,
  bendScale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  length?: number;
  bendRef: React.MutableRefObject<number>;
  bendScale?: number;
}) {
  const proximal = React.useRef<THREE.Mesh>(null);
  const middle = React.useRef<THREE.Mesh>(null);
  const distal = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    const bend = bendRef.current * bendScale;
    if (proximal.current) proximal.current.rotation.x = bend * 0.55;
    if (middle.current) {
      middle.current.rotation.x = bend * 1.1;
      middle.current.position.z = Math.sin(bend) * 0.08;
    }
    if (distal.current) {
      distal.current.rotation.x = bend * 1.35;
      distal.current.position.z = Math.sin(bend) * 0.16;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh
        ref={proximal}
        castShadow
        position={[0, length * 0.28, 0]}
      >
        <capsuleGeometry args={[0.09, length * 0.42, 6, 12]} />
        <meshStandardMaterial color="#d4a574" roughness={0.45} metalness={0.15} />
      </mesh>
      <mesh ref={middle} castShadow position={[0, length * 0.62, 0]}>
        <capsuleGeometry args={[0.075, length * 0.28, 6, 12]} />
        <meshStandardMaterial color="#c8945f" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh ref={distal} castShadow position={[0, length * 0.88, 0]}>
        <capsuleGeometry args={[0.06, length * 0.18, 6, 10]} />
        <meshStandardMaterial color="#b8824e" roughness={0.35} metalness={0.25} />
      </mesh>
    </group>
  );
}

function Thumb({ bendRef }: { bendRef: React.MutableRefObject<number> }) {
  const a = React.useRef<THREE.Mesh>(null);
  const b = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    const bend = bendRef.current;
    if (a.current) a.current.rotation.x = bend * 0.4;
    if (b.current) {
      b.current.rotation.x = bend * 0.7;
      b.current.position.z = Math.sin(bend * 0.4) * 0.06;
    }
  });

  return (
    <group position={[-0.42, 0.05, 0.08]} rotation={[0.4, 0.2, 1.1]}>
      <mesh ref={a} castShadow position={[0, 0.22, 0]}>
        <capsuleGeometry args={[0.1, 0.28, 6, 12]} />
        <meshStandardMaterial color="#c8945f" roughness={0.45} metalness={0.18} />
      </mesh>
      <mesh ref={b} castShadow position={[0, 0.48, 0]}>
        <capsuleGeometry args={[0.08, 0.2, 6, 10]} />
        <meshStandardMaterial color="#b8824e" roughness={0.4} metalness={0.22} />
      </mesh>
    </group>
  );
}

function GloveHand({
  pointer,
  animate,
}: {
  pointer: React.MutableRefObject<Pointer>;
  animate: boolean;
}) {
  const group = React.useRef<THREE.Group>(null);
  const bendRef = React.useRef(0.35);
  const target = React.useRef({ rotX: 0.15, rotY: -0.35, rotZ: 0.08 });

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    if (animate) {
      target.current.rotY = -0.35 + pointer.current.x * 0.55;
      target.current.rotX = 0.2 + pointer.current.y * -0.35;
      target.current.rotZ = pointer.current.x * -0.12;
      bendRef.current = 0.25 + (Math.sin(t * 1.4) * 0.5 + 0.5) * 0.35;
      group.current.position.y = Math.sin(t * 0.9) * 0.06;
    } else {
      target.current.rotY = -0.35;
      target.current.rotX = 0.18;
      target.current.rotZ = 0.05;
      bendRef.current = 0.4;
    }

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      target.current.rotX,
      0.06
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      target.current.rotY,
      0.06
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      target.current.rotZ,
      0.06
    );
  });

  return (
    <group ref={group} position={[0.15, -0.15, 0]} scale={1.15}>
      <mesh castShadow receiveShadow position={[0, 0.05, 0]} rotation={[0.2, 0.1, 0.05]}>
        <boxGeometry args={[0.85, 1.05, 0.32]} />
        <meshStandardMaterial color="#c98a4a" roughness={0.5} metalness={0.18} />
      </mesh>
      <mesh castShadow position={[0, -0.15, 0.02]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[0.7, 0.55, 0.28]} />
        <meshStandardMaterial color="#a86f3a" roughness={0.55} metalness={0.12} />
      </mesh>
      <mesh castShadow position={[0, -0.62, 0.02]}>
        <cylinderGeometry args={[0.28, 0.32, 0.35, 20]} />
        <meshStandardMaterial color="#8a5a2e" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.1, 0.17]}>
        <boxGeometry args={[0.55, 0.08, 0.02]} />
        <meshStandardMaterial
          color="#e8a15a"
          emissive="#e8a15a"
          emissiveIntensity={0.35}
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>

      <Finger
        position={[-0.28, 0.52, 0.02]}
        rotation={[0, 0, 0.18]}
        length={0.5}
        bendRef={bendRef}
      />
      <Finger
        position={[-0.1, 0.58, 0.04]}
        rotation={[0, 0, 0.06]}
        length={0.58}
        bendRef={bendRef}
        bendScale={0.95}
      />
      <Finger
        position={[0.08, 0.58, 0.04]}
        rotation={[0, 0, -0.04]}
        length={0.6}
        bendRef={bendRef}
        bendScale={0.9}
      />
      <Finger
        position={[0.26, 0.52, 0.02]}
        rotation={[0, 0, -0.16]}
        length={0.48}
        bendRef={bendRef}
        bendScale={1.05}
      />
      <Thumb bendRef={bendRef} />
    </group>
  );
}

function Scene({
  pointer,
  animate,
}: {
  pointer: React.MutableRefObject<Pointer>;
  animate: boolean;
}) {
  return (
    <>
      <color attach="background" args={["#12100e"]} />
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.35}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3, 2, 2]} intensity={0.55} color="#e8a15a" />
      <Float
        speed={animate ? 1.2 : 0}
        rotationIntensity={animate ? 0.15 : 0}
        floatIntensity={animate ? 0.35 : 0}
      >
        <GloveHand pointer={pointer} animate={animate} />
      </Float>
      <ContactShadows
        position={[0, -1.35, 0]}
        opacity={0.45}
        scale={8}
        blur={2.4}
        far={3}
        color="#000000"
      />
      <Environment preset="city" environmentIntensity={0.25} />
    </>
  );
}

function StaticHandFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
      <div className="relative h-[55%] w-[42%] max-w-sm">
        <div className="absolute inset-x-[18%] bottom-[8%] top-[28%] rounded-[2rem] bg-gradient-to-b from-[#d4a574] to-[#8a5a2e] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]" />
        <div className="absolute bottom-[6%] left-1/2 h-[12%] w-[28%] -translate-x-1/2 rounded-b-2xl bg-[#6f4824]" />
        <div className="absolute left-[22%] top-[10%] h-[32%] w-[12%] origin-bottom rotate-[-8deg] rounded-full bg-[#c8945f]" />
        <div className="absolute left-[36%] top-[6%] h-[36%] w-[12%] origin-bottom rotate-[-2deg] rounded-full bg-[#c8945f]" />
        <div className="absolute left-[50%] top-[5%] h-[38%] w-[12%] origin-bottom rotate-[2deg] rounded-full bg-[#c8945f]" />
        <div className="absolute left-[64%] top-[10%] h-[30%] w-[12%] origin-bottom rotate-[8deg] rounded-full bg-[#c8945f]" />
        <div className="absolute left-[8%] top-[38%] h-[22%] w-[14%] origin-bottom rotate-[-50deg] rounded-full bg-[#b8824e]" />
        <div className="absolute left-1/2 top-[42%] h-2 w-[40%] -translate-x-1/2 rounded-full bg-copper/80 glow-pulse" />
      </div>
    </div>
  );
}

export function HandScene() {
  const reduce = useReducedMotion();
  const pointer = React.useRef<Pointer>({ x: 0, y: 0 });
  const [mounted, setMounted] = React.useState(false);
  const [use3d, setUse3d] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.innerWidth < 768;
    if (reduce || (coarse && small)) {
      setUse3d(false);
    }
  }, [reduce]);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!use3d || reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    };
  };

  if (!mounted) {
    return <div className="absolute inset-0 bg-charcoal" aria-hidden />;
  }

  if (!use3d) {
    return <StaticHandFallback />;
  }

  return (
    <div
      className="absolute inset-0"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        pointer.current = { x: 0, y: 0 };
      }}
      aria-hidden
    >
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.2, 3.6], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene pointer={pointer} animate={!reduce} />
      </Canvas>
    </div>
  );
}
