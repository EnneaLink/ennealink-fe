import React from 'react';
import Cards from '../Cards/Cards';

const DisplayList = ({ friends, allUsers, searchActivated, theUsers, filteredUsers, searchInput }) => {

  const friendsCards = friends.map(friend => {
    return (
      <Cards
        username={friend.username}
        myersBriggs={friend.myersBrigg.typeOf}
        enneagram={friend.enneagram.number}
      />
    )
  })

    const allUsersCards = (filteredUsers && filteredUsers.map(user => {
      return (
        <>
          {user.myersBrigg &&
          <Cards
            username={user.username}
            myersBriggs={user.myersBrigg.typeOf}
            enneagram={user.enneagram.number}
          />
        }
        </>
      )
   }))


  return (
    <>
    { filteredUsers ?
          <section className="all-users-cards">
          {console.log("searchActivated2", searchActivated)}
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
