import drop1 from "../images/drop1.jpg";
import drop2 from "../images/drop2.jpg";
import drop3 from "../images/drop3.jpg";
import drop4 from "../images/drop4.jpg";
import drop5 from "../images/drop5.jpg";
import drop6 from "../images/drop6.jpg";
import drop7 from "../images/drop7.jpg";
import drop8 from "../images/drop8.jpg";
import drop9 from "../images/drop9.jpg";
import drop10 from "../images/drop10.jpg";
import style from "./Shopdrop.module.css";
const Shopdrop = () => {
  let drop = [
    drop1,
    drop2,
    drop3,
    drop4,
    drop5,
    drop6,
    drop7,
    drop8,
    drop9,
    drop10,
  ];
  return (
    <div className={style.dropcover}>
      {drop.map((item, index) => (
        <div key={index} className={style.dropcover}>
          <a href="#">
            <img src={item} className={style.dropimg} alt=".." />
          </a>
        </div>
      ))}
    </div>
  );
};
export default Shopdrop;
