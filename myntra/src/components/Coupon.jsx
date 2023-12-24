import leftcoupon from "../images/leftcoupon.jpg";
import rightcoupon from "../images/rightcoupon.jpg";
import style from "./Coupon.module.css";

const Coupon = () => {
  return (
    <>
      <div className={style.covercoupon}>
        <div>
          <img src={leftcoupon} alt=".." className={style.leftcoupon} />
        </div>
        <div>
          <img src={rightcoupon} alt=".." className={style.rightcoupon} />
        </div>
      </div>
    </>
  );
};
export default Coupon;
