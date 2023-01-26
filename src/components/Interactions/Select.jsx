import React from "react";

const Select = (props) => {
  return (
    <select id={props.id} onChange={props.onChange}>
      {props.optionValues.map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </select>
  );
};

export default Select;
