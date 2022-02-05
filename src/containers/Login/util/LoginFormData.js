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
<<<<<<< HEAD
  else if (!values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
    errors.email = "Invalid email address";
  if (values.password.trim() === "") errors.password = "Password is required";
  else if (values.password.trim().length < 7)
    errors.password = "Password must be at least 7 characters";
=======
  else if (!values.email.test(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
    errors.email = "Invalid email address";
  if (values.password.trim() === "") errors.password = "Password is required";
  else if (values.password.trim().length < 4)
    errors.password = "Password must be at least 4 characters";
>>>>>>> 8a852ba (auth UI)
  return errors;
};
