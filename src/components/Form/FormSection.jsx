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
  const handleValueChange = () => {};

  const displayForm = () => {
    if (props.type === "conditions") {
      return (
        <div className={styles.formSection}>
          {props.questions.map((item) => {
            return (
              <div className={styles.conditionsRow}>
                <div className={styles.eczemaType}>{item}:</div>
                <div className={styles.eczemaItems}>
                  <Input
                    className={styles.conditionInputs}
                    value={initialConditions[item]}
                    onValueChange={handleValueChange}
                  />
                </div>
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
