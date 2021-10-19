import React from 'react';

const Search = ({ friends, allUsers, filterAllUsers }) => {

  return (
    <div className='search-container'>
        <label for='search'>Search Users</label>
        <input
          className='search-bar'
          type='text'
          placeholder='Ex: imauser'
          name='search'
          onChange={event => searchUsers(event)}
        />
      </div>
  )
}

export default Search;
