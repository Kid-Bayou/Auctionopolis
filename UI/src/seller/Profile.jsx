import { useState, useEffect } from "react";
import { collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchUserData(user.email);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async (email) => {
    try {
      const userQuerySnapshot = await getDocs(
        collection(db, "user"),
        where("email", "==", email)
      );

      if (!userQuerySnapshot.empty) {
        const userInfo = userQuerySnapshot.docs[0].data();
        console.log("User role:", userInfo);
        setUserInfo(userInfo);  
      } else {
        console.error("User not found in database");
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {userInfo?.firstName} {userInfo?.lastName}</p>
      <p>Username: {userInfo?.userName}</p>
      <p>Email: {user?.email}</p>
    </>
  );
}

export default Profile;
