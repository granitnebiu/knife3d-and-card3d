import { useRef, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

function useHover(stopPropagation = true) {
  const [hovered, setHover] = useState(false);
  const hover = useCallback((e) => {
    if (stopPropagation) e.stopPropagation();
    setHover(true);
  }, []);
  const unhover = useCallback((e) => {
    if (stopPropagation) e.stopPropagation();
    setHover(false);
  }, []);
  const [bind] = useState(() => ({
    onPointerOver: hover,
    onPointerOut: unhover,
  }));
  return [bind, hovered];
}

export default function SpiningBox({ position, args, color, hoverColored, speed, materialCustum }) {
  const rotationBox = useRef(null);

  useFrame(() => {
    rotationBox.current.rotation.x = rotationBox.current.rotation.y += 0.01;
  });

  const [expand, setExpand] = useState(false);

  let [bindHover, hovered] = useHover(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <animated.mesh
      onClick={() => setExpand(!expand)}
      {...bindHover}
      scale={props.scale}
      position={position}
      ref={rotationBox}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={hovered ? `${hoverColored}` : `${color}`}
        speed={speed}
        factor={1}
      />
    </animated.mesh>
  );
}
