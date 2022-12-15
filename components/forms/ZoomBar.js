import { useState } from "react";
import useStore from "stores/defaultStore";

export default function ZoomBar() {
  //   const [count, setCount] = useState(0);
  const count = useStore((state) => state.Model.count);
  const handleCount = useStore((state) => state.Model.handleCount);

  //   const maxDistance = (event) => {
  //     setCount(count + 1);
  //   };

  //   const minDistance = () => {
  //     setCount(count - 1);
  //   };

  return (
    <div className="zoom-wrapper">
      <div className="zoom-bar">
        <button
          className="button-zoom text-5xl text-red-600"
          id="zoom-out"
          onClick={() => handleCount(-1)}
        >
          -
        </button>
        <button
          className="button-zoom text-5xl text-red-600"
          id="zoom-in"
          onClick={() => handleCount(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
