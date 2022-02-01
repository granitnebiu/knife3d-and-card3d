import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

export default function Letters({ letter }) {
  const divPos = useSpring({
    x: `${Math.floor(Math.random() * 320)}px`,
    y: `${Math.floor(Math.random() * 265)}px`,
  });
  const bindDivPos = useDrag((params) => {
    divPos.x.set(params.offset[0]);
    divPos.y.set(params.offset[1]);
  });
  return (
    <div>
      <animated.div {...bindDivPos()} style={{ x: divPos.x, y: divPos.y }}>
        <h1
          className={`text-violet hover:text-pink active:text-orange absolute cursor-pointer text-[150px] font-black `}
        >
          {letter}
        </h1>
      </animated.div>
    </div>
  );
}
