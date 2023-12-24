import titlesponsor from "../images/titlesponsor.jpg";
import style from "./sponsor.module.css";
import DAZZLINGDEALS from "../images/DAZZLINGDEALS.jpg";
const Sponsor = () => {
  return (
    <>
      <img src={titlesponsor} alt="..." className={style.titlesponsor} />
      <img src={DAZZLINGDEALS} alt=".." className={style.DAZZLINGDEALS} />
    </>
  );
};
export default Sponsor;
