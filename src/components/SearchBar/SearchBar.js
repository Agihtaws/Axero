import React, { useState, useRef } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    setIsExpanded(true);
  };
  
  const handleBlur = () => {
    if (!searchQuery) {
      setIsExpanded(false);
    }
  };
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
    // Implement search functionality
  };
  
  const handleSearchIconClick = (e) => {
    e.preventDefault();
    setIsExpanded(true);
    // Focus the input after expanding
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`search-container ${isExpanded ? 'expanded' : ''}`}>
      <form onSubmit={handleSubmit} className="search-form">
        <button 
          type="button" 
          className="search-button" 
          aria-label="Search"
          onClick={handleSearchIconClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
    </div>
  );
};

export default SearchBar;
