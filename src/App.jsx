import React from "react";
// import Profile from "./components/Profile";
// import SignIn from "./components/SignIn";
// import VariableDisplay from "./components/VariableDisplay";

const fetchUsers = async () => {
  fetch("https://healthlogger-a9842-default-rtdb.firebaseio.com/.json")
    .then((response) => {
      return response.json();
    })
    .then(
      (data) => {
        // Work with JSON data here
        console.log(data);
        // return data;
      },
      (error) => {
        console.error("onRejected function called: " + error.message);
      }
    );
};

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

  console.log("fetching...");
  fetchUsers();
  // console.log("posting...");
  // postUsers();

  return (
    <div className="App">
      {/* <header>
        <button onClick={SignOut}>Sign Out</button>
      </header> 
      <section>{user ? <Profile /> : <SignIn />}</section> */}
    </div>
  );
}

export default App;
