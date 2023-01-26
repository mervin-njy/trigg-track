import React, { useState } from "react";
import Select from "../Interactions/Select";
import Button from "../Interactions/Button";
import Input from "../Interactions/Input";
import FormSection from "./FormSection";

import date from "../../dateArrays";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  //////////
  // STATES
  //////////
  const [displayConditions, setDisplayConditions] = useState(false);
  const [displayVariables, setDisplayVariables] = useState(false);
  const [displayDate, setDisplayDate] = useState(false);
  const [newDate, setNewDate] = useState({ year: "", month: "", day: "" });

  ////////////
  // handlers
  ////////////
  const handleSelectionChange = (event) => {
    setNewDate((prevNewDate) => {
      return { ...prevNewDate, [event.target.id]: event.target.value };
    });
  };

  const handleDateSelection = (event) => {
    if (event.target.id === "select today") {
      const currDate = new Date().toISOString().split("T")[0];
      setNewDate(currDate);
    } else {
      let proceed = true;
      Object.values(newDate).map((item) => {
        if (
          item === "" ||
          item === "Select year." ||
          item === "Select month." ||
          item === "Select day."
        )
          proceed = false;
      });
      console.log(`New Date can be added: ${proceed}`);
      if (proceed) {
        setNewDate((prevNewDate) => {
          return `${prevNewDate.year}-${prevNewDate.month}-${prevNewDate.day}`;
        });
      } else {
        alert("please select all date dropdown menus");
      }
    }
    setDisplayDate(true);
  };

  const handleShowConditions = () => setDisplayConditions(true);

  const handleShowVariables = () => setDisplayVariables(true);

  const showForm = (dataType, type) => {
    console.log("showing form");
    return <FormSection type={type} questions={Object.keys(dataType)} />;
  };

  const handleSubmit = () => {};

  return (
    <div className={styles.InputForm}>
      {displayDate ? (
        <div className={styles.mainBox}>
          <h2 className={styles.newDescription}>{newDate}</h2>
        </div>
      ) : (
        <div className={styles.mainBox}>
          <h2 className={styles.mainQuestion}>
            Please select the date to input:
          </h2>
        </div>
      )}
      {!displayDate && (
        <section className={styles.displayBox}>
          <div className={styles.dateSelection}>
            <Select
              id="year"
              className={styles.dateSelect}
              onChange={handleSelectionChange}
              optionValues={date.years}
            />
            <Select
              id="month"
              className={styles.dateSelect}
              onChange={handleSelectionChange}
              optionValues={date.months}
            />
            <Select
              id="day"
              className={styles.dateSelect}
              onChange={handleSelectionChange}
              optionValues={date.days}
            />
          </div>
          <div className={styles.dateSelectButtons}>
            <Button
              buttonName="buttonRequest"
              displayName="add date"
              onClick={handleDateSelection}
            />
            <Button
              buttonName="buttonUrgent"
              displayName="select today"
              onClick={handleDateSelection}
            />
          </div>
        </section>
      )}

      <div className={styles.mainBox}>
        <h2 className={styles.mainQuestion}>
          Please select the condition to track:
        </h2>
        <div className={styles.mainAnswer}>
          <Select
            id="conditions"
            className={styles.formSelect}
            onChange={handleSelectionChange}
            optionValues={Object.keys(props.data.conditions)}
          />
        </div>
      </div>
      <section className={styles.displayBox}>
        {!displayConditions && (
          <Button
            buttonName="buttonRequest"
            displayName="show"
            onClick={handleShowConditions}
          />
        )}
      </section>
      {displayConditions &&
        showForm(props.data.conditions.eczema["2023-01-20"], "conditions")}

      <div className={styles.mainBox}>
        <h2 className={styles.mainQuestion}>
          Please select the variables to observe:
        </h2>
        <div className={styles.mainAnswer}>
          <Select
            id="variables"
            className={styles.formSelect}
            onChange={handleSelectionChange}
            optionValues={Object.keys(props.data.variables)}
          />
        </div>
      </div>
      <section className={styles.displayBox}>
        {!displayVariables && (
          <Button
            buttonName="buttonRequest"
            displayName="show"
            onClick={handleShowVariables}
          />
        )}
      </section>
      {displayVariables &&
        showForm(props.data.variables.diet["2023-01-20"], "variables")}
    </div>
  );
};

export default InputForm;
