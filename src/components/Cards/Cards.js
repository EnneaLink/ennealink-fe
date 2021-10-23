import React from 'react';

const Cards = ({ username, myersBriggs, enneagram }) => {

  return (
    <section className="cards">
      <p className="card-username">{username}</p>
      <p className="card-myersBriggs">{myersBriggs}</p>
      <p className="card-enneagram">{enneagram}</p>
    </section>
  )
}



export default Cards;
