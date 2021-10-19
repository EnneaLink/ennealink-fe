import React from 'react';
import './Profile.css';

const Profile = ({ profileView }) => {

  const {myersBrigg, enneagram, username} = profileView

  //We will have a function that dynamically renders a link to show how a user and a friend would interact based off of bothe of their types. This will return a link that we can plug into an <a></a> tag in the return below. (Hayley has good concept for this)

  return (

    <article className='profile-view'>
      <h2 className="user-name">{username}</h2>
      <div className="type-container">
        <h3 className="myers-briggs-type">{myersBrigg.typeOf}</h3>
        <h4 className="myers-briggs-name">{myersBrigg.name}</h4>
        <p>{myersBrigg.description}</p>
        <div className="link-container">
          <a className="myers-briggs-link" src={myersBrigg.link}>Learn More
          </a>
        </div>
      </div>
      <div className="type-container">
        <h3 className="enneagram-type">{enneagram.number}</h3>
        <h4 className="myers-briggs-name">{enneagram.name}</h4>
        <p>{enneagram.description}</p>
        <div className="link-container">
          <a className="enneagram-link" src={enneagram.link}>Learn More
          </a>
        </div>
      </div>
    </article>
  )
}

export default Profile;


// {
//   "data": {
//   "id": "133",
//   "type": "user",
//   "attributes": {
//     "username": "funbucket89",
//     "email": "shameka_goyette@bartell.co",
//     "google_id": "1234",
//     "google_image": ";lakdjflkjdfkdaj;lfkds",
//     "myersBriggs": {
//       "id": "1",
//       "type": "ENFP",
//       "name": "The Campaigner",
//       "descriptions": "A Campaigner (ENFP) is someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits..."
//       },
//     "enneagram": {
//       "id": "1",
//       "number": "7",
//       "name": "The Enthusiast",
//       "descriptions": "Enneagram Sevens have the motivational need to experience life to the fullest and avoid pain. Sevens value a sense of freedom and focus on optimism..."
//       }
//     }
//   }
// }