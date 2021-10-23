import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <ul className="nav-bar">
      <li>

        <Link
          to={'/profile'}
          key='1'  
        >

          <button className="nav-btn">my profile</button>

        </Link>

      </li>
      <li>

        <Link
          to={'/friends'}
          key='1'  
        >

          <button className="nav-btn">friends</button>

        </Link>

      </li>  
      <li>

        <Link
          to={'/'}
          key='1'  
        >

          <button className="nav-btn">log out</button>

        </Link>

      </li>
    </ul>
  )
}

export default NavBar;
