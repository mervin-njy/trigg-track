import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import components
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Home/HomePage";
import TrackHistory from "./components/Tracking/TrackHistory";
// import custom hooks
import useFetch from "./Hooks/useFetch";

function App() {
  const [display, isLoading, error, fetchDisplay] = useFetch();

  const handleDateSelection = (url, signal) => {
    fetchDisplay(url, signal);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <HomePage
              display={display}
              isLoading={isLoading}
              error={error}
              fetchDisplay={handleDateSelection}
            />
          }
        />
        <Route
          path="/track"
          element={
            <TrackHistory
              display={display}
              isLoading={isLoading}
              error={error}
              fetchDisplay={handleDateSelection}
            />
          }
        />
        {/* <Route path="/triggers" element={<TriggerDisplay />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
