import contactDoneImg from "../../assets/contactDone.jpg";
import style from "./Contact.module.scss";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import validationContactSchema from "./validationContactSchema";
import { useFormik } from "formik";
import api from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { RouteConstant } from "../../shared/constants/route";
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
      <Container>
        <Row>
          <Col md={6} className={style.officeInfo}>
            <Card.Text className="py-3">
              <MdLocationPin className={style.location_icons} />
            </Card.Text>
            <Card.Text className="text-justify">
              <Card.Title>
                <span style={{ fontFamily: "sans-serif !important;" }}>
                  <span className="text-xl text-dark">Registered Office :</span>{" "}
                  43-B, Okhla Village, Jamia Nagar, New Delhi-110025
                </span>
              </Card.Title>
            </Card.Text>
          </Col>
          <Col className={style.contactInfo}>
            <Card.Title className={style.location_details}>
              <MdEmail className={style.location_icons} />
              <Card.Title>
                <p className="my-4 text-center">
                  socialwelfarealmanac@gmail.com
                </p>
              </Card.Title>
              {/* <Card.Text>
                <p className="text-center text-primary">011-43506838</p>
              </Card.Text> */}
              <Card.Text>
  <p className="text-center text-primary">
    <a href="tel:01143506838" className="text-primary"style={{ textDecoration: 'none' }}>
      011-43506838
    </a>
  </p>
</Card.Text>

            </Card.Title>
          </Col>
        </Row>
      </Container>

      <div className={style.form_bg}>
        <Container className="d-flex">
          <Row className="d-flex w-100 justify-content-between">
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h2>CONTACT US</h2>
              <div>
                <p className="font-weight-bold">
                  Get in <span className="text-primary">Touch with us</span>
                </p>
              </div>
              <p className="Muted link">
                Have questions or need assistance? Feel free to reach out to our
                support team anytime. We're here to help resolve issues, answer
                your queries, and ensure you have the best experience possible.
              </p>
              <h4 className="font-weight-bold">Connect with us:</h4>

              <div className="d-flex flex-row justify-content-start gap-2 ">
                <a
                  className="text-center btn btn-outline-light btn-floating m-1 bg-primary"
                  role="button"
                  href={RouteConstant.FACEBOOK_PROFILE_URL}
                >
                  <FaFacebookSquare />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1 bg-primary"
                  role="button"
                  href={RouteConstant.TWITTER_PROFILE_URL}
                >
                  <FaTwitterSquare />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1 bg-primary"
                  role="button"
                  href={RouteConstant.LINKEDIN_PROFILE_URL}
                >
                  <FaLinkedin />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1 bg-primary"
                  role="button"
                  href={RouteConstant.INSTAGRAM_PROFILE_URL}
                >
                  <FaInstagramSquare />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1 bg-primary"
                  role="button"
                  href="https://www.youtube.com/channel/UC583mQAnBvt0eEfSZKzLhlA"
                >
                  <FaYoutubeSquare />
                </a>
              </div>
            </Col>

            <Col md={6} className="d-flex align-items-center">
              <Form onSubmit={contactFormik.handleSubmit}>
                <Row>
                  <Col md={12} className="py-3">
                    <Col md={12} className="d-flex align-items-center ">
                      <Col md={6} className="">
                        <Form.Group>
                          <Form.Label htmlFor="hospital_name">
                            Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            className="rounded-1"
                            placeholder="Enter name"
                            defaultValue={contactFormik.values.name}
                            onChange={contactFormik.handleChange}
                            isInvalid={
                              contactFormik.touched.name &&
                              contactFormik.errors.name
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {contactFormik.errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="">
                        <Form.Group className="py-3">
                          <Form.Label htmlFor="hospital_email">
                            Email<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            className="rounded-1"
                            placeholder="Enter valid email *"
                            defaultValue={contactFormik.values.email}
                            onChange={contactFormik.handleChange}
                            isInvalid={
                              contactFormik.touched.name &&
                              contactFormik.errors.email
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {contactFormik.errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Col>
                    <Col md={12} className="">
                      <Form.Group>
                        <Form.Label htmlFor="hospital_mobile">
                          Mobile Number<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="mobile"
                          className="rounded-1"
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
                  </Col>
                  <Col md={12} className="">
                    <Form.Group>
                      <Form.Label htmlFor="message">
                        Message<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Enter message"
                        className="rounded-2"
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

                  <Col md={12} lg={12} className="text-center">
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="btn btn-primary my-3 rounded-1"
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
