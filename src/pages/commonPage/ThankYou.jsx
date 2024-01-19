import './thank&Error.scss';
import { Button, Container, Row, Col} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { RouteConstant } from "../../shared/constants/route";

import { FaRegCheckCircle } from "react-icons/fa";
const ThankYou = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Container>
        <Row className="my-4">
        
            <Col>
              <Col className="text-center my-4 ">
                <FaRegCheckCircle className="check-circle-icon"/>
              </Col>
              <h3 className="text-center text-secondary">
                Thank you for your submission! <br/>Your Form was successfully sent.{" "}
              </h3>
            </Col>

            <Row sm={12} md={12} lg={12} className="text-center  my-4 w-100">
              <Col  className="bg-light m-2  p-5 py-5 rounded-2 w-50">
                <h4 className="py-3">Contact With Us</h4>

                <Col className="text-center d-flex justify-content-center ">
                  <Link to={RouteConstant.FACEBOOK_PROFILE_URL} className="px-2 fs-4 text-success">
                    <FaFacebook />
                  </Link>
                  <Link  to={RouteConstant.LINKEDIN_PROFILE_URL} className="px-2 fs-4 text-success">
                    <FaLinkedin />
                  </Link>
                  <Link to={RouteConstant.TWITTER_PROFILE_URL} className="px-2 fs-4 text-success">
                    <FaTwitter />
                  </Link>
                  <Link to={RouteConstant.INSTAGRAM_PROFILE_URL} className="px-2 fs-4 text-success">
                    <FaInstagram />
                  </Link>
                </Col>
              </Col>
              <Col  className="bg-light m-2  p-5 py-5 rounded-2  w-50 ">
                <h4 className="py-3">Visite Our Website</h4>
                <Link   className="text-decoration-none bg-success fw-normal fs-5 text-white p-2 rounded-4 tect-center">
                  Visit Website
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="my-2 text-center">
                <Button className="back-btn"
                  onClick={handleGoBack}>
                  Go Back
                </Button>
              </Col>
            </Row>
        </Row>
      </Container>
    </>
  );
};
export default ThankYou;


