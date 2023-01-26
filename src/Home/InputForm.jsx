import React, { useState, useEffect } from "react";

import styles from "./InputForm.module.css";

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const InputForm = (props) => {
  /////////
  // STATE
  /////////
  const [todayDone, setTodayDone] = useState(false);

  const displayDone = () => {
    console.log("Displaying done");
    // return <h1 className={styles.title}>Welcome {props.display.name}!</h1>;
  };

  const displayForm = () => {
    console.log("Displaying form");
    if (isObject(props.display)) {
      console.log(props.display.name);
      return (
        <>
          <h1 className={styles.title}>Welcome {props.display.name}.</h1>
          <br />
          <h3 className={styles.subtitle}>
            Today, we have not heard from you yet.
          </h3>
          <h3 className={styles.subtitle}>
            Are you ready to fill in your details?
          </h3>
        </>
      );
    }
  };

  useEffect(() => {
    const url = `https://healthlogger-a9842-default-rtdb.firebaseio.com/users/.json`;

    const controller = new AbortController();
    props.fetchDisplay(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const currDate = new Date().toISOString().split("T")[0];

    if (isObject(props.display)) {
      Object.keys(props.display.conditions.eczema).map((eczemaDate) => {
        // console.log(eczemaDate);
        if (currDate === eczemaDate) {
          Object.keys(props.display.variables.diet).map((dietDate) => {
            if (currDate === dietDate) setTodayDone(true);
          });
        }
      });
    }
  }, [[props.display]]);

  return (
    <div className={styles.InputForm}>
      <header className={styles.headerIntro}>
        {todayDone ? displayDone() : displayForm()}
      </header>
    </div>
  );
};

export default InputForm;
