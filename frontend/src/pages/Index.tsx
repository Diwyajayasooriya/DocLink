import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import SearchFilterBar from '@/components/SearchFilterBar/SearchFilterBar';
import DoctorGrid from '@/components/DoctorGrid/DoctorGrid';
import Details from '../components/Details/details';

const Index = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  // Enhanced mock data for doctors with more details
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      consultationFee: 2500,
      image: "/placeholder.svg",
      qualifications: "MBBS, MD (Cardiology), FRCP",
      rating: 4.8,
      experience: "15 years",
      availableDispensaries: [
        { name: "Central Hospital", time: "09:00 AM - 12:00 PM", address: "Colombo 07" },
        { name: "City Medical Center", time: "02:00 PM - 05:00 PM", address: "Colombo 03" },
        { name: "Heart Care Clinic", time: "06:00 PM - 08:00 PM", address: "Nugegoda" }
      ],
      nextAvailable: "09:00 AM",
      totalPatients: 150,
      languages: ["English", "Sinhala"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      consultationFee: 3000,
      image: "/placeholder.svg",
      qualifications: "MBBS, MD (Neurology), PhD",
      rating: 4.9,
      experience: "20 years",
      availableDispensaries: [
        { name: "Neuro Care Hospital", time: "08:30 AM - 11:30 AM", address: "Kandy" },
        { name: "Brain Health Center", time: "01:00 PM - 04:00 PM", address: "Galle" }
      ],
      nextAvailable: "10:30 AM",
      totalPatients: 120,
      languages: ["English", "Tamil"]
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      consultationFee: 2000,
      image: "/placeholder.svg",
      qualifications: "MBBS, DCH, MRCPCH",
      rating: 4.7,
      experience: "12 years",
      availableDispensaries: [
        { name: "Children's Hospital", time: "08:00 AM - 11:00 AM", address: "Colombo 08" },
        { name: "Kids Care Center", time: "02:00 PM - 05:00 PM", address: "Maharagama" },
        { name: "Little Angels Clinic", time: "06:00 PM - 08:00 PM", address: "Nugegoda" },
        { name: "Happy Kids Medical", time: "09:00 AM - 12:00 PM", address: "Mount Lavinia" }
      ],
      nextAvailable: "08:30 AM",
      totalPatients: 200,
      languages: ["English", "Sinhala", "Tamil"]
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      specialty: "General Medicine",
      consultationFee: 1800,
      image: "/placeholder.svg",
      qualifications: "MBBS, MD (Internal Medicine)",
      rating: 4.6,
      experience: "18 years",
      availableDispensaries: [
        { name: "General Hospital", time: "07:00 AM - 10:00 AM", address: "Colombo 10" },
        { name: "Community Health Center", time: "11:00 AM - 02:00 PM", address: "Dehiwala" },
        { name: "Family Care Clinic", time: "03:00 PM - 06:00 PM", address: "Panadura" },
        { name: "Primary Care Medical", time: "07:00 PM - 09:00 PM", address: "Moratuwa" },
        { name: "Health Plus Center", time: "08:00 AM - 11:00 AM", address: "Kalutara" }
      ],
      nextAvailable: "09:30 AM",
      totalPatients: 300,
      languages: ["English", "Sinhala", "Hindi"]
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      consultationFee: 2200,
      image: "/placeholder.svg",
      qualifications: "MBBS, MD (Dermatology), FAAD",
      rating: 4.8,
      experience: "10 years",
      availableDispensaries: [
        { name: "Skin Care Clinic", time: "09:00 AM - 12:00 PM", address: "Colombo 05" },
        { name: "Beauty & Health Center", time: "02:00 PM - 05:00 PM", address: "Bambalapitiya" }
      ],
      nextAvailable: "10:00 AM",
      totalPatients: 80,
      languages: ["English", "Sinhala"]
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "Orthopedic",
      consultationFee: 2800,
      image: "/placeholder.svg",
      qualifications: "MBBS, MS (Orthopedics), FRCS",
      rating: 4.9,
      experience: "22 years",
      availableDispensaries: [
        { name: "Bone & Joint Hospital", time: "08:00 AM - 11:00 AM", address: "Colombo 06" },
        { name: "Sports Medicine Center", time: "02:00 PM - 05:00 PM", address: "Rajagiriya" },
        { name: "Orthopedic Clinic", time: "06:00 PM - 08:00 PM", address: "Kotte" }
      ],
      nextAvailable: "08:30 AM",
      totalPatients: 95,
      languages: ["English"]
    }
  ];

  // Mock data for live queue display
  const queueDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      hospital: "Central Hospital",
      arrivalTime: "09:00 AM",
      isArrived: true,
      currentPatient: 8,
      totalPatients: 15,
      consultationFee: 2500,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      hospital: "Children's Hospital",
      arrivalTime: "08:30 AM",
      isArrived: true,
      currentPatient: 12,
      totalPatients: 20,
      consultationFee: 2000,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "Orthopedic",
      hospital: "Bone & Joint Hospital",
      arrivalTime: "08:00 AM",
      isArrived: false,
      currentPatient: 0,
      totalPatients: 10,
      consultationFee: 2800,
      image: "/placeholder.svg"
    }
  ];

  const specialties = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician', 'General Medicine', 'Dermatologist', 'Orthopedic'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectDoctor = (doctorId: number) => {
    navigate(`/doctor/${doctorId}`);
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const totalDispensaries = doctors.reduce((sum, doctor) => sum + doctor.availableDispensaries.length, 0);
  const totalPatients = doctors.reduce((sum, doctor) => sum + doctor.totalPatients, 0);

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
        <div>
          <Details />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <DoctorGrid
              doctors={filteredDoctors}
              onSelectDoctor={handleSelectDoctor}
            />
          </div>

          <div className="space-y-6">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
