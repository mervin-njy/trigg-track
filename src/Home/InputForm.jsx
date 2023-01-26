import React from "react";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  return (
    <div className={styles.InputForm}>
      <header className={styles.headerIntro}>
        <h1 className={styles.title}>Welcome!</h1>
        {/* Welcome user, how are we feeling today? */}
      </header>
    </div>
  );
};

export default InputForm;
