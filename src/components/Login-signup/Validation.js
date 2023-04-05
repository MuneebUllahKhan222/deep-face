import * as yup from "yup";


export const validationSchema = yup.object().shape({
    passwordSignup: yup.string().required('Password is required').min(8,'Password must be at least 8 characters'),
    emailSignup: yup.string().required("Email is required").email("Email is invalid"),
    terms: yup.bool().required('You must accept the terms and conditions').oneOf([true], "You must accept the terms and conditions")
  });

  export const loginValidationSchema = yup.object().shape({
    password: yup.string().required('Password is required').min(8,'Password must be at least 8 characters'),
    email: yup.string().required("Email is required").email("Email is invalid"),
  });

  export const sendOTPOnEmailValidationSchema = yup.object().shape({
    forgetEmail: yup.string().required("Email is required").email("Email is invalid"),
  });

  export const confirmPassSchema = yup.object().shape({
    newPassword: yup.string().required('Password is required').min(8,'Password must be at least 8 characters'),
    confirmPassword:yup.string().oneOf([yup.ref("newPassword"), null], "Passwords must match").required("Confirm password is required"),
  });