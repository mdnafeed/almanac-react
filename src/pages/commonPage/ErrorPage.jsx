import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
        <Row className="m-4 p-4 bg-secondary rounded-4">
          <Col >
            <h1 className="text-center text-white">
             ERROR 404
              <br />
              opps!Page Not Found
            </h1>
            <p className="text-center  text-white">
              Sorry,the page you're looking for doesn't exist .If you think
              something is broken report a problem
            </p>
          </Col>

          <Row className="m-4 justify-content-around">
            <Col xs="auto" className="p-2">
              <Button onClick={handleGoBack}>GO BACK</Button>
            </Col>
            <Col xs="auto" className="p-2 ">
              <Button onClick={handleGoHome}>GO TO HOMEPAGE</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ErrorPage;
