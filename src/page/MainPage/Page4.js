import IMAGE_PAGE4 from "../../assets/image/image-page4.png";

export default function Page4() {
  return (
    <div>
      <div className=" text-page3-content lg:mt-16 uppercase text-black text-center">
        Unlock your data <br />
        in 3 simple steps
      </div>
      <div className="flex justify-center ">
        <img
          src={IMAGE_PAGE4}
          className="mt-8 lg:mt-16 w-[69%] lg:mb-[200px]"
        />
      </div>
    </div>
  );
}
