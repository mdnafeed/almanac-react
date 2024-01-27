import { useState } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import validationEducationSchema from "./validationEducationSchema";
import { useFormik } from "formik";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";
const EducationForm = () => {
  const [addAdharFile, setAddAdharFile] = useState(false);
  const [addVoterIdFilet, setAddVoterIdFilet] = useState(false);
  const [addIncomeFile, setAddIncomeFile] = useState(false);
  const [addDomicileFile, setAddDomicileFile] = useState(false);
  const navigate = useNavigate();
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
    if (e.target.name == "student_photo") {
      educationFormik.setFieldValue("student_photo", e.currentTarget.files[0]);
    }
    if (e.target.name == "aadhar_card_check") {
      educationFormik.setFieldValue("aadhar_card_check", e.currentTarget.files[0]);
    } else if (e.target.name == "voter_id_card_checkbox") {
      educationFormik.setFieldValue("voter_id_card_checkbox", e.currentTarget.files[0]);
    } else if (e.target.name == "income_certificate_checkbox") {
      educationFormik.setFieldValue(
        "income_certificate_checkbox",
        e.currentTarget.files[0]
      );
    } else if (e.target.name == "domicile_certificate_checkbox") {
      educationFormik.setFieldValue(
        "domicile_certificate_checkbox",
        e.currentTarget.files[0]
      );
    } else if (e.target.name == "patient_thumb_impression") {
      educationFormik.setFieldValue(
        "patient_thumb_impression",
        e.currentTarget.files[0]
      );
    }
  };
  const toggleCheckbox = (e) => {
    educationFormik.setFieldValue("aadhar_card_checked", e.target.checked);
    handleFileChange(e, "aadhar_card");
  };
  const educationFormik = useFormik({
    initialValues: {
      university_name: "",
      course_applied_pursuing: "",
      year_semester_fee: "",
      last_qualification: "",
      applicant_name: "",
      gender: "",
      age: "",
      category: "",
      student_photo: "",
      religion: "",
      father_husband_name: "",
      motherName: "",
      permanent_address: "",
      aadhar_no: "",
      voter_id_no: "",
      email: "",
      monthly_family_income: "",
      mobileNo: "",
      bank_name: "",
      branch_name: "",
      account: "",
      ifsc_code: "",
      account_holder_name: "",
      parent_name: "",
      relationship_with_guardian: "",
      parent_occupation: "",
      parent_address: "",
      parent_email: "",
      parent_mobile_no: "",
      aadhar_card_checkbox: "",
      aadhar_card_checked: "",
      aadhar_card_check: "",
      voter_id_card_checkbox: "",
      income_certificate_checkbox: "",
      domicile_certificate_checkbox: "",
      patient_thumb_impression: "",
      i_have_declared: "",
      s_o_w_o: "",
      R_o: "",
      place: "",
      date: "",
    },
    validationSchema: validationEducationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        // Append text values to FormData
        for (const key in values) {
          if (values.hasOwnProperty(key) && key !== "student_photo" && key !== "aadhar_card_check" && key !== "voter_id_card_checkbox" && key !== "income_certificate_checkbox" && key !== "domicile_certificate_checkbox") {
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
        formData.append("student_photo", values.student_photo)
        // Append additional file attachments if needed
        const response = await api.educationPostData(formData);
        if (response.data.status === 0) {
          // navigate("/educationsumbitafter", { state: { apidata: response.data } });
          navigate("/thankyou");
        }
      } catch (error) {
        console.error("Error making POST request:", error);
        // Handle error and navigate to error page if needed
        navigate("/errorpage");
      }
    },
  });
  console.log("form data sumbit show", educationFormik);
  return (
    <>
      <Form onSubmit={educationFormik.handleSubmit}>
        <Container>
          <Row>
            <h1 className="text-center">ONLINE FORM</h1>
            <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
              <Form.Label htmlFor="university">
                Institution/University/College
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="university_name"
                placeholder="Enter institution/university/college"
                id="university"
                className="rounded-0"
                defaultValue={educationFormik.values.university_name}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.university_name &&
                  educationFormik.errors.university_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.university_name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_course_applied_pursuing">
                Course Applied/Pursuing<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course applied/pursuing"
                id="id_course_applied_pursuing"
                name="course_applied_pursuing"
                className="rounded-0"
                defaultValue={educationFormik.values.course_applied_pursuing}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.course_applied_pursuing &&
                  educationFormik.errors.course_applied_pursuing
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.course_applied_pursuing}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_year_semester_fee">
                Year/Semester Fee<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter year/semester fee"
                id="id_year_semester_fee"
                name="year_semester_fee"
                className="rounded-0"
                defaultValue={educationFormik.values.year_semester_fee}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.year_semester_fee &&
                  educationFormik.errors.year_semester_fee
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.year_semester_fee}
              </Form.Control.Feedback>
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_last_qualification">
                Last Qualification<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last qualification"
                id="id_last_qualification"
                name="last_qualification"
                className="rounded-0"
                defaultValue={educationFormik.values.last_qualification}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.last_qualification &&
                  educationFormik.errors.last_qualification
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.last_qualification}
              </Form.Control.Feedback>
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_applicant_name">
                Name of the Applicant<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="id_applicant_name"
                placeholder="Enter applicant name"
                name="applicant_name"
                className="rounded-0"
                defaultValue={educationFormik.values.applicant_name}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.applicant_name &&
                  educationFormik.errors.applicant_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.applicant_name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="gender">
                Select Gender<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                id="gender"
                name="gender"
                className="rounded-0"
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.gender &&
                  educationFormik.errors.gender
                }
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.gender}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="age">
                Age<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                id="age"
                name="age"
                className="rounded-0"
                defaultValue={educationFormik.values.age}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.age && educationFormik.errors.age
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.age}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="category">
                Category<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                id="category"
                name="category"
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.category &&
                  educationFormik.errors.category
                }
                className="rounded-0"
              >
                <option value="">Select Category</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="obc">OBC</option>
                <option value="Rba">RBA</option>
                <option value="alc">ALC</option>
                <option value="ews">EWS</option>
                <option value="ph">PH</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.category}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} className="mb-3">
              <Form.Label htmlFor="photo">
                Student Photo<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="file"
                id="photo"
                name="student_photo"
                className="rounded-0"
                onChange={(e) => handleFileChange(e, "student_photo")}
                onBlur={educationFormik.handleBlur}
                isInvalid={
                  educationFormik.touched.student_photo &&
                  educationFormik.errors.student_photo
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.student_photo}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="religion">
                Religion<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter religion"
                id="religion"
                name="religion"
                className="rounded-0"
                defaultValue={educationFormik.values.religion}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.religion &&
                  educationFormik.errors.religion
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.religion}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_father_husband_name">
                Father's/Husband Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter father's/husband name"
                id="id_father_husband_name"
                name="father_husband_name"
                className="rounded-0"
                defaultValue={educationFormik.values.father_husband_name}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.father_husband_name &&
                  educationFormik.errors.father_husband_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.father_husband_name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="motherName">
                Mother's Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mother name"
                id="motherName"
                name="motherName"
                className="rounded-0"
                defaultValue={educationFormik.values.motherName}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.motherName &&
                  educationFormik.errors.motherName
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.motherName}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="id_permanent_address">
                Permanent Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter permanent Address"
                id="id_permanent_address"
                name="permanent_address"
                className="rounded-0"
                defaultValue={educationFormik.values.permanent_address}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.permanent_address &&
                  educationFormik.errors.permanent_address
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.permanent_address}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Label htmlFor="id_aadhar_no">
                Aadhar No<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter aadhar number"
                id="id_aadhar_no"
                name="aadhar_no"
                className="rounded-0"
                defaultValue={educationFormik.values.aadhar_no}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.aadhar_no &&
                  educationFormik.errors.aadhar_no
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.aadhar_no}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Label htmlFor="id_voter_id_no">
                Voter Id No.<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter voter id"
                id="id_voter_id_no"
                name="voter_id_no"
                className="rounded-0"
                defaultValue={educationFormik.values.voter_id_no}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.voter_id_no &&
                  educationFormik.errors.voter_id_no
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.voter_id_no}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={3} lg={4} className="mb-3">
              <Form.Label htmlFor="email">
                Email<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email..."
                className="rounded-0"
                defaultValue={educationFormik.values.email}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.email && educationFormik.errors.email
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.email}
              </Form.Control.Feedback>
            </Col>
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
                defaultValue={educationFormik.values.monthly_family_income}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.monthly_family_income &&
                  educationFormik.errors.monthly_family_income
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.monthly_family_income}
              </Form.Control.Feedback>
            </Form.Group>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="mobile">
                Mobile No.<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="mobileNo"
                id="mobileNo"
                placeholder="Enter Mobile No..."
                className="rounded-0"
                defaultValue={educationFormik.values.mobileNo}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.mobileNo &&
                  educationFormik.errors.mobileNo
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.mobileNo}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className="mb-2">
              <b>
                BANK ACCOUNT DETAIL OF APPLICANT / INSTITUTION / UNIVERSITY /
                COLLEGE
              </b>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_bank_name">
                Bank Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="bank_name"
                id="id_bank_name"
                placeholder="Enter bank name"
                className="rounded-0"
                defaultValue={educationFormik.values.bank_name}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.bank_name &&
                  educationFormik.errors.bank_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.bank_name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_branch_name">
                Branch Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="branch_name"
                id="id_branch_name"
                placeholder="Enter branch name"
                className="rounded-0"
                defaultValue={educationFormik.values.branch_name}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.branch_name &&
                  educationFormik.errors.branch_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.branch_name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_account">
                Account<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="account"
                id="id_account"
                placeholder="Enter account"
                className="rounded-0"
                defaultValue={educationFormik.values.account}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.account &&
                  educationFormik.errors.account
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.account}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_ifsc_code">
                IFSC Code<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="ifsc_code"
                id="id_ifsc_code"
                placeholder="Enter IFSC code"
                className="rounded-0"
                defaultValue={educationFormik.values.ifsc_code}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.ifsc_code &&
                  educationFormik.errors.ifsc_code
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.ifsc_code}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_account_holder_name">
                Account Holder's Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="account_holder_name"
                id="id_account_holder_name"
                placeholder="Enter account holder's name"
                className="rounded-0"
                defaultValue={educationFormik.values.account_holder_name}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.account_holder_name &&
                  educationFormik.errors.account_holder_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.account_holder_name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={3} lg={12} className="my-2">
              <b>
                PARENTS/GUARDIAN DETAILS<span className="text-danger">*</span>
              </b>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_parent_name">
                Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="parent_name"
                id="id_parent_name"
                placeholder="Enter parent name"
                className="rounded-0"
                defaultValue={educationFormik.values.parent_name}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.parent_name &&
                  educationFormik.errors.parent_name
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.parent_name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_relationship_with_guardian">
                Relationship with guardian<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="relationship_with_guardian"
                id="id_relationship_with_guardian"
                placeholder="Enter relationship with guardian"
                className="rounded-0"
                defaultValue={educationFormik.values.relationship_with_guardian}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.relationship_with_guardian &&
                  educationFormik.errors.relationship_with_guardian
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.relationship_with_guardian}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <Form.Label htmlFor="id_parent_occupation">
                Occupation<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="parent_occupation"
                id="id_parent_occupation"
                placeholder="Enter parent occupation"
                className="rounded-0"
                defaultValue={educationFormik.values.parent_occupation}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.parent_occupation &&
                  educationFormik.errors.parent_occupation
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.parent_occupation}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <Form.Label htmlFor="id_parent_address">
                Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="parent_address"
                id="id_parent_address"
                placeholder="Enter parent address"
                className="rounded-0"
                defaultValue={educationFormik.values.parent_address}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.parent_address &&
                  educationFormik.errors.parent_address
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.parent_address}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Label htmlFor="id_parent_email">
                Email ID<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="parent_email"
                id="id_parent_email"
                placeholder="Enter parent email"
                className="rounded-0"
                defaultValue={educationFormik.values.parent_email}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.parent_email &&
                  educationFormik.errors.parent_email
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.parent_email}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Label htmlFor="id_parent_mobile_no">
                Mobile No<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="parent_mobile_no"
                id="id_parent_mobile_no"
                placeholder="Enter parent mobile no"
                className="rounded-0"
                defaultValue={educationFormik.values.parent_mobile_no}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.parent_mobile_no &&
                  educationFormik.errors.parent_mobile_no
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.parent_mobile_no}
              </Form.Control.Feedback>
            </Col>
            {/*--------------------------Document Uploade ----------------------------------------*/}
            <Col xs={12} sm={12} md={3} lg={3} className="mb-3">
              <Form.Group>
                <Form.Check
                  inline
                  label="Aadhar Card"
                  name="aadhar_card"
                  type="checkbox"
                  id="aadhar_card_checked"
                  onChange={toggleCheckbox}
                  checked={educationFormik.values.aadhar_card_checked}
                />
                <p className="text-danger">
                  {educationFormik.errors.aadhar_card_checked}
                </p>
              </Form.Group>
              {addAdharFile && (
                <div>
                  <Form.Control
                    type="file"
                    placeholder="Aadhar Upload"
                    name="aadhar_card_check"
                    onChange={(e) => handleFileChange(e, "aadhar_card_check")}
                    // onChange={handleFileChange}
                    onBlur={educationFormik.handleBlur}
                    isInvalid={
                      !educationFormik.values.aadhar_card_check &&
                      educationFormik.touched.aadhar_card_check
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {educationFormik.errors.aadhar_card_check}
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

              // onChange={handleFileChange}
              />
              {addVoterIdFilet && (
                <div>
                  <Form.Control
                    className="my-3"
                    type="file"
                    placeholder=""
                    name="voter_id_card_checkbox"
                    // onChange={(e) =>
                    //   handleFileChange(e, "voter_id_card_checkbox")
                    // }
                    onChange={handleFileChange}
                    // onChange={(e) => handleUpload(e, "voter_id_card")}
                    onBlur={educationFormik.handleBlur}
                    isInvalid={
                      !educationFormik.values.voter_id_card_checkbox &&
                      educationFormik.touched.voter_id_card_checkbox
                    }
                  />
                    <Form.Control.Feedback type="invalid">
                    {educationFormik.errors.voter_id_card_checkbox}
                  </Form.Control.Feedback>

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
                    onChange={handleFileChange}
                    isInvalid={
                      !educationFormik.values.income_certificate_checkbox &&
                      educationFormik.touched.income_certificate_checkbox
                    }
                  />
                    <Form.Control.Feedback type="invalid">
                    {educationFormik.errors.income_certificate_checkbox}
                  </Form.Control.Feedback>
                   
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
                    // onChange={(e) =>
                    //   handleFileChange(
                    //     e,"domicile_certificate_checkbox"
                    //   )
                    // }
                    onChange={handleFileChange}
                    isInvalid={
                      !educationFormik.values.domicile_certificate_checkbox &&
                      educationFormik.touched.domicile_certificate_checkbox
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {educationFormik.errors.domicile_certificate_checkbox}
                  </Form.Control.Feedback>
                </div>
              )}
            </Col>
            <Form.Group as={Col} md="12" className="mb-3">
              <Form.Label>
                Patient's Signature/Thump Impression
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="file"
                name="patient_thumb_impression"
                onChange={handleFileChange}
                className="rounded-0"
                isInvalid={
                  educationFormik.touched.patient_thumb_impression &&
                  educationFormik.errors.patient_thumb_impression
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.patient_thumb_impression}
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
                defaultValue={educationFormik.values.i_have_declared}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.i_have_declared &&
                  educationFormik.errors.i_have_declared
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.i_have_declared}
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
                defaultValue={educationFormik.values.s_o_w_o}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.s_o_w_o &&
                  educationFormik.errors.s_o_w_o
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.s_o_w_o}
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
                defaultValue={educationFormik.values.R_o}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.R_o && educationFormik.errors.R_o
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.R_o}
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
                defaultValue={educationFormik.values.place}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.place && educationFormik.errors.place
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.place}
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
                defaultValue={educationFormik.values.date}
                onChange={educationFormik.handleChange}
                isInvalid={
                  educationFormik.touched.date && educationFormik.errors.date
                }
              />
              <Form.Control.Feedback type="invalid">
                {educationFormik.errors.date}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} md={1} lg={6} className="mb-3">
              <Button
                className="btn rounded-0 btn-primary btn-large centerButton my-2"
                type="submit"
              >
                SUBMIT
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default EducationForm;