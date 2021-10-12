import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDDwDH6DO4w8SK2ZCHeMpY_DxZfd6dEYk",
  authDomain: "desa-54b25.firebaseapp.com",
  databaseURL: "https://desa-54b25-default-rtdb.firebaseio.com",
  projectId: "desa-54b25",
  storageBucket: "desa-54b25.appspot.com",
  messagingSenderId: "288116094008",
  appId: "1:288116094008:web:4b9cf56e4cc873bae0e2cd",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
