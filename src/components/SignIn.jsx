import React from "react";
import firebase from "firebase/compat";

const auth = firebase.auth();

const SignIn = () => {
  const signInWithGoogle = () => {
    // triggers a google sign in popup
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
