import { NavLink } from "react-router-dom"
import cancel from "../assets/icons/cancel.png";

function MenuModal({ closeMenu }) {
  return (
    <>
      <div className="menu-modal-background">
        <div className="menu-modal-container">
          <div className="menu-header">
            <div className="header-title">
              <h1 className="header-A">A</h1>
              <h2 className="header-A-rest">uctionopolis</h2>
            </div>
            <img
              src={cancel}
              onClick={() => closeMenu(false)}
              className="menu-modal-button"
            />
          </div>
            <hr className="menu-line"/>
            <nav className="menu-nav">
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
        </div>
      </div>
    </>
  );
}

export default MenuModal;
