import { Canvas } from '@react-three/fiber';
import { OrbitControls, KeyboardControls } from '@react-three/drei';
import Table from './Table';
import Rod from './Rod';
import Ball from './Ball';

const FoosballScene: React.FC = () => {
  return (
    <>
    <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'right', keys: ['ArrowRight', 'KeyD'] }
        ]} children={undefined}      >
      {/* Existing scene content */}
    </KeyboardControls>
      {/* Existing scene content */}
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'right', keys: ['ArrowRight', 'KeyD'] }
      ]}
    >
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />

      <Table />
      {/* Horizontal defense rods */}
      <Rod position={[-3, 0.5, 0]} rotation={[0, Math.PI, 0]} players={2} team="home" />
      <Rod position={[3, 0.5, 0]} rotation={[0, Math.PI, 0]} players={2} team="away" />
      
      {/* Horizontal midfield rods */}
      <Rod position={[1.5, 0.5, 0]} rotation={[0, Math.PI, 0]} players={3} team="away" />
      <Rod position={[-1.5, 0.5, 0]} rotation={[0, Math.PI, 0]} players={3} team="home" />
      
      {/* Horizontal attack rods */}
      <Rod position={[-0.5, 0.5, 0]} rotation={[0, Math.PI, 0]} players={5} team="home" />
      <Rod position={[0.5, 0.5, 0]} rotation={[0, Math.PI, 0]} players={5} team="away" />
      <Ball />
    </Canvas>
  </KeyboardControls>
      </>
  );
};

export default FoosballScene;

