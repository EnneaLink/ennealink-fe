import React from 'react';

const Profile = ({ profileView }) => {

  //We will have a function that dynamically renders a link to show how a user and a friend would interact based off of bothe of their types. This will return a link that we can plug into an <a></a> tag in the return below. (Hayley has good concept for this)

  // if (profileView !== {}) {
    return (

      <article>
      <h2>{profileView.username}</h2>
      {/* <h2>{profileView.data.attributes.username}</h2> */}
        {/* <h2 className="user-name">{profileView.data.attributes.username}</h2>
        <div className="type-container">
          <h3 className="myers-briggs-type">{profileView.data.attributes.myers_briggs.type}</h3>
          <h4 className="myers-briggs-name">{profileView.data.attributes.myers_briggs.name}</h4>
          <p>{profileView.data.attributes.myers_briggs.descriptions}</p>
          <div className="link-container">
            <a className="myers-briggs-link" src={`https://www.16personalities.com/${profileView.data.attributes.myers_briggs.type}-personality`}>Learn More
            </a>
          </div>
        </div>
        <div className="type-container">
          <h3 className="enneagram-type">{profileView.data.attributes.enneagram.number}</h3>
          <h4 className="myers-briggs-name">{profileView.data.attributes.enneagram.name}</h4>
          <p>{profileView.data.attributes.enneagram.descriptions}</p>
          <div className="link-container">
            <a className="enneagram-link" src={`https://www.enneagraminstitute.com/type-${profileView.data.attributes.enneagram.number}`}>Learn More
            </a>
          </div>
        </div> */}
      </article>
    )
  // }
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
//     "myers_briggs": {
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