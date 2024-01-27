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
const Healthcare = () => {
  return (
    <>
      <img src={healthcareBanner} alt="" className="w-100" />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className="text-center">HEALTHCARE</h1>
            {HealthCareObj.map((title) => (
              <div key={title.map}>
                <p style={{ textAlign: "justify" }}>{title.paragraph}</p>
              </div>
            ))}

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ border: "none", gap: "13px" }}
              className="py-3 flex-wrap d-flex"
            >
              <a
                href={healthcareForm}
                target="_blank" // opens the link in a new tab/window
                rel="noopener noreferrer" // recommended for security reasons
                style={{
                  width: "300px",
                  height: "40px",
                  backgroundColor: "#54B4D3",
                }}
                className="border p-2 text-decoration-none text-white"
              >
                <FaAngleRight className="mb-1" /> HEALTHCARE FORM DOWNLOAD
              </a>

              <NavLink
                style={{
                  width: "300px",
                  height: "40px",
                  backgroundColor: "#54B4D3",
                }}
                to={RouteConstant.HEALTHCARE_ONLINE_FORM}
                className="border p-2 text-decoration-none text-white"
              >
                <FaAngleRight className="mb-1" /> HEALTHCARE FORM ONLINE
              </NavLink>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className="text-center py-2">
            <h2>Healthcare Support</h2>
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col md={3}>
            <img
              src={HealthcareImage}
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Healthcare;
