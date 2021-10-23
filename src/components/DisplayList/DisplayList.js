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

    const allUsersCards = allUsers.map(user => {
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
          <section className="allUsersCards">
            {[allUsersCards]}
            {console.log(allUsersCards)}
          </section> :
          <section className="show-friends">
            <h3>{friends.length} friends</h3>
            <section className="friendsCards">
              {[friendsCards]}
            </section>
          </section>
        }
    </>
  )
}

export default DisplayList;
