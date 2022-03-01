import React from "react";
import { ErrorMessage, Field } from "formik";
import "./FormInput.scss";

export const FormInput = ({
  label,
  name,
  type,
  setFieldValue,
  page,
  disabled,
}) => {
  const custom = `forminput__${page}__${name}`;

  return (
    <div className={`forminput ${custom}`}>
      <label className="forminput__label">{label}</label>
      {type === "file" ? (
        <input
          accept="application/pdf, image/png, image/jpeg, image/jpg"
          className={`forminput__input ${custom}`}
          {...{ name, type }}
          onChange={(event) => {
            const file = event.target.files[0];
            if (file.size > 300000) {
              alert("File/Image size should be less than 300kb");
              event.target.value = "";
            } else {
              setFieldValue(name, file);
            }
          }}
        />
      ) : (
        <Field
          {...{ name, type, disabled }}
          as={`${name === "address" ? "textarea" : "input"}`}
          className={`forminput__field ${custom}`}
        />
      )}
      <ErrorMessage name={name} component="div" className="forminput__error" />
    </div>
  );
};

export default FormInput;
