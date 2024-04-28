// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHJ0yIPP46G4gTviStpHTcsMDpJ5iELNM",
  authDomain: "sportiv-action.firebaseapp.com",
  projectId: "sportiv-action",
  storageBucket: "sportiv-action.appspot.com",
  messagingSenderId: "668418216518",
  appId: "1:668418216518:web:96aa89942217e4f2227047",
  measurementId: "G-KC1REMNHJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);