import { AboutData } from "./aboutdata";
import styles from "./About.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImg from "../../assets/about.jpg";
const About = () => {
  return (
    <>
     <div className={styles.const_about_content}>
        <img src={aboutImg} alt="" className="w-100"/>
      </div>
    <Container>
      <Row>
        <Col lg="12" className={styles.about_text_item}>
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
