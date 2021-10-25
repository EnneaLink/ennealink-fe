import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './Profile.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../../graphQL/queries';
import { ADD_FRIEND } from '../../graphQL/mutations';

const Profile = ({ profileView, logOut, userId }) => {
  
  const {error: getUserError, loading: getUserLoading, data: getUserData} = useQuery(GET_USER, {
    variables: {id: profileView }
  })

  const [addFriend, {error: addFriendError, loading: addFriendLoading, data: addFriendData}] = useMutation(ADD_FRIEND);

  const friendButton = () => {
    if (userId !== profileView){
      return (
        <button
        type="submit"
        onClick={friendUser}
        >
          add {profileView} to friends
        </button>
      )
    } 
  }

  const friendUser = () => {
    console.log(userId, profileView)
    //friend mutation
    addFriend({
      variables: {
        userId: userId,
        friendId: profileView
      }
    })
  }

  useEffect(() => {
    console.log('addFriendData', addFriendData)
  }, [addFriendData])

  return (

    <div>
      <Header logOut={logOut} id={userId} />

      { !getUserLoading ? (
        <article className='profile-view'>
          <h2 className="user-name">{getUserData.getUserStats.username}</h2>

          <div className="type-container">

            <h3 className="profile-type">{getUserData.getUserStats.myersBrigg.typeOf}</h3>
            <h4 className="type-name">{getUserData.getUserStats.myersBrigg.name}</h4>
            <p>{getUserData.getUserStats.myersBrigg.description}</p>

            <div className="link-container">
              <a className="type-link" href={getUserData.getUserStats.myersBrigg.link}>Learn More</a>
            </div>

          </div>

          <div className="type-container">

            <h3 className="profile-type">Type {getUserData.getUserStats.enneagram.number}</h3>
            <h4 className="type-name">{getUserData.getUserStats.enneagram.name}</h4>
            <p>{getUserData.getUserStats.enneagram.description}</p>

            <div className="link-container">
              <a className="type-link" href={getUserData.getUserStats.enneagram.link}>Learn More</a>
            </div>

          </div>
          {friendButton()}
        </article>) : <Loader />
      }
      { getUserError && <Error /> }
    </div>
  )
}

export default Profile;


