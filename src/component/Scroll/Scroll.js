import UP_SCROLL from "../../assets/image/up-scroll.png";

export default function Scroll(onClick) {
  return (
    <div className="scroll-ocr" onClick={onClick}>
      <img src={UP_SCROLL} />
    </div>
  );
}
