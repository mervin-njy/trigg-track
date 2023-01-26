import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.buttonName}
      id={props.displayName}
      onClick={(event) => props.onClick(event)}
    >
      {props.displayName}
    </button>
  );
};

export default Button;
