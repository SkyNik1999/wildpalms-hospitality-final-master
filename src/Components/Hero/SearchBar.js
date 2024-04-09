import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handleClick = () => {
    navigate(`/listing?location=${location}`);
  };

  return (
    <form action="" className="hero__search">
      <i className="bx bxs-map"></i>
      <input
        type="search"
        placeholder="Search by location..."
        className="hero__search-input"
        onChange={handleChange}
      />
      <button className="button" onClick={handleClick}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
