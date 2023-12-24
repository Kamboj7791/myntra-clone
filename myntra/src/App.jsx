import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Parttwo from "./components/Parttwo";
import Coupon from "./components/Coupon";
import Sponsor from "./components/Sponsor";
import Shopdrop from "./components/Shopdrop";
import Slider from "./components/Slider";
import Headingofcate from "./components/Headingofcate";
import Global from "./components/Global";
import ShopByCategory from "./components/ShopByCategory";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Slider></Slider>

      {/* <SwipeableTextMobileStepper></SwipeableTextMobileStepper> */}
      <Parttwo></Parttwo>
      <Coupon></Coupon>
      <Sponsor></Sponsor>
      <Shopdrop></Shopdrop>
      <Headingofcate>Grand Global Brands</Headingofcate>
      <Global></Global>
      <ShopByCategory></ShopByCategory>
      <Footer></Footer>
    </>
  );
}

export default App;
