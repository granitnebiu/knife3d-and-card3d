import useStore from "/stores/defaultStore";

export default function Buttons() {
  const lightMode = useStore((state) => state.Model.lightMode);
  const handleLightMode = useStore((state) => state.Model.handleLightMode);

  const autoPlay = useStore((state) => state.Model.autoPlay);
  const handleAutoPlay = useStore((state) => state.Model.handleAutoPlay);
  return (
    <div className="mx-auto flex flex-row-reverse flex-wrap lg:w-full lg:px-12 xl:container xl:px-0 ">
      <div className=" relative mx-auto w-full lg:pl-8">
        <div className="absolute right-2 p-4">
          <div className="flex flex-wrap pt-2">
            <div className="flex flex-col gap-y-8">
              <label htmlFor="toggle2" className="switch_icons">
                <input
                  onChange={handleAutoPlay}
                  className="input cursor-pointer select-none"
                  type="checkbox"
                  id="toggle2"
                  checked={autoPlay}
                />
                {/* <span className="slider round"></span> */}
                <span className={`${autoPlay ? "active" : ""} play_On__Off`}></span>
                {/* <p className={`-ml-40 -mt-5 whitespace-nowrap font-light select-none ${darkMode ? "text-white" : ""} cursor-pointer`}>Lecture automatique</p> */}
              </label>
              <label htmlFor="toggle" className="switch_icons">
                <input
                  onClick={handleLightMode}
                  className="input cursor-pointer select-none"
                  type="checkbox"
                  id="toggle"
                />
                {/* <span className="slider round"></span> */}
                <span className={`${lightMode ? "" : "active"} nightMode_On__Off`}></span>

                {/* <p className={`-ml-28 -mt-5 whitespace-nowrap font-light  select-none ${darkMode ? "text-white" : ""} cursor-pointer`}>{darkMode ? "Mode éclairé" : "Mode sombre"}</p> */}
              </label>
            </div>
            {/* <div className="w-full">
                <Link href="http://localhost:3000/services/configurateurs-de-produits-3d/watch-3d">
                  <ButtonWhite title="See more" />
                </Link>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
