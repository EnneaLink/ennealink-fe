import React from 'react';
import Cards from '../Cards/Cards';

const DisplayList = ({ friends, allUsers, searchActivated }) => {

  const friendsCards = friends.map(friend => {
    return (
      <Cards
        icon={friend.icon}
        username={friend.username}
        myersBriggs={friend.myersBriggs}
        enneagram={friend.enneagram}
      />
    )
  })
  const allUsersCards = allUsers.map(user => {
    return (
      <Cards
        icon={user.icon}
        username={user.username}
        myersBriggs={user.myersBriggs}
        enneagram={user.enneagram}
      />
    )
  })

  return (
    <>
    { searchActivated ? //change this to filteredUsers.length?
      <section className="allUsersCards">
        {allUsersCards}
      </section> :
      <section className="show-friends">
        <h3>{friends.length} friends</h3>
        <section className="friendsCards">
          {friendsCards}
        </section>
      </section>
    }
    </>
  )
}

export default DisplayList;
