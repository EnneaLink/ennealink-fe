import React from 'react';
import Cards from '../Cards/Cards';
import './DisplayList.css';

const DisplayList = ({ friends, filteredUsers, allFriends}) => {

  const friendsCards = allFriends.map(friend => {
    return (
      <Cards
        key={friend.id}
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
            username={user.username}
          />
      )
   }))

  return (
    <>
    { filteredUsers ?
          <section className="all-users-cards">
            {[allUsersCards]}
          </section> :
          <section className="show-friends">
            <h3>{allFriends.length} friends</h3>
            <section className="friends-cards">
              {[friendsCards]}
            </section>
          </section>
        }
    </>
  )
}

export default DisplayList;
