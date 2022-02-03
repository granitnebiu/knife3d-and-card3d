import { useRef, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function SpiningBox({ position, args, color, hoverColored, speed, materialCustum }) {
  const rotationBox = useRef(null);
  const sponexTexture = useTexture("images/sponex-logo.jpg");
  //hover and unhover state
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    rotationBox.current.rotation.x = rotationBox.current.rotation.y += 0.01;
  });

  const [expand, setExpand] = useState(false);

  // let [bindHover, hovered] = useHover(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <animated.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      position={position}
      ref={rotationBox}
      castShadow
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        map={sponexTexture}
        attach="material"
        color={hovered ? `${hoverColored}` : `${color}`}
        speed={speed}
        factor={1}
      />
    </animated.mesh>
  );
}
