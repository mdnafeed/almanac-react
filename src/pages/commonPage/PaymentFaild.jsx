import paymentFaildPageImg from "../../assets/paymentFaildPage.jpg";
import logo from "../../assets/logo.png";
import "./payment.scss";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PaymentSucess = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/membership");
  };
  return (
    <div>
      <div>
        <Col className="my-2 text-start p-2">
          <Button
            style={{ backgroundColor: "darkgray", borderColor: "darkgray" }}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
        </Col>
      </div>

      <div className="payment-conatiner">
        <img src={logo} alt="" className="p-4" />
        <div>
          <img src={paymentFaildPageImg} alt="" width="190" />
          <Col>
            <h1 className="error-text">
              Payment Faild
              <br />
              Something went wrong
            </h1>
            <div
              className="d-flex justify-content-center align-items-center border rounded p-2 mx-auto"
              style={{ width: "100px", height: "30px" }}
            >
              <p className="mb-0">Try Again</p>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucess;
