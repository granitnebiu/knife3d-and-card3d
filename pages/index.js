import Letters from "../components/letters";
import ThreeD from "../components/3d/threeD";
import TextCustum from "../components/3d/TextCustum";
import NewBox from "../components/3d/NewBox";
import BoxTest from "../components/3d/BoxTest";

export default function Home() {
  return (
    <div className="bg-darkblue relative h-screen w-screen touch-none">
      <div className="left-25 leftCustom absolute top-52 left-1/2 flex gap-28">
        <Letters letter="E" />
        <Letters letter="X" />
        <Letters letter="P" />
        <Letters letter="S" />
        <Letters letter="O" />
        <Letters letter="N" />
      </div>

      <div className="flex h-full  w-full items-center justify-center">
        <h1 className="textstrok flex h-full items-center justify-center text-[150px] font-black text-transparent">
          SPONEX
        </h1>
        <div className="absolute bottom-48">
          <p className=" text-violet flex h-full items-center justify-center text-xl  font-bold">
            <span className="text-pink hover:text-orange italic tracking-wide">Drag</span>
            and
            <span className="text-pink hover:text-orange italic tracking-wide ">Drop</span>
            the letters
          </p>
        </div>
      </div>
      <div className="">
        <ThreeD />
      </div>
      <div className="">
        <TextCustum />
      </div>
      <div className="">
        <NewBox />
      </div>
      <div className="">
        <BoxTest />
      </div>
    </div>
  );
}
