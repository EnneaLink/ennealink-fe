import React from 'react';
import './NavBar.css';

const NavBar = () => {

  return (
    <ul className="nav-bar">
      <li>
        <button className="nav-btn">my profile</button>
      </li>
      <li>
        <button className="nav-btn">friends</button>
      </li>
      <li>
        <button className="nav-btn">log out</button>
      </li>
    </ul>
  )
}

export default NavBar;
