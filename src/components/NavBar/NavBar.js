import React from 'react';
import './NavBar.css';

const NavBar = () => {

  return (
    <ul className="nav-bar">
      <button className="nav-btn">my profile</button>
      <button className="nav-btn">friends</button>
      <button className="nav-btn">log out</button>
    </ul>
  )
}

export default NavBar;