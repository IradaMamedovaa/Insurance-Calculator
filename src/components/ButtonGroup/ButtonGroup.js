import React from "react";
import "./style.scss";
const ButtonGroup = ({ title, variants, onChange }) => {
  return (
    <div className="buttonGroup">
      <div className="title">
        <p>{title}</p>
      </div>
      <ul>
        {variants.map((variant, index) => (
          <li key={index}>
            <input
              type="radio"
              name={title}
              id={variant}
              required={index === 0 && true}
              onChange={(e)=> onChange(e)}
            />
            <label htmlFor={variant}>{variant}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonGroup;
