import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingCube from './FloatingCube';

const Scene = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          <FloatingCube />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;