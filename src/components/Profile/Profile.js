import React, { useState } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './Profile.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../../graphQL/queries';
import { ADD_FRIEND, DELETE_FRIEND } from '../../graphQL/mutations';

const Profile = ({ profileView, logOut, userId }) => {
  
  const [friendIds, setFriendIds] = useState([]);
  
  const {error: getUserError, loading: getUserLoading, data: getUserData} = useQuery(GET_USER, {
    variables: {id: profileView }
  })

  const {error: getMyError, loading: getMyLoading, data: getMyData} = useQuery(GET_USER, {
    variables: {id: userId }
  ,
    onCompleted: getMyData => {
      setFriendIds(getMyData.getUserStats.friends.map(friend => friend.id))
    }
  })

  const [addFriend, { error: addFriendError, loading: addFriendLoading }] = useMutation(ADD_FRIEND, {
    refetchQueries: [{ 
      query: GET_USER, 
      variables: { 
        id: userId
      }
    }]
  });

  const [deleteFriend, { error: deleteFriendError, loading: deleteFriendLoading }] = useMutation(DELETE_FRIEND, {
    refetchQueries: [{ 
      query: GET_USER, 
      variables: { 
        id: userId
      }
    }]
  });

  const friendButton = () => {
    if (profileView !== userId && friendIds.includes(profileView)) {
      console.log(getUserData)
      return (
        <button
          type="submit"
          onClick={unfriendUser}
          className='unfollow-btn'
        >
          unfollow {getUserData.getUserStats.username}
        </button>
      )
    } else if (profileView !== userId && !friendIds.includes(profileView)){
      return (
        <button
          type="submit"
          onClick={friendUser}
          className='follow-btn'
        >
          follow {getUserData.getUserStats.username}
        </button>
      )
    }
  }

  const friendUser = () => {
    document.querySelector(".follow-btn").classList.add("hidden");
    addFriend({
      variables: {
        userId: userId,
        friendId: profileView
      }
    })
  }

  const unfriendUser = () => {
    document.querySelector(".unfollow-btn").classList.add("hidden");    
    deleteFriend({
      variables: {
        userId: userId,
        friendId: profileView
      }
    })
  }

  return (

    <div className='profile-page'>
      <Header logOut={logOut} id={userId} />

      { !getUserLoading && !getMyLoading ? (
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
          {friendIds && friendButton()}
        </article>) : <Loader />
      }
      { getUserError || addFriendError && <Error /> }
    </div>
  )
}

export default Profile;
