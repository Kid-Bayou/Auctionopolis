import { Link } from "react-router-dom";
import img from "../assets/img/about-img.jpg";

function Sidebar() {
  return (
    <>
      <div className="seller-sidebar">
        <div className="seller-sidebar-img-container">
          <img src={img} className="seller-sidebar-img" />
        </div>
        <Link to="/seller/profile">
          <h3>Profile</h3>
        </Link>
        <Link to="/seller/listings">
          <h3>Listings</h3>
        </Link>
        <Link to="/seller/activelistings">
          <h3>Active Listings</h3>
        </Link>
        <Link to="/seller/solditems">
          <h3>Sold Items</h3>
        </Link>
        <Link to="/seller/unsolditems">
          <h3>Unsold Items</h3>
        </Link>
        <Link to="/seller/saleshistory">
          <h3>Sales History</h3>
        </Link>
        <Link to="/seller/revenueandearnings">
          <h3>Revenue and Earnings</h3>
        </Link>

        <h3>Logout</h3>
      </div>
    </>
  );
}

export default Sidebar;
