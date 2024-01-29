import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { review } from "./reviewSlide";
import { useMediaQuery } from "react-responsive";
import styles from './Review.module.scss';

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
    <Container>
      <h2 className={styles.causes_review}><b>RECENT CAUSES</b></h2>
      <p><strong>Eye Checkup Camp at Rural Area</strong> </p>
      <Carousel>
        {reviewSection.map((reviewImg, index) => (
          <Carousel.Item key={index} className={styles.review_slider}>
            <Row>
              {reviewImg.map((slide) => (
                <Col key={slide.id}>
                  <img
                    src={slide.img}
                    alt="recentimage"
                    className={styles.recent_image}/>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <br/>
    </Container>
  );
};

export default Review;
