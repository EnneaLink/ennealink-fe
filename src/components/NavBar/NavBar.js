import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { setState } from 'react';

const NavBar = ({logOut, id}) => {

  return (
    <ul className="nav-bar">
      <li>

        <Link
          to={`/profile/${id}`}
          key='1'
        >

          <button
            className="nav-btn profile-btn"
          >
            my profile
          </button>

        </Link>

      </li>
      <li>

        <Link
          to={'/friends'}
          key='1'
        >

          <button
            className="nav-btn friends-btn"
          >
            friends
          </button>

        </Link>

      </li>
      <li>

        <Link
          to={'/'}
          key='1'
        >

          <button
            className="nav-btn logout-btn"
            onClick={logOut}
          >
            log out
          </button>

        </Link>

      </li>
    </ul>
  )
}

export default NavBar;
