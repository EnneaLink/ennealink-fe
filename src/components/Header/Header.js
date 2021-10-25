import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';

const Header = (logOut) => {

  return (
    <header className="App-header">
      <h1>EnneaLink</h1>
      <NavBar logOut={logOut}/>
    </header>
  )
}

export default Header;
