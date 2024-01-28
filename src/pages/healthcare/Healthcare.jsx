import { HealthCareObj } from "../../shared/constants/constant";
import { NavLink } from "react-router-dom";
import healthcareBanner from "../../assets/healthcare-banner.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RouteConstant } from "../../shared/constants/route";
import healthcareForm from "../../assets/pdf/healthcare-form.pdf";
import HealthcareImage from "../../assets/halthcare/1.jpg";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./Healt.module.scss"
const Healthcare = () => {
  return (
    <>
      <img src={healthcareBanner} alt="" className={styles.healthcareBanner} />   
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className={styles.heathcare_heading}>HEALTHCARE</h1>
            {HealthCareObj.map((title) => (
              <div key={title.map}>
                <p className={styles.heathcare_paragraph}>{title.paragraph}</p>
              </div>
            ))}

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              // style={{ border: "none", gap: "13px" }}
              // className="py-3 flex-wrap d-flex"
              className={styles.health_from_content}
            >
              <a
                href={healthcareForm}
                target="_blank" // opens the link in a new tab/window
                rel="noopener noreferrer" // recommended for security reasons
                className={styles.health_form_download}              >
                <FaAngleRight className="" /> HEALTHCARE FORM DOWNLOAD
              </a>

              <NavLink
                className={styles.health_from_online}
                to={RouteConstant.HEALTHCARE_ONLINE_FORM}
              >
                <FaAngleRight className="" /> HEALTHCARE FORM ONLINE
              </NavLink>
            </Col>
          </Col>
          
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className={styles.health_care_support}>
            <h2>Healthcare Support</h2>
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}

              className={styles.heath_care_support_img}
            />
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}
              className={styles.heath_care_support_img}
            />
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}
              className={styles.heath_care_support_img}
            />
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}
              className={styles.heath_care_support_img}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Healthcare;
