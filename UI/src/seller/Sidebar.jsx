import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Sidebar() {
  const sidebarLinks = [
    { path: "/seller/listings", text: "Listings" },
    { path: "/seller/activelistings", text: "Active Listings" },
    { path: "/seller/solditems", text: "Sold Items" },
    { path: "/seller/unsolditems", text: "Unsold Items" },
    { path: "/seller/saleshistory", text: "Sales History" },
    { path: "/seller/revenueandearnings", text: "Revenue and Earnings" },
    { path: "/seller/Profile", text: "Profile" },
  ];

  const location = useLocation();

  const navigate = useNavigate();


  const logout = async () => {
    await signOut(auth);
    navigate("/")
  };

  return (
    <>
      <ul className="sidebar">
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
        <button onClick={logout} className="logout">Logout</button>
      </ul>
    </>
  );
}

export default Sidebar;
