import './thankyou.scss';
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
        <Row className="topcontainer">
        
            <Col>
              <Col className="clickicon">
                <FaRegCheckCircle className="check-circle-icon"/>
              </Col>
              <h3 className="sumbit-text">
                Thank you for your submission! <br/>Your Form was successfully sent.{" "}
              </h3>
            </Col>

            <Row sm={12} md={12} lg={12} className="information-detail">
              <Col  className="contact-details">
                <h4 >Contact With Us</h4>

                <Col className='social-icon'>
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
              <Col  className='visite-website'>
                <h4 className="py-3">Visite Our Website</h4>
                <a href="/" className="website-link">
                Visit Website
                </a>
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


