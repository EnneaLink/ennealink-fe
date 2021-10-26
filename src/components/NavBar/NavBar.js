import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({logOut, id, profileView, currentUserId}) => {

  return (
    <ul className="nav-bar">
      <li>

        <Link
          to={`/profile/${profileView || currentUserId}`}
          key='1'
        >

          <button className="nav-btn">my profile</button>

        </Link>

      </li>
      <li>

        <Link
          to={`/friends/${profileView || currentUserId}`}
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

          <button className="nav-btn" onClick={logOut}>log out </button>

        </Link>

      </li>
    </ul>
  )
}

export default NavBar;
