import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import search from "../assets/icons/search.png";
import SearchModal from "./SearchModal";
import MenuModal from "./MenuModal"
import menu from "../assets/icons/menu.png";
import closeMenu from "../assets/icons/cancel.png";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 699);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={isMobile ? "mobile-header" : "desktop-header"}>
        <header className="header">
          <div className="header-content">
            <Link className="header-title" to="/">
              <h1 className="header-A">A</h1>
              <h2 className="header-A-rest">uctionopolis</h2>
            </Link>
          </div>
          <div>
            {isMobile ? (
              <div className="menu-icon" >
                <img src={menu} className="menu-img" onClick={handleMenuClick}/>
                
                {isMenuOpen && <MenuModal closeMenu={setIsMenuOpen} />}

              </div>
            ) : (
              <nav className="header-nav">

                <img
                  src={search}
                  className="search-img"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                />

                {openModal && <SearchModal closeModal={setOpenModal} />}

                <NavLink to="/about" className="header-nav-item">
                  About
                </NavLink>

                <NavLink to="/products" className="header-nav-item">
                  Products
                </NavLink>

                <NavLink to="/signup" className="header-nav-signup">
                  Sign Up
                </NavLink>
              </nav>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
