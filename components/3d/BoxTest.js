import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Box,
  SpotLight,
  softShadows,
  Environment,
  Stars,
  MeshWobbleMaterial,
} from "@react-three/drei";
softShadows();

function BoxNext({ args, position }) {
  const spiningBoxs = useRef();
  const sponex = useTexture("images/spnx_black.jpg");
  useFrame(() => {
    spiningBoxs.current.rotation.x = spiningBoxs.current.rotation.y += 0.01;
  });
  return (
    <>
      <Box
        radius={0.1} // Border-Radius of the box
        smoothness={50} // Optional, number of subdivisions
        position={position}
        castShadow
        args={args}
        ref={spiningBoxs}
      >
        <MeshWobbleMaterial
          metalness={0.9}
          roughness={0.2}
          map={sponex}
          attach="material"
          color="#FBA919"
        />
      </Box>
    </>
  );
}

function BoxTest() {
  return (
    <div className="bg-orange h-screen w-screen">
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <Stars />
          <ambientLight intensity={0.5} />
          {/* Direction light mein souce of light acts like sun and adds shadow*/}
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <BoxNext position={[1, 1, 1]} args={[3, 3, 3]} color="#01023a" />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[20, 20]} />
            <shadowMaterial attach="material" opacity={0.3} />
            {/* <meshStandardMaterial attach="material" color="trasparent" /> */}
          </mesh>

          <OrbitControls />
          <Environment
            background={false} // Whether to affect scene.background
            // files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]} // Array of cubemap files OR single equirectangular file
            // path={"/"} // Path to the above file(s)
            preset={"city"} // Preset string (overrides files and path)
            scene={undefined} // adds the ability to pass a custom THREE.Scene
          />

          {/* <WobbleCamera /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default BoxTest;
