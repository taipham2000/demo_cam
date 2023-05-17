import "./Page.css";
import IMG_PAGE1 from "../../assets/image/img-page1.png";
import IMG_PAGE_RIGHT from "../../assets/image/img-page1-right.png";
export default function Page1() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-3">
        <div className="img-page1 col-span-1">
          <img src={IMG_PAGE1} className="w-134 image-animate-page1" />
        </div>
        <div className="text-ani-1 text-page1-item col-span-3 flex flex-col justify-center pl-9 pr-9">
          OCR API Platform for
          <br /> Real-Time Data <br /> Extraction
          <div className="text-ani-3 text-page1-content">
            Veryfi OCR APIs empower you to seamlessly transform unstructured
            documents into valuable business insights.
          </div>
        </div>

        <div className="col-span-3 pl-9 pr-9 ani-img-page1">
          <img src={IMG_PAGE_RIGHT} className="w-[90%]" />
        </div>
      </div>
    </>
  );
}
