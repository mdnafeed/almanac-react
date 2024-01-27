import aboutImg from "../../assets/about.jpg";
import { AboutData } from "../../shared/constants/constant";
import style from "./About.module.scss";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <>
      <div className={style.const_about_content}>
        <img src={aboutImg} alt="" className="w-100"/>
      </div>
      <Container className={style.pad_30}>
        <Row >
          <Col >
            {AboutData.map((title) => (
              <div key={title.id}>
                <p style={{textAlign: 'justify'}}>{title.paragraph}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
