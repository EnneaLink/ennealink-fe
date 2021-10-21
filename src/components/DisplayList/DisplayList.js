import React from 'react';
import Cards from '../Cards/Cards';

const DisplayList = ({ friends, allUsers, searchActivated }) => {

  const friendsCards = friends.map(friend => {
    return (
      <Cards
        username={friend.username}
        myersBriggs={friend.myersBrigg.typeOf}
        enneagram={friend.enneagram.number}
      />
    )
  })
  if (allUsers) {
    const allUsersCards = allUsers.map(user => {
    return (
      <Cards
        username={user.username}
        myersBriggs={user.myersBrigg.typeOf}
        enneagram={user.enneagram.number}
      />
    )
   })
  }
  return (
    <>
    <section className="friendsCards">
      {[friendsCards]}
    </section>
    </>
  )
}

export default DisplayList;
