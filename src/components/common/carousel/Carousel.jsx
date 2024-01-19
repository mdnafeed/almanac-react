import Carousel from 'react-bootstrap/Carousel';
const SliderImage = (props) => {
  return (
    <Carousel>
      {props.slider.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt="First Slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default SliderImage;

