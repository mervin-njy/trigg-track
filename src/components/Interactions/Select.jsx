import React from "react";

const Select = (props) => {
  return (
    <select id={props.id} className={props.className} onChange={props.onChange}>
      {props.optionValues.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
