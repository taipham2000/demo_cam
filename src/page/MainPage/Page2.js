import { useInView } from "react-intersection-observer";
import IMG_PAGE_I1 from "../../assets/image/img-page2-i1.png";
import IMG_PAGE_I2 from "../../assets/image/img-page2-i2.png";
import IMG_PAGE_I3 from "../../assets/image/img-page2-i3.png";
export default function Page2() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className="p-[0_20px]">
      <div className="flex justify-center uppercase text-center text-page2-content pl-9 pr-9">
        Benefits you won't find
        <br />
        anywhere else
      </div>
      <div
        ref={ref}
        className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:p-[0_200px]"
      >
        {inView ? (
          <>
            <div className=" flex-col  items-center lg:col-span-1 flex justify-center">
              <img
                src={IMG_PAGE_I1}
                className="image-page2 image-page2-first w-4/5 h-4/5"
                alt="resource"
              />
              <div className="mt-5 font-text-pgae2">Digitalization</div>
            </div>
            <div className=" flex-col  items-center lg:col-span-1 flex justify-center">
              <img
                src={IMG_PAGE_I2}
                className="image-page2 image-page2-second w-4/5 h-4/5"
              />
              <div className="mt-5 font-text-pgae2">Development</div>
            </div>
            <div className="flex flex-col  items-center lg:col-span-1 justify-center">
              <img
                src={IMG_PAGE_I3}
                className="image-page2 image-page2-third w-4/5 h-4/5"
              />
              <div className="mt-5 font-text-pgae2 ">Innovation</div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-14 animate-page2 one  uppercase text-center text-page2-content pl-8 pr-8">
        VALUED SOLUTIONS <br className="div-enable" />
        FROM MVC TECH
      </div>
    </div>
  );
}
