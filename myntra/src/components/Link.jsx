import style from "./Link.module.css";
console.log(style.link);
const Link = ({ link }) => {
  return link.map((item, index) => (
    <li key={index} className="nav-item">
      <a className={style.link} aria-current="page" href="#">
        {item}
      </a>
    </li>
  ));
};
export default Link;
