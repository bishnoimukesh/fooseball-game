import Player from './Player';

interface RodProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  players?: number;
  team: 'home' | 'away';
}

const Rod: React.FC<RodProps> = ({ position, players = 3, team }) => {
  return (
    <group position={position} rotation={[-Math.PI/2, 0, 0]}>
      {/* <mesh>
        <cylinderGeometry args={[0.1, 0.1, 10]} />
        <meshStandardMaterial color="silver" />
      </mesh> */}
      {Array.from({ length: players }).map((_, index) => {
        const spacing = 8 / (players + 1);
        const y = -4 + (index + 1) * spacing;
        const zPosition = -0.25; 
        return <Player key={index} position={[0, y, zPosition]} team={team} />;
      })}
    </group>
  );
};

export default Rod;
