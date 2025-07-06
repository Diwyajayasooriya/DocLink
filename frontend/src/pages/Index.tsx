import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import SearchFilterBar from '@/components/SearchFilterBar';
import StatsCards from '@/components/StatsCards';
import DoctorGrid from '@/components/DoctorGrid';
import QuickActions from '@/components/QuickActions';
import HealthTip from '@/components/HealthTip';
import QueueDisplay from '@/components/QueueDisplay';

import "./Index.css";

const Index = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced mock data for doctors with more details
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      consultationFee: 2500,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      qualifications: "MBBS, MD (Cardiology), FRCP",
      rating: 4.8,
      experience: "15 years",
      availableDispensaries: [
        { 
          name: "Central Hospital", 
          time: "09:00 AM - 12:00 PM", 
          address: "123 Health St, Colombo 07",
          contact: "0112345678",
          distance: "1.2 km"
        },
        { 
          name: "City Medical Center", 
          time: "02:00 PM - 05:00 PM", 
          address: "456 Care Ave, Colombo 03",
          contact: "0118765432",
          distance: "3.5 km"
        },
        { 
          name: "Heart Care Clinic", 
          time: "06:00 PM - 08:00 PM", 
          address: "789 Wellness Rd, Nugegoda",
          contact: "0113456789",
          distance: "8.0 km"
        }
      ],
      nextAvailable: "Tomorrow, 09:00 AM",
      totalPatients: 1500,
      languages: ["English", "Sinhala"],
      procedures: ["Echocardiogram", "Angioplasty", "Stress Test"],
      education: "Harvard Medical School",
      awards: ["Best Cardiologist 2022", "Excellence in Patient Care 2021"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      consultationFee: 3000,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      qualifications: "MBBS, MD (Neurology), PhD",
      rating: 4.9,
      experience: "20 years",
      availableDispensaries: [
        { 
          name: "Neuro Care Hospital", 
          time: "08:30 AM - 11:30 AM", 
          address: "321 Brain Blvd, Kandy",
          contact: "0812345678",
          distance: "115 km"
        },
        { 
          name: "Brain Health Center", 
          time: "01:00 PM - 04:00 PM", 
          address: "654 Memory Lane, Galle",
          contact: "0912345678",
          distance: "125 km"
        }
      ],
      nextAvailable: "Today, 02:30 PM",
      totalPatients: 1200,
      languages: ["English", "Tamil"],
      procedures: ["EEG", "EMG", "Nerve Conduction Studies"],
      education: "Johns Hopkins University",
      awards: ["Neurology Innovator Award 2023", "Research Excellence 2020"]
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      consultationFee: 2000,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      qualifications: "MBBS, DCH, MRCPCH",
      rating: 4.7,
      experience: "12 years",
      availableDispensaries: [
        { 
          name: "Children's Hospital", 
          time: "08:00 AM - 11:00 AM", 
          address: "147 Kid St, Colombo 08",
          contact: "0111112222",
          distance: "2.1 km"
        },
        { 
          name: "Kids Care Center", 
          time: "02:00 PM - 05:00 PM", 
          address: "258 Play Rd, Maharagama",
          contact: "0112223333",
          distance: "10.5 km"
        },
        { 
          name: "Little Angels Clinic", 
          time: "06:00 PM - 08:00 PM", 
          address: "369 Smile Ave, Nugegoda",
          contact: "0113334444",
          distance: "8.2 km"
        },
        { 
          name: "Happy Kids Medical", 
          time: "09:00 AM - 12:00 PM", 
          address: "741 Laugh Lane, Mount Lavinia",
          contact: "0114445555",
          distance: "12.0 km"
        }
      ],
      nextAvailable: "Today, 10:30 AM",
      totalPatients: 2500,
      languages: ["English", "Sinhala", "Tamil"],
      procedures: ["Vaccinations", "Developmental Screenings", "Well-child Visits"],
      education: "Stanford University",
      awards: ["Pediatric Care Award 2021", "Community Service 2019"]
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      specialty: "General Medicine",
      consultationFee: 1800,
      image: "https://images.unsplash.com/photo-1713277730396-3a97102d790a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=80",
      qualifications: "MBBS, MD (Internal Medicine)",
      rating: 4.6,
      experience: "18 years",
      availableDispensaries: [
        { 
          name: "General Hospital", 
          time: "07:00 AM - 10:00 AM", 
          address: "852 Health St, Colombo 10",
          contact: "0115556666",
          distance: "4.3 km"
        },
        { 
          name: "Community Health Center", 
          time: "11:00 AM - 02:00 PM", 
          address: "963 Wellness Ave, Dehiwala",
          contact: "0116667777",
          distance: "7.8 km"
        },
        { 
          name: "Family Care Clinic", 
          time: "03:00 PM - 06:00 PM", 
          address: "159 Care Rd, Panadura",
          contact: "0382223333",
          distance: "25.0 km"
        },
        { 
          name: "Primary Care Medical", 
          time: "07:00 PM - 09:00 PM", 
          address: "357 Doctor Lane, Moratuwa",
          contact: "0117778888",
          distance: "15.2 km"
        },
        { 
          name: "Health Plus Center", 
          time: "08:00 AM - 11:00 AM", 
          address: "486 Medical Blvd, Kalutara",
          contact: "0342223333",
          distance: "42.0 km"
        }
      ],
      nextAvailable: "Tomorrow, 07:30 AM",
      totalPatients: 3800,
      languages: ["English", "Sinhala", "Hindi"],
      procedures: ["Physical Exams", "Chronic Disease Management", "Preventive Care"],
      education: "University of Colombo",
      awards: ["Long Service Award 2022", "Patient Choice Award 2020"]
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      consultationFee: 2200,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      qualifications: "MBBS, MD (Dermatology), FAAD",
      rating: 4.8,
      experience: "10 years",
      availableDispensaries: [
        { 
          name: "Skin Care Clinic", 
          time: "09:00 AM - 12:00 PM", 
          address: "753 Beauty St, Colombo 05",
          contact: "0118889999",
          distance: "5.5 km"
        },
        { 
          name: "Beauty & Health Center", 
          time: "02:00 PM - 05:00 PM", 
          address: "951 Glow Ave, Bambalapitiya",
          contact: "0119990000",
          distance: "6.2 km"
        }
      ],
      nextAvailable: "Today, 03:00 PM",
      totalPatients: 1200,
      languages: ["English", "Sinhala"],
      procedures: ["Chemical Peels", "Laser Therapy", "Skin Biopsies"],
      education: "University of California",
      awards: ["Dermatology Excellence 2021", "Cosmetic Innovation 2019"]
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "Orthopedic",
      consultationFee: 2800,
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      qualifications: "MBBS, MS (Orthopedics), FRCS",
      rating: 4.9,
      experience: "22 years",
      availableDispensaries: [
        { 
          name: "Bone & Joint Hospital", 
          time: "08:00 AM - 11:00 AM", 
          address: "357 Ortho Rd, Colombo 06",
          contact: "0110001111",
          distance: "3.8 km"
        },
        { 
          name: "Sports Medicine Center", 
          time: "02:00 PM - 05:00 PM", 
          address: "789 Fitness Lane, Rajagiriya",
          contact: "0111112222",
          distance: "7.5 km"
        },
        { 
          name: "Orthopedic Clinic", 
          time: "06:00 PM - 08:00 PM", 
          address: "123 Recovery St, Kotte",
          contact: "0112223333",
          distance: "8.9 km"
        }
      ],
      nextAvailable: "Tomorrow, 08:00 AM",
      totalPatients: 1950,
      languages: ["English"],
      procedures: ["Joint Replacements", "Arthroscopic Surgery", "Fracture Care"],
      education: "Oxford University",
      awards: ["Orthopedic Surgeon of the Year 2020", "Pioneer in Joint Preservation 2018"]
    }
  ];

  // Enhanced mock data for live queue display
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
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      waitTime: "Approx. 45 min",
      currentPatientName: "Mr. Perera"
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
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      waitTime: "Approx. 30 min",
      currentPatientName: "Baby Silva"
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
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      waitTime: "Not arrived yet",
      currentPatientName: ""
    }
  ];

  const specialties = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician', 'General Medicine', 'Dermatologist', 'Orthopedic'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectDoctor = (doctorId: number) => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      navigate(`/doctor/${doctorId}`);
      setIsLoading(false);
    }, 500);
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.qualifications.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const totalDispensaries = doctors.reduce((sum, doctor) => sum + doctor.availableDispensaries.length, 0);
  const totalPatients = doctors.reduce((sum, doctor) => sum + doctor.totalPatients, 0);

  return (
    <div className="index-container">
      <Header currentTime={currentTime} />
      
      <main className="index-main">
        <div className="container">
          <SearchFilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedSpecialty={selectedSpecialty}
            setSelectedSpecialty={setSelectedSpecialty}
            specialties={specialties}
          />
          
          <StatsCards 
            doctorsCount={filteredDoctors.length}
            totalDispensaries={totalDispensaries}
            activeQueues={queueDoctors.filter(d => d.isArrived).length}
            totalPatients={totalPatients}
          />
          
          <div className="index-grid">
            <div className="doctors-section">
              {isLoading ? (
                <div className="loading-spinner">Loading...</div>
              ) : (
                <DoctorGrid 
                  doctors={filteredDoctors} 
                  onSelectDoctor={handleSelectDoctor}
                />
              )}
            </div>
            
            <div className="sidebar-section">
              <QueueDisplay doctors={queueDoctors} />
              <QuickActions />
              <HealthTip />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;