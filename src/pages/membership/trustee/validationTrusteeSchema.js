import * as yup from "yup";

const validationTrusteeSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Name must only contain alphabetical characters")
    .required("Name is required"),
  pan_card_number: yup
    .string()
    .matches(
      /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
      "Enter a valid PAN card number"
    )
    .required("PAN card number is required"),
  aadhar_no: yup
    .string()
    .matches(/^[0-9]{12}$/, "Invalid Aadhar card number. It must be 12 digits")
    .required("Aadhar card number is required"),
  mobile_number: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid mobile number")
    .required("Mobile number is required"),
  email_id: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  address: yup.string().required("Address is required"),
  type_of_membership: yup.string().required("Select Membership"),
  amount: yup
    .number()
    .test("minimum-amount-validation", "Invalid amount", function (value) {
      const membershipType = this.parent.type_of_membership;
      switch (membershipType) {
        case "Trustee":
          return value >= 5000;
        case "Volunteers":
          return value >= 100;
        case "CSR Fund":
          return value >= 100000;

        default:
          return false;
      }
    })
    .typeError("Amount must be a number")
    .required("Amount is required"),
});

export default validationTrusteeSchema;
