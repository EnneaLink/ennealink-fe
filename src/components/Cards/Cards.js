import React from 'react';

const Cards = ({ icon, username, myersBriggs, enneagram }) => {

  return (
    <section className="cards">
      <img className="card-icon" src={icon}/>
      <p className="card-username">{username}</p>
      <p className="card-myersBriggs">{myersBriggs}</p>
      <p className="card-enneagram">{enneagram}</p>
    </section>
  )
}



export default Cards;
