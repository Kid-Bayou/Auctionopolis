import { Link, NavLink } from "react-router-dom";
import search from "../assets/icons/search.png";

function Header() {
  return (
    <>
      <header className="header">
        <Link className="header-title" to="/">
          <h1 className="header-A">A</h1>
          <h2 className="header-A-rest">uctionopolis</h2>
        </Link>
        <div className="search-bar">
          <input className="search-input" placeholder="Search" />
          <img src={search} className="search-img" />
        </div>
        <nav className="header-nav">
          <NavLink to="/about" className="header-nav-about">
            About
          </NavLink>

          <NavLink to="/about" className="header-nav-about">
            Products
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
