import React, { useEffect, useState } from "react";
import DetailsDisplay from "./DetailsDisplay";
import LoadingSpinner from "../Loading/LoadingSpinner";
import Select from "../Interactions/Select";
// import useFetch from "../../Hooks/useFetch";

import styles from "./TrackHistory.module.css";

const TrackHistory = (props) => {
  // const [selection, setSelection] = useState("2023-01-20");
  const [selectedDate, setSelectedDate] = useState({
    year: "2023",
    month: "01",
  });

  // const [display, isLoading, error, fetchDisplay] = useFetch();

  const handleSelectionChange = (event) => {
    // setSelection(event.target.value);
    setSelectedDate((prevSelectedDate) => {
      return { ...prevSelectedDate, [event.target.id]: event.target.value };
    });
  };

  useEffect(() => {
    const url = `https://healthlogger-a9842-default-rtdb.firebaseio.com/users/.json`;

    const controller = new AbortController();
    props.fetchDisplay(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [selectedDate]);

  return (
    <div className={styles.TrackHistory}>
      <section>
        <h2>Select month to display:</h2>
        <div className={styles.selectionContainer}>
          <Select
            id="year"
            className={styles.displaySelect}
            onChange={handleSelectionChange}
            optionValues={["Select year.", "2022", "2023"]}
          />
          <Select
            id="month"
            className={styles.displaySelect}
            onChange={handleSelectionChange}
            optionValues={[
              "Select month.",
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
            ]}
          />
        </div>
      </section>

      <br />
      <section>
        {/* Display date's contents if fetched success and loaded */}
        {!props.isLoading && props.display && (
          <DetailsDisplay
            selectedDate={selectedDate}
            eczema={props.display.conditions.eczema}
            diet={props.display.variables.diet}
          />
        )}
        {/* While fetching, display load spinner */}
        {props.isLoading && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        {/* Display error message if fetch has an error */}
        {!props.isLoading && props.error && <p> {props.error}</p>}
      </section>
    </div>
  );
};

export default TrackHistory;
