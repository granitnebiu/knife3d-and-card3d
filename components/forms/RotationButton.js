import useStore from "/stores/defaultStore";

export default function RotationButton() {
  const lightMode = useStore((state) => state.Model.lightMode);
  const handleRotationY = useStore((state) => state.Model.handleRotationY);
  const handleRotationX = useStore((state) => state.Model.handleRotationX);
  const handleClose = useStore((state) => state.Model.handleClose);
  return (
    <div className="flex flex-col gap-y-8">
      <button
        type="button"
        className={` ${
          lightMode
            ? "border-1 w-28 border-black text-black outline outline-1 outline-black hover:outline-2"
            : "border-1 w-28 border-white text-white outline outline-1 outline-white hover:outline-2"
        }`}
        onClick={handleRotationY}
      >
        Rotation X
      </button>
      <button
        type="button"
        className={` ${
          lightMode
            ? "border-1 w-28 border-black text-black outline outline-1 outline-black hover:outline-2"
            : "border-1 w-28 border-white text-white outline outline-1 outline-white hover:outline-2"
        }`}
        onClick={handleRotationX}
      >
        Rotation Y
      </button>
      <button
        type="button"
        className={` ${
          lightMode
            ? "border-1 w-28 border-black text-black outline outline-1 outline-black hover:outline-2"
            : "border-1 w-28 border-white text-white outline outline-1 outline-white hover:outline-2"
        }`}
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
}
