import React from "react";

const InputLabelText = ({
  labelValue,
  inputId,
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <div className="box-input">
      <label htmlFor={inputId}>
        {labelValue} <span className="litleicon">*</span>
      </label>
      <input
        className="boxformInput"
        type={type}
        name={inputId}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputLabelText;
