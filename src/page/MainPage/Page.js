import "./Page.css";
import IMG_PAGE1 from "../../assets/image/img-page1.png";
import IMG_PAGE_RIGHT from "../../assets/image/img-page1-right.png";
import IMG_PAGE_I1 from "../../assets/image/img-page2-i1.png";
import IMG_PAGE_I2 from "../../assets/image/img-page2-i2.png";
import IMG_PAGE_I3 from "../../assets/image/img-page2-i3.png";
import IMG_CONTENT_PAGE3 from "../../assets/image/img-content-page3.png";
import IMG_CONTENT_PAGE31 from "../../assets/image/img-content-page31.png";
import IMG_CONTENT_PAGE32 from "../../assets/image/img-content-page32.png";

import BACKGROUND_PAGE3 from "../../assets/image/background-page3.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page3_1 from "./Page3_1";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Scroll from "../../component/Scroll/Scroll";
import UP_SCROLL from "../../assets/image/up-scroll.png";

export default function Page() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      console.log(1);
      setVisible(true);
    } else if (scrolled <= 300) {
      console.log(2);

      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="mt-[90px]">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page3_1 />
      <Page5 />
      <Page6 />
      <Page7 />
      {visible ? (
        <div className="scroll-ocr" onClick={scrollToTop}>
          <img src={UP_SCROLL} className="w-7 m-1" />
        </div>
      ) : null}
    </div>
  );
}
