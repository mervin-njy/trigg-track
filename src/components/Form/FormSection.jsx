import React from "react";

const FormSection = (props) => {
  console.log("Displaying some form");
  return (
    <ul>
      {props.questions.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default FormSection;
