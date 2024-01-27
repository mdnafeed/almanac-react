import * as yup from "yup";
import { ValidationConstant_EDUCATION } from "../../../shared/constants/constantData";
const validationEducationSchema = yup.object().shape({
  university_name: yup
  .string()
  .required(ValidationConstant_EDUCATION.UNIVERSITY_NAME_REQUIRED)
  .min(2,ValidationConstant_EDUCATION.UNIVERSITY_NAME_MIN_TWO_CHAR)
  .max(40,ValidationConstant_EDUCATION.UNIVERSITY_NAME_MAX_FORTY_CHAR)
  .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.UNIVERSITY_NAME_ONLY_CHAR),
course_applied_pursuing: yup
  .string()
  .required(ValidationConstant_EDUCATION.COURSE_APPLIED_PURSUING_REQUIRED)
  .min(2,ValidationConstant_EDUCATION.COURSE_APPLIED_PURSUING_REQUIRED_MIN)
  .max(40,ValidationConstant_EDUCATION.COURSE_APPLIED_PURSUING_REQUIRED_MAX)
  .matches(/^[a-zA-Z\s]*$/, ValidationConstant_EDUCATION.COURSE_APPLIED_PURSUING_ONLY_CHAR),
  year_semester_fee: yup
    .number()
    .typeError("Fee must be a number")
    .required(ValidationConstant_EDUCATION.YEAR_SEMESTER_FEE_REQUIRED)
    .positive(ValidationConstant_EDUCATION.YEAR_SEMESTER_FEE_ONLY_NUMBER)
    .integer("Fee must be an integer"),
  last_qualification: yup
    .string()
    .required(ValidationConstant_EDUCATION.APPLICANT_NAME_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.LAST_QUALIFICATION_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.LAST_QUALIFICATION_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.LAST_QUALIFICATION_ONLY_CHAR),
  applicant_name: yup
    .string()
    .required(ValidationConstant_EDUCATION.APPLICANT_NAME_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.APPLICANT_NAME_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.APPLICANT_NAME_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.LAST_QUALIFICATION_ONLY_CHAR),
  gender: yup.string().required(ValidationConstant_EDUCATION.GENDER_REQUIRED),
  age: yup.number().required(ValidationConstant_EDUCATION.AGE_REQUIRED),
  category: yup
    .string()
    .required(ValidationConstant_EDUCATION.CATEGORY_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.CATEGORY_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.CATEGORY_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.LAST_QUALIFICATION_ONLY_CHAR),
  student_photo: yup
    .mixed()
    .required(ValidationConstant_EDUCATION.STUDENT_PHOTO_REQUIRED)
    .test(
      "fileSize",ValidationConstant_EDUCATION.STUDENT_PHOTO_SUPPORT_MAX_SIZE,
      (value) => value && value.size <= 1 * 1024 * 1024
    )
    .test(
      "fileType",ValidationConstant_EDUCATION.STUDENT_PHOTO_SUPPORT_FILE,
      (value) => value && value.type === "application/pdf"
    ),
  religion: yup
    .string()
    .matches(
      /^[A-Za-z]+$/,ValidationConstant_EDUCATION. RELIGION_ONLY_CHAR
    )
    .min(2, ValidationConstant_EDUCATION.RELIGION_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.RELIGION_MAX_LENGTH)
    .required(ValidationConstant_EDUCATION.RELIGION_REQUIRED),
  father_husband_name: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,ValidationConstant_EDUCATION.FATHER_HUSBAND_NAME_ONLY_CHAR
    )
    .min(2, ValidationConstant_EDUCATION.FATHER_HUSBAND_NAME_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.FATHER_HUSBAND_NAME_MAX_LENGTH)
    .required(ValidationConstant_EDUCATION.FATHER_HUSBAND_NAME_REQUIRED),
  motherName: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,ValidationConstant_EDUCATION.MOTHER_NAME_ONLY_CHAR
    )
    .required(ValidationConstant_EDUCATION.MOTHER_NAME_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.MOTHER_NAME_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.MOTHER_NAME_MAX_LENGTH),
  permanent_address: yup
    .string()
    .required(ValidationConstant_EDUCATION.PERMANENT_ADDRESS_REQUIRED)
    .min(3, ValidationConstant_EDUCATION.PARENT_ADDRESS_MIN_LENGTH)
    .max(100, ValidationConstant_EDUCATION.PARENT_ADDRESS_MAX_LENGTH),
  aadhar_no: yup
    .string()
    .matches(/^[0-9]{12}$/, ValidationConstant_EDUCATION.AADHAR_VALID_NUMBER)
    .required(ValidationConstant_EDUCATION.AADHAR_NO_REQUIRED),
  voter_id_no: yup
    .string()
    .required(ValidationConstant_EDUCATION.VOTER_ID_NO_REQUIRED)
    .matches(/^[A-Z]{3}[0-9]{7}$/, ValidationConstant_EDUCATION.VOTER_ID_NO_VALID_NUMBER),
  email: yup
    .string()
    .email(ValidationConstant_EDUCATION.EMAIL_IS_VALID)
    .required(ValidationConstant_EDUCATION.EMAIL_REQUIRED),

  monthly_family_income: yup
    .number()
    .positive(ValidationConstant_EDUCATION.MONTHLY_FAMILY_INCOME_ONLY_NUMBER)
    .required(ValidationConstant_EDUCATION.MONTHLY_FAMILY_INCOME_REQUIRED),
  mobileNo: yup
    .string()
    .required(ValidationConstant_EDUCATION.MOBILE_NO_REQUIRED)
    .matches(/^[6-9]\d{9}$/, ValidationConstant_EDUCATION.MOBILE_NO_VALID_NUMBER),
  bank_name: yup
    .string()
    .required(ValidationConstant_EDUCATION.BANK_NAME_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.BANK_NAME_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.BANK_NAME_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.BANK_NAME_ONLY_CHAT),
  branch_name: yup
    .string()
    .required(ValidationConstant_EDUCATION.BRANCH_NAME_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.BRANCH_NAME_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.BRANCH_NAME_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.BRANCH_NAME_ONLY_CHARS),


  account: yup
    .string()
    .required(ValidationConstant_EDUCATION.ACCOUNT_REQUIRED)
    .matches(/^\d{9,18}$/, "Invalid account number format"),
  ifsc_code: yup
    .string()
    .required(ValidationConstant_EDUCATION.IFSC_CODE_REQUIRED)
    .matches(/^([A-Za-z]{4}\d{7})$/, ValidationConstant_EDUCATION.IFSC_CODE_VALID),
  account_holder_name: yup
    .string()
    .required(ValidationConstant_EDUCATION.ACCOUNT_HOLDER_NAME_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.ACCOUNT_HOLDER_NAME_NIM_LENGTH)
    .max(50, ValidationConstant_EDUCATION.ACCOUNT_HOLDER_NAME_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.BRANCH_NAME_ONLY_CHARS),
  parent_name: yup
    .string()
    .required(ValidationConstant_EDUCATION.PARENT_NAME_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.PARENT_NAME_NIM_LENGTH)
    .max(50, ValidationConstant_EDUCATION.PARENT_NAME_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.PARENT_NAME_ONLY_CHAR),
  relationship_with_guardian: yup
    .string()
    .required(ValidationConstant_EDUCATION.RELATIONSHIP_WITH_GUARDIAN_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.RELATIONSHIP_WITH_GUARDIAN_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.RELATIONSHIP_WITH_GUARDIAN_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.RELATIONSHIP_WITH_GUARDIAN_ONLY_CHARS),
  parent_occupation: yup
    .string()
    .required(ValidationConstant_EDUCATION.PARENT_OCCUPATION_REQUIRED)
    .min(2, ValidationConstant_EDUCATION.PARENT_OCCUPATION_MIN_LENGTH)
    .max(50, ValidationConstant_EDUCATION.PARENT_OCCUPATION_MAX_LENGTH)
    .matches(/^[a-zA-Z\s]*$/,ValidationConstant_EDUCATION.PARENT_OCCUPATION_ONLY_CHARS),
  parent_address: yup
    .string()
    .required(ValidationConstant_EDUCATION.PARENT_ADDRESS_REQUIRED)
    .min(5, ValidationConstant_EDUCATION.PARENT_ADDRESS_MIN_LENGTH)
    .max(100, ValidationConstant_EDUCATION.PARENT_ADDRESS_MAX_LENGTH)
    .matches(/^[a-zA-Z0-9\s]*$/,ValidationConstant_EDUCATION.PARENT_ADDRESS_CHAR_AND_NUMBER),
  parent_email: yup
    .string()
    .email(ValidationConstant_EDUCATION.PARENT_EMAIL_INVALID)
    .required(ValidationConstant_EDUCATION.PARENT_EMAIL_REQUIRED),
  parent_mobile_no: yup
    .string()
    .matches(/^[6-9]\d{9}$/,ValidationConstant_EDUCATION.PARENT_MOBILE_NO_INVALID)
    .required(ValidationConstant_EDUCATION.PARENT_MOBILE_NO_REQUIRED),
  aadhar_card_checked: yup.boolean().oneOf([true], "Aadhar card required"),
  aadhar_card_check: yup
    .mixed()
    .required(ValidationConstant_EDUCATION.AADHAR_CARD_CHECK_REQUIRED)
    .test(
      "fileSize",ValidationConstant_EDUCATION.AADHAR_CARD_CHECK_MAX_FILE_SIZE,
      (value) => value && value.size <= 1000000
    )
    .test(
      "fileType",ValidationConstant_EDUCATION.AADHAR_CARD_CHECK_FILE,
      (value) => value && value.type === "application/pdf"
    ),
  voter_id_card_checkbox: yup
    .mixed()//VOTER_ID_CARD_CHECKBOX_REQUIRED  
    .required(ValidationConstant_EDUCATION.VOTER_ID_CARD_CHECKBOX_REQUIRED)
    .test(
      "fileSize",ValidationConstant_EDUCATION.VOTER_ID_CARD_MAX_FILE_SIZE,
      (value) => value && value.size <= 1 * 1024 * 1024
    )
    .test(
      "fileType",ValidationConstant_EDUCATION.VOTER_ID_CARD_SUPPORTED_FILE,
      (value) => value && value.type === "application/pdf"
    ),
  income_certificate_checkbox: yup
    .mixed()
    .required(ValidationConstant_EDUCATION.INCOME_CERTIFICATE_CHECKBOX_REQUIRED)
    .test(
      "fileSize",ValidationConstant_EDUCATION.INCOME_CERTIFICATE_CHECKBOX_MAX_FILE,
      (value) => value && value.size <= 1 * 1024 * 1024)
    .test(
      "fileType",ValidationConstant_EDUCATION.INCOME_CERTIFICATE_CHECKBOX_SUPPORTED_FILE,
      (value) => value && value.type === "application/pdf"
    ),
