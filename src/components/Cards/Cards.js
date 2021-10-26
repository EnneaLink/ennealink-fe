import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = ({ username, myersBriggs, enneagram, id }) => {

  return (
    <Link to={`/profile/${id}`}>
      <section className="card">
        <p className="card-username">{username}</p>
        <p className="card-myersBriggs">{myersBriggs}</p>
        <p className="card-enneagram">{enneagram}</p>
      </section>
    </Link>
  )
}

export default Cards;
