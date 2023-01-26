import React, { useState } from "react";
import Input from "../Interactions/Input";

import styles from "./InputForm.module.css";

const FormSection = (props) => {
  console.log("Displaying some form");

  //////////////////
  // initial states
  //////////////////
  const initialConditions = {};
  props.questions.map((qn) => {
    return (initialConditions[qn] = "");
  });

  //////////
  // STATES
  //////////
  const [conditionValues, setConditionValues] = useState(initialConditions);

  ////////////
  // handlers
  ////////////
  const handleConditionsChange = (event) => {
    event.preventDefault();
    setConditionValues((prevConditionValues) => {
      return {
        ...prevConditionValues,
        [event.target.name]: event.target.value,
      };
    });
  };

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
                    name={item}
                    value={conditionValues[item]}
                    onValueChange={handleConditionsChange}
                  />
                </div>
                <h2 className={styles.conditionScore}>/ 10</h2>
              </div>
            );
          })}
        </div>
      );
    } else {
    }
  };

  return <>{displayForm()}</>;
};

export default FormSection;
