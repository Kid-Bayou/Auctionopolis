import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Link className="header-nav-container" to="/">
          <p className="header-title">Auctionopolis</p>
        </Link>
        <nav className="header-nav">
          <NavLink to="/about" className="header-nav-about">About</NavLink>

          <NavLink to="/Signup" className="header-nav-signup">Sign Up</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
