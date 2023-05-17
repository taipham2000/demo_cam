import { useInView } from "react-intersection-observer";
import IMG_CONTENT_PAGE3 from "../../assets/image/img-content-page3.png";
import IMG_CONTENT_PAGE31 from "../../assets/image/img-content-page31.png";
import IMG_CONTENT_PAGE32 from "../../assets/image/img-content-page32.png";
import Page4 from "./Page4";
export default function Page3_1() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div
    //  ref={ref}
    >
      {/* {inView ? ( */}
      <div className="background-page3 ">
        <div className="mt-16 style-form-page grid grid-cols-1 lg:grid-cols-3 gap-8 lg:p-[0_200px]">
          <div className="relative mt-3 mb-5 lg:col-span-1  style-form-page2">
            <div className="  flex flex-col justify-around items-center  ">
              <div className="lg:mt-14 lg:mb-5">
                <img src={IMG_CONTENT_PAGE3} className="" />
              </div>
              <div>
                <div className="title-img-cnt text-center">
                  e-SMKT to e-Gift Solutions
                </div>
                <div className="text-center text-img-page3 p-[0_30px] mt-4">
                  Applies OCR TECHNOLOGY automated bill reading for verify
                  scheme, customer reward and fuel your loyalty marketing
                  programs
                  <br />
                  <div className="mt-3"></div>
                  Optimizing consumer journey and collect consumer behavior for
                  better planning and close-engagement
                </div>
                <div className="text-center mt-8">
                  <button className="button-page3">See more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-5 flex flex-col justify-around items-center col-span-1 w-full style-form-page2 ">
            <div className="mt-5">
              <img src={IMG_CONTENT_PAGE3} />
            </div>
            <div>
              <div className="title-img-cnt text-center">Loyalty Marketing</div>
              <div className="text-center text-img-page3 p-[0_30px] mt-4">
                Add receipt capture features to your loyalty app and unlock
                instant purchase validation with valuable cross-basket insights.
              </div>
              <div className="text-center">
                <button className="button-page3">See more</button>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-5 flex flex-col justify-around items-center col-span-1 w-full style-form-page2 ">
            <div className="mt-5">
              <img src={IMG_CONTENT_PAGE3} />
            </div>
            <div>
              <div className="title-img-cnt text-center">AP Automation</div>
              <div className="text-center text-img-page3 p-[0_30px] mt-4">
                Launch Veryfi in days, not months, to eliminate manual data
                entry and unleash your team’s full potential.
              </div>
              <div className="text-center">
                <button className="button-page3">See more</button>
              </div>
            </div>
          </div>
        </div>
        <Page4 />
      </div>
      {/* ) : null} */}
    </div>
  );
}
