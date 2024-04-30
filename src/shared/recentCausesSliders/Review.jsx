import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Review.module.scss';
import { useMediaQuery } from 'react-responsive';
const Review = ({ text, sliderImg }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 961px)' });
  const arraySize = (arr, displaySize) => {
    if (!arr || !Array.isArray(arr)) {
      return [];
    }
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
    displaySize = 4;
  } else {
    displaySize = 4;
  }
  const groupedSliderImg = arraySize(sliderImg, displaySize);

  return (
    <Container>
      <strong>
        <h2 className={styles.causes_review}>{text}</h2>
      </strong>
      <Carousel>
        {groupedSliderImg.map((sliderImgGroup, index) => (
          <Carousel.Item key={index} className={styles.review_slider}>
            <Row>
              {sliderImgGroup.map((item, subIndex) => (
                <Col key={subIndex} md={3}>
                  { !!item.isVideo ? 
                    (

                      <>
                        <iframe height="200"
                          src={item.img}>
                          </iframe>
                      </>
                    )
                    :(
                      <>
                        <img
                          src={item.img}
                          alt={`recentimage-${index}-${subIndex}`}
                          className={styles.recent_image}
                        />
                        <p className={styles.recent_text} style={{ fontSize: '14px' }}>
                          {item.paragraph}
                        </p>
                  </>
                    )
                  }
                  
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
