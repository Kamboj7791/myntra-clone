import style from "./Footer.module.css";
import appstore from "../images/appstore.jpg";
import googleplay from "../images/googleplay.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import original from "../images/original.jpg";
import fourteen from "../images/fourteen.jpg";
let footer = [
  {
    name: "ONLINE SHOPPING",
    items: [
      "Men",
      "kids",
      "Home & Living",
      "Beauty",
      "Gift Cards",
      "Myntra Insider",
    ],
  },
  {
    name: "CUSTOMER POLICIES",
    items: [
      "Contact Us",
      "FAQ",
      "T&C",
      "Terms Of Use",
      "Track Orders",
      "Shipping",
      "cancellation",
      " Returns",
      "Privacy policy",
      "Grievance Officer",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className={style.outerparent}>
        <div className={style.outer}>
          <div className="row" style={{ width: " 100% " }}>
            {footer.map((item) => (
              <>
                <div className="col-2 ">
                  <a href="#" className={style.link}>
                    {item.name}
                  </a>
                  {item.items.map((e) => (
                    <p className={style.linkchild}>{e}</p>
                  ))}
                </div>
              </>
            ))}
            <div className="col-4 ">
              <p className={style.para}> EXPERIENCE MYNTRA APP ON MOBILE </p>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-6">
                  <img src={appstore} className={style.ag} alt=".." />
                </div>
                <div className="col-6 ">
                  <img src={googleplay} className={style.ag} alt=".." />
                </div>
              </div>
              <p className={style.para1}> KEEP IN TOUCH </p>
              <div className={style.iconparent}>
                <div className={style.icon}>
                  <FaFacebookSquare />
                </div>
                <div className={style.icon}>
                  <FaTwitter />
                </div>
                <div className={style.icon}>
                  <FaYoutube />
                </div>
                <div className={style.icon}>
                  <TiSocialInstagram />
                </div>
              </div>
            </div>
            <div className="col-4 ">
              <div className={style.fourth}>
                <div>
                  <img className={style.fourthimg} src={original} alt=".." />
                </div>
                <div>
                  <p className={style.linkchild}>
                    <strong className={style.strong}>100% ORIGINAL </strong>
                    guarantee for all products at myntra.com{" "}
                  </p>
                </div>
              </div>
              <div className={style.fourth}>
                <div>
                  <img className={style.fourthimg} src={fourteen} alt=".." />
                </div>
                <div>
                  <p className={style.linkchild}>
                    <strong className={style.strong}>
                      Return within 14days{" "}
                    </strong>
                    of receiving your order{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
