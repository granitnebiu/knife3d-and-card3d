import { useTexture, softShadows } from "@react-three/drei";
import { DoubleSide, RepeatWrapping } from "three";
export default function PlaneFloorCar() {
  const [WoodFloor_Color, WoodFloor_NormalGL, WoodFloor_Roughness, WoodFloor_Displacement] =
    useTexture([
      "textures/floor/WoodFloor_Color.jpg",
      "textures/floor/WoodFloor_NormalGL.jpg",
      "textures/floor/WoodFloor_Roughness.jpg",
      "textures/floor/WoodFloor_Displacement.jpg",
    ]);
  WoodFloor_Color.wrapS = WoodFloor_Color.wrapT = RepeatWrapping;
  WoodFloor_Color.repeat.set(3, 3);
  softShadows();
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[60, 60]} />
      <shadowMaterial attach="material" opacity={1} />
      <meshPhysicalMaterial
        receiveShadow
        map={WoodFloor_Color}
        side={DoubleSide}
        normalMap={WoodFloor_NormalGL}
        displacementMap={WoodFloor_Displacement}
        roughnessMap={WoodFloor_Roughness}
        // metalness={0.1}
        // roughness={0.1}
        displacementScale={10}
        repeat={20}
        // wireframe={true}
      />
      {/* <meshStandardMaterial attach="material" color="trasparent" /> */}
    </mesh>
  );
}
