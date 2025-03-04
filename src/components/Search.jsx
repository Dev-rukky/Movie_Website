import React from 'react'

const Search = ({searchParm, setSearchParm}) => {
  return (
    <div className='search'>
      <div>
        <img src="search.svg" alt="search icon" />
        <input type="text" placeholder='search through 1000 movies' value={searchParm} onChange={(e) => setSearchParm(e.target.value)} />
      </div>
    </div>
  )
}

export default Search
