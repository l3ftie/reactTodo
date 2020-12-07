// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXBYzmyEDSNJTYGfElYYGVyHeAK7j_Pa0",
  authDomain: "reactupdate-1c51b.firebaseapp.com",
  projectId: "reactupdate-1c51b",
  storageBucket: "reactupdate-1c51b.appspot.com",
  messagingSenderId: "385152043004",
  appId: "1:385152043004:web:2d20733eed05e3fb20d479",
  measurementId: "G-TV21CGY3ZY",
});

const db = firebaseApp.firestore();

export default db;
