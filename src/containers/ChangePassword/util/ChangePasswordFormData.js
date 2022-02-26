export const changePasswordFormData = [
  {
    name: "oldPassword",
    label: "Current Password",
    type: "password",
  },
  {
    name: "newPassword",
    label: "New Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];

export const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const validate = (values) => {
  const errors = {};
  if (!values.oldPassword) errors.oldPassword = "Required";
  else if (values.oldPassword.trim().length < 7)
    errors.oldPassword = "Password must be at least 7 characters";
  if (!values.newPassword) errors.newPassword = "Required";
  else if (values.newPassword.trim().length < 7)
    errors.newPassword = "Password must be at least 7 characters";
  if (!values.confirmPassword) errors.confirmPassword = "Required";
  else if (values.newPassword !== values.confirmPassword)
    errors.confirmPassword = "Passwords must match";
  return errors;
};
