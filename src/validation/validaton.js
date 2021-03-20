import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Enter user name")
    .min(1, "Name should be of minimum 1 characters length")
    .required("Name is required"),
  email: yup
    .string("Enter user email")
    .email("Enter a valid email")
    .required("Email is required"),
  avatar: yup
    .string("Enter user avatar link")
    .url("Enter a valid link")
    .required("Avatar link is required"),

  gender: yup
    .string("Choose user gender")
    .min(1, "Name should be of minimum 1 characters length")
    .required("Gender is required"),
});

export default validationSchema;
