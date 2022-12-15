import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, softShadows, Environment, Stars, Line } from "@react-three/drei";
import useStore from "../../../stores/defaultStore";

import PlaneFloorCar from "./PlaneFloorCar";
import Lights from "../../lights";
import ModelCar from "../../ModelCar";
import Loader from "../../Loader";
import Menu from "@/Menu";

softShadows();

function Car3D() {
  // const [autoRotate, setAutoRotate] = useState(true);
  const lightMode = useStore((state) => state.Model.lightMode);
  const autoPlay = useStore((state) => state.Model.autoPlay);

  return (
    <div className="car-3d-model">
      <Canvas
        shadows
        camera={{ position: [25, 2, 10], fov: 45 }}
        className={` ${lightMode ? "bg-black" : "bg-white "}`}
      >
        <Suspense fallback={<Loader />}>
          {lightMode && (
            <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
          )}
          <fog position={[0, 0, 0]} attach="fog" args={[lightMode ? "#000" : "#fff", 10, 55]} />
          <Lights />
          <ModelCar />

          <PlaneFloorCar />

          <OrbitControls
            autoRotate={autoPlay}
            makeDefault
            minPolarAngle={0}
            //don't let it go under the plane
            maxPolarAngle={Math.PI / 2.5}
            enableZoom={true}
            enablePan={false}
            maxDistance={50}
            minDistance={3.5}
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

export default Car3D;
