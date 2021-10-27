import React from 'react';
import Cards from '../Cards/Cards';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphQL/queries';
import './DisplayList.css';

const DisplayList = ({ filteredUsers, id}) => {
  const { data: getUserData } = useQuery(GET_USER, {
    variables: {
      id: id
    }
  })
  
  const friends = getUserData.getUserStats.friends;

  const friendsCards = friends.map(friend => {
    return (
      <Cards
        key={friend.id}
        id={friend.id}
        username={friend.username}
        myersBriggs={friend.myersBrigg ? friend.myersBrigg.typeOf : null}
        enneagram={friend.enneagram ? friend.enneagram.number : null}
      />
    )
  })

  const allUsersCards = (filteredUsers && filteredUsers.map(user => {
    return (
      <Cards
        key={user.id}
        id={user.id}
        username={user.username}
        myersBriggs={user.myersBrigg ? user.myersBrigg.typeOf : null}
        enneagram={user.enneagram ? user.enneagram.number : null}
      />
    )
  }))

  const friendNumber = () => {
    if (friends.length === 1) {
      return `${friends.length} friend`;
    } else {
      return `${friends.length} friends`;
    }
  }

  return (
    <>
      {
        filteredUsers ?
          <section className="all-users-cards">
            {[allUsersCards]}
          </section> :
          <section className="show-friends">
            <h3 classname='friend-number'>{friendNumber()}</h3>
            <section className="friends-cards">
              {[friendsCards]}
            </section>
          </section>
        }
    </>
  )
}

export default DisplayList;
