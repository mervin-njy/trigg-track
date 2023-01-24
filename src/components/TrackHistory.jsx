import React, { useEffect, useState } from "react";
import loadingSpinner from "./LoadingSpinner";

const Display = (props) => {
  const [selection, setSelection] = useState("");
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
        // display data from firebase rtdb
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

  useEffect(() => {
    const url = `https://healthlogger-a9842-default-rtdb.firebaseio.com/users/${selection}.json`;

    const controller = new AbortController();
    fetchDisplay(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [selection]);

  return (
    <>
      <section>
        <h2>Select Display Group:</h2>
        <div className="selection-container">
          <select id="selection" onChange={handleSelectionChange}>
            <option value="conditions">conditions</option>
            <option value="variables">variables</option>
          </select>
        </div>
      </section>

      <br />
      
      <div className="variable-container">
        <div className="variable-title"></div>
        <ul className="variable-descriptions"></ul>
      </div>
    </>
  );
};

export default Display;
