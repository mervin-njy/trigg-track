import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import InputForm from "./Home/InputForm";
import TrackHistory from "./components/Tracking/TrackHistory";

// const postUsers = async () => {
//   fetch("https://healthlogger-a9842-default-rtdb.firebaseio.com/.json"),
//     {
//       method: "POST",
//       body: JSON.stringify({
//         user: { conditions: { eczema: 6 } },
//       }),
//     };
// };

function App() {
  // signed in : user = { userID, emailAddress, ... }
  // signed out: user = null
  // user ? <ComponentA /> : <SignIn /> => checks for user = null

  return (
    <>
      {/* Routing between pages
      <div className="App">
      </div> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<InputForm />} />
        <Route path="/track" element={<TrackHistory />} />
        {/* <Route path="/page-one/:item" element={<Details />} /> */}
        {/* <Route path="/page-two" element={<PageTwo />} /> */}
      </Routes>
    </>
  );
}

export default App;
