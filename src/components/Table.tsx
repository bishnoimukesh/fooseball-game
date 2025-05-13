import { useMemo } from "react";
import * as THREE from "three";

const Table: React.FC = () => {
  const fieldLength = 10;
  const fieldWidth = 6;
  const goalWidth = 2.5;
  const goalPostRadius = 0.05;
  const goalPostHeight = 1;
  const goalDepth = 0.1;
  const goalBoxDepth = 1.5;
  
  const lineMaterial = new THREE.LineBasicMaterial({ color: "white" });

  const markings = useMemo(() => {
    const h = fieldWidth / 2;
    const l = fieldLength / 2;
    const lines: THREE.Vector3[] = [];

    // Halfway line
    lines.push(new THREE.Vector3(0, 0.01, -h), new THREE.Vector3(0, 0.01, h));

    // Outer boundary
    // lines.push(
    //   new THREE.Vector3(-l, 0.5, -h),
    //   new THREE.Vector3(l, 0.5, -h),
    //   new THREE.Vector3(l, 0.5, -h),
    //   new THREE.Vector3(l, 0.5, h),
    //   new THREE.Vector3(l, 0.5, h),
    //   new THREE.Vector3(-l, 0.5, h),
    //   new THREE.Vector3(-l, 0.5, h),
    //   new THREE.Vector3(-l, 0.5, -h)
    // );

    // Goal boxes
    const goalY1 = goalWidth / 2;
    const goalY2 = -goalWidth / 2;

    // Left
    lines.push(
      new THREE.Vector3(-l, 0.01, goalY1),
      new THREE.Vector3(-l + goalBoxDepth, 0.01, goalY1),

      new THREE.Vector3(-l + goalBoxDepth, 0.01, goalY1),
      new THREE.Vector3(-l + goalBoxDepth, 0.01, goalY2),

      new THREE.Vector3(-l + goalBoxDepth, 0.01, goalY2),
      new THREE.Vector3(-l, 0.01, goalY2)
    );

    // Right
    lines.push(
      new THREE.Vector3(l, 0.01, goalY1),
      new THREE.Vector3(l - goalBoxDepth, 0.01, goalY1),

      new THREE.Vector3(l - goalBoxDepth, 0.01, goalY1),
      new THREE.Vector3(l - goalBoxDepth, 0.01, goalY2),

      new THREE.Vector3(l - goalBoxDepth, 0.01, goalY2),
      new THREE.Vector3(l, 0.01, goalY2)
    );

    return new THREE.BufferGeometry().setFromPoints(lines);
  }, []);

  const centerCircle = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 1, 1, 0, 2 * Math.PI);
    const points = curve
      .getPoints(60)
      .map((p) => new THREE.Vector3(p.x, 0.01, p.y));
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  const leftArc = useMemo(() => {
    const arc = new THREE.EllipseCurve(
      -fieldLength / 2 + 0.8,
      0,
      1,
      1,
      -Math.PI / 4,
      Math.PI / 4
    );
    const points = arc
      .getPoints(30)
      .map((p) => new THREE.Vector3(p.x, 0.01, p.y));
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  const rightArc = useMemo(() => {
    const arc = new THREE.EllipseCurve(
      fieldLength / 2 - 0.8,
      0,
      1,
      1,
      (3 * Math.PI) / 4,
      (5 * Math.PI) / 4
    );
    const points = arc
      .getPoints(30)
      .map((p) => new THREE.Vector3(p.x, 0.01, p.y));
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <>
      {/* Grass stripes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.001, -fieldWidth / 2 + i + 0.5]}
        >
          <planeGeometry args={[fieldLength, 1]} />
          <meshStandardMaterial color={"lightgreen"} />
        </mesh>
      ))}

      {/* Field markings */}
      <lineSegments geometry={markings} material={lineMaterial} />
      <line geometry={centerCircle} material={lineMaterial} />
      <line geometry={leftArc} material={lineMaterial} />
      <line geometry={rightArc} material={lineMaterial} />

      {/* Goal Posts - Left */}
      <mesh
        position={[
          -fieldLength / 2 - goalDepth / 2,
          goalPostHeight / 2,
          goalWidth / 2,
        ]}
      >
        <cylinderGeometry
          args={[goalPostRadius, goalPostRadius, goalPostHeight, 16]}
        />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh
        position={[
          -fieldLength / 2 - goalDepth / 2,
          goalPostHeight / 2,
          -goalWidth / 2,
        ]}
      >
        <cylinderGeometry
          args={[goalPostRadius, goalPostRadius, goalPostHeight, 16]}
        />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh position={[-fieldLength / 2 - goalDepth / 2, goalPostHeight, 0]}>
        <boxGeometry
          args={[goalPostRadius * 2, goalPostRadius * 2, goalWidth]}
        />
        <meshStandardMaterial color={"white"} />
      </mesh>

      {/* Goal Posts - Right */}
      <mesh
        position={[
          fieldLength / 2 + goalDepth / 2,
          goalPostHeight / 2,
          goalWidth / 2,
        ]}
      >
        <cylinderGeometry
          args={[goalPostRadius, goalPostRadius, goalPostHeight, 16]}
        />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh
        position={[
          fieldLength / 2 + goalDepth / 2,
          goalPostHeight / 2,
          -goalWidth / 2,
        ]}
      >
        <cylinderGeometry
          args={[goalPostRadius, goalPostRadius, goalPostHeight, 16]}
        />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh position={[fieldLength / 2 + goalDepth / 2, goalPostHeight, 0]}>
        <boxGeometry
          args={[goalPostRadius * 2, goalPostRadius * 2, goalWidth]}
        />
        <meshStandardMaterial color={"white"} />
      </mesh>

      {/* Thicker Goal Outline - Left */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-fieldLength / 2 - 0.75, 0.011, 0]}
      >
        <planeGeometry args={[1.5, goalWidth]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Thicker Goal Outline - Right */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[fieldLength / 2 + 0.75, 0.011, 0]}
      >
        <planeGeometry args={[1.5, goalWidth]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </>
  );
};

export default Table;
