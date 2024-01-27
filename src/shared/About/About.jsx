
import { detailas2 } from "./DetailsData";
import { datas } from "./DetailsData";
import styles from "./About.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container>
      <Row>
        <Col lg="12" className={styles.about_text_item}>
          Almanac Social Welfare (ASW) is a nonprofit organization that helps the poor and the needy on all fronts in the fields of education and healthcare. We work on behalf of millions of people living here in India with our unmatched scope of initiatives that we undertake to provide the underprivileged all the support that is required to fulfill the obligations in either securing basic education and/or medical treatments.
        </Col>
        <Col lg="12" className={styles.about_text_item}>
          Almanac Social Welfare (ASW) is a nonprofit organization that helps the poor and the needy on all fronts in the fields of education and healthcare. We work on behalf of millions of people living here in India with our unmatched scope of initiatives that we undertake to provide the underprivileged all the support that is required to fulfill the obligations in either securing basic education and/or medical treatments.
        </Col>
        <Col lg="12" className={styles.about_text_item}>
          Almanac Social Welfare (ASW) is a nonprofit organization that helps the poor and the needy on all fronts in the fields of education and healthcare. We work on behalf of millions of people living here in India with our unmatched scope of initiatives that we undertake to provide the underprivileged all the support that is required to fulfill the obligations in either securing basic education and/or medical treatments.
        </Col>
      </Row>
      <Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <img
              src="http://www.almanacsocialwelfare.com/images/background/health-vision.jpeg"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <h1>Mission & Vision</h1>
            {detailas2.map((item) => (
              <div className={styles.about_second_text} key={item.id}>
                <p className={styles.about_second_text_p}>{item.paragrap}</p>
                <p className={styles.about_second_text_h}>{item.paragrap2}</p>
              </div>
            ))}
          </Col>
        </Row>

        <div className={styles.about_step3}>
          <h1>Message</h1>
          <p>My dear brothers & sisters,</p>
          {datas.map((items) => (
            <div key={items.id} className={styles.about_second_text_3}>
              <p>{items.p}</p>
              <p>{items.h}</p>
            </div>
          ))}
          <div className={styles.respact_text}>
            <p>Sincerely,</p>
            <p>Dr. Mohammed Tarique</p>
            <p>Chairman, Almanac Social Welfare</p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default About;
