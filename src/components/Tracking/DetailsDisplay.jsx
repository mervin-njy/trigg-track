import React from "react";
import styles from "./TrackHistory.module.css";

const DetailsDisplay = (props) => {
  return (
    <div className={styles.detailDisplay}>
      <div className={styles.conditionsDisplay}>
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
        {Object.entries(props.conditions).map((item, index) => {
          return (
            <ul key={index}>
              <li className={styles.bolder}>{item[0]}:</li>
              <li>{item[1]} / 10</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsDisplay;
