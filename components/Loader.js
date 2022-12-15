import { Html, useProgress } from "@react-three/drei";
import React from "react";
import Image from "next/image";

import ProgressBar from "@ramonak/react-progress-bar";

//load image
const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};
let processing = false;
let count = 0;
function Loader({
  progressBarColor = "#A3EBB1",
  backgroundColor = "#Fff4",
  logoPath = "sponex-logo.svg",
}) {
  /* loader */
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log({ active, progress, errors, item, loaded, total });

  return (
    <Html>
      <div className=" flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-black ">
        <div className="">
          <Image
            loader={myLoader}
            src={"../../images/" + logoPath}
            alt="Logo of company"
            width={250}
            height={200}
          />
          {progress >= 0 && count < 3 && (
            <div className="ml-14">
              <ProgressBar
                completed={parseInt(progress)}
                width="150px"
                maxCompleted={10}
                animateOnRender={true}
                bgColor={progressBarColor}
                baseBgColor={backgroundColor}
              />
            </div>
          )}
          {progress == 0 && count++}
          {count >= 4 && (
            <div className="loadingtext ml-14 font-light text-white">Processing...</div>
          )}
        </div>
      </div>
    </Html>
  );
}

export default Loader;
