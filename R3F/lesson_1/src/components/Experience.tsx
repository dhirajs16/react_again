const Experience = () => {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          args={[
            {
              color: 0xff0000,
              wireframe: true,
              opacity: 1,
              transparent: true,
              shininess: 100,
              roughness: 100,
            },
          ]}
        />
      </mesh>
      <ambientLight />
    </>
  );
};

export default Experience;
