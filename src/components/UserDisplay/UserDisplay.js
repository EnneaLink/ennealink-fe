import React from 'react';
import Search from '../Search/Search';
import DisplayList from '../DisplayList/DisplayList';
import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from '../../graphQL/queries';

const UserDisplay = ({ friends }) => {

  const [allUsers, setAllUsers] = useState([]);
  const [searchActivated, setSearchActivated] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState()
  const [searchInput, setSearchInput] = useState('')
  const {error, loading, data} = useQuery(GET_ALL_USERS)


  useEffect(() => {
    console.log(data);
    (!loading && setAllUsers(data.getAllUsers));
  }, [data])

  const filterAllUsers = (event) => {
    console.log("searchInput", searchInput)
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
    <Search filterAllUsers={filterAllUsers} setSearchInput={setSearchInput} searchInput={searchInput}/>
    <section className="list">
      <div className="display-list">
        {!loading && <DisplayList
          friends={friends}
          theUsers={determineUsersToShow()}
          searchActivated={searchActivated}
          filteredUsers={filteredUsers}
          allUsers={data.getAllUsers}
          searchInput={searchInput}
        /> }
      </div>
    </section>
    </>
  )
}

export default UserDisplay;
