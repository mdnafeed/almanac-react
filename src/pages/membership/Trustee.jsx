import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Trustees from "./trustee/Trustees";
import './trustee.scss';
const Trustee = () => {
  return (
    <>
      <br />
      <br />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={16} className="member-section">
            <p className="">
              <strong>Almanac Social Welfare (ASW)</strong> for its noble cause is dependent on the generous support of you all so that we could continue our work. By collaborating with us you will be helping to make a positive difference in the life of those who have surely not had it easy. We commit to being accountable and transparent so that all those who join hands have full confidence in our organization.
              <br /><br />
              There are ways you can get involved – you could either choose to be a Volunteer by donating a minimum of Rs. 100 or become a Trustee by submitting a sum of Rs. 5000. Please be informed that the amount is not a guarantee to the position and in case of non-selection by the management for reasons disclosed or not, the amount is refunded with no deductions whatsoever.
              We also seek CSR funds and grants from Corporations under the Companies Act, 2013.
              <br /><br />
              We ensure that our integrity is paramount in all aspects, and we will never compromise the interests of the underprivileged we help in the pursuit of any support we seek.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={16}>
            <Trustees />
          </Col>

        
        </Row>
      </Container>
    </>
  );
};

export default Trustee;
