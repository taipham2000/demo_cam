import COMPUTER_PAGE_5 from "../../assets/image/computer-page-5.png";
import WINDOWN_PAGE_5 from "../../assets/image/windown-page-5.png";
export default function Page5() {
  return (
    <div>
      <div className="mt-16 text-left text-page-5 flex justify-center">
        Complementary products from <br />
        Veryfi to easily add superpowers to <br />
        your app.
      </div>
      <div className="relative grid lg:grid-cols-2 px-16">
        <div className="col-span-1 lg:ml-8">
          <div>
            <img src={COMPUTER_PAGE_5} className="mt-4" />
          </div>
          <div className="text-page-5 mt-4">OCR API Platform</div>
          <div className="lg:w-1/2 mt-2">
            The fastest, most accurate OCR APIs on the market support Receipts,
            Invoices, W-2s, and plenty of other documents.
          </div>
        </div>

        <div className="col-span-1 mt-16 lg:mt-[250px]">
          <div>
            <img src={WINDOWN_PAGE_5} className="mt-4" />
          </div>
          <div className="text-page-5 mt-4">
            Lens Mobile Capture <br />
            Framework
          </div>
          <div className="lg:w-1/2 mt-2">
            Mobile framework for enhancing your mobile app’s document capture
            capabilities.
          </div>
        </div>
      </div>
    </div>
  );
}
