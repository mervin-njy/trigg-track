import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Interactions/Button";
import InputForm from "../Form/InputForm";

import styles from "./HomePage.module.css";

//////////////////////////////////////////////////////
// reuse function to check for fetched data structure
//////////////////////////////////////////////////////
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const HomePage = (props) => {
  /////////
  // STATE
  /////////
  // state toggles from question button click => show form input fields when true
  const [showForm, setShowForm] = useState(false);
  // state checks if details on today's date already exists in the database => show question types
  const [todayDone, setTodayDone] = useState(false);

  ////////////
  // handlers
  ////////////
  const handleClickToForm = () => {
    setShowForm(true);
  };

  const handleRedirect = () => console.log("Redirecting...");

  /////////////////
  // display types
  /////////////////
  const displayForm = (data) => {
    // data = props.display that is the firebase's rtdb JSON tree
    return <InputForm data={data} />;
  };

  const displayDone = () => {
    console.log("Displaying done");
    if (isObject(props.display)) {
      return (
        <>
          <h1 className={styles.title}>Welcome {props.display.name}.</h1>
          <br />
          {!showForm && (
            <section className={styles.introBox}>
              <div className={styles.question}>
                <h3 className={styles.subtitle}>
                  We <span className={styles.positive}>have already</span> heard
                  from you today.
                </h3>
                <h3 className={styles.subtitle}>
                  Do you have any details you would like to amend?
                </h3>
              </div>
              <div className={styles.answerButton}>
                <Button
                  buttonName="buttonRequest"
                  displayName="yes."
                  onClick={handleClickToForm}
                />
              </div>
            </section>
          )}

          {/* display form section if "yes" button is clicked opened */}
          {showForm && displayForm()}

          <section className={styles.introBox}>
            <div className={styles.question}>
              <h3 className={styles.subtitle}>
                Would you like to check out your
                <span className={styles.neutral}> current progress </span>
                instead?
              </h3>
            </div>
            <div className={styles.answerButton}>
              <NavLink to="../track">
                <Button
                  buttonName="buttonRequest"
                  displayName="let's go."
                  onClick={handleRedirect}
                />
              </NavLink>
            </div>
          </section>
        </>
      );
    }
  };

  const displayNone = () => {
    console.log("Displaying none");
    if (isObject(props.display)) {
      return (
        <>
          <h1 className={styles.title}>Welcome {props.display.name}.</h1>
          <br />
          {!showForm && (
            <section className={styles.introBox}>
              <div className={styles.question}>
                <h3 className={styles.subtitle}>
                  We <span className={styles.negative}>have not</span> heard
                  from you today yet.
                </h3>
                <h3 className={styles.subtitle}>
                  Are you ready to fill in your details?
                </h3>
              </div>
              <div className={styles.answerButton}>
                <Button
                  buttonName="buttonUrgent"
                  displayName="yes."
                  onClick={handleClickToForm}
                />
              </div>
            </section>
          )}

          {/* display form section if "yes" button is clicked opened */}
          {showForm && displayForm(props.display)}

          <section className={styles.introBox}>
            <div className={styles.question}>
              <h3 className={styles.subtitle}>
                Would you like to check out your
                <span className={styles.neutral}> current progress </span>
                instead?
              </h3>
            </div>
            <div className={styles.answerButton}>
              <NavLink to="../track">
                <Button
                  buttonName="buttonRequest"
                  displayName="let's go."
                  onClick={handleRedirect}
                />
              </NavLink>
            </div>
          </section>
        </>
      );
    }
  };

  ///////////
  // EFFECTS
  ///////////
  // useEffect #1 - fetching url on componentDidMount
  useEffect(() => {
    const url = `https://healthlogger-a9842-default-rtdb.firebaseio.com/users/.json`;

    const controller = new AbortController();
    props.fetchDisplay(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  // useEffect #2 - fetched data stored in state used as dependency
  // check if data is not null (object is true) => obtain dates to compare w/ current date
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
        {todayDone ? displayDone() : displayNone()}
      </header>
    </div>
  );
};

export default HomePage;
