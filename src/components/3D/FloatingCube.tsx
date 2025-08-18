import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        emissive="#4c1d95" 
        emissiveIntensity={0.2}
        transparent 
        opacity={0.8}
      />
    </mesh>
  );
};

export default FloatingCube;