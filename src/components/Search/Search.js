import React from 'react';
import './Search.css';
import search from '../../Assets/search.png'

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
          placeholder='Find New Friends'
          name='search'
          value={searchInput}
          onChange={event => handleChange(event)}
        />
      </div>
  )
}

export default Search;

/*// <label className='the-label' for='search'>Find New Friends: </label>*/
