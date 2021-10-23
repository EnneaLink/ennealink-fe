import React from 'react';
import Search from '../Search/Search';
import DisplayList from '../DisplayList/DisplayList';
import {useState} from 'react';
import {GET_ALL_USERS} from '../../graphQL/queries';

const UserDisplay = ({ friends, allUsers }) => {

  // const [allUsers, setAllUsers] = useState([]);
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

  const determineUsersToShow = () => {
    return !filteredUsers ? allUsers : filteredUsers
  }

  return (
    <>
    <Search filterAllUsers={filterAllUsers} />
    <section className="list">
      <div className="display-list">
        <DisplayList
          friends={friends}
          theUsers={determineUsersToShow}
          searchActivated={searchActivated}
          filteredUsers={filteredUsers}
        />
      </div>
    </section>
    </>
  )
}

export default UserDisplay;
