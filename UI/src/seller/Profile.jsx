
import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { collection, getDocs, addDoc, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  if (user) {
    const { displayName, email } = user;
    console.log("Name:", displayName);
    console.log("Email:", email);
  }

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {user?.firstName} {user?.lastName}</p>
      <p>Username: {user?.userName}</p>
      <p>Email: {user?.email}</p>
    </>
  );
  
}

export default Profile;
