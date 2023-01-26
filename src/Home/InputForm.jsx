import React, { useState } from "react";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  /////////
  // STATE
  /////////
  const [todayDone, setTodayDone] = useState(false);

  // Object.keys(props[dataType]).map((date, index) => {
  //   // check if the current date of entries include month
  //   if (date.includes(checkMonth)) {

  const checkDate = () => {
    const currDate = new Date().toISOString().split("T")[0];
    console.log(currDate);
  };
  return (
    <div className={styles.InputForm}>
      <header className={styles.headerIntro}>
        {checkDate()}
        <h1 className={styles.title}>Welcome!</h1>
        {/* Welcome user, how are we feeling today? */}
      </header>
    </div>
  );
};

export default InputForm;
