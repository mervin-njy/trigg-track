import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(event) => props.onValueChange(event)}
      ></input>
    </>
  );
};

export default Input;
