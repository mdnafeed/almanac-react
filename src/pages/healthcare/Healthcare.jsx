import { HealthCareObj } from "../../shared/constants/constant";
import { NavLink } from "react-router-dom";
import healthcareBanner from "../../assets/healthcare-banner.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RouteConstant } from "../../shared/constants/route";
import healthcareForm from "../../assets/pdf/healthcare-form.pdf";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./Healt.module.scss";
import { healthcarereviewslider ,healthcareSupportImg,heading} from "./healthcarereview";
import Review from "../../shared/recentCausesSliders/Review";
const Healthcare = () => {
  return (
    <>
      <img src={healthcareBanner} alt="" className={styles.healthcareBanner} />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2 className={styles.heathcare_heading}>
              <strong>HEALTHCARE</strong>
            </h2>
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
              className={styles.health_from_content}
            >
              <a
                href={healthcareForm}
                target="_blank" // opens the link in a new tab/window
                rel="noopener noreferrer" // recommended for security reasons
                style={{
                  width: "300px",
                  height: "40px",
                  backgroundColor: "#80e36a",
                  borderRadius:"13px"
                }}
                className="border p-2 text-dark text-decoration-none "
              >
                <FaAngleRight className="" /> H FORM DOWNLOAD
              </a>

              <NavLink
                style={{
                  width: "300px",
                  backgroundColor: "#80e36a",
                  height: "40px",
                  color: "white",
                  borderRadius:"13px"
                }}
                className="border p-2 text-dark text-decoration-none "
                to={RouteConstant.HEALTHCARE_ONLINE_FORM}
              >
                <FaAngleRight className="" /> H FORM ONLINE
              </NavLink>
            </Col>
          </Col>

          
        </Row>
      </Container>
      <Container>
        {/* <Row>
           <Col md={12} className={styles.health_care_support}>
            <h2 className="p-3">
              <strong>HEALTHCARE SUPPORT</strong>
            </h2>
          </Col>
          <Col md={12} className={styles.flexContainer}>
                 <Row className={styles.flexRow}>
                   {healthcareSupportImg.map((supportimg, id) => (
                    <Col md={3} key={supportimg.id}>
                           <img src={supportimg.img} className={styles.heath_care_support_img} />
                           </Col>
                            ))}
                       </Row>
                        </Col>
        </Row>
         */}
         <br />
        <Container className="w-100%">
        {/* <h2 className={styles.heathcare_heading}>
              <strong>HEALTHCARE RECENT CAUSE</strong>
            </h2> */}
          <Review text={heading}  sliderImg={healthcarereviewslider}/>
        </Container>
      </Container>
    </>
  );
};

export default Healthcare;