domicile_certificate_checkbox: yup
    .mixed()
    .required(ValidationConstant_EDUCATION.DOMICILE_CERTIFICATE_CHECKBOX_REQUIRED)
    .test(
      "fileSize",ValidationConstant_EDUCATION.DOMICILE_CERTIFICATE_CHECKBOX_MAX_FILE_SIZE,
      (value) => value && value.size <= 1 * 1024 * 1024
    )
    .test(
      "fileType",ValidationConstant_EDUCATION.DOMICILE_CERTIFICATE_CHECKBOX_SUPPORTED_FILE,
      (value) => value && value.type === "application/pdf"
    ),
  patient_thumb_impression: yup
    .mixed()
    .required(ValidationConstant_EDUCATION.PATIENT_THUMB_IMPRESSION_REQUIRED)
    .test(
      "fileSize",ValidationConstant_EDUCATION.PATIENT_THUMB_IMPRESSION_MAX_FILE_SIZE,
      (value) => value && value.size <= 1 * 1024 * 1024
    )
    .test(
      "fileType",ValidationConstant_EDUCATION.PATIENT_THUMB_IMPRESSION_SUPPORT_FILE,
      (value) => value && value.type === "application/pdf"
    ),
  i_have_declared: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,ValidationConstant_EDUCATION.I_HAVE_ONLY_CHAR
    )
    .required(ValidationConstant_EDUCATION.I_HAVE_DECLARED_REQUIRED),
  s_o_w_o: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_EDUCATION.S_O_W_O_ONLY_CHARS)
    .required(ValidationConstant_EDUCATION.S_O_W_O_REQUIRED),
  R_o: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_EDUCATION.R_O_W_O_ONLY_CHAR)
    .required(ValidationConstant_EDUCATION.R_O_REQUIRED),

  place: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,"Place must only contain alphabetical characters and spaces")
    .required(ValidationConstant_EDUCATION.PLACE_REQUIRED),

  date: yup.string().required("Enter Date"),
});

export default validationEducationSchema;
