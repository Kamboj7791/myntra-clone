import Searchbar from "./Searchbar";
import Link from "./Link";
import Logo from "./Logo";
import BurgerBtn from "./BurgerBtn";
import Super from "./Super";
import Icons from "./Icons";

const Navbar = () => {
  let linkarr = ["MEN", "WOMEN", "KIDS", "HOME&LIVING", "BEAUTY"];
  const style = {
    st: {
      boxShadow: "0 4px 12px 0 rgba(0,0,0,.05)",
      backgroundColor: "#fff",
    },
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={style.st}>
      <div className="container-fluid">
        <Logo></Logo>
        <BurgerBtn></BurgerBtn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link link={linkarr}></Link>
            <Super></Super>
          </ul>
          <Searchbar></Searchbar>
          <Icons></Icons>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
