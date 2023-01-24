import React from "react";
// import NavBar from "./components/NavBar";
import TrackHistory from "./components/TrackHistory";

// const fetchUsers = async () => {
//   fetch("https://healthlogger-a9842-default-rtdb.firebaseio.com/.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then(
//       (data) => {
//         // Work with JSON data here
//         console.log(data);
//         // return data;
//       },
//       (error) => {
//         console.error("onRejected function called: " + error.message);
//       }
//     );
// };

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
      <TrackHistory />
    </>
  );
}

export default App;
