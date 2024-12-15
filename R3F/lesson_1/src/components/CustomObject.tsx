import React, { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

const CustomObject: React.FC = () => {
  // Total number of vertices for 10 triangles is 3*10
  const verticesCount: number = 10 * 3;

  const positions = useMemo(() => {
    /* Each vertex of triangle has 3 coordinates  (x, y, z)
        float32array looks like
        [
         1, 2, 3,
         4, 5, 6,
         7, 8, 9
        ]
        where 1st three elements denotes one vertex and next 3 denotes 2nd vertex and so on
    */
    const positions: Float32Array = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, [verticesCount]);

  /*
        3js don't provide normal buffergeometry objects that means it don't responds to lighting
        so we need to use computeVertexNormals() function
        It should be applied after the first render so we use it inside the useEffect hook
    */
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    if (geometryRef.current) {
      geometryRef.current.computeVertexNormals();
    }
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial
        args={[{ color: "cyan", wireframe: false, side: THREE.DoubleSide }]}
      />
    </mesh>
  );
};

export default CustomObject;
