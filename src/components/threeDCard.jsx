import React, { useRef, useState } from "react";
import { RoundedBox } from "@react-three/drei";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export function Earth({ texture, setTexture }) {
  const earthRef = useRef();
  const cloudRef = useRef();
  const lightRef = useRef();
  const [color, setColor] = useState(0x00ff00);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 1.1;
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        color="#ffffff"
        position={[-0.5, 0, 5]}
        intensity={1}
        castShadow={true}
      />

      <mesh ref={earthRef} position={[0, 0, 3]} onClick={() => {}}>
        <boxGeometry
          ref={cloudRef}
          args={[1.3, 2, 0.05]}
          radius={0.05}
          smoothness={4}
        />
        <meshStandardMaterial
          args={[1.3, 2]}
          metalness={0.7}
          roughness={0.3}
          map={texture}
        />
      </mesh>
    </>
  );
}
