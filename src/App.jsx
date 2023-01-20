import React from "react";
// import Profile from "./components/Profile";
// import SignIn from "./components/SignIn";
// import VariableDisplay from "./components/VariableDisplay";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC6QK0C-TJ6qUxCAkQ2zmiGmz3j1fmoJlY",
//   authDomain: "healthlogger-a9842.firebaseapp.com",
//   projectId: "healthlogger-a9842",
//   storageBucket: "healthlogger-a9842.appspot.com",
//   messagingSenderId: "468206095718",
//   appId: "1:468206095718:web:a94a929b7f0a68e5004ca7",
// };

// // initialize firebase app
// initializeApp(firebaseConfig);

// // initialize services
// const db = getFirestore();

// // collection ref - 1st arg: the database to retrieve from, 2nd: the collection name
// const colRef = collection(db, "variables");

// // get collection data - function is a promise
// const viewDocs = () => {
//   getDocs(colRef)
//     .then((snapshot) => {
//       const variables = [];
//       snapshot.docs.forEach((doc) => {
//         variables.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(variables);
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// };

const fetchUsers = async () => {
  // const url = "https://healthlogger-a9842-default-rtdb.firebaseio.com/.json";
  // const res = await fetch(url);
  // const data = await res.json();

  // console.log(data);

  // return data;

  // const theList = data.map((item) => {
  //   return { id: item.id, name: item.name };
  // });
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

// fetch("https://healthlogger-a9842-default-rtdb.firebaseio.com/.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then(
//     (data) => {
//       // Work with JSON data here
//       return data;
//     },
//     (error) => {
//       console.error("onRejected function called: " + error.message);
//     }
//   );

function App() {
  // signed in : user = { userID, emailAddress, ... }
  // signed out: user = null
  // user ? <ComponentA /> : <SignIn /> => checks for user = null

  fetchUsers();

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
