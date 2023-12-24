import styles from "./Searchbar.module.css";
import { CiSearch } from "react-icons/ci";
const Searchbar = () => {
  return (
    <form className={styles.form}>
      <div className={styles.searchicon}>
        <CiSearch />
      </div>
      <input
        className={styles.search}
        type="search"
        placeholder="Search for products, brands and more"
        aria-label="Search"
      />
    </form>
  );
};
export default Searchbar;
