// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6hHas6ppC0ozfj64WY62AbtaeTSfw0eo",
  authDomain: "stresss-252b5.firebaseapp.com",
  databaseURL: "https://stresss-252b5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stresss-252b5",
  storageBucket: "stresss-252b5.appspot.com",
  messagingSenderId: "897260426388",
  appId: "1:897260426388:web:130431a9ef2ccc8a409081",
  measurementId: "G-CKYTQ7VJ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebaseApp }

export default base