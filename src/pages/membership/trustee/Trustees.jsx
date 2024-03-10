import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { useFormik } from "formik";
import validationTrusteeSchema from "./validationTrusteeSchema";
import api from "../../../api/api.js";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate,Route } from "react-router-dom";
import { RouteConstant } from "../../../shared/constants/route.js";
import './membership.scss';
const Trustees = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const trusteeFormik = useFormik({
    initialValues: {
      name: "",
      pan_card_number: "",
      aadhar_no: "",
      mobile_number: "",
      email_id: "",
      address: "",
      type_of_membership: "",
      amount: "",

    },
    validationSchema: validationTrusteeSchema,
    onSubmit: async (values) => {

      const options = {
        key: 'rzp_live_FPc38VCRKMBqNY', // Replace with your Razorpay key_id  // rzp_live_FPc38VCRKMBqNY rzp_test_hAakLAx9OzIPeu 
        amount: values.amount * 100, // Convert amount to paise
        currency: 'INR',
        name: 'Almanac Social Welfare',
        description: 'Payment for Membership',
        image: 'http://almanacsocialwelfare.com/assets/logo-9bd8e0f9.png', // Replace with your company logo URL
        // order_id: 'order_12345', // Generate a unique order_id for each transaction
        handler: async (response) => {
          // START: if Payment success and received payment id form rozerpay then this block will be executed 
          if(response.razorpay_payment_id){

              // START: If Backend will share with me proper 200 response then these data will store in DB
              const backendResponse = await api.PostMembership(values);
              if(backendResponse.status == 200){

                navigate(`${RouteConstant.CERTIFICATE}/${backendResponse.data.membershipObj._id}`);
              }
              else{
                // In Case Payment success 
              }
          }
          else{

          }
        },
        prefill: {
          name: values.name,
          email: values.email_id,
          contact: values.mobile_number,
        },
        notes: {
          address: values.address,
          currentDate: currentDate.toISOString(),
        },
        theme: {
          color: '#528FF0', // Customize the color according to your UI
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    },
  });
  console.log(trusteeFormik)


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  trusteeFormik.setDefault = () => {
    const membershipType = trusteeFormik.values.type_of_membership;

    switch (membershipType) {
      case 'Trustee':
        trusteeFormik.setValues({ ...trusteeFormik.values, amount: 5000 });
        break;
      case 'Volunteers':
        trusteeFormik.setValues({ ...trusteeFormik.values, amount: 100 });
        break;
      case 'CSR Fund':
        trusteeFormik.setValues({ ...trusteeFormik.values, amount: 100000 });
        break;
      default:
        trusteeFormik.setValues({ ...trusteeFormik.values, amount: "" });
        break;
    }
  };
  useEffect(() => {
    trusteeFormik.setDefault();
  }, [trusteeFormik.values.type_of_membership]);
  console.log(trusteeFormik);

  return (
    <Card  className="member-ship-content">
      <Form onSubmit={trusteeFormik.handleSubmit}>
        <Container>
          <h1 className="membership-text"><b>Become a Membership</b></h1>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
              <Form.Label htmlFor="name">
                Name
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                id="name"
                className="rounded-0"
                defaultValue={trusteeFormik.values.name}
                onChange={trusteeFormik.handleChange}
                isInvalid={
                  trusteeFormik.touched.name &&
                  trusteeFormik.errors.name
                }
              />
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="panNumber">
                PAN Number
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="pan_card_number"
                placeholder="Enter pan card number"
                id="panNumber"
                className="rounded-0"
                defaultValue={trusteeFormik.values.pan_card_number}
                onChange={trusteeFormik.handleChange}
                isInvalid={
                  trusteeFormik.touched.pan_card_number &&
                  trusteeFormik.errors.pan_card_number
                }
              />
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.pan_card_number}
              </Form.Control.Feedback>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="id_aadhar_no">
                Aadhar No<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter aadhar number"
                id="id_aadhar_no"
                name="aadhar_no"
                className="rounded-0"
                defaultValue={trusteeFormik.values.aadhar_no}
                onChange={trusteeFormik.handleChange}
                isInvalid={
                  trusteeFormik.touched.aadhar_no &&
                  trusteeFormik.errors.aadhar_no
                }
              />
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.aadhar_no}
              </Form.Control.Feedback>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="mobileNo">
                Mobile No
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="mobile_number"
                placeholder="Enter mobile number"
                id="mobileNo"
                className="rounded-0"
                defaultValue={trusteeFormik.values.mobile_number}
                onChange={trusteeFormik.handleChange}
                isInvalid={
                  trusteeFormik.touched.mobile_number &&
                  trusteeFormik.errors.mobile_number
                }
              />
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.mobile_number}
              </Form.Control.Feedback>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="email">
                E-mail
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="email_id"
                placeholder="Enter email"
                id="email"
                className="rounded-0"
                defaultValue={trusteeFormik.values.email_id}
                onChange={trusteeFormik.handleChange}
                isInvalid={
                  trusteeFormik.touched.email_id &&
                  trusteeFormik.errors.email_id
                }
              />
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.email_id}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
              <Form.Label htmlFor="id_address">
                Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="id_address"
                placeholder="Enter address"
                className="rounded-0"
                defaultValue={trusteeFormik.values.address}
                onChange={trusteeFormik.handleChange}
                isInvalid={
                  trusteeFormik.touched.address && trusteeFormik.errors.address
                }
              />
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.address}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
              <Form.Label htmlFor="type_of_membership">
                Types of Membership<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                id="type_of_membership"
                onChange={trusteeFormik.handleChange}
                name="type_of_membership"
                className="rounded-0"
                isInvalid={
                  trusteeFormik.touched.type_of_membership &&
                  trusteeFormik.errors.type_of_membership
                }
                value={trusteeFormik.values.type_of_membership} // Set value for Form.Select
              >
                <option value="">Select Membership</option>
                <option value="Trustee">Trustee</option>
                <option value="Volunteers">Volunteers</option>
                <option value="CSR Fund">CSR Fund</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.type_of_membership}
              </Form.Control.Feedback>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
              <Form.Label htmlFor="amount">
                Amount<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="amount"
                placeholder="Enter amount"
                id="amount"
                className="rounded-0"
                value={trusteeFormik.values.amount} // Set value for Form.Control
                onChange={trusteeFormik.handleChange}
                isInvalid={
                  trusteeFormik.touched.amount && trusteeFormik.errors.amount
                }
              />
              <Form.Control.Feedback type="invalid">
                {trusteeFormik.errors.amount}
              </Form.Control.Feedback>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
              <Button className="" type="submit">Pay Now</Button>
            </Col>
          </Row>
        </Container>

      </Form>
      <ToastContainer/>
    </Card>
  );
};

export default Trustees;
