import paymentSuccessImg from "../../assets/paymentSucces.png";
import logo from "../../assets/logo.png";
import "./payment.scss";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PaymentSucess = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
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
          <img src={paymentSuccessImg} alt="" />
          <h1>Thank You Payment Successful</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucess;
