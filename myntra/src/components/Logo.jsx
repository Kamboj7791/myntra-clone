import myImage from "../images/myImage.jpg";
import styles from "./Navbar.module.css";
const logo = () => {
  return (
    <>
      <a className="navbar-brand" href="#">
        <img
          src={myImage}
          alt="Description of the image"
          className={styles.myntra}
        />
      </a>
    </>
  );
};
export default logo;
