import banner from "../images/banner.jpg";
import style from "./Banner.module.css";
const Banner = () => {
  return (
    <>
      <img src={banner} className={style.banner} alt=".." />
    </>
  );
};
export default Banner;
