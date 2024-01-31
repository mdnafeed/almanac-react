import * as yup from "yup";
const validationTrusteeSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Name must only contain alphabetical characters")
    .min(2,"Mobile number at least 2 characters")
    .max(40,"Mobile number should be at most 40 characters")
    .required("Name is required"),
  pan_card_number: yup
    .string()
    .matches(
      /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
      "Enter a valid PAN card number"
    )
    .min(10,"Pan number at least 10 characters")
    .max(10,"Pan number should be at most 10 characters")
    .required("PAN card number is required"),
  aadhar_no: yup
    .string()
    .matches(/^[0-9]{12}$/, "Invalid Aadhar card number. It must be 12 digits")
    .required("Aadhar card number is required"),
  mobile_number: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid mobile number")
    .min(10,"Mobile number at least 10 characters")
    .max(10,"Mobile number should be at most 10 characters")
    .required("Mobile number is required"),
  email_id: yup
    .string()
    .email("Enter a valid email address")
    .min(5,"Mobile number at least 5 characters")
    .max(50,"Email id must be less than 50 characters long")
    .required("Email is required"),
  address: yup
    .string()
    .min(5,"Mobile number at least 5 characters")
    .max(100,"Address must be less than 100 characters long")
    .required("Address is required"),
  type_of_membership: yup.string().required("Select Membership"),
  // amount: yup
  //   .number()
  //   .test("minimum-amount-validation", "Invalid amount", function (value) {
  //     const membershipType = this.parent.type_of_membership;
  //     switch (membershipType) {
  //       case "Trustee":
  //         return value >= 5000;
  //       case "Volunteers":
  //         return value >= 100;
  //       case "CSR Fund":
  //         return value >= 100000;

  //       default:
  //         return false;
  //     }
  //   })
  //   .typeError("Amount must be a number")
  //   .required("Amount is required"),
amount: yup
  .number()
  .positive("Amount must be a positive number")
  .integer("Amount must be an integer")
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
        return false;}   })
  .test("maximum-amount-validation", "Amount must have at most 6 digits", function (value) {
    return value.toString().length <= 6;
  })
  .typeError("Amount must be a number")
  .required("Amount is required"),
});

export default validationTrusteeSchema;
