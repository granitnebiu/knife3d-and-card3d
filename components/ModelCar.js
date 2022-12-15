import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function ModelCar({ args, position }) {
  const gltf = useLoader(GLTFLoader, "./models/3dCar/scene.gltf");
  return (
    <>
      <primitive
        castShadow={true}
        receiveShadow
        position={[0, 0, 0]}
        object={gltf.scene}
        scale={5}
      />
    </>
  );
}

export default ModelCar;
