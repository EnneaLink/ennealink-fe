import React from 'react';
import './Search.css';

const Search = ({ filterAllUsers, setSearchInput, searchInput }) => {

  const handleChange = event => {
    event.preventDefault()
    setSearchInput(event.target.value)
    filterAllUsers(event)
  }

  return (
    <div className='search-container'>
      <input
        className='search-bar'
        type='text'
        placeholder='find new friends'
        name='search'
        value={searchInput}
        onChange={event => handleChange(event)}
      />
    </div>
  )
}

export default Search;

/*// <label className='the-label' for='search'>Find New Friends: </label>*/
