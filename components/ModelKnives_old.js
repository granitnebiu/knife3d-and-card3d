import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import useStore from "/stores/defaultStore";
import { useSpring, animated } from "@react-spring/three";

function ModelKnives({ args, position, props }) {
  const gltf = useLoader(GLTFLoader, "./models/knives/scene.gltf");
  const rotationY = useStore((state) => state.Model.rotationY);
  const rotationX = useStore((state) => state.Model.rotationX);
  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  const rotation = spring.to([0, 5], [0, Math.PI]);

  const mesh = useRef();
  useFrame(() => (rotationX ? (mesh.current.rotation.x += 0.01) : ""));
  useFrame(() => (rotationY ? (mesh.current.rotation.y += 0.01) : ""));
  return (
    <>
      <animated.primitive
        ref={mesh}
        castShadow={true}
        receiveShadow
        position={[5, 5, 0]}
        object={gltf.scene}
        scale={2}
        rotation-x={rotation}
        onClick={() => setActive(Number(!active))}
      />
    </>
  );
}

export default ModelKnives;
