import React from 'react';

const UserDisplay = ({ friends, allUsers }) => {

  const [searchActivated, setSearchActivated] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState()

  const filterAllUsers = (event) => {
    setSearchActivated(true)
    const { value } = event.target
    const foundUsers = allUsers.filter(user => {
      if (user.username.toLowerCase().includes(value.toLowerCase())) {
        return user
      }
    })
    setFilteredUsers(foundUsers)
  }

  return (
    <>
    <Search filterAllUsers={filterAllUsers} />
    <section className="list">
      <div className="display-list">
        <DisplayList
          friends={friends}
          allUsers={allUsers}
          searchActivated={searchActivated}
        />
      </div>
    </section>
    </>
  )
}

export default UserDisplay;
