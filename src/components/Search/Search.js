import React from 'react';

const Search = ({ friends, allUsers, filterAllUsers, setSearchInput, searchInput }) => {

  const handleChange = event => {
    event.preventDefault()
    setSearchInput(event.target.value)
    filterAllUsers(event)
  }

  return (
    <div className='search-container'>
        <label className='the-label' for='search'>Search New Friends: </label>
        <input
          className='search-bar'
          type='text'
          placeholder='Ex: imauser'
          name='search'
          value={searchInput}
          onChange={event => handleChange(event)}
        />
      </div>
  )
}

export default Search;
