import { useTexture, softShadows } from "@react-three/drei";
import { DoubleSide, RepeatWrapping } from "three";
export default function PlaneFloorKnives() {
  const [Rock_Color, Rock_NormalGL, Rock_Roughness, Rock_Displacement] = useTexture([
    "textures/asteroidFloor/Rock_Color.jpg",
    "textures/asteroidFloor/Rock_NormalGL.jpg",
    "textures/asteroidFloor/Rock_Roughness.jpg",
    "textures/asteroidFloor/Rock_Displacement.jpg",
  ]);
  // Rock_Color.wrapS = Rock_Color.wrapT = RepeatWrapping;
  // Rock_Color.repeat.set(3, 3);
  softShadows();
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100, 100, 100]} />
      <shadowMaterial attach="material" opacity={1} />
      <meshPhysicalMaterial
        receiveShadow
        map={Rock_Color}
        side={DoubleSide}
        normalMap={Rock_NormalGL}
        displacementMap={Rock_Displacement}
        roughnessMap={Rock_Roughness}
        // metalness={0.1}
        // roughness={0.1}

        displacementScale={10}
        // repeat={20}
        // wireframe={true}
      />
      {/* <meshStandardMaterial attach="material" color="trasparent" /> */}
    </mesh>
  );
}
