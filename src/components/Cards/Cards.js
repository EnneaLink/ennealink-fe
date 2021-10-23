import React from 'react';
import './Cards.css';

const Cards = ({ username, myersBriggs, enneagram }) => {

  return (
    <section className="card">
      <p className="card-username">{username}</p>
      <p className="card-myersBriggs">{myersBriggs}</p>
      <p className="card-enneagram">{enneagram}</p>
    </section>
  )
}



export default Cards;
