import React from 'react';
import Cards from '../Cards/Cards';

const DisplayList = ({ friends, allUsers, searchActivated, theUsers, filteredUsers }) => {

  const friendsCards = friends.map(friend => {
    return (
      <Cards
        username={friend.username}
        myersBriggs={friend.myersBrigg.typeOf}
        enneagram={friend.enneagram.number}
      />
    )
  })

    const allUsersCards = theUsers.map(user => {
      return (
        <Cards
          username={user.username}
          myersBriggs={user.myersBrigg}
          enneagram={user.enneagram}
        />
      )
   })




  return (
    <>
    { searchActivated ?
          <section className="all-users-cards">
            {[allUsersCards]}
            {console.log(allUsersCards)}
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
