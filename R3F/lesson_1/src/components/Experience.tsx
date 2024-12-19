import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Correct import path
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import CustomObject from "./CustomObject";
import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei";

extend({ OrbitControls });

const Experience: React.FC = () => {
  const boxRef = useRef<THREE.Mesh>(null); // Corrected type
  const sphereRef = useRef<THREE.Mesh>(null); // Corrected type
  const groupRef = useRef<THREE.Group>(null); // Corrected type
  const controlsRef = useRef<OrbitControls>(null); // Use specific type if available

  const { camera, gl } = useThree();

  // Uncomment if you want to apply rotation or other updates in each frame
  useFrame((state, delta) => {
    if (controlsRef.current) {
      controlsRef.current.update(); // Update controls on each frame
    }
    // console.log(delta, state)
    boxRef.current.rotation.y += delta;

    // state.camera.lookAt(0, 0, 0)
    // state.camera.position.x = Math.sin(state.clock.elapsedTime)*12
    // state.camera.position.z = Math.cos(state.clock.elapsedTime)*12
  });

  return (
    <>
      {/* logical controls */}
      <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />

      {/* lighting */}
      <directionalLight intensity={2.5} position={[1, 2, 3]} />
      <ambientLight intensity={0.2} />

      {/* camera */}
      {/* we can also use OrthographicCamera i.e., also in the same in drei package */}
      <PerspectiveCamera
        makeDefault
        fov={45}
        position={[3, 0, 10]}
        // zoom={100}
        near={0.1}
        far={200}
      />

      {/* scene */}
      <group ref={groupRef}>
        <mesh ref={boxRef} position={[2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial args={[{ color: 0xff0000 }]} />
        </mesh>

        <mesh ref={sphereRef} position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial args={[{ color: "yellow" }]} />
        </mesh>

        <mesh position-y={-2} rotation-x={Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial
            args={[{ color: "yellowgreen", side: THREE.DoubleSide }]}
          />
        </mesh>

        <CustomObject />
      </group>
    </>
  );
};

export default Experience;
