import * as yup from 'yup';
const validationContactSchema = yup.object().shape({
  name: yup.string()
  .matches(/^[A-Za-z\s]+$/, 'name must only contain alphabetical characters and spaces')
  .required('Name is required'),
  email: yup.string()
  .email('Invalid email address')
  .required('Email is required'),
  mobile: yup.string()
  .matches(/^[0-9]{10}$/, 'Invalid mobile number. It must be 10 digits and only contain numbers')
  .required('Enter mobile number'),
  message: yup.string()
  .min(3,"Message must be at least 3 characters long")
  .max(255,"'Message cannot exceed 255 characters")
  .required('Message is required')
});

export default validationContactSchema;
