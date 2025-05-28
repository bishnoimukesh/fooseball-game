import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { useKeyboardControls } from '@react-three/drei';

type Controls = 'forward' | 'backward' | 'left' | 'right';

const Ball: React.FC = () => {
  const ballRef = useRef<Mesh>(null);
  const velocity = useRef(new Vector3(0, 0, 0));
  const get = useKeyboardControls<Controls>()[1];

  useFrame((_, delta) => {
    const controls = get();
    const speed = 5;

    // Apply keyboard forces
    if (controls.forward) velocity.current.z -= speed * delta;
    if (controls.backward) velocity.current.z += speed * delta;
    if (controls.left) velocity.current.x -= speed * delta;
    if (controls.right) velocity.current.x += speed * delta;

    // Apply friction
    velocity.current.multiplyScalar(0.98);

    // Update position
    if (ballRef.current) {
      ballRef.current.position.add(velocity.current);
      
      // Basic table bounds collision
      const { x, z } = ballRef.current.position;
      if (Math.abs(x) > 4) velocity.current.x *= -0.8;
      if (Math.abs(z) > 2) velocity.current.z *= -0.8;
      ballRef.current.position.clamp(
        new Vector3(-4, 0.2, -2),
        new Vector3(4, 0.2, 2)
      );
    }
  });

  return (
    <mesh ref={ballRef} position={[0, 0.3, 0]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Ball;
