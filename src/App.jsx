import React from "react";
// import Profile from "./components/Profile";
// import SignIn from "./components/SignIn";
import VariableDisplay from "./components/VariableDisplay";

// import firebase SDK - auth + database
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { signOut } from "firebase/auth";

// initialize app with unique config
firebasaswe.initializeApp({
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

const SignIn = () => {
  const signInWithGoogle = () => {
    // triggers a google sign in popup
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

const SignOut = () => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
};

const Profile = () => {
  const variableRef = firestore.collection("variables");
  const query = variableRef.orderBy("createdAt").limit(25); // limit argument to be changed to months.days

  const [variables] = useCollectionData(query, {
    idField: "id",
  });
  // const [snapshot, loading, error] = useCollection(query, options);
  console.log(variables);

  return (
    <div className="profile">
      <h2>Welcome!</h2>
      {variables &&
        variables.map((variable) => (
          <VariableDisplay key={variable.id} variable={variable} />
        ))}
    </div>
  );
};

function App() {
  // useAuthState hook:
  const [user] = useAuthState(auth);
  // signed in : user = { userID, emailAddress, ... }
  // signed out: user = null
  // user ? <ComponentA /> : <SignIn /> => checks for user = null

  return (
    <div className="App">
      <header>
        <button onClick={SignOut}>Sign Out</button>
      </header>
      <section>{user ? <Profile /> : <SignIn />}</section>
    </div>
  );
}

export default App;
