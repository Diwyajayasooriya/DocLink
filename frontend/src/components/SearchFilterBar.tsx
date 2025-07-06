
import React from 'react';
import { Search, Filter } from 'lucide-react';
import './SearchFilterBar.css';

interface SearchFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (value: string) => void;
  specialties: string[];
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedSpecialty,
  setSelectedSpecialty,
  specialties
}) => {
  return (
    <div className="search-filter-bar">
      <div className="search-filter-content">
        <div className="search-input-container">
          <Search className="search-input-icon" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <Filter className="filter-icon" />
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="filter-select"
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
