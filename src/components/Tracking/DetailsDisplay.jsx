import React from "react";
import styles from "./TrackHistory.module.css";

const DetailsDisplay = (props) => {
  return (
    <div className={styles.detailDisplay}>
      <div className={styles.conditionsDisplay}>
        <h3>Condition: Eczema</h3>
        <div className={styles.displayGroup}>
          {Object.entries(props.conditions).map((item, index) => {
            return (
              <ul key={index}>
                <li className={styles.eczemaType}>{item[0]}:</li>
                <li className={styles.eczemaItems}>{item[1]} / 10</li>
              </ul>
            );
          })}
        </div>
      </div>

      <div className={styles.variableDisplay}>
        <h3>Variable: Diet</h3>
        <div className={styles.displayGroup}>
          {Object.entries(props.variables).map((meal, mealIndex) => {
            // meal = breakfast, snackAM, lunch, snackPM, dinner, supper...
            return (
              <div key={mealIndex} className={styles.entries}>
                <div className={styles.mealType}>{meal[0]}:</div>
                <div className={styles.mealItems}>
                  {Object.values(meal[1]).map((group, groupIndex) => {
                    // group = location of each entry
                    return (
                      <ul key={groupIndex} className={styles.location}>
                        <li className={styles.locationName}>
                          Location: {group.location}
                        </li>
                        {group.items.map((item, itemIndex) => {
                          // item = each menu item of each meal
                          return <li key={itemIndex}>{item}</li>;
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsDisplay;
