import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience: React.FC = () => {
  const boxRef = useRef()
  const sphereRef = useRef()

  useFrame(() => {
    
  });
  return (
    <>
      <mesh ref={boxRef} position={[2, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial args={[{ color: 0xff0000 }]} />
      </mesh>

      <mesh ref={sphereRef} position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial args={[{ color: "yellow" }]} />
      </mesh>

      <mesh position-y={-2} rotation-x={Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial
          args={[{ color: "yellowgreen", side: THREE.DoubleSide }]}
        />
      </mesh>
      <ambientLight />
    </>
  );
};

export default Experience;
