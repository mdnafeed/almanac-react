import { useState } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import "./healthcare.scss";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";
const HealthcareForm = () => {
  const navigate = useNavigate();
  const [addAdharFile, setAddAdharFile] = useState(false);
  const [addVoterIdFilet, setAddVoterIdFilet] = useState(false);
  const [addIncomeFile, setAddIncomeFile] = useState(false);
  const [addDomicileFile, setAddDomicileFile] = useState(false);


  const handleFileChange = (e, inputType) => {
    const isChecked = e.target.checked;
    switch (inputType) {
      case "aadhar_card":
        setAddAdharFile(isChecked);
        break;
      case "voter_id_card":
        setAddVoterIdFilet(isChecked);
        break;

      case "income_certificate":
        setAddIncomeFile(isChecked);
        break;
      case "domicile_certificate":
        setAddDomicileFile(isChecked);
        break;
      default:
        break;
    }
    if (e.target.name == "patient_photo") {
      formik.setFieldValue("patient_photo", e.currentTarget.files[0]);
    }
    if (e.target.name == "aadhar_card_check") {
      formik.setFieldValue("aadhar_card_check", e.currentTarget.files[0]);
    } else if (e.target.name == "voter_id_card_checkbox") {
      formik.setFieldValue("voter_id_card_checkbox", e.currentTarget.files[0]);
    } else if (e.target.name == "income_certificate_checkbox") {
      formik.setFieldValue(
        "income_certificate_checkbox",
        e.currentTarget.files[0]
      );
    } else if (e.target.name == "domicile_certificate_checkbox") {
      formik.setFieldValue(
        "domicile_certificate_checkbox",
        e.currentTarget.files[0]
      );
    } else if (e.target.name == "patient_thumb_impression") {
      formik.setFieldValue(
        "patient_thumb_impression",
        e.currentTarget.files[0]
      );
    }
  };

  const toggleCheckbox = (e) => {
    formik.setFieldValue("aadhar_card_checked", e.target.checked);
    handleFileChange(e, "aadhar_card");
  };
  const formik = useFormik({
    initialValues: {
      hospital_name: "",
      department_name: "",
      address: "",
      patient_photo: "",
      name_of_the_patient: "",
      father_husband_name: "",
      mother_name: "",
      permanent_address: "",
      gender: "",
      age: "",
      category: "",
      religion: "",
      aadhar_no_voter_id_no: "",
      email: "",
      mobile_no: "",
      monthly_family_income: "",
      patient_name: "",
      patient_occupation: "",
      patient_email_id: "",
      patient_mobile_number: "",
      guardian_address: "",
      aadhar_card_checkbox: "",
      aadhar_card_checked: "",
      aadhar_card_check: "",
      domicile_certificate_checkbox: "",
      income_certificate: "",
      income_certificate_checkbox: "",
      voter_id_card_checkbox: "",
      voter_id_card: "",
      patient_thumb_impression: "",
      i_have_declared: "",
      s_o_w_o: "",
      R_o: "",
      place: "",
      date: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
    
        // Append text values to FormData
        for (const key in values) {
          if (values.hasOwnProperty(key) && key !== "patient_photo" && key !== "aadhar_card_check" && key !== "voter_id_card_checkbox" && key !== "income_certificate_checkbox" && key !== "domicile_certificate_checkbox") {
            formData.append(key, values[key]);
          }
        }
    
        // Append file attachments to FormData
        if (addAdharFile) {
          formData.append("aadhar_card_check", values.aadhar_card_check);
        }
    
        if (addVoterIdFilet) {
          formData.append("voter_id_card_checkbox", values.voter_id_card_checkbox);
        }
    
        if (addIncomeFile) {
          formData.append("income_certificate_checkbox", values.income_certificate_checkbox);
        }
    
        if (addDomicileFile) {
          formData.append("domicile_certificate_checkbox", values.domicile_certificate_checkbox);
        }
        formData.append("patient_photo", values.patient_photo)
        
    
        // Append additional file attachments if needed
    
        const response = await api.healthcarePostData(formData);
    
        if (response.data.status === 0) {
          // navigate("/healthcareSumbitafter", { state: { apidata: response.data } });
          navigate("/thankyou");
        }
      } catch (error) {
        console.error("Error making POST request:", error);
        // Handle error and navigate to error page if needed
      }
    },
  });
  console.log("before sumbit4");
  console.log(formik);
  return (
    <>
      <img
        src="https://i.ibb.co/ZWGKMyH/medical-doctor-stethoscope-and-office-sign-web-header.jpg"
        className="w-100"
      />
      <Form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
        <Container>
          <Row>
            <h1 className="text-center pt-2">ONLINE FORM</h1>
            <Form.Group as={Col} md="6">
              <Form.Label>
                Hospital Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                as="input"
                name="hospital_name"
                placeholder="Enter hospital name"
                className="rounded-0"
                defaultValue={formik.values.hospital_name}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.hospital_name && formik.errors.hospital_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.hospital_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>
                Department Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter department name"
                name="department_name"
                className="rounded-0"
                defaultValue={formik.values.department_name}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.department_name &&
                  formik.errors.department_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.department_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3">
              <Form.Label>
                Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                className="rounded-0"
                defaultValue={formik.values.address}
                onChange={formik.handleChange}
                isInvalid={formik.touched.address && formik.errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Col xs={12} sm={12} md={12} lg={12} className="mb-2">
              <b>Patient`s Information</b>
            </Col>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="photo">
                Patient Photo<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="file"
                name="patient_photo"
                onChange={handleFileChange}
                className="rounded-0"
                isInvalid={
                  formik.touched.patient_photo && formik.errors.patient_photo
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.patient_photo}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>
                Name of the Patient<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                name="name_of_the_patient"
                className="rounded-0"
                defaultValue={formik.values.name_of_the_patient}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.name_of_the_patient &&
                  formik.errors.name_of_the_patient
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name_of_the_patient}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>
                Father`s/Husband Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter father's/husband name"
                name="father_husband_name"
                className="rounded-0"
                defaultValue={formik.values.father_husband_name}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.father_husband_name &&
                  formik.errors.father_husband_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.father_husband_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>
                Mother Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mother name"
                name="mother_name"
                className="rounded-0"
                defaultValue={formik.values.mother_name}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.mother_name && formik.errors.mother_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.mother_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" className="mb-3">
              <Form.Label>
                Permanent Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter permanent address"
                name="permanent_address"
                className="rounded-0"
                defaultValue={formik.values.permanent_address}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.permanent_address &&
                  formik.errors.permanent_address
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.permanent_address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="gender">
                Select gender<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                id="gender"
                onChange={formik.handleChange}
                name="gender"
                className="rounded-0"
                isInvalid={formik.touched.gender && formik.errors.gender}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.gender}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="age">
                Age<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                id="age"
                name="age"
                className="rounded-0"
                defaultValue={formik.values.age}
                onChange={formik.handleChange}
                isInvalid={formik.touched.age && formik.errors.age}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.age}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="category">
                Category<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                id="category"
                name="category"
                className="rounded-0"
                onChange={formik.handleChange}
                isInvalid={formik.touched.category && formik.errors.category}
              >
                <option value="">Select Category</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="obc">OBC</option>
                <option value="Rba">RBA</option>
                <option value="alc">ALC</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.category}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="religion">
                Religion<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter religion"
                id="religion"
                name="religion"
                onChange={formik.handleChange}
                defaultValue={formik.values.religion}
                className="rounded-0"
                isInvalid={formik.touched.religion && formik.errors.religion}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.religion}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="idproved">
                Aadhar No<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="aadhaarVoterId"
                name="aadhar_no_voter_id_no"
                className="rounded-0"
                placeholder="Enter aadhar card number"
                onChange={formik.handleChange}
                defaultValue={formik.values.aadhar_no_voter_id_no}
                isInvalid={
                  formik.touched.aadhar_no_voter_id_no &&
                  formik.errors.aadhar_no_voter_id_no
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.aadhar_no_voter_id_no}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="email">
                Email<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                className="rounded-0"
                defaultValue={formik.values.email}
                onChange={formik.handleChange}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="mobile">
                Mobile No.<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="mobile_no"
                id="mobileNo"
                placeholder="Enter mobile no"
                className="rounded-0"
                defaultValue={formik.values.mobile_no}
                onChange={formik.handleChange}
                isInvalid={formik.touched.mobile_no && formik.errors.mobile_no}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.mobile_no}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="familyIncome">
                Monthly Family Income<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="monthly_family_income"
                id="familyIncome"
                placeholder="Enter family income"
                className="rounded-0"
                defaultValue={formik.values.monthly_family_income}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.monthly_family_income &&
                  formik.errors.monthly_family_income
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.monthly_family_income}
              </Form.Control.Feedback>
            </Form.Group>
            <Col xs={12} sm={12} md={12} lg={12} className="mb-2">
              <b>Parents/Guardians Details</b>
            </Col>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="email">
                Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="patient_name"
                id="parrentName"
                placeholder="Enter Name"
                className="rounded-0"
                defaultValue={formik.values.patient_name}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.patient_name && formik.errors.patient_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.patient_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="occupation">
                Occupation<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="patient_occupation"
                id="occupation"
                placeholder="Enter occupation"
                className="rounded-0"
                defaultValue={formik.values.occupation}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.patient_occupation &&
                  formik.errors.patient_occupation
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.patient_occupation}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label htmlFor="email">
                E-mail ID<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="patient_email_id"
                id="emailId"
                placeholder="Enter email"
                className="rounded-0"
                defaultValue={formik.values.patient_email_id}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.patient_email_id &&
                  formik.errors.patient_email_id
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.patient_email_id}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3" controlId="mobileNo">
              <Form.Label>
                Mobile No<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="patient_mobile_number"
                placeholder="Enter mobile number"
                className="rounded-0"
                defaultValue={formik.values.patient_mobile_number}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.patient_mobile_number &&
                  formik.errors.patient_mobile_number
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.patient_mobile_number}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" className="mb-3">
              <Form.Label>
                Guardian Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="guardian_address"
                className="rounded-0"
                defaultValue={formik.values.guardian_address}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.guardian_address &&
                  formik.errors.guardian_address
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.guardian_address}
              </Form.Control.Feedback>
            </Form.Group>
            <Col xs={12} sm={12} md={3} lg={12} className="my-2">
              <b>
                Documents<span className="text-danger">*</span>
              </b>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Group>
                <Form.Check
                  inline
                  label="Aadhar Card"
                  name="aadhar_card"
                  type="checkbox"
                  id="aadhar_card_checked"
                  onChange={toggleCheckbox}
                  checked={formik.values.aadhar_card_checked}
                />
                <p className="text-danger">
                  {formik.errors.aadhar_card_checked}
                </p>
              </Form.Group>
              {addAdharFile && (
                <div>
                  <Form.Control
                    type="file"
                    placeholder="Aadhar Upload"
                    name="aadhar_card_check"
                    onChange={(e) => handleFileChange(e, "aadhar_card_check")}
                    isInvalid={
                      !formik.values.aadhar_card_check &&
                      formik.touched.aadhar_card_check
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.aadhar_card_check}
                  </Form.Control.Feedback>
                </div>
              )}
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Check
                inline
                label="Voter ID Card"
                name="voter_id_card"
                type="checkbox"
                onChange={(e) => handleFileChange(e, "voter_id_card")}


              />
              {addVoterIdFilet && (
                <div>
                  <Form.Control
                    className="my-3"
                    type="file"
                    placeholder=""
                    name="voter_id_card_checkbox"
                    onChange={handleFileChange}
                    isInvalid={
                      !formik.values.voter_id_card_checkbox &&
                      formik.touched.voter_id_card_checkbox
                    }
                  />
                  {formik.errors.voter_id_card_checkbox &&
                    formik.touched.voter_id_card_checkbox && (
                      <div className="text-danger">
                        {formik.errors.voter_id_card_checkbox}
                      </div>
                    )}
                </div>
              )}
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Check
                inline
                label="Income Certificate"
                name="income_certificate"
                type="checkbox"
                id="income-checkbox"
                onChange={(e) => handleFileChange(e, "income_certificate")}
              />
              {addIncomeFile && (
                <div>
                  <Form.Control
                    className="my-3"
                    type="file"
                    placeholder="File Upload"
                    name="income_certificate_checkbox"
                    onChange={(e) =>
                      handleFileChange(e, "income_certificate_checkbox")
                    }

                    isInvalid={
                      !formik.values.income_certificate_checkbox &&
                      formik.touched.income_certificate_checkbox
                    }
                  />
                  {formik.errors.income_certificate_checkbox &&
                    formik.touched.income_certificate_checkbox && (
                      <div className="text-danger"></div>
                    )}
                </div>
              )}
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Check
                inline
                label="Domicile Certificate"
                name="domicile_certificate"
                type="checkbox"
                id="inline-checkbox"
                onChange={(e) => handleFileChange(e, "domicile_certificate")}
              />
              {addDomicileFile && (
                <div>
                  <Form.Control
                    className="my-3"
                    type="file"
                    placeholder="File Upload"
                    name="domicile_certificate_checkbox"
                    onChange={(e) =>
                      handleFileChange(e, "domicile_certificate_checkbox")
                    }
                    isInvalid={
                      !formik.values.domicile_certificate_checkbox &&
                      formik.touched.domicile_certificate_checkbox
                    }
                  />
                  {formik.errors.domicile_certificate_checkbox &&
                    formik.touched.domicile_certificate_checkbox && (
                      <div className="text-danger"></div>
                    )}
                </div>
              )}
            </Col>
            <Form.Group as={Col} md="12" className="mb-3">
              <Form.Label>
                Patient`s Signature/Thump Impression
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="file"
                name="patient_thumb_impression"
                onChange={handleFileChange}
                className="rounded-0"
                isInvalid={
                  formik.touched.patient_thumb_impression &&
                  formik.errors.patient_thumb_impression
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.patient_thumb_impression}
              </Form.Control.Feedback>
            </Form.Group>
            <p className="text-center">Declaration</p>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor=" I have declared that">
                I have declared that<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="i_have_declared"
                id="have_declared"
                placeholder="Enter ..."
                className="rounded-0"
                defaultValue={formik.values.i_have_declared}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.i_have_declared &&
                  formik.errors.i_have_declared
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.i_have_declared}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="S/o/D/o/W/o">
                S/o/D/o/W/o<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="s_o_w_o"
                id="s_o_w_o_d_o"
                placeholder="Enter ..."
                className="rounded-0"
                defaultValue={formik.values.s_o_w_o}
                onChange={formik.handleChange}
                isInvalid={formik.touched.s_o_w_o && formik.errors.s_o_w_o}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.s_o_w_o}
              </Form.Control.Feedback>
            </Col>
            <Col sm={12} md={12} lg={12} className="mb-3">
              <Form.Label htmlFor="R_o">
                R/o<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="R_o"
                id="r_o"
                placeholder="Enter ..."
                className="rounded-0"
                defaultValue={formik.values.R_o}
                onChange={formik.handleChange}
                isInvalid={formik.touched.R_o && formik.errors.R_o}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.R_o}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="place">
                Place<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="place"
                id="place_name"
                placeholder="....."
                className="rounded-0"
                defaultValue={formik.values.place}
                onChange={formik.handleChange}
                isInvalid={formik.touched.place && formik.errors.place}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.place}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="date">
                Date<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                name="date"
                id="id_date"
                placeholder="....."
                className="rounded-0"
                defaultValue={formik.values.date}
                onChange={formik.handleChange}
                isInvalid={formik.touched.date && formik.errors.date}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.date}
              </Form.Control.Feedback>
            </Col>
            <Form.Group as={Col} md="4" className="mb-3">
              <Button
                className="btn rounded-0 btn-primary btn-large centerButton my-2"
                type="submit"
              >
                SUBMIT
              </Button>
            </Form.Group>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default HealthcareForm;
