import { useInView } from "react-intersection-observer";
import Page3_1 from "./Page3_1";

export default function Page3() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className="mt-[80px] ">
      {/* {inView ? ( */}
      <div className="  uppercase text-center text-page2-content pl-8 pr-8">
        {/* Benefits you won't find
          <br />
          anywhere else */}
        {/* <span className="text-[#3AA3A5]">V</span> */}
        {/* <span className="text-[#3AA3A5]">A</span>
        <span className="text-[#3AA3A5]">L</span>
        <span className="text-[#3AA3A5]">U</span>
        <span className="text-[#3AA3A5]">E</span>
        <span className="text-[#688899]">D</span>&nbsp;
        <br className="div-enable" />
        <span className="text-[#688899]">S</span>
        <span className="text-[#807A92]">O</span>
        <span className="text-[#807A92]">L</span>
        <span className="text-[#9B6F8C]">U</span>
        <span className="text-[#9B6F8C]">T</span>
        <span className="text-[#BC6487]">I</span>
        <span className="text-[#BC6487]">O</span>
        <span className="text-[#C85F84]">N</span>
        <span className="text-[#C85F84]">S</span>&nbsp;
        <br className="div-enable" />
        <span className="text-[#D55B82]">F</span>
        <span className="text-[#D55B82]">R</span>
        <span className="text-[#E55680]">O</span>
        <span className="text-[#E55680]">M</span>&nbsp;
        <span className="text-[#E5557F]">M</span>
        <span className="text-[#E5557F]">V</span>
        <span className="text-[#E5557F]">C</span> */}
      </div>
      {/* ) : null} */}
      {/* <Page3_1 /> */}
    </div>
  );
}
