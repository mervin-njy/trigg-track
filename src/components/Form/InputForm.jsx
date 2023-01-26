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

  ////////////
  // handlers
  ////////////
  const handleSelectionChange = () => console.log("selection changed.");

  const handleShowConditions = () => setDisplayConditions(true);

  const handleShowVariables = () => setDisplayVariables(true);

  const showForm = (dataType) => {
    console.log("showing form");
    return <FormSection questions={Object.keys(dataType)} />;
  };

  const handleSubmit = () => {};

  return (
    <div className={styles.InputForm}>
      <div className={styles.mainBox}>
        <h2 className={styles.mainQuestion}>
          Please select the date to input:
        </h2>
      </div>
      <section className={styles.displayBox}>
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
      </section>

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
        {displayConditions && showForm(props.data.conditions.eczema)}
      </section>

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
        {displayVariables && showForm(props.data.variables.diet)}
      </section>
      <section className={styles.displayBox}>
        <Button
          buttonName="buttonRequest"
          displayName="submit."
          onClick={handleSubmit}
        />
      </section>
    </div>
  );
};

export default InputForm;
