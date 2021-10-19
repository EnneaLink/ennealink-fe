import React from 'react';

const UserDisplay = ({ friends, allUsers }) => {

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
