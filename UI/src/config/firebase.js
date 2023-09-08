// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjlz3WhuPwccLdYQ7UHtjmnRoJJtWPso4",
  authDomain: "auctionopolis.firebaseapp.com",
  projectId: "auctionopolis",
  storageBucket: "auctionopolis.appspot.com",
  messagingSenderId: "1000560896187",
  appId: "1:1000560896187:web:12270d058213f515fc219e",
  measurementId: "G-LK6DY4W6ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);