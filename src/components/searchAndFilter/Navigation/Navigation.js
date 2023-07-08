import React from 'react'

export default function Navigation({ handleInputChange, query }) {
  return (
    <nav className='nav-tutorial'>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="căutare/"
        />
      </div>

      <div className='profile-container'>
        <a href="#">some icons</a>
      </div>


    </nav>
  )
}
