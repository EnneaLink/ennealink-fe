import React from 'react';
import Cards from '../Cards/Cards';
import {useState, useEffect} from 'react';

const DisplayList = ({ friends, allUsers, searchActivated, theUsers, filteredUsers, searchInput }) => {

  useEffect(() => {
    console.log("useEffect happened!");
  }, [filteredUsers])

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
    {console.log("filteredUsers", filteredUsers)}
    {console.log("searchActivated", searchActivated)}
    { filteredUsers ?
          <section className="all-users-cards">
          {console.log("searchActivated2", searchActivated)}
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
