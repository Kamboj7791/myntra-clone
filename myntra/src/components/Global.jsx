import { Carousel } from "react-bootstrap";
import global1 from "../images/global1.jpg";
import global2 from "../images/global2.jpg";
import global3 from "../images/global3.jpg";
import global4 from "../images/global4.jpg";
import global5 from "../images/global5.jpg";
import global6 from "../images/global6.jpg";
import global7 from "../images/global7.jpg";
import global8 from "../images/global8.jpg";
import global9 from "../images/global9.jpg";
import global10 from "../images/global10.jpg";
import global11 from "../images/global11.jpg";
import global12 from "../images/global12.jpg";
import style from "./Global.module.css";
let globalarr1 = [
  {
    src: global1,
    content: "HII",
  },
  {
    src: global2,
    content: "HEYY",
  },
  {
    src: global3,
    content: "HOHO",
  },
  {
    src: global4,
    content: "YAYA",
  },
  {
    src: global5,
    content: "HAHAH",
  },
  {
    src: global6,
    content: "HUEHUE",
  },
];
let globalarr2 = [
  {
    src: global7,
    content: "",
  },
  {
    src: global8,
    content: "",
  },
  {
    src: global9,
    content: "",
  },
  {
    src: global10,
    content: "",
  },
  {
    src: global11,
    content: "",
  },
  {
    src: global12,
    content: "",
  },
];
const Global = () => {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Carousel className={style.Carousel}>
        <Carousel.Item>
          {globalarr1.map((item, index) => (
            <img src={item.src} className={style.global} key={index} alt=".." />
          ))}
        </Carousel.Item>
        <Carousel.Item>
          {globalarr2.map((item, index) => (
            <img src={item.src} key={index} className={style.global} alt=".." />
          ))}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Global;
