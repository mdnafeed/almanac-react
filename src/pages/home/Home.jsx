import SliderImage from "../../components/common/carousel/Carousel";
import Review from "../../shared/recentCauseSliders/Review";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import slider1 from "../../assets/SlidersImage/slider1.jpg";
import slider2 from "../../assets/SlidersImage/slider2.jpg";
import slider3 from "../../assets/SlidersImage/slider3.jpg";
import healthVision from "../../assets/health-vision.jpeg";
const Home = () => {
  const sliderImage = [
    {
      id: 1,
      image: slider1,
    },
    {
      id: 2,
      image: slider2,
    },
    {
      id: 3,
      image: slider3,
    },
  ];
  return (
    <>
      <SliderImage slider={sliderImage} />
      <Container>
        <Row>
          <Col lg={12} className="p-4" style={{ textAlign: "justify" }}>
            <b>Almanac Social Welfare (ASW)</b> is a nonprofit organization that
            helps the poor and the needy on all fronts in the fields of
            education and healthcare. We work on behalf of millions of people
            living here in India with our unmatched scope of initiatives that we
            undertake to provide the underprivileged all the support that is
            required to fulfill the obligations in either securing basic
            education and/or medical treatments.
          </Col>
          <Col lg={12} className="pt-0 p-4" style={{ textAlign: "justify" }}>
            With education and healthcare programs like educational scholarships
            and fellowships, medical prevention, early detection, clinical
            research, innovation and advocacy, no charitable organization
            impacts more lives than ASW. We sincerely believe that each and
            every individual in the world is entitled to free education and
            healthcare facilities without exceptions. With many countries,
            especially in the West, having been able to achieve the same to a
            certain extent through government policies and programs, challenges
            in a developing country like India are unique. Despite the
            improvement in the education sector over the years along with
            technological advancements in healthcare, the biggest challenge
            posed to the people is to sustain one's own daily necessities. This
            leads a major section of our country deprived of such basic
            facilities. Almanac Social Welfare remains committed to the welfare
            of people from the most impoverished strata of society without
            distinction of caste, creed or color. We intend to ensure a society
            comprised of educated and healthy citizens.
          </Col>
          <Col lg={12} className="pt-0 p-4" style={{ textAlign: "justify" }}>
            We are extremely grateful to the trustees, sponsors and volunteers
            for their selfless and incessant support. We also humbly request
            others to join hands with us. Feel free to browse to learn more
            about Almanac Social Welfare.
          </Col>
        </Row>
        <Row className="p-4">
          <Col xs={12} md={6} lg={6} style={{ paddingLeft: "0px" }}>
            <img
              src={healthVision}
              alt=""
              className="img-fluid"
              style={{ width: "600px", height: "316px" }}
            />
          </Col>
          <Col xs={12} md={6} lg={6} style={{ paddingRight: "0px" }}>
            {/* <h1>Mission & Vision</h1> */}
            <h2>
              <b>MISSION & VISION</b>
            </h2>

            <p style={{ textAlign: "justify" }}>
              One of the ideas with which humanity should be in the state of war
              is Poverty. Until humanity does not win, ASW will always be a
              movement with a mission to provide high quality education and
              health care facilities all over India for the poor and needy
              through its programs and initiatives..
            </p>
            <p style={{ textAlign: "justify" }}>
              Our vision is to help citizens with free education and health care
              provisions in the remotest corners of India. We intend to scale up
              and establish several Almanac Social Welfare centers in the years
              to come and these will certainly be setup in the most rural
              sections of the country. Despite the infrastructure, we also have
              huge plans to use the latest technology so as to ensure no
              individual remains deprived of educational and health care
              facilities.
            </p>
          </Col>
        </Row>
        <Review />
      </Container>
    </>
  );
};

export default Home;
