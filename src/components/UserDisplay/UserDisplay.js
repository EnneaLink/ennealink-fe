import React from 'react';

const UserDisplay = ({ friends, allUsers }) => {

  return (
    <section className="list">
      <h3>{friends.length} friends</h3>
    </section>
  )
}

export default UserDisplay;
