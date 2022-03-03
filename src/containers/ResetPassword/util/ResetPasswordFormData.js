export const resetPasswordFormData = [
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];

export const initialValues = {
  password: "",
  confirmPassword: "",
};

export const validate = (values) => {
  const errors = {};
  if (!values.password) errors.password = "Required";
  else if (values.password.length < 7)
    errors.password = "Password must be at least 7 characters";
  else if(values.password.length > 64)
    errors.password = "Password must be less than 64 characters";
  if (!values.confirmPassword) errors.confirmPassword = "Required";
  else if (values.password !== values.confirmPassword)
    errors.confirmPassword = "Passwords must match";
  return errors;
};
