import React from 'react';
import Search from '../Search/Search';
import Header from '../Header/Header';
import DisplayList from '../DisplayList/DisplayList';
import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS, GET_USER} from '../../graphQL/queries';

const UserDisplay = ({ logOut, id }) => {

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const { loading, data } = useQuery(GET_ALL_USERS)
  const { data: getUserData } = useQuery(GET_USER, {
    variables: {
      id: id
    }
  })

  const friends = getUserData.getUserStats.friends;

  useEffect(() => {
    (!loading && setAllUsers(data.getAllUsers));
  }, [data])

  const filterAllUsers = (event) => {
    const { value } = event.target
    if (value.length) {
      const foundUsers = allUsers.filter(user => {
        if (user.username.toLowerCase().includes(value.toLowerCase()) && user.enneagram ) {
          return user
        }
      })
      setFilteredUsers(foundUsers)
    } else {
      setFilteredUsers(null)
    }
  }

  return (
    <div className='user-display'>
      <Header logOut={logOut} id={id} />
      <Search
        filterAllUsers={filterAllUsers}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <section className="list">
        <div className="display-list">
          {!loading && <DisplayList
            friends={friends}
            id={id}
            filteredUsers={filteredUsers}
          />}
        </div>
      </section>
    </div>
  )
}

export default UserDisplay;
