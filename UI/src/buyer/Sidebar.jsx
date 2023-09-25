import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function Sidebar() {
  const sidebarLinks = [
    { path: "/buyer/purchasehistory", text: "Purchase History" },
    { path: "/buyer/biddinghistory", text: "Bidding History" },
    { path: "/buyer/Profile", text: "Profile" },
  ];

  const [user, setUser] = useState();

  const location = useLocation();

  const navigate = useNavigate();


  const logout = async () => {
    await signOut(auth);
    navigate("/")
  };

  return (
    <>
      <ul className="seller-sidebar">
        {sidebarLinks.map((link) => (
          <li
            key={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path} className="sidebar-main-link">
              <span>{link.text}</span>
            </Link>
          </li>
        ))}
        <button onClick={logout}>Logout</button>
      </ul>
    </>
  );
}

export default Sidebar;
