import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDWsMso7vVkZ9B26FCQ6dfMXvRpTFhKXCU",
  authDomain: "test2-373f6.firebaseapp.com",
  databaseURL: "https://test2-373f6.firebaseio.com",
  projectId: "test2-373f6",
  storageBucket: "test2-373f6.appspot.com",
  messagingSenderId: "217006228932",
  appId: "1:217006228932:web:0ba3ae6189ab9dc8b99091"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
