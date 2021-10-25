import React from 'react';
import Cards from '../Cards/Cards';
import './DisplayList.css';

const DisplayList = ({ friends, filteredUsers}) => {

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

  return (
    <>
    { filteredUsers ?
          <section className="all-users-cards">
            {[allUsersCards]}
          </section> :
          <section className="show-friends">
            <h3>{friends.length} friends</h3>
            <section className="friends-cards">
              {[friendsCards]}
            </section>
          </section>
        }
    </>
  )
}

export default DisplayList;
