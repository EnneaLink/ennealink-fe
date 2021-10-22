import React from 'react';

const Search = ({ friends, allUsers, filterAllUsers }) => {

  return (
    <div className='search-container'>
        <label className='the-label' for='search'>Search New Friends: </label>
        <input
          className='search-bar'
          type='text'
          placeholder='Ex: imauser'
          name='search'
          onChange={event => filterAllUsers(event)}
        />
      </div>
  )
}

export default Search;
