import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';

const Header = ({logOut, profileView, currentUserId, id}) => {

  return (
    <header className="App-header">
      <h1>EnneaLink</h1>
      <NavBar logOut={logOut} profileView={profileView} currentUserId={currentUserId} id={id}/>
    </header>
  )
}

export default Header;
