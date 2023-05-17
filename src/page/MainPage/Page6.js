import UPLOAD from "../../assets/image/upload.png";
import IMG_UPLOAD_OCR from "../../assets/image/img-ocr-upload.png";
import THANH_NGANG from "../../assets/image/thanh-ngang.png";
import { useEffect, useRef, useState } from "react";
import IMG_CONTENT_OCR from "../../assets/image/img-content-ocr.png";
import ReactJson from "react-json-view";
import Compressor from "compressorjs";
import { apiNodeJS } from "../../api/apiNode";
import { URL_API_UPLOAD_GCS } from "../../component/constants/URLConstant";
import { format } from "date-fns";
import uuid from "react-uuid";
import { OCR_ENDPOINT } from "../../component/constants/KeyConstant";
import Modal from "react-modal";
import ReCAPTCHA from "react-google-recaptcha";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "0px",
  },
};
const customStylesPopup = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#E2E2E2",
    border: "0px",
    width: "48%",
  },
};
Modal.setAppElement("div");
export default function Page6() {
  const [current, setCurrent] = useState("1");
  const hanldeClick = (e, status_gifts) => {
    console.log(e.target.id);
    setCurrent(e.target.id);
  };
  const data = {
    customer_name: "Co.opmart Dong Xoai",
    counter: "5",
    cashier: "12727924-Yen",
    date_time: "16/05/2023 09:50:38",
    order_number: "42364",
    barcode: "",
    runtime: "2.37",
    product_list: [
      {
        barcode: "4902430787383",
        description: "NGDOwny bxanhtmat T3.05/",
        quantity: 2,
        unitPrice: "200,800",
        lineTotalNet: "401,600",
      },
      {
        barcode: "4902430787390",
        description: "NGDowny vhoatngat T3.05/",
        quantity: 2,
        unitPrice: "200,800",
        lineTotalNet: "401,600",
      },
      {
        barcode: "4987176114891",
        description: "DG H&S AntiBac sachgau 85",
        quantity: 1,
        unitPrice: "228,000",
        lineTotalNet: "228,000",
      },
      {
        barcode: "4902430787360",
        description: "NGDOwny bxanhtmat T3.05/",
        quantity: 2,
        unitPrice: "200,800",
        lineTotalNet: "401,600",
      },
      {
        barcode: "4902430787398",
        description: "NGDowny vhoatngat T3.05/",
        quantity: 2,
        unitPrice: "200,800",
        lineTotalNet: "401,600",
      },
      {
        barcode: "4987176114878",
        description: "DG H&S AntiBac sachgau 85",
        quantity: 1,
        unitPrice: "228,000",
        lineTotalNet: "228,000",
      },
      {
        barcode: "4902430787342",
        description: "NGDOwny bxanhtmat T3.05/",
        quantity: 2,
        unitPrice: "200,800",
        lineTotalNet: "401,600",
      },
      {
        barcode: "4902430787345",
        description: "NGDowny vhoatngat T3.05/",
        quantity: 2,
        unitPrice: "200,800",
        lineTotalNet: "401,600",
      },
      {
        barcode: "4987176114867",
        description: "DG H&S AntiBac sachgau 85",
        quantity: 1,
        unitPrice: "228,000",
        lineTotalNet: "228,000",
      },
    ],
    promotion: true,
    received_creceipt_datetime: "2023-05-16 09:54:42",
    response_result_datetime: "2023-05-16 09:54:44",
    chain: "coopmart",
  };
  const [loading, setloading] = useState(false);

  let refInputUpload = useRef(null);
  const [imageFile, setimageFile] = useState(undefined);
  console.log(imageFile);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenCapCha, setIsOpenCapCha] = useState(false);
  console.log(modalIsOpenCapCha);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    console.log(23);
    if (imageFile !== undefined) {
      setIsOpenCapCha(true);
    }
  }, [imageFile]);
  const [dataCapcha, setDataCapcha] = useState(null);
  console.log(dataCapcha);
  function onChangeCapCha(value) {
    console.log("Captcha value:", value);

    if (value) {
      setDataCapcha(value);
    }
  }
  useEffect(() => {
    console.log(23);
    if (dataCapcha !== null) {
      // console.log(123);
      pushImageToGCS();
      setTimeout(() => {
        console.log(123);
        setIsOpenCapCha(false);
        setIsOpen(true);
      }, 1000);
    } else {
      setIsOpenCapCha(false);
    }
  }, [dataCapcha]);
  const a = localStorage.getItem("_grecaptcha");
  console.log(a);
  const handleChangeImage = (event) => {
    // setDataCapcha(null);
    // localStorage.removeItem("_grecaptcha");
    let fileUploaded = event.target.files[0];
    const fileUploadedSize = fileUploaded.size / 1024 / 1024;
    if (fileUploadedSize > 20) {
      new Compressor(fileUploaded, {
        quality: 0.4, // 0.6 can also be used, but its not recommended to go below.
        success: (res) => {
          setimageFile(res);
        },
      });
    } else if (fileUploadedSize > 10 && fileUploadedSize <= 20) {
      new Compressor(fileUploaded, {
        quality: 0.5, // 0.6 can also be used, but its not recommended to go below.
        success: (res) => {
          setimageFile(res);
        },
      });
    } else if (fileUploadedSize > 6 && fileUploadedSize <= 10) {
      new Compressor(fileUploaded, {
        quality: 0.7, // 0.6 can also be used, but its not recommended to go below.
        success: (res) => {
          setimageFile(res);
        },
      });
    } else if (fileUploadedSize > 3 && fileUploadedSize <= 6) {
      new Compressor(fileUploaded, {
        quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
        success: (res) => {
          setimageFile(res);
        },
      });
    } else {
      setimageFile(fileUploaded);
    }
  };

  // useEffect(() => {
  //   imageFile && pushImageToGCS();
  // }, [imageFile]);

  const [dataOCR, setDataOCR] = useState();
  const pushImageToGCS = () => {
    setloading(true);
    let formDataGCS = new FormData();
    formDataGCS.append("file", imageFile);
    formDataGCS.append(
      "fileName",
      uuid() +
        "_" +
        format(new Date(), "dd-MM-yyyy-HH-mm-ss") +
        "_" +
        imageFile.name
    );
    formDataGCS.append("ocrBase", OCR_ENDPOINT);

    apiNodeJS.postUploadToNode(URL_API_UPLOAD_GCS, formDataGCS).then((res) => {
      console.log(res.data);
      setDataOCR(JSON.parse(res.data));

      localStorage.setItem("GCS_RESULT", JSON.stringify(res));
    });
  };

  // useEffect(() => {
  //   if (dataCapcha !== undefined) {
  //     setTimeout(() => {
  //       setIsOpenCapCha(false);
  //       setIsOpen(true);
  //     }, 1500);
  //   }
  // }, [dataCapcha !== null]);
  const handleSubmit = () => {
    setIsOpen(false);
    setIsOpenCapCha(false);
  };
  return (
    <div>
      <div style={{ display: "none" }}>
        <Modal
          isOpen={modalIsOpenCapCha}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={customStyles}
          allowFullScreen={true}
          contentLabel="Example Modal"
        >
          {/* <ReCAPTCHA
            sitekey="6LdKwBMmAAAAAJZ1-QIMWLAfrQFopUMn2oflZyMx"
            onChange={onChangeCapCha}
          /> */}
          <GoogleReCaptchaProvider reCaptchaKey="[6LdKwBMmAAAAAJZ1-QIMWLAfrQFopUMn2oflZyMx]"></GoogleReCaptchaProvider>
        </Modal>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStylesPopup}
        ariaHideApp={false}
        allowFullScreen={true}
        contentLabel="Popup name"
      >
        <h2
          // ref={(_subtitle) => (subtitle = _subtitle)}
          className="text-popup-name"
        >
          You just saved
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div className="text-popup-name">
          {" "}
          of manual receipt data entry with Veryfi!
        </div>
        {/* <form> */}
        <div className="label-input">Name:</div>
        <input type="text" className="w-full mt-2 h-10 rounded-md" />

        <div className="label-input mt-4">Phone:</div>
        <input type="text" className="w-full mt-2 h-10 rounded-md" />

        <div className="mt-4 label-input">Email:</div>
        <input
          type="text"
          placeholder="example@gmail.com"
          className="w-full mt-2 h-10 rounded-md"
        />
        <div className="w-full flex justify-center mt-5">
          <button
            className="mt-5 flex justify-center backgr-button-input"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
        {/* <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button> */}
        {/* </form> */}
      </Modal>
      <div className="text-center text-page2-content uppercase leading-[50px] mt-6 lg:mt-16">
        Process your docs in less time
        <br /> than it takes to read this
        <br />
        <div className="mt-10"></div>
        See for yourself.
      </div>
      <div className=" w-full lg:px-[200px] px-10 mt-16">
        <div className="table-ocr-contain w-full">
          <div className="flex justify-center ">
            <input
              type="file"
              hidden
              id="actual-btn"
              className="w-full"
              style={{ display: "none" }}
              onChange={(e) => handleChangeImage(e)}
              capture
              accept="image/*"
              ref={refInputUpload}
            />
            <label
              htmlFor="actual-btn"
              className="button-choose-file w-full m-8 flex justify-center"
            >
              <img src={UPLOAD} className="w-7 h-9 mt-2" />
              <div className="font-regular text-upload ml-5">
                <div>Drag or upload receipt</div>
                <div>[JPEG, PNG or PDF]</div>
              </div>
            </label>
          </div>
          <div className="mx-8 grid lg:grid-cols-7">
            <div className="col-span-2 ">
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  className="image-scale-upload mb-10"
                />
              ) : (
                <img
                  src={IMG_UPLOAD_OCR}
                  className="image-scale-upload mb-10"
                />
              )}
            </div>
            <div className="background-img-json col-span-5">
              <div className="tab flex justify-center mb-4">
                <div>
                  <button
                    key="1"
                    id={1}
                    disabled={current === `${1}`}
                    className="mr-20 text-upload-ocr flex flex-col items-center "
                    onClick={(e) => hanldeClick(e, "1")}
                  >
                    Visualized Data
                    {current === `${1}` ? <img src={THANH_NGANG} /> : null}
                  </button>
                </div>
                <button
                  key="2"
                  id={2}
                  disabled={current === `${2}`}
                  className="flex flex-col items-center "
                  onClick={(e) => hanldeClick(e, "2")}
                >
                  Visualized Data
                  {current === `${2}` ? <img src={THANH_NGANG} /> : null}
                </button>
              </div>
              {/* <div className="background-img-jsonupload mb-8 rounded-3xl"> */}
              {current === `${1}` ? (
                <div className="background-img-jsonupload mb-8 rounded-3xl h-[800px] max-h-full overflow-y-auto upload-scroll">
                  <div className="p-7 text-[13px] leading-4">
                    {/* <div className="flex font-thin flex-col items-center justify-center">
                      <img src={IMG_CONTENT_OCR} className="" />
                      <div className="mt-3">{data.customer_name}</div>
                    </div> */}
                    <div>
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="col-span-1 flex font-thin flex-col items-center justify-center">
                          <img src={IMG_CONTENT_OCR} className="" />
                          <div className="mt-3 text-center">
                            {dataOCR
                              ? dataOCR.customer_name
                              : data.customer_name}
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="flex w-full py-1 pt-4">
                            <div className="text-left font-regular">
                              Store Name:
                            </div>
                            <div className="ml-auto">
                              {dataOCR
                                ? dataOCR.customer_name
                                : data.customer_name}
                            </div>
                          </div>
                          <div className="flex w-full py-1">
                            <div className="text-left font-regular">
                              Receipt No:
                            </div>
                            <div className="ml-auto">
                              {dataOCR
                                ? dataOCR.order_number
                                : data.order_number}
                            </div>
                          </div>
                          <div className="flex w-full py-1">
                            <div className="text-left font-regular">
                              Counter:
                            </div>
                            <div className="ml-auto">
                              {dataOCR ? dataOCR.counter : data.counter}
                            </div>
                          </div>
                          <div className="flex w-full py-1">
                            <div className="text-left font-regular">
                              Receipt Date:
                            </div>
                            <div className="ml-auto">
                              {dataOCR ? dataOCR.date_time : data.date_time}
                            </div>
                          </div>
                          <div className="flex w-full py-1">
                            <div className="text-left font-regular">
                              Cashier:
                            </div>
                            <div className="ml-auto">
                              {dataOCR ? dataOCR.cashier : data.cashier}
                            </div>
                          </div>
                          <div className="flex w-full py-1">
                            <div className="text-left font-regular">Chain:</div>
                            <div className="ml-auto">
                              {dataOCR ? dataOCR.chain : data.chain}
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table-fixed mt-8 h-4 w-full border-table">
                        <thead className=" title-table ">
                          <tr className=" ">
                            <th className="text-left py-2 w-6/12">Item</th>
                            <th className="text-right py-2 w-2/12">QTY</th>
                            <th className="text-right py-2 w-2/12">Price</th>
                            <th className="text-right py-2 w-2/12">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataOCR
                            ? dataOCR?.product_list?.map((e, index) => (
                                <>
                                  {index % 2 ? (
                                    <>
                                      <tr
                                        className="h-[78px] bg-[#ffffff] "
                                        key={e.barcode}
                                      >
                                        <td className="w-14 ">{e.barcode}</td>
                                        <td className="text-right">
                                          {e.quantity}
                                        </td>
                                        <td className="text-right">
                                          {e.unitPrice}
                                        </td>
                                        <td className="text-right">
                                          {e.lineTotalNet}
                                        </td>
                                      </tr>
                                      <td
                                        className="-mt-7 flex w-80 "
                                        key={e.barcode}
                                      >
                                        <div className="font-regular">
                                          Description:
                                        </div>
                                        <div className="ml-2 w-80">
                                          {" "}
                                          {e.description}
                                        </div>
                                      </td>
                                    </>
                                  ) : (
                                    <>
                                      <tr
                                        className="h-[78px] bg-[#F2F2F2]"
                                        key={e.barcode}
                                      >
                                        <td className="w-14">{e.barcode}</td>
                                        <td className="text-right">
                                          {e.quantity}
                                        </td>
                                        <td className="text-right">
                                          {e.unitPrice}
                                        </td>
                                        <td className="text-right">
                                          {e.lineTotalNet}
                                        </td>
                                      </tr>
                                      <td
                                        className="-mt-7 flex w-full "
                                        key={e.barcode}
                                      >
                                        <div className="font-regular">
                                          Description:
                                        </div>
                                        <div className="ml-2 w-full">
                                          {" "}
                                          {e.description}
                                        </div>
                                      </td>
                                    </>
                                  )}
                                </>
                              ))
                            : data?.product_list?.map((e, index) => (
                                <>
                                  {index % 2 ? (
                                    <>
                                      <tr
                                        className="h-[78px] bg-[#ffffff] "
                                        key={e.barcode}
                                      >
                                        <td className="w-14 ">{e.barcode}</td>
                                        <td className="text-right">
                                          {e.quantity}
                                        </td>
                                        <td className="text-right">
                                          {e.unitPrice}
                                        </td>
                                        <td className="text-right">
                                          {e.lineTotalNet}
                                        </td>
                                      </tr>
                                      <td
                                        className="-mt-7 flex w-80 "
                                        key={index}
                                      >
                                        <div className="font-regular">
                                          Description:
                                        </div>
                                        <div className="ml-2 w-80">
                                          {" "}
                                          {e.description}
                                        </div>
                                      </td>
                                    </>
                                  ) : (
                                    <>
                                      <tr
                                        className="h-[78px] bg-[#F2F2F2]"
                                        key={e.barcode}
                                      >
                                        <td className="w-14">{e.barcode}</td>
                                        <td className="text-right">
                                          {e.quantity}
                                        </td>
                                        <td className="text-right">
                                          {e.unitPrice}
                                        </td>
                                        <td className="text-right">
                                          {e.lineTotalNet}
                                        </td>
                                      </tr>
                                      <td
                                        className="-mt-7 flex w-full "
                                        key={index}
                                      >
                                        <div className="font-regular">
                                          Description:
                                        </div>
                                        <div className="ml-2 w-full">
                                          {" "}
                                          {e.description}
                                        </div>
                                      </td>
                                    </>
                                  )}
                                </>
                              ))}
                        </tbody>
                      </table>

                      <div className="total-bill-ocr">
                        <div className="flex w-full py-1 pt-4">
                          <div className="text-left font-regular">
                            Total Before Discount:
                          </div>
                          <div className="ml-auto">1,799,000</div>
                        </div>
                        <div className="flex w-full py-1">
                          <div className="text-left font-regular">
                            Total Discount:
                          </div>
                          <div className="ml-auto">1,799,000</div>
                        </div>
                        <div className="flex w-full py-1">
                          <div className="text-left font-regular">
                            Total Gross:
                          </div>
                          <div className="ml-auto">1,799,000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="font-[13px] background-img-jsonupload mb-8 rounded-3xl h-[800px] max-h-full overflow-y-auto upload-scroll">
                  <div className="p-8">
                    <ReactJson
                      src={dataOCR ? dataOCR : data}
                      displayDataTypes={false}
                      displayObjectSize={false}
                    />
                  </div>
                </div>
              )}
              {/* <div className="p-7 text-[13px] leading-4">
                  <div className="flex font-thin flex-col items-center justify-center">
                    <img src={IMG_CONTENT_OCR} className="" />
                    <div className="mt-3">{data.customer_name: data.}</div>
                  </div>
                  <div>
                    <div>
                      <div className="flex w-full py-1 pt-4">
                        <div className="text-left">Store Name:</div>
                        <div className="ml-auto">{data.customer_name}</div>
                      </div>
                      <div className="flex w-full py-1">
                        <div className="text-left">Receipt No:</div>
                        <div className="ml-auto">{data.order_number}</div>
                      </div>
                      <div className="flex w-full py-1">
                        <div className="text-left">Counter:</div>
                        <div className="ml-auto">{data.counter}</div>
                      </div>
                      <div className="flex w-full py-1">
                        <div className="text-left">Receipt Date:</div>
                        <div className="ml-auto">{data.date_time}</div>
                      </div>
                      <div className="flex w-full py-1">
                        <div className="text-left">Cashier:</div>
                        <div className="ml-auto">{data.cashier}</div>
                      </div>
                      <div className="flex w-full py-1">
                        <div className="text-left">Chain:</div>
                        <div className="ml-auto">{data.chain}</div>
                      </div>
                    </div>
                    <table className="table-fixed mt-8 h-4 w-full">
                      <thead className="border-y-2 ">
                        <tr className=" ">
                          <th className="text-left py-2 w-4/12">Item</th>
                          <th className="text-right py-2 w-2/12">Qty</th>
                          <th className="text-right py-2 w-2/12">Price</th>
                          <th className="text-right py-2 w-2/12">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.product_list?.map((e, index) => (
                          <>
                            <tr className="h-16" key={e.barcode}>
                              <td className="w-14">{e.barcode}</td>
                              <td className="text-right">{e.quantity}</td>
                              <td className="text-right">{e.unitPrice}</td>
                              <td className="text-right">{e.lineTotalNet}</td>
                            </tr>
                            <td className="-mt-2 flex w-80 ">
                              <div className="font-regular">Description:</div>
                              <div className="ml-2 w-72"> {e.description}</div>
                            </td>
                          </>
                        ))}
                        
                      </tbody>
                    </table>

                    <div className="border-t-2">
                      <div className="flex w-full py-1 pt-4">
                        <div className="text-left">Total Before Discount:</div>
                        <div className="ml-auto">1799000</div>
                      </div>
                      <div className="flex w-full py-1">
                        <div className="text-left">Total Discount:</div>
                        <div className="ml-auto">1799000</div>
                      </div>
                      <div className="flex w-full py-1">
                        <div className="text-left">Total Gross:</div>
                        <div className="ml-auto">1799000</div>
                      </div>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
