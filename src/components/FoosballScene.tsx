import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Table from './Table';
import Rod from './Rod'; 

const FoosballScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />

      <Table />
      <Rod position={[0, 0.5, 0]} />
    </Canvas>
  );
};

export default FoosballScene;
