import aboutImg from "../../assets/about.jpg";
import { AboutData } from "../../shared/constants/constant";
import style from "./About.module.scss";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <>
      <div className={style.const_about_content}>
        <img src={aboutImg} alt="" />
      </div>
      <Container className={style.about_text}>
        <Row >
          <Col >
            {AboutData.map((title) => (
              <div key={title.id}>
                <p>{title.paragraph}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
