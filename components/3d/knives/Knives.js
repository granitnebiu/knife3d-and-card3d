import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, softShadows, Environment, Stars, Line } from "@react-three/drei";
import useStore from "../../../stores/defaultStore";

import PlaneFloorKnives from "./PlaneFloorKnives";
import Lights from "../../lights";
import Loader from "../../Loader";
import Menu from "@/Menu";
import RotationButton from "@/forms/RotationButton";
import ZoomBar from "@/forms/ZoomBar";
import ModelKnives from "../../ModelKnives";

softShadows();

export default function Knives() {
  // const [autoRotate, setAutoRotate] = useState(true);
  const lightMode = useStore((state) => state.Model.lightMode);
  const autoPlay = useStore((state) => state.Model.autoPlay);
  const count = useStore((state) => state.Model.count);

  return (
    <div className="car-3d-model">
      <Canvas shadows camera={{ fov: 45 }} className={` ${lightMode ? "bg-white" : " bg-black "}`}>
        <Suspense fallback={<Loader />}>
          {!lightMode && (
            <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
          )}
          <fog position={[0, 0, 0]} attach="fog" args={[lightMode ? "#fff" : "#000", 10, 55]} />
          <Lights />
          <ModelKnives />
          <PlaneFloorKnives />
          <OrbitControls
            autoRotate={autoPlay}
            makeDefault
            // minPolarAngle={1}
            // //don't let it go under the plane
            // maxPolarAngle={Math.PI / 2.5}
            enableZoom={true}
            enablePan={false}
            maxDistance={count}
            minDistance={count}
            // maxAzimuthAngle={Math.PI / 4}
            // minAzimuthAngle={-Math.PI / 4}
            target={[0, 5, 0]}
          />
          <Html
            position={[5, 8.5, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            <Menu />
          </Html>
          <Line
            points={[
              [5, 8, 0],
              [1, 5, 0],
            ]}
            color={` ${lightMode ? "bg-white" : " bg-black "}`}
            lineWidth={1}
          />
          {/* button open close  */}
          <Html position={[1, 3, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
            <RotationButton />
            <ZoomBar />
          </Html>
          {/* line for button  */}

          <Line
            points={[
              [0, 5, 0],
              [0, 2, 0],
              [2, 2, 0],
            ]}
            color="white"
            lineWidth={1}
          />
          <Environment
            background={false} // Whether to affect scene.background
            // files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]} // Array of cubemap files OR single equirectangular file
            // path={"/"} // Path to the above file(s)
            preset={"city"} // Preset string (overrides files and path)
            scene={undefined} // adds the ability to pass a custom THREE.Scene
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
