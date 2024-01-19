import { data } from "./aboutData.js";
import {Carousel} from "react-bootstrap/Carousel";

const Header = () => {
  return (
    <Carousel>
      {data.map((image) => (
        <Carousel.Item key={image.id}>
          <img className="d-block w-100" src={image.images} alt="First Slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Header;
