import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={assets.logo} alt="Logo" />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navbar Menu */}
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <a href="#explore-menu" onClick={() => setMenuOpen(false)}>MENU</a>
        <a href="#footer" onClick={() => setMenuOpen(false)}>ABOUT</a>
      </ul>

      {/* Right Side Icons */}
      <div className="navbar-right">
        {/* Search */}
        <div className="navbar-icon">
          <img src={assets.search_icon} alt="Search" />
        </div>

        {/* Cart */}
        <div className="navbar-icon cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="cart-dot"></div>}
        </div>

        {/* Profile Dropdown */}
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="signin-btn">Sign in</button>
        ) : (
          <div className="navbar-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={assets.profile_icon} alt="Profile" />
            {dropdownOpen && (
              <ul className="nav-profile-dropdown">
                <li>
                  <img src={assets.bag_icon} alt="Orders" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={() => setToken(null)} className="logout">
                  <img src={assets.logout_icon} alt="Logout" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
