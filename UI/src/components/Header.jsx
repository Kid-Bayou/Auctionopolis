import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import search from "../assets/icons/search.png";
import SearchModal from "../pages/SearchModal";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className="header">
        <Link className="header-title" to="/">
          <h1 className="header-A">A</h1>
          <h2 className="header-A-rest">uctionopolis</h2>
        </Link>
        <nav className="header-nav">
          <img
            src={search}
            className="search-img"
            onClick={() => {
              setOpenModal(true);
            }}
          />

          {openModal && <SearchModal closeModal={setOpenModal} />}

          <NavLink to="/about" className="header-nav-about">
            About
          </NavLink>

          <NavLink to="/about" className="header-nav-about">
            Products
          </NavLink>

          <NavLink to="/signup" className="header-nav-signup">
            Sign Up
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
