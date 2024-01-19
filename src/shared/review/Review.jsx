import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { review } from "./reviewSlide";
import { useMediaQuery } from "react-responsive";

const Review = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const isDesktop = useMediaQuery({ query: "(max-width: 961px)" });

  const arraySize = (arr, displaySize) => {
    const array = [];
    for (let i = 0; i < arr.length; i += displaySize) {
      array.push(arr.slice(i, i + displaySize));
    }
    return array;
  };

  let displaySize;
  if (isMobile) {
    displaySize = 1;
  } else if (isDesktop) {
    displaySize = 2;
  } else {
    displaySize = 4;
  }

  const reviewSection = arraySize(review, displaySize);

  return (
    <Container fluid>
      <h2 className="text-center p-2"><b>RESENT CAUSES</b></h2>
      <Carousel>
        {reviewSection.map((reviewImg, index) => (
          <Carousel.Item key={index} className="text-center">
            <Row>
              {reviewImg.map((slide) => (
                <Col key={slide.id}>
                  <img
                    src={slide.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px",
                      cursor: "pointer",
                    }}
                  />
                  <p
                    className="py-3 w-100 text-center"
                    style={{ fontSize: "14px" }}
                  >
                    {slide.paragraph}
                  </p>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Review;
