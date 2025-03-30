import React from "react";

const InputPass = ({ password, setValuePassword }) => {
  return (
    <div className="box-input">
      <label htmlFor="password">
        Kata Sandi<span className="litleicon">*</span>
      </label>
      <div className="box-input-password">
        <input
          className="boxformInput"
          type="password"
          name="password"
          id="password"
          placeholder="Masukkan Kata Sandi"
          value={password}
          onChange={setValuePassword}
        />
        <img src="./icons/hidden.png" alt="" />
      </div>
    </div>
  );
};

export default InputPass;
