import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, Stars } from "@react-three/drei";
import SpiningBox from "./SpiningBox";

softShadows();

export default function ThreeD() {
  return (
    <div className="bg-darkblue h-screen w-screen">
      {/* NOTE: in the new "@react-three/fiber" adding "shadowMap" to Canvas doesn't work. you have to use "shadows" instead */}
      <Canvas shadows colorManagement camera={{ position: [-5, 2, 10], fov: 50 }}>
        <Stars />
        <ambientLight intensity={0.7} />
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

        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {/* This mesh is the plane (The floor) */}

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[20, 20]} />
            <shadowMaterial attach="material" opacity={0.3} />
            <meshStandardMaterial attach="material" color="#25166c" />
          </mesh>

          <SpiningBox
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="#01023a"
            hoverColored="#FBA919"
            speed={2}
          />
          <SpiningBox position={[-2, 1, -5]} color="#01023a" hoverColored="#FBA919" speed={6} />
          <SpiningBox position={[5, 1, -2]} color="#01023a" hoverColored="#FBA919" speed={6} />
        </group>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
