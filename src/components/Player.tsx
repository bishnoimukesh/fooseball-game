interface PlayerProps {
  position: [number, number, number];
  team?: 'home' | 'away';
}

const Player: React.FC<PlayerProps> = ({ position, team }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.4, 0.5, 0.4]} />
      <meshStandardMaterial color={team === 'away' ? 'red' : 'blue'} />
    </mesh>
  );
};

export default Player;
