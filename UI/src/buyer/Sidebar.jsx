import { Link } from "react-router-dom";
import img from "../assets/img/about-img.jpg";

function Sidebar() {
  return (
    <>
      <div className="buyer-sidebar">
        <div className="buyer-sidebar-img-container">
          <img src={img} className="buyer-sidebar-img" />
        </div>
        <Link to="/buyer/userinfo">
          <h3>User Information</h3>
        </Link>
        <Link to="/buyer/purchasehistory">
          <h3>Purchase History</h3>
        </Link>
        <Link to="/buyer/biddinghistory">
          <h3>Bidding History</h3>
        </Link>

        <h3>Logout</h3>
      </div>
    </>
  );
}

export default Sidebar;
