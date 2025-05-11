interface PlayerProps {
  position: [number, number, number];
}

const Player: React.FC<PlayerProps> = ({ position }) => {
  return (
    <mesh position={position}>
      {/* <boxGeometry args={[0.4, 1, 0.4]} /> */}
      {/* <meshStandardMaterial color="blue" /> */}
    </mesh>
  );
};

export default Player;
