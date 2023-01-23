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
