import { Carousel } from "react-bootstrap";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
import slider5 from "../images/slider5.jpg";
import slider6 from "../images/slider6.jpg";
import slider7 from "../images/slider7.jpg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slider7} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider4} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider5} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider6} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
