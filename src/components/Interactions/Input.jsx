import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        className={props.className}
        value={props.value}
        onChange={(event) => props.onValueChange(event)}
      ></input>
    </>
  );
};

export default Input;
