import React from "react";
import { ErrorMessage, Field } from "formik";
import "./FormInput.scss";

export const FormInput = ({ label, name, type, setFieldValue, page }) => {
  const custom = `forminput__${page}__${name}`;

  return (
    <div className={`forminput ${custom}`}>
      <label className="forminput__label">{label}</label>
      {type === "file" ? (
        <input
<<<<<<< HEAD
          accept="application/pdf, application/jpg, application/jpeg, application/png"
          className={`forminput__input ${custom}`}
          {...{ name, type }}
          onChange={(event) => {
            const file = event.target.files[0];
            if (file.size > 100000) {
              alert("File size should be less than 100kb");
              event.target.value = "";
            } else {
              setFieldValue(name, file);
            }
=======
          className={`forminput__input ${custom}`}
          {...{ name, type }}
          onChange={(event) => {
            setFieldValue(name, event.currentTarget.files[0]);
>>>>>>> 8a852ba (auth UI)
          }}
        />
      ) : (
        <Field
          {...{ name, type }}
          as={`${name === "address" ? "textarea" : "input"}`}
          className={`forminput__field ${custom}`}
        />
      )}
      <ErrorMessage name={name} component="div" className="forminput__error" />
    </div>
  );
};

export default FormInput;
