import "./trustee.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Trustees from "./trustee/Trustees";
import phonePayScan from "../../assets/scanner/phonePayScan.jpeg";
const Trustee = () => {
  return (
    <>
      <br />
      <br />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={16} className="member-section">
            <p className="">
              <strong>Almanac Social Welfare (ASW)</strong> for its noble cause
              is dependent on the generous support of you all so that we could
              continue our work. By collaborating with us you will be helping to
              make a positive difference in the life of those who have surely
              not had it easy. We commit to being accountable and transparent so
              that all those who join hands have full confidence in our
              organization.
              <br />
              <br />
              There are ways you can get involved – you could either choose to
              be a Volunteer by donating a minimum of Rs. 500 or become a
              Trustee by submitting a sum of Rs. 10000. Please be informed that
              the amount is not a guarantee to the position and in case of
              non-selection by the management for reasons disclosed or not, the
              amount is refunded with no deductions whatsoever. We also seek CSR
              funds and grants from Corporations under the Companies Act, 2013.
              <br />
              <br />
              We ensure that our integrity is paramount in all aspects, and we
              will never compromise the interests of the underprivileged we help
              in the pursuit of any support we seek.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={16}>
            <Trustees />
          </Col>
          {/* Bank info in Almanac Social Welfare (ASW) */}
          <Row className="d-flex justify-content-center align-items-center w-100vw">
            <Col className="d-flex flex-column align-items-center w-100">
              <img src={phonePayScan} alt="" width={500} height={800} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h3 className="text-center w-100 text-md text-danger mt-4">
                <span className="text-success">Almanac Social Welfare</span>{" "}
                Bank Detail
              </h3>
              <table
                className="table table-bordered p-2 w-100"
                style={{
                  borderCollapse: "collapse",
                  border: "3px solid black",
                  borderColor: "#008080 #0000FF #800080 #a53g2f",
                }}
              >
                <tbody>
                  <tr>
                    <th className="p-1 text-success">Name:</th>
                    <td className="p-1 text-dark">Almanac Social Welfare</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-success">Bank Name:</th>
                    <td className="p-1 text-dark">HDFC bank </td>
                  </tr>
                  <tr>
                    <th className="p-1 text-success">Account Number:</th>
                    <td className="p-1 text-dark">50200041911860</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-success">IFSC Code:</th>
                    <td className="p-1 text-dark">HDFC0004296</td>{" "}
                  </tr>
                  <tr>
                    <th className="p-1 text-success">Account Type:</th>
                    <td className="p-1 text-dark">Current Account</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Trustee;
