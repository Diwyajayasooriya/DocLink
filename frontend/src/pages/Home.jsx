import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import SearchFilterBar from '../components/SearchFilterBar/SearchFilterBar';

import './Home.css';


const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = [
    'All',
    'Cardiologist',
    'Neurologist',
    'Pediatrician',
    'General Medicine',
    'Dermatologist',
    'Orthopedic'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header currentTime={currentTime} />
      {/* <main > */}
        <SearchFilterBar className="doc-search_filter_bar"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          specialties={specialties}
        />
      {/* </main> */}
    </div>
  );
};

export default Home;
