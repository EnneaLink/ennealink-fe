import React from 'react';

const UserDisplay = ({ friends, allUsers }) => {

  const filterAllUsers = (event) => {
    const { value } = event.target
    const foundUsers = allUsers.filter(user => {
      if (user.username.toLowerCase().includes(value.toLowerCase())) {
        return user
      }
    })
  }

  return (
    <>
    <Search />
    <section className="list">
      <h3>{friends.length} friends</h3>
      <div className="display-list">
        <DisplayList
          friends={friends}
          allUsers={allUsers}
        />
      </div>
    </section>
    </>
  )
}

export default UserDisplay;
