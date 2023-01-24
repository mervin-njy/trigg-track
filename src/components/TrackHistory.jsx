import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

import styles from "./TrackHistory.module.css";

const TrackHistory = (props) => {
  const [selection, setSelection] = useState("2023-01-20");
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
    setSelection(event.target.value);
  };

  const generateContent = () => {
    Object.entries(display.conditions.eczema[selection]).map((item, index) => {
      return (
        <li>
          <span>{item[0]}:</span> {item[1]}
        </li>
      );
    });
  };

  useEffect(() => {
    const url = `https://healthlogger-a9842-default-rtdb.firebaseio.com/users/.json`;

    const controller = new AbortController();
    fetchDisplay(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [selection]);

  return (
    <div className="track-history">
      <section>
        <h2>Select Display Group:</h2>
        <div className="selection-container">
          <select id="selection" onChange={handleSelectionChange}>
            <option value="2023-01-20">2023-01-20</option>
            <option value="2023-01-21">2023-01-21</option>
          </select>
        </div>
      </section>

      <br />
      <section>
        {/* Display date's contents if fetched success and loaded */}
        {!isLoading && display && (
          <div className="conditions-display">
            {Object.entries(display.conditions.eczema[selection]).map(
              (item, index) => {
                return (
                  <ul key={index}>
                    <li className="bolder">{item[0]}:</li>
                    <li>{item[1]} / 10</li>
                  </ul>
                );
              }
            )}
          </div>
        )}
        {/* While fetching, display load spinner */}
        {isLoading && (
          <div className="spinner">
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
