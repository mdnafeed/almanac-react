// validationSchema.js
import * as yup from "yup";
import { ValidationConstant_HEALTHCARE } from "../../../shared/constants/constantData";
const validationSchema = yup.object().shape({
  hospital_name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.HOSPITAL_NAME_ONLY_ALPHABATE)
    .min(2,ValidationConstant_HEALTHCARE.HOSPITAL_NAME_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.HOSPITAL_NAME_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.HOSPITAL_NAME_REQUIRED),
  department_name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.DEPARTMENT_NAME_ONLY_ALPHABATE)
    .min(2,ValidationConstant_HEALTHCARE.DEPARTMENT_NAME_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.DEPARTMENT_NAME_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.DEPARTMENT_NAME_REQUIRED),
  address: yup.string()
  .min(2,ValidationConstant_HEALTHCARE.UNIVERSITY_NAME_MIN_TWO_CHAR)
  .max(40,ValidationConstant_HEALTHCARE.UNIVERSITY_NAME_MAX_FORTY_CHAR)
  .required(ValidationConstant_HEALTHCARE.PERMANENT_ADDRESS_REQUIRED),
  patient_photo: yup
    .mixed()
    .required(ValidationConstant_HEALTHCARE.PATIENT_PHOTO_REQUIRED)
    .test(
      "fileSize",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_MAX,
      (value) => value && value.size <= 1000000
    )
    .test(
      "fileType",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_SUPPORT,
      (value) => value && value.type === "application/pdf"
    ),
  name_of_the_patient: yup
    .string()
    .matches( /^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.NAME_OF_THE_PATIENT_ONLY_ALPHABETE
    )
    .min(2,ValidationConstant_HEALTHCARE.NAME_OF_THE_PATIENT_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.NAME_OF_THE_PATIENT_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.NAME_OF_THE_PATIENT_REQUIRED),
  father_husband_name: yup
    .string()
    .matches( /^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.FATHER_HUSBAND_NAME_REQUIRED)
    .min(2,ValidationConstant_HEALTHCARE.FATHER_HUSBAND_NAME_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.FATHER_HUSBAND_NAME_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.FATHER_HUSBAND_NAME_REQUIRED),
  mother_name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.MOTHER_NAME_ONLY_ALPHABETE )
    .min(2,ValidationConstant_HEALTHCARE.MOTHER_NAME_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.MOTHER_NAME_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.MOTHER_NAME_REQUIRED),
  permanent_address: yup.string()
  .min(2,ValidationConstant_HEALTHCARE.PERMANENT_ADDRESS_MIN_LENGTH)
  .max(40,ValidationConstant_HEALTHCARE.PERMANENT_ADDRESS_MAX_LENGTH)
  .required(ValidationConstant_HEALTHCARE.PERMANENT_ADDRESS_REQUIRED),
  gender: yup.string().required(ValidationConstant_HEALTHCARE.GENDER_REQUIRED),
  age: yup.number().required(ValidationConstant_HEALTHCARE.AGE_REQUIRED),
  category: yup.string().required(ValidationConstant_HEALTHCARE.CATEGORY_REQUIRED),
  religion: yup
    .string()
    .matches(/^[A-Za-z]+$/,ValidationConstant_HEALTHCARE.RELIGION_ONLY_ALPHABATE)
    .min(2,ValidationConstant_HEALTHCARE.RELIGION_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.RELIGION_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.RELIGION_REQUIRED),
  aadhar_no_voter_id_no: yup
    .string()
    .matches(/^[0-9]{12}$/, "Invalid Aadhar card number. It must be 12 digits")
    .required(ValidationConstant_HEALTHCARE.AADHAR_NO_VOTER_ID_NO_REQUIRED),
  email: yup
    .string()
    .email(ValidationConstant_HEALTHCARE.EMAIL_INVALID)
    .required(ValidationConstant_HEALTHCARE.EMAIL_REQUIRED),
  mobile_no: yup
    .string()
    .matches(/^[0-9]{10}$/,ValidationConstant_HEALTHCARE.MOBILE_NO_INVALID)
    .required(ValidationConstant_HEALTHCARE.MOBILE_NO_REQUIRED),
  monthly_family_income: yup
    .number()
    .positive(ValidationConstant_HEALTHCARE.MONTHLY_FAMILY_INCOME_REQUIRED)
    .required(ValidationConstant_HEALTHCARE.MONTHLY_FAMILY_INCOME_POSITIVE_NO),
  patient_name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.PATIENT_NAME_ONLY_ALPHABATE)
    .min(2,ValidationConstant_HEALTHCARE.PATIENT_NAME_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.PATIENT_NAME_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.PATIENT_NAME_REQUIRED),
  patient_occupation: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.PATIENT_OCCUPATION_ONLY_ALPHABATE)
    .min(2,ValidationConstant_HEALTHCARE.PATIENT_OCCUPATION_MIN_LENGTH)
    .max(40,ValidationConstant_HEALTHCARE.PATIENT_OCCUPATION_MAX_LENGTH)
    .required(ValidationConstant_HEALTHCARE.PATIENT_OCCUPATION_REQUIRED),
  patient_email_id: yup
    .string()
    .email(ValidationConstant_HEALTHCARE.PATIENT_EMAIL_ID_INVALID)
    .required(ValidationConstant_HEALTHCARE.PATIENT_EMAIL_ID_REQUIRED),
  patient_mobile_number: yup
    .string()
    .matches(/^[0-9]{10}$/,ValidationConstant_HEALTHCARE.PATIENT_MOBILE_NUMBER_INVALID)
    .required(ValidationConstant_HEALTHCARE.PATIENT_MOBILE_NUMBER_REQUIRED),
  aadhar_card_checkbox: yup.boolean().oneOf([true], "Aadhar card required"),
  patient_thumb_impression: yup
    .mixed()
    .required(ValidationConstant_HEALTHCARE.PATIENT_THUMB_IMPRESSION_REQUIRED)
    .test(
      "fileSize",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_MAX,
      (value) => value && value.size <= 1000000
    )
    .test(
      "fileType",
     ValidationConstant_HEALTHCARE.CONSTANT_FILE_SUPPORT,
      (value) => value && value.type === "application/pdf"
    ),
  guardian_address: yup.string()
  .min(2,ValidationConstant_HEALTHCARE.GUARDIAN_ADDRESS_REQUIRED)
    .max(40,ValidationConstant_HEALTHCARE.GUARDIAN_ADDRESS_MIN_LENGTH)
  .required(ValidationConstant_HEALTHCARE.GUARDIAN_ADDRESS_MAX_LENGTH),
  aadhar_card_checked: yup
    .mixed()
    .required(ValidationConstant_HEALTHCARE.AADHAR_CARD_CHECKED_REQUIRED)
    .test( "fileSize",ValidationConstant_HEALTHCARE.CONSTANT_FILE_MAX,
      (value) => value && value.size <= 1 * 1024 * 1024
    )
    .test("fileType",ValidationConstant_HEALTHCARE.CONSTANT_FILE_SUPPORT,
      (value) => value && value.type === "application/pdf"
    ),
  voter_id_card_checkbox: yup
    .mixed()
    .required(ValidationConstant_HEALTHCARE.VOTER_ID_CARD_CHECKBOX_REQUIRED)
    .test(
      "fileSize",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_MAX,
      (value) => value && value.size <= 1000000
    )
    .test(
      "fileType",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_SUPPORT,
      (value) => value && value.type === "application/pdf"
    ),
  income_certificate_checkbox: yup
    .mixed()
    .required(ValidationConstant_HEALTHCARE.INCOME_CERTIFICATE_CHECKBOX_REQUIRED)
    .test(
      "fileSize",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_MAX,
      (value) => value && value.size <= 1000000
    )
    .test(
      "fileType",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_SUPPORT,
      (value) => value && value.type === "application/pdf"
    ),
  domicile_certificate_checkbox: yup
    .mixed()
    .required(ValidationConstant_HEALTHCARE.DOMICILE_CERTIFICATE_CHECKBOX_REQUIRED)
    .test(
      "fileSize",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_MAX,
      (value) => value && value.size <= 1000000
    )
    .test(
      "fileType",
      ValidationConstant_HEALTHCARE.CONSTANT_FILE_SUPPORT,
      (value) => value && value.type === "application/pdf"
    ),
  i_have_declared: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.I_HAVE_ONLY_CHAR)
    .required(ValidationConstant_HEALTHCARE.I_HAVE_DECLARED_REQUIRED),
  s_o_w_o: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, ValidationConstant_HEALTHCARE. S_O_W_O_ONLY_CHARS)
    .required(ValidationConstant_HEALTHCARE.S_O_W_O_REQUIRED),

  R_o: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,ValidationConstant_HEALTHCARE.R_O_W_O_ONLY_CHAR)
    .required(ValidationConstant_HEALTHCARE.R_O_REQUIRED),

  place: yup
    .string()
    .matches(/^[A-Za-z\s]+$/,"place must only contain alphabetical characters and spaces"
    )
    .required(ValidationConstant_HEALTHCARE.PLACE_REQUIRED),

  date: yup.string().required(ValidationConstant_HEALTHCARE.DATE_REQUIRED),
});

export default validationSchema;
