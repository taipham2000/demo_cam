import MAP from "../../assets/image/map.png";
import LOGO_WHITE from "../../assets/image/logo-mvc-white.png";
import SOCIAL from "../../assets/image/social.png";
const contact = "(028) 3517 0278";
export default function Page7() {
  return (
    // <div className="mt-16">
    <div className="background-last mt-16 ">
      <div className="  flex flex-col items-center justify-center">
        <div className=" mt-[95px] mb-0 text-3xl text-white font-regular">
          Exploring MVC Journey
        </div>
        {/* <div> */}
        {/* <img src={MAP} className="w-2/5" /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.588471150336!2d106.68612754413057!3d10.797756311729952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d1b425d9bf%3A0x3dfc4512241cdf8b!2zNDggSG9hIE1haSwgUGjGsOG7nW5nIDIsIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1665637191042!5m2!1svi!2s"
          // width="100%"
          height="450"
          style={{
            marginTop: "20px",
            border: 0,
            width: "60%",
            borderRadius: "35px",
          }}
          // allowfullscreen="true"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          className="map-tech"
        ></iframe>
        {/* </div> */}
        <div className=" mt-3 mb-8 items-center w-2/3 grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="col-span-1">
            <div className="flex justify-center">
              <img src={LOGO_WHITE} className="w-32" />
            </div>
            <div className="flex justify-center file:-mt-3 text-white">
              © 2023 MVC | All rights reserved.
            </div>
          </div>
          <div className="flex justify-center col-span-1">
            <img src={SOCIAL} />
          </div>

          <div className="flex flex-col text-center justify-center col-span-1 text-white ml-8">
            <div className="mt-2 text-lg font-regular">Contact</div>
            <div className="w-full">
              Office: 48 Hoa Mai St., Ward 2 Phu Nhuan, HCMC
            </div>
            <div>
              Tel:
              <span>
                <a href={"tel:" + contact} className="text-blue-500">
                  {" "}
                  (028) 3517 0278
                </a>
              </span>{" "}
            </div>
            <div>Email: info@mvc.com.vn</div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
