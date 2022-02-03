import { useRef, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function SpiningBox({ position, args, color, hoverColored, speed, materialCustum }) {
  const sponexTexture = useTexture("images/spnx_black.jpg");
  //hover and unhover state
  const [hovered, setHover] = useState(false);

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
      castShadow
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        map={sponexTexture}
        attach="material"
        color={hovered ? `${hoverColored}` : `${color}`}
      />
    </animated.mesh>
  );
}
