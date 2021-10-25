import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';

const Header = ({logOut, id}) => {

  return (
    <header className="App-header">
      <h1>EnneaLink</h1>
      <NavBar logOut={logOut} id={id} />
    </header>
  )
}

export default Header;
