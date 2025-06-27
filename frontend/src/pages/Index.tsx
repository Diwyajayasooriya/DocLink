import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import SearchFilterBar from '@/components/SearchFilterBar/SearchFilterBar';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician', 'General Medicine', 'Dermatologist', 'Orthopedic'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      <Header currentTime={currentTime} />

      <div className="container mx-auto px-4 py-8">
        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          specialties={specialties}
        />
      </div>
    </div>
  );
};

export default Index;