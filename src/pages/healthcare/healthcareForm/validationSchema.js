// validationSchema.js
import * as yup from "yup";

const validationSchema = yup.object().shape({
  hospital_name: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Hospital name must only contain alphabetical characters and spaces"
    )
    .required("Hospital name is required"),
  department_name: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Department name must only contain alphabetical characters and spaces"
    )
    .required("Department name is required"),
  address: yup.string().required("Permanent address is required"),
  // patient_photo: yup
  //   .mixed()
  //   .required("Patient photo is required")
  //   .test(
  //     "fileSize",
  //     "File size is too large (max 5MB)",
  //     (value) => value && value.size <= 5000000
  //   )
  //   .test(
  //     "fileType",
  //     "Unsupported file format",
  //     (value) => value && ["image/jpeg", "image/png"].includes(value.type)
  //   ),

  patient_photo: yup
  .mixed()
  .required("Patient photo is required")
  .test(
    "fileSize",
    "File size is too large (max 1MB)",
    (value) => value && value.size <= 1000000
  )
  .test(
    "fileType",
    "Unsupported file format. Only PDF files are allowed.",
    (value) => value && value.type === "application/pdf"
  ),
  name_of_the_patient: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Name of the patient must only contain alphabetical characters and spaces"
    )
    .required("Name of the patient is required"),
  father_husband_name: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Father/Husband's name must only contain alphabetical characters and spaces"
    )
    .required("Father/Husband's name is required"),
  mother_name: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Mother's name must only contain alphabetical characters and spaces"
    )
    .required("Mother's name is required"),
  permanent_address: yup.string().required("Permanent address is required"),
  gender: yup.string().required("Select gender"),
  age: yup.number().required("Age is required"),
  category: yup.string().required("category is required"),
  religion: yup
    .string()
    .matches(
      /^[A-Za-z]+$/,
      "Religion must only contain alphabetical characters"
    )
    .required("Religion is required"),
  aadhar_no_voter_id_no: yup
    .string()
    .matches(/^[0-9]{12}$/, "Invalid Aadhar card number. It must be 12 digits")
    .required("Aadhar card number is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile_no: yup
    .string()
    .matches(
      /^[0-9]{10}$/,
      "Invalid mobile number. It must be 10 digits and only contain numbers"
    )
    .required("Enter mobile number"),
  monthly_family_income: yup
    .number()
    .positive("Income must be a positive number")
    .required("Income is required"),
  patient_name: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Patient Name must only contain alphabetical characters"
    )
    .required("Name is required"),
  patient_occupation: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Occupation must only contain alphabetical characters"
    )
    .required("Occupation is required"),
  patient_email_id: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  patient_mobile_number: yup
    .string()
    .matches(
      /^[0-9]{10}$/,
      "Invalid mobile number. It must be 10 digits and only contain numbers"
    )
    .required("Enter mobile number"),
  aadhar_card_checkbox: yup.boolean().oneOf([true], "Aadhar card required"),
  // patient_thumb_impression: yup
  //   .mixed()
  //   .required("Patient signature/thump impression is required")
  //   .test(
  //     "fileSize",
  //     "File size is too large (max 5MB)",
  //     (value) => value && value.size <= 5000000
  //   )
  //   .test(
  //     "fileType",
  //     "Unsupported file format",
  //     (value) => value && ["image/jpeg", "image/png"].includes(value.type)
  //   ),

  patient_thumb_impression: yup
  .mixed()
  .required("Patient signature/thump impression is required")
  .test(
    "fileSize",
    "File size is too large (max 1MB)",
    (value) => value && value.size <= 1000000
  )
  .test(
    "fileType",
    "Unsupported file format. Only PDF files are allowed.",
    (value) => value && value.type === "application/pdf"
  ),
  guardian_address: yup.string().required("Address is required"),
  // aadhar_card_checked: yup.boolean().oneOf([true], "Aadhar card required"),
  // aadhar_card_check: yup
  //   .mixed()
  //   .required("Aadhar  photo is required")
  //   .test(
  //     "fileSize",
  //     "File size is too large (max 5MB)",
  //     (value) => value && value.size <= 5000000
  //   )
  //   .test(
  //     "fileType",
  //     "Unsupported file format",
  //     (value) => value && ["image/jpeg", "image/png"].includes(value.type)
  //   ),

  aadhar_card_checked: yup
  .mixed()
  .required("Aadhar Card is required")
  .test(
    "fileSize",
    "File size exceeds the maximum limit (1MB).",
    (value) => value && value.size <= 1 * 1024 * 1024
  )
  .test(
    "fileType",
    "Unsupported file format. Only PDF files are allowed.",
    (value) => value && value.type === "application/pdf"
  ),


  voter_id_card_checkbox: yup
    .mixed()
    .required(" Voter Id Card is required")
