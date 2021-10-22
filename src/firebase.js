import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDra6DX_a8aQKD8wGMcq2HFo8OlbRcIoaE",

  authDomain: "fir-ef9d8.firebaseapp.com",

  projectId: "fir-ef9d8",

  storageBucket: "fir-ef9d8.appspot.com",

  messagingSenderId: "1058208815479",

  appId: "1:1058208815479:web:3005711fadbbb97c59a972",

  measurementId: "G-LM6CMDQM9B",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
