import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Correct import path
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

extend({ OrbitControls });

const Experience: React.FC = () => {
  const boxRef = useRef<THREE.Mesh>(null); // Corrected type
  const sphereRef = useRef<THREE.Mesh>(null); // Corrected type
  const groupRef = useRef<THREE.Group>(null); // Corrected type
  const controlsRef = useRef<OrbitControls>(null); // Use specific type if available
  
  const { camera, gl } = useThree();

  // Uncomment if you want to apply rotation or other updates in each frame
  useFrame(() => {
    
    if (controlsRef.current) {
      controlsRef.current.update(); // Update controls on each frame
    }
  });

  return (
    <>
      <orbitControls ref={controlsRef} args={[camera, gl.domElement]}  />
      <group ref={groupRef}>
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
      </group>
      <ambientLight />
    </>
  );
};

export default Experience;