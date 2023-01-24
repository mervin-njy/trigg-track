import React from "react";
import styles from "./TrackHistory.module.css";

const DetailsDisplay = (props) => {
  return (
    <div className={styles.detailDisplay}>
      <div className={styles.conditionsDisplay}>
        <h3>Condition: Eczema</h3>
        {Object.entries(props.conditions).map((item, index) => {
          return (
            <ul key={index}>
              <li className={styles.bolder}>{item[0]}:</li>
              <li>{item[1]} / 10</li>
            </ul>
          );
        })}
      </div>

      <div className={styles.variableDisplay}>
        <h3>Variable: Diet</h3>
        {Object.entries(props.variables).map((meal, mealIndex) => {
          // meal = breakfast, snackAM, lunch, snackPM, dinner, supper...
          return (
            <ul key={mealIndex}>
              <li className={styles.bolder}>{meal[0]}:</li>
              {console.log(meal[0])}
              {console.log(Object.values(Object.values(meal[1])))}
              <div className="meal-items">
                <ul>
                  <li>{Object.keys(meal[1])}</li>
                  {Object.values(Object.values(meal[1])).map(
                    (item, itemIndex) => {
                      <li key={itemIndex}>
                        {Object.keys(item)}: {Object.values(item)}:
                      </li>;
                    }
                  )}
                </ul>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsDisplay;
