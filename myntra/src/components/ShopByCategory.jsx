import style from "./Headingofcat.module.css";
import Shopinput from "./Shopinput";
const ShopByCategory = () => {
  return (
    <>
      <h4 className={style.heading}>Shop By Category</h4>
      <Shopinput></Shopinput>
    </>
  );
};
export default ShopByCategory;
