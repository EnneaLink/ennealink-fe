import React from 'react';
import Search from '../Search/Search';
import Header from '../Header/Header';
import DisplayList from '../DisplayList/DisplayList';
import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from '../../graphQL/queries';
import { GET_USER } from '../../graphQL/queries';

const UserDisplay = ({ friends, logOut, id, currentUserId }) => {

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [allFriends, setAllFriends] = useState(null)
  const {error, loading, data} = useQuery(GET_ALL_USERS)
  const {error: getUserError, loading: getUserLoading, data: getUserData} = useQuery(GET_USER, {
    variables: {id: currentUserId}
  })


  useEffect(() => {
    (!loading && setAllUsers(data.getAllUsers));
  }, [data])

  useEffect(() => {
    (!getUserLoading && setAllFriends(getUserData.getUserStats.friends));
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

  return (
    <>
    <Header logOut={logOut} id={id} />
    <div className='user-display'>
      <Search
        filterAllUsers={filterAllUsers}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <section className="list">
        <div className="display-list">
          {(!loading && !getUserLoading) && <DisplayList
            allFriends={getUserData.getUserStats.friends}
            filteredUsers={filteredUsers}
          />}
        </div>
      </section>
    </div>
    </>
  )
}

export default UserDisplay;
