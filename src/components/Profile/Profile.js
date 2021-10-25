import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './Profile.css';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphQL/queries';

const Profile = ({ profileView, logOut, userId }) => {
  
  const {error, loading, data} = useQuery(GET_USER, {
    variables: {id: profileView }
  })

  const friendButton = () => {
    if (userId !== profileView){
      return (
        <button
        type="submit"
        onClick={addFriend}
        >
          add {profileView} to friends
        </button>
      )
    } 
  }

  const addFriend = () => {
    //friend mutation
  }
  return (

    <div>
      <Header logOut={logOut} id={userId} />

      { !loading ? (
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
      { error && <Error /> }
    </div>
  )
}

export default Profile;


