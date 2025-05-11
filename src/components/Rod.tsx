import Player from './Player';

interface RodProps {
  position: [number, number, number];
}

const Rod: React.FC<RodProps> = ({ position }) => {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 10]} />
        <meshStandardMaterial color="silver" />
      </mesh>
      <Player position={[0, -0.5, -2]} />
      <Player position={[0, -0.5, 0]} />
      <Player position={[0, -0.5, 2]} />
    </group>
  );
};

export default Rod;
