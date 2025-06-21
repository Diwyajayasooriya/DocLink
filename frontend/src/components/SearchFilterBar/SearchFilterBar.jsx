import React from 'react';
import './SearchFilterBar.css';
import { Search, Filter } from 'lucide-react';

import './SearchFilterBar.css';

const SearchFilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedSpecialty,
  setSelectedSpecialty,
  specialties
}) => {
  return (
    <div className="search-filter-bar">
        <div className="search-filter-bar-container">

        
      <div className="search-box">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search doctors by name or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-box">
        <Filter className="filter-icon" />
        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="filter-dropdown"
        >
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
