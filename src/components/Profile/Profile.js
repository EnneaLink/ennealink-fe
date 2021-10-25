import React from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import './Profile.css';
import {useQuery} from '@apollo/client';
import {GET_USER} from '../../graphQL/queries';

const Profile = ({ profileView, logOut }) => {

  // const {myersBrigg, enneagram, username} = profileView
  const {error, loading, data} = useQuery(GET_USER, {
    variables: {id: profileView}
  })

  useEffect(() => {
    console.log("PV", profileView)
    console.log("data", profileView)
  }, [data])

  //We will have a function that dynamically renders a link to show how a user and a friend would interact based off of bothe of their types. This will return a link that we can plug into an <a></a> tag in the return below. (Hayley has good concept for this)

  return (

    <div>
      <Header setUser={logOut}/>

      { data ? (
        <article className='profile-view'>
          <h2 className="user-name">{data.getUserStats.username}</h2>

          <div className="type-container">

            <h3 className="profile-type">{data.getUserStats.myersBrigg.typeOf}</h3>
            <h4 className="type-name">{data.getUserStats.myersBrigg.name}</h4>
            <p>{data.getUserStats.myersBrigg.description}</p>

            <div className="link-container">
              <a className="type-link" href={data.getUserStats.myersBrigg.link}>Learn More</a>
            </div>

          </div>

          <div className="type-container">

            <h3 className="profile-type">Type {data.getUserStats.enneagram.number}</h3>
            <h4 className="type-name">{data.getUserStats.enneagram.name}</h4>
            <p>{data.getUserStats.enneagram.description}</p>

            <div className="link-container">
              <a className="type-link" href={data.getUserStats.enneagram.link}>Learn More</a>
            </div>

          </div>

        </article>) : <Loader />
      }
    </div>
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
