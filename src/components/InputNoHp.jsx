import React from "react";

const InputNoHp = ({ nohp, setValueNohp }) => {
  return (
    <div>
      <div className="box-input">
        <label htmlFor="country-code">
          No. HP<span className="litleicon">*</span>
        </label>
        <div className="phone-input">
          <div className="phone-country-flag">
            <img src="./icons/indonesia.png" alt="" />
            <select name="country" id="country-code">
              <option value="indonesia">+62</option>
              <option value="singapore">+1</option>
              <option value="malaysia">+2</option>
            </select>
          </div>
          <input
            className="boxformInput"
            type="text"
            id="phone-number"
            name="phone-number"
            placeholder="123-456-7890"
            required
            value={nohp}
            onChange={setValueNohp}
          />
        </div>
      </div>
    </div>
  );
};

export default InputNoHp;
