import contactDoneImg from "../../assets/contactDone.jpg";
import style from "./Contact.module.scss";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import validationContactSchema from "./validationContactSchema";
import { useFormik } from "formik";
import api from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validationSchema: validationContactSchema,
    onSubmit: async (values) => {
      try {
        const response = await api.postEnquiry(values);
        if (response.status == 200) {
          toast.success(
            "We appreciate you contacting us. One of our colleagues will get back in touch with you soon!Have a great day!",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
          navigate("/thankyou");
        }
      } catch (error) {
        console.error("Error making POST request:", error);
        navigate("/errorpage");
      }
    },
  });
  console.log(contactFormik);
  return (
    <div className={style.contact_details}>
      <img src={contactDoneImg} alt="" className={style.contact_image} />

      <Container className={style.addressInfo}>
        <Row className="gy-4">
          <Col md={8} sm={12} className={style.officeInfo}>
            {" "}
            <Card.Text className="py-3 text-center">
              {" "}
              <MdLocationPin className={style.location_icons} />
            </Card.Text>
            <Card.Text className={style.addrestext}>
              <p>
                <b style={{ fontSize: "17px" }}>Head Office:</b>
                <span style={{ paddingLeft: "10px" }}>
                  43-B, Okhla Village, Jamia Nagar, New Delhi-110025
                </span>
              </p>
            </Card.Text>
          </Col>
          <Col md={4} sm={12} className={style.contactInfo}>
            {" "}
            <Card.Title className={style.location_details}>
              <MdEmail className={style.location_icons} />
              <Card.Text className="text-center">
                {" "}
                <p className="my-4">socialwelfarealmanac@gmail.com</p>
                <p className={style.phoneNumber}>011-43506838</p>
              </Card.Text>
            </Card.Title>
          </Col>
        </Row>
      </Container>

      <div className={style.form_bg}>
        <Container>
          <Form onSubmit={contactFormik.handleSubmit}>
            <Row>
              <Col md={6} className="py-3">
                <Form.Group>
                  <Form.Label htmlFor="hospital_name">
                    Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    className="rounded-0"
                    placeholder="Enter name"
                    defaultValue={contactFormik.values.name}
                    onChange={contactFormik.handleChange}
                    isInvalid={
                      contactFormik.touched.name && contactFormik.errors.name
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {contactFormik.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="hospital_name">
                    Email<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    className="rounded-0"
                    placeholder="Enter valid email *"
                    defaultValue={contactFormik.values.email}
                    onChange={contactFormik.handleChange}
                    isInvalid={
                      contactFormik.touched.name && contactFormik.errors.email
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {contactFormik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="hospital_name">
                    Mobile Number<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    className="rounded-0"
                    placeholder="Your mobile number *"
                    defaultValue={contactFormik.values.mobile}
                    onChange={contactFormik.handleChange}
                    isInvalid={
                      contactFormik.touched.mobile &&
                      contactFormik.errors.mobile
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {contactFormik.errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="py-3">
                <Form.Group>
                  <Form.Label htmlFor="hospital_name">
                    Message<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Enter message"
                    className="rounded-0"
                    rows={5}
                    defaultValue={contactFormik.values.message}
                    onChange={contactFormik.handleChange}
                    isInvalid={
                      contactFormik.touched.message &&
                      contactFormik.errors.message
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {contactFormik.errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="btn btn-primary my-3 rounded-0"
                />
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
