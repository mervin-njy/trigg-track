import React from "react";
import styles from "./TrackHistory.module.css";

const DetailsDisplay = (props) => {
  const getDateEntry = (dataType) => {
    // set string of month from object {year: , month: } to "year-month"
    const checkMonth = Object.values(props.selectedDate).join("-");
    const entriesToDisplay = {};

    Object.keys(props[dataType]).map((date, index) => {
      // check if the current date of entries include month
      if (date.includes(checkMonth)) {
        entriesToDisplay[Object.keys(props[dataType])[index]] = Object.values(
          props[dataType]
        )[index];
      }
    });

    return entriesToDisplay;
  };

  return (
    <>
      {Object.entries(getDateEntry("eczema")).map((entry, entryIndex) => {
        // entry = [ date, {cuts: _ , itch: _ , ...} ]
        return (
          <div key={entryIndex} className={styles.dailyEntry}>
            {/* display date */}
            <h2>{entry[0]}</h2>
            {/* display for conditions/eczema */}
            <div className={styles.detailsDisplay}>
              <div className={styles.conditionsDisplay}>
                <h3>Condition: Eczema</h3>
                <div className={styles.displayGroup}>
                  {Object.entries(entry[1]).map((item, index) => {
                    return (
                      <ul key={index}>
                        <li className={styles.eczemaType}>{item[0]}:</li>
                        <li className={styles.eczemaItems}>{item[1]} / 10</li>
                      </ul>
                    );
                  })}
                </div>
              </div>

              {/* display for variables/diet */}
              <div className={styles.variableDisplay}>
                <h3>Variable: Diet</h3>
                <div className={styles.displayGroup}>
                  {Object.entries(getDateEntry("diet")[entry[0]]).map(
                    (meal, mealIndex) => {
                      // entry[0] = date to be read
                      // meal = [ mealType, mealItemsArray ]
                      // meal[0] = breakfast, snackAM, lunch, snackPM, dinner, supper...
                      return (
                        <div key={mealIndex} className={styles.entries}>
                          <div className={styles.mealType}>{meal[0]}:</div>
                          <div className={styles.mealItems}>
                            {Object.values(meal[1]).map((group, groupIndex) => {
                              // group = location of each entry
                              return (
                                <ul
                                  key={groupIndex}
                                  className={styles.location}
                                >
                                  <li className={styles.locationName}>
                                    Location: {group.location}
                                  </li>
                                  {group.items.map((item, itemIndex) => {
                                    // item = each menu item of each meal
                                    return (
                                      <li
                                        key={itemIndex}
                                        className={styles.item}
                                      >
                                        {item}
                                      </li>
                                    );
                                  })}
                                </ul>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailsDisplay;
