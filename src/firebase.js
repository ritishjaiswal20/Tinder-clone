import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDq4cibQC9G5ZG_wlOv-s-gzn2K5HdIYs4",
  authDomain: "tinder-clone-49e80.firebaseapp.com",
  projectId: "tinder-clone-49e80",
  storageBucket: "tinder-clone-49e80.appspot.com",
  messagingSenderId: "387844783724",
  appId: "1:387844783724:web:716e652b5281ece322e249",
  measurementId: "G-Q1YGGXREFX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
