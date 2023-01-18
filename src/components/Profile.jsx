import React from "react";
// import firebase from "firebase/compat";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// const firestore = firebase.firestore();

const Profile = (props) => {
  // const variableRef = firestore.collection("variables");
  // const query = variableRef.orderBy("createdAt").limit(25);

  // const [variables] = useCollectionData(query, { idField: "id" });

  return (
    <div className="profile">
      <h2>Welcome!</h2>
    </div>
  );
};

export default Profile;