.test(
  "fileSize",
  "File size is too large (max 1MB)",
  (value) => value && value.size <= 1000000
)
.test(
  "fileType",
  "Unsupported file format. Only PDF files are allowed.",
  (value) => value && value.type === "application/pdf"
),
  // voter_id_card_checkbox: yup
  //   .mixed()
  //   .required("")
  //   .test(
  //     "fileSize",
  //     "File size is too large (max 5MB)",
  //     (value) => value && value.size <= 5000000
  //   )
  //   .test(
  //     "fileType",
  //     "Unsupported file format",
  //     (value) => value && ["image/jpeg", "image/png"].includes(value.type)
  //   ),

  // voter_id_card: yup.boolean(),
  // voter_id_card_checkbox: yup
  //   .mixed()
  //   .test("isRequired", "Voter ID Card is required", function (value) {
  //     const { path, createError } = this;
  //     const { voter_id_card } = this.parent;

  //     if (voter_id_card && !value) {
  //       return createError({ path, message: "Voter ID Card is required" });
  //     }
  //     return true;
  //   }),


  income_certificate_checkbox: yup
    .mixed()
    .required("Income photo is required")
.test(
"fileSize",
"File size is too large (max 1MB)",
(value) => value && value.size <= 1000000
)
.test(
"fileType",
"Unsupported file format. Only PDF files are allowed.",
(value) => value && value.type === "application/pdf"
),
  // income_certificate: yup.boolean(),
  // income_certificate_checkbox: yup
  //   .mixed()
  //   .required("Income photo is required")
  //   .test(
  //     "fileSize",
  //     "File size is too large (max 5MB)",
  //     (value) => value && value.size <= 5000000
  //   )
  //   .test(
  //     "fileType",
  //     "Unsupported file format",
  //     (value) => value && ["image/jpeg", "image/png"].includes(value.type)
  //   ),

  // domicile_certificate_checkbox

  domicile_certificate_checkbox: yup
  .mixed()
  .required("Domicile photo is required")
.test(
"fileSize",
"File size is too large (max 1MB)",
(value) => value && value.size <= 1000000
)
.test(
"fileType",
"Unsupported file format. Only PDF files are allowed.",
(value) => value && value.type === "application/pdf"
),

  // domicile_certificate_checkbox: yup
  //   .mixed()
  //   .required("Domicile photo is required")
  //   .test(
  //     "fileSize",
  //     "File size is too large (max 5MB)",
  //     (value) => value && value.size <= 5000000
  //   )
  //   .test(
  //     "fileType",
  //     "Unsupported file format",
  //     (value) => value && ["image/jpeg", "image/png"].includes(value.type)
  //   ),

  i_have_declared: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "I have declared must only contain alphabetical characters and spaces"
    )
    .required("I have declared is required"),

  s_o_w_o: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "S/o/W/o/D/o must only contain alphabetical characters and spaces"
    )
    .required("S/o/W/o/D/o Name is required"),

  R_o: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "R/o  must only contain alphabetical characters and spaces"
    )
    .required("R/o  is required"),

  place: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "place must only contain alphabetical characters and spaces"
    )
    .required("place is required"),

  date: yup.string().required("Enter Date"),
});

export default validationSchema;
