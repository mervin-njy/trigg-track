import React, { useEffect, useState } from "react";
import DetailsDisplay from "./DetailsDisplay";
import LoadingSpinner from "../Loading/LoadingSpinner";

import styles from "./TrackHistory.module.css";

const TrackHistory = (props) => {
  // const [selection, setSelection] = useState("2023-01-20");
  const [selectedDate, setSelectedDate] = useState({
    year: "2023",
    month: "01",
  });

  const [display, setDisplay] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDisplay = async (url, signal) => {
    setIsLoading(true);
    setError(null);
    setDisplay(null);

    try {
      const rest = await fetch(url, { signal });

      const data = await rest.json();

      setDisplay({
        id: data.id,
        name: data.name,
        conditions: data.conditions,
        variables: data.variables,
      });
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    }

    setIsLoading(false);
  };

  const handleSelectionChange = (event) => {
    // setSelection(event.target.value);
    setSelectedDate((prevSelectedDate) => {
      return { ...prevSelectedDate, [event.target.id]: event.target.value };
    });
  };

  useEffect(() => {
    const url = `https://healthlogger-a9842-default-rtdb.firebaseio.com/users/.json`;

    const controller = new AbortController();
    fetchDisplay(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [selectedDate]);

  return (
    <div className={styles.TrackHistory}>
      <section>
        <h2>Select month to display:</h2>
        <div className={styles.selectionContainer}>
          <select id="year" onChange={handleSelectionChange}>
            <option value="default">Select year.</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <select id="month" onChange={handleSelectionChange}>
            {[
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
            ].map((month) => {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>
      </section>

      <br />
      <section>
        {/* Display date's contents if fetched success and loaded */}
        {!isLoading && display && (
          <DetailsDisplay
            selectedDate={selectedDate}
            eczema={display.conditions.eczema}
            diet={display.variables.diet}
          />
        )}
        {/* While fetching, display load spinner */}
        {isLoading && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        {/* Display error message if fetch has an error */}
        {!isLoading && error && <p> {error}</p>}
      </section>
    </div>
  );
};

export default TrackHistory;
