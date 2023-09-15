import { Link, useLocation } from "react-router-dom";

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
        <li>Logout</li>
      </ul>
    </>
  );
}

export default Sidebar;
