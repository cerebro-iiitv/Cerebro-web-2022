export const loginFormData = [
  {
    name: "email",
    label: "Registered Email",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export const initialValues = {
  email: "",
  password: "",
};

export const validate = (values) => {
  let errors = {};
  if (!values.email) errors.email = "Email address is required";
  else if (!values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
    errors.email = "Invalid email address";
  else if (values.email.length > 225)
    errors.email = "Email should be less than 225 characters";
  if (values.password.trim() === "") errors.password = "Password is required";
  else if (values.password.length < 7)
    errors.password = "Password must be at least 7 characters";
  else if (values.password.length > 64)
    errors.password = "Password must be less than 64 characters";
  return errors;
};
