
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBjlz3WhuPwccLdYQ7UHtjmnRoJJtWPso4",
  authDomain: "auctionopolis.firebaseapp.com",
  projectId: "auctionopolis",
  storageBucket: "auctionopolis.appspot.com",
  messagingSenderId: "1000560896187",
  appId: "1:1000560896187:web:12270d058213f515fc219e",
  measurementId: "G-LK6DY4W6ER"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app);