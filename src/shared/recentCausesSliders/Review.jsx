// import { useLocation } from 'react-router-dom';
// import { review } from './reviewSlide';
// import { useMediaQuery } from 'react-responsive';
// import Carousel from 'react-bootstrap/Carousel';
// // import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import styles from './Review.module.scss';
// const Review = ({ educationreviewslider, healthcarereviewslider }) => {
//   const location = useLocation();
//   const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
//   const isDesktop = useMediaQuery({ query: '(max-width: 961px)' });

//   const arraySize = (arr, displaySize) => {
//     if (!arr || !Array.isArray(arr)) {
//       return [];
//     }
//     const array = [];
//     for (let i = 0; i < arr.length; i += displaySize) {
//       array.push(arr.slice(i, i + displaySize));
//     }
//     return array;
//   };

//   let displaySize;
//   if (isMobile) {
//     displaySize = 1;
//   } else if (isDesktop) {
//     displaySize = 2;
//   } else {
//     displaySize = 4;
//   }

//   const reviewSection = arraySize(review, displaySize);
//   const educationReviewSection = arraySize(educationreviewslider, displaySize);
//   const healthcareReviewSection = arraySize(healthcarereviewslider, displaySize);

//   const isEducationRoute = location.pathname === '/education';
//   const isHealthcareRoute = location.pathname === '/healthcare';


//   const getRoute = () => {
//     if (isEducationRoute) {
//       return 'EDUCATION RECENT CAUSES';
//     } else if (isHealthcareRoute) {
//       return 'HEALTHCARE RECENT CAUSES';
//     } else {
//       return 'RECENT CAUSES';
//     }
//   };
// //slider img
//   const getReviewSliderImage = () => {
//     if (isEducationRoute) {
//       return educationReviewSection;
//     } else if (isHealthcareRoute) {
//       return healthcareReviewSection;
//     } else {
//       return reviewSection;
//     }
//   };

//   const renderCarousel = (sliderData) => (
//     <Carousel>
//       {sliderData.map((slider, index) => (
//         <Carousel.Item key={index} className={styles.review_slider}>
//           <Row>
//             {slider.map((slide) => (
//               <Col key={slide.id}>
//                 <img
//                   src={slide.img}
//                   alt="recentimage"
//                   className={styles.recent_image}
//                 />
//                 <p className={styles.recent_text} style={{ fontSize: '14px' }}>
//                   {slide.paragraph}
//                 </p>
//               </Col>
//             ))}
//           </Row>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );

//   return (
//     <Container>
//       <h2 className={styles.causes_review}><b>{getRoute()}</b></h2>
//       {renderCarousel(getReviewSliderImage())}
//     </Container>
//   );
// };

// export default Review;




import { useLocation } from 'react-router-dom';
import { review } from './reviewSlide';
import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Review.module.scss';

const Review = ({ educationreviewslider, healthcarereviewslider }) => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const isDesktop = useMediaQuery({ query: '(max-width: 961px)' });

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
    displaySize = 2;
  } else {
    displaySize = 4;
  }

  const reviewSection = arraySize(review, displaySize);
  const educationReviewSection = arraySize(educationreviewslider, displaySize);
  const healthcareReviewSection = arraySize(healthcarereviewslider, displaySize);

  const isEducationRoute = location.pathname === '/education';
  const isHealthcareRoute = location.pathname === '/healthcare';

  const getRoute = () => {
    if (isEducationRoute) {
      return 'EDUCATION RECENT CAUSES';
    } else if (isHealthcareRoute) {
      return 'HEALTHCARE RECENT CAUSES';
    } else {
      return 'RECENT CAUSES';
    }
  };

  // Slider img
  const getReviewSliderImage = () => {
    if (isEducationRoute) {
      return educationReviewSection;
    } else if (isHealthcareRoute) {
      return healthcareReviewSection;
    } else {
      return reviewSection;
    }
  };

  const renderCarousel = (sliderData) => (
    <Carousel>
      {sliderData.map((slider, index) => (
        <Carousel.Item key={index} className={styles.review_slider}>
          <Row>
            {slider.map((slide) => (
              <Col key={slide.id}>
                <img
                  src={slide.img}
                  alt="recentimage"
                  className={styles.recent_image}
                />
                <p className={styles.recent_text} style={{ fontSize: '14px' }}>
                  {slide.paragraph}
                </p>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  return (
    <Container>
      <h2 className={styles.causes_review}><b>{getRoute()}</b></h2>
      {renderCarousel(getReviewSliderImage())}
    </Container>
  );
};

export default Review;
