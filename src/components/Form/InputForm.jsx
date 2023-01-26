import React from "react";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  return (
    <div>
      <h2 className={styles.inputQuestion}>
        Please select the condition to track:
      </h2>
      <select></select>
      <h2 className={styles.inputQuestion}>
        Please select the variables to observe:
      </h2>
      <select></select>
      <Button />
    </div>
  );
};

export default InputForm;
