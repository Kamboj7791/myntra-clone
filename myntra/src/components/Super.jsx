import style from "./Link.module.css";
const Super = () => {
  return (
    <li className="nav-item">
      <a className={style.link} aria-current="page" href="#">
        STUDIO
        <sup className={style.sup}>NEW</sup>
      </a>
    </li>
  );
};
export default Super;
