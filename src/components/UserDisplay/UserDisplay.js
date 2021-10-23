import React from 'react';
import Search from '../Search/Search';
import DisplayList from '../DisplayList/DisplayList';
import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from '../../graphQL/queries';

const UserDisplay = ({ friends }) => {

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const {error, loading, data} = useQuery(GET_ALL_USERS)


  useEffect(() => {
    (!loading && setAllUsers(data.getAllUsers));
  }, [data])

  const filterAllUsers = (event) => {
    const { value } = event.target
    if (value.length) {
      const foundUsers = allUsers.filter(user => {
        if (user.username.toLowerCase().includes(value.toLowerCase())) {
          return user
        }
      })
      setFilteredUsers(foundUsers)
    } else {
      setFilteredUsers(null)
    }

  }

  const determineUsersToShow = () => {
    return !filteredUsers ? allUsers : filteredUsers
  }

  return (
    <>
    <Search filterAllUsers={filterAllUsers} setSearchInput={setSearchInput} searchInput={searchInput}/>
    <section className="list">
      <div className="display-list">
        {!loading && <DisplayList
          friends={friends}
          filteredUsers={filteredUsers}
        /> }
      </div>
    </section>
    </>
  )
}

export default UserDisplay;
