export const signupFormData = {
  page1: [
    {
      name: "firstname",
      label: "First Name",
      type: "text",
    },
    {
      name: "lastname",
      label: "Last Name",
      type: "text",
    },
    {
      name: "phone",
      label: "Contact No.",
      type: "tel",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
    },
  ],
  page2: [
    {
      name: "institute",
      label: "Institute Name",
      type: "text",
    },
    {
      name: "degree",
      label: "Degree",
      type: "text",
    },
    {
      name: "proof",
      label: "Proof of bachelors",
      type: "file",
    },
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
  ],
};

export const initialValues = {
  firstname: "",
  lastname: "",
  phone: "",
  address: "",
  institute: "",
  degree: "",
  proof: undefined,
  email: "",
  password: "",
  confirmPassword: "",
};

export const validatePage = (values, page) => {
  let errors = {};
  if (page === 1) {
    if (!values.firstname) errors.firstname = "First name is required";
    if (!values.lastname) errors.lastname = "Last name is required";
    if (!values.phone) errors.phone = "Phone number is required";
    else if (!values.phone.match(/^\d{10}$/))
      errors.phone = "Please enter a valid 10 digit mobile number";
    if (!values.address) errors.address = "Address is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
      errors.email = "Please enter a valid email address";
  } else {
    if (!values.institute) errors.institute = "Institute name is required";
    if (!values.degree) errors.degree = "Degree is required";
    if (!values.proof) errors.proof = "Proof of bachelors is required";
    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 5)
      errors.password = "Password is too small";
    if (!values.confirmPassword)
      errors.confirmPassword = "Re-enter password again";
    if (values.confirmPassword !== values.password)
      errors.confirmPassword = "Passwords don't match";
    if (values.password !== values.confirmPassword)
      errors.confirmPassword = "Passwords must match";
  }
  return errors;
};
