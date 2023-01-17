import React from "react";

// import firebase SDK - auth + database
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// initialize app with unique config
firebase.initializeApp({
  apiKey: "AIzaSyC6QK0C-TJ6qUxCAkQ2zmiGmz3j1fmoJlY",
  authDomain: "healthlogger-a9842.firebaseapp.com",
  projectId: "healthlogger-a9842",
  storageBucket: "healthlogger-a9842.appspot.com",
  messagingSenderId: "468206095718",
  appId: "1:468206095718:web:a94a929b7f0a68e5004ca7",
});

// create global variables to access auth & database
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return <></>;
}

export default App;
