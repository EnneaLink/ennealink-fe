import React from 'react';
import Search from '../Search/Search';
import Header from '../Header/Header';
import DisplayList from '../DisplayList/DisplayList';
import {useState} from 'react';

const UserDisplay = ({ friends }) => {

  const [allUsers, setAllUsers] = useState([]);
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
    return !filteredUsers.length ? allUsers : filteredUsers
  }

  return (
    <div>
      <Header />
      <Search filterAllUsers={filterAllUsers} />
      <section className="list">
        <div className="display-list">
          <DisplayList
            friends={friends}
            theUsers={determineUsersToShow}
            searchActivated={searchActivated}
          />
        </div>
      </section>
    </div>
  )
}

export default UserDisplay;
