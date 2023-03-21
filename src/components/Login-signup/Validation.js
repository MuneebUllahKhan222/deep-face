import * as yup from "yup";


export const validationSchema = yup.object().shape({
    password: yup.string().required('Password is required').min(8,'Password must be at least 8 characters'),
    email: yup.string().required("Email is required").email("Email is invalid"),
    terms: yup.bool().oneOf([true], "You must accept the terms and conditions")
  });