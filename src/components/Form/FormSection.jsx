import React, { useState } from "react";
import Button from "../Interactions/Button";
import Input from "../Interactions/Input";

import styles from "./InputForm.module.css";

const FormSection = (props) => {
  //////////////////
  // initial states
  //////////////////
  const initialValues = {};
  props.questions.map((qn) => {
    return (initialValues[qn] = "");
  });

  //   const initialConditions = {};
  //   props.questions.map((qn) => {
  //     return (initialConditions[qn] = "");
  //   });

  //   const initialVariables = {};
  //   props.questions.map((qn) => {
  //     return (initialVariables[qn] = "");
  //   });

  //////////
  // STATES
  //////////
  const [values, setValues] = useState(initialValues);
  //   const [conditionValues, setConditionValues] = useState(initialConditions);
  //   const [variableValues, setVariableValues] = useState(initialVariables);

  ////////////
  // handlers
  ////////////
  const handleChange = (event) => {
    event.preventDefault();
    setValues((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  //   const handleConditionsChange = (event) => {
  //     event.preventDefault();
  //     setConditionValues((prevConditionValues) => {
  //       return {
  //         ...prevConditionValues,
  //         [event.target.name]: event.target.value,
  //       };
  //     });
  //   };

  //   const handleVariableChange = (event) => {
  //     event.preventDefault();
  //     setVariableValues((prevVariableValues) => {
  //       return {
  //         ...prevVariableValues,
  //         [event.target.name]: event.target.value,
  //       };
  //     });
  //   };

  const handleAddRow = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    // lift state via props.function()
  };

  /////////////////
  // main function
  /////////////////
  const displayForm = () => {
    if (props.type === "conditions") {
      return (
        <div className={styles.formSection}>
          {props.questions.map((item, index) => {
            return (
              <div key={index} className={styles.conditionsRow}>
                <div className={styles.eczemaType}>{item}:</div>
                <div className={styles.eczemaItems}>
                  <Input
                    className={styles.conditionInputs}
                    type="number"
                    name={item}
                    // value={conditionValues[item]}
                    value={values[item]}
                    // onValueChange={handleConditionsChange}
                    onValueChange={handleChange}
                  />
                </div>
                <h2 className={styles.conditionScore}>/ 10</h2>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={styles.formSection}>
          {props.questions.map((item, index) => {
            return (
              <div key={index} className={styles.variableRow}>
                <div className={styles.mealType}>{item}:</div>
                <div className={styles.mealItems}>
                  <Input
                    className={styles.mealInputs}
                    type="text"
                    name={item}
                    // value={variableValues[item]}
                    value={values[item]}
                    // onValueChange={handleVariableChange}
                    onValueChange={handleChange}
                  />
                </div>
                <Button
                  buttonName={styles.addButton}
                  displayName="+"
                  onClick={handleAddRow}
                />
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <>
      {displayForm()}
      <br />
      <div className={styles.submitButton}>
        <Button
          buttonName="buttonUrgent"
          displayName="submit."
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default FormSection;
