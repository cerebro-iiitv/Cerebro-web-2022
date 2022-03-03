export const forgotPasswordFormData = [
  {
    name: "email",
    label: "Registered Email",
    type: "email",
  },
];

export const initialValues = {
  email: "",
};

export const validate = (values) => {
  let errors = {};
  if (!values.email) errors.email = "Email address is required";
  else if (!values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
    errors.email = "Invalid email address";
  else if (values.email.length > 225)
    errors.email = "Email should be less than 225 characters";
  return errors;
};
