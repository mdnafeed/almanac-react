import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './error.scss';
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        <Row className="error-container">
          <Col >
            <h1 className="error-text">
             ERROR 404
              <br />
              opps!Page Not Found
            </h1>
            <p className="">
              Sorry,the page you're looking for doesn't exist .If you think
              something is broken report a problem
            </p>
          </Col>

          <Row className="error-back-buttom">
            <Col xs="auto" className="">
              <Button onClick={handleGoBack}>GO BACK</Button>
            </Col>
            <Col xs="auto" className="">
              <Button onClick={handleGoHome}>GO TO HOMEPAGE</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ErrorPage;
