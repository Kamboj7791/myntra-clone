import shop1 from "../images/shop1.jpg";
import shop2 from "../images/shop2.jpg";
import shop3 from "../images/shop3.jpg";
import shop4 from "../images/shop4.jpg";
import shop5 from "../images/shop5.jpg";
import shop6 from "../images/shop6.jpg";
import shop7 from "../images/shop7.jpg";
import shop8 from "../images/shop8.jpg";
import shop9 from "../images/shop9.jpg";
import shop10 from "../images/shop10.jpg";
import shop11 from "../images/shop11.jpg";
import shop12 from "../images/shop12.jpg";
import shop13 from "../images/shop13.jpg";
import shop14 from "../images/shop14.jpg";
import shop15 from "../images/shop15.jpg";
import shop16 from "../images/shop16.jpg";
import shop17 from "../images/shop17.jpg";
import shop18 from "../images/shop18.jpg";
import shop19 from "../images/shop19.jpg";
import shop20 from "../images/shop20.jpg";
import shop21 from "../images/shop21.jpg";
import shop22 from "../images/shop22.jpg";
import shop23 from "../images/shop23.jpg";
import shop24 from "../images/shop24.jpg";
import shop25 from "../images/shop25.jpg";
import shop26 from "../images/shop26.jpg";
import shop27 from "../images/shop27.jpg";
import shop28 from "../images/shop28.jpg";
import shop29 from "../images/shop29.jpg";
import shop30 from "../images/shop30.jpg";
import shop305 from "../images/shop305.jpg";
import shop31 from "../images/shop31.jpg";
import shop32 from "../images/shop32.jpg";
import shop33 from "../images/shop33.jpg";
import shop335 from "../images/shop335.jpg";
import style from "./Shopinput.module.css";
let shoparr = [
  shop1,
  shop2,
  shop3,
  shop4,
  shop5,
  shop6,
  shop7,
  shop8,
  shop9,
  shop10,
  shop11,
  shop12,
  shop13,
  shop14,
  shop15,
  shop16,
  shop17,
  shop18,
  shop19,
  shop20,
  shop21,
  shop22,
  shop23,
  shop24,
  shop25,
  shop26,
  shop27,
  shop28,
  shop29,
  shop30,
  shop305,
  shop31,
  shop32,
  shop33,
  shop335,
];
const Shopinput = () => {
  return (
    <>
      {shoparr.map((item, index) => (
        <img src={item} className={style.shopimg} key={index} alt=".." />
      ))}
    </>
  );
};
export default Shopinput;
