import { Canvas } from "@react-three/fiber";
import { softShadows, Stars, Text, PresentationControls } from "@react-three/drei";
softShadows();

export default function TextCustum() {
  //   const spnlogo = useTexture("/images/sponex-logo.jpg");
  return (
    <div className="bg-darkblue h-screen w-screen">
      {/* NOTE: in the new "@react-three/fiber" adding "shadowMap" to Canvas doesn't work. you have to use "shadows" instead */}

      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 100 }}>
        <Stars />
        <ambientLight intensity={0.7} />
        {/* Direction light mein souce of light acts like sun and adds shadow*/}
        <directionalLight castShadow position={[0, 10, 0]} intensity={1.5} />
        <PresentationControls
          global={false} // Spin globally or by dragging the model
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, (Math.PI * 4) / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
        >
          {" "}
          <mesh>
            <Text
              fontSize="1.5"
              fontBold="700"
              color="white" // default
              anchorX="center" // default
              anchorY="middle" // default
            >
              hello world!
            </Text>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
              <planeBufferGeometry attach="geometry" args={[20, 20]} />
              <shadowMaterial attach="material" opacity={0.3} />
              <meshStandardMaterial attach="material" color="#25166c" />
            </mesh>
          </mesh>
        </PresentationControls>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
