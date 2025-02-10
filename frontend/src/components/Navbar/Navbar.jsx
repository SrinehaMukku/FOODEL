import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>MENU</li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>ABOUT</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
