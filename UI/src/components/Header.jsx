import { Link, NavLink } from "react-router-dom";
import search from "../assets/icons/search.png";

function Header() {
  return (
    <>
      <header className="header">
        <Link className="header-nav-container" to="/">
          <p className="header-title">Auctionopolis</p>
        </Link>
        <nav className="header-nav">
          <div className="search-bar">
            <input className="search-input" placeholder="Search"/>
            <img src={search} className="search-img"/>
          </div>

          <NavLink to="/about" className="header-nav-about">
            About
          </NavLink>

          <NavLink to="/Signup" className="header-nav-signup">
            Sign Up
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
