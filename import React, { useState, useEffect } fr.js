import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Search, Heart, Stethoscope, Activity, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import QueueDisplay from '@/components/QueueDisplay';

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

  const handleSelectDoctor = (doctorId) => {
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
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-emerald-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  DocLink
                </h1>
                <p className="text-emerald-600 font-medium">Connect with Healthcare Excellence</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">{currentTime.toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">Live Updates</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-emerald-200 focus:border-emerald-500 rounded-xl"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-emerald-600" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-emerald-200 rounded-xl focus:border-emerald-500 bg-white"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Available Doctors</p>
                  <p className="text-3xl font-bold">{doctors.length}</p>
                  <p className="text-emerald-200 text-xs mt-1">Online Now</p>
                </div>
                <Stethoscope className="w-8 h-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Dispensaries</p>
                  <p className="text-3xl font-bold">{totalDispensaries}</p>
                  <p className="text-blue-200 text-xs mt-1">Locations Available</p>
                </div>
                <MapPin className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm">Active Queues</p>
                  <p className="text-3xl font-bold">{queueDoctors.filter(d => d.isArrived).length}</p>
                  <p className="text-teal-200 text-xs mt-1">Doctors Available</p>
                </div>
                <Activity className="w-8 h-8 text-teal-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Total Patients</p>
                  <p className="text-3xl font-bold">{totalPatients}</p>
                  <p className="text-purple-200 text-xs mt-1">Served This Month</p>
                </div>
                <Users className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Doctor Selection */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-emerald-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <Stethoscope className="w-5 h-5 text-emerald-600" />
                  Choose Your Doctor
                </CardTitle>
                <p className="text-sm text-emerald-600">
                  {filteredDoctors.length} doctors available • Select to view dispensaries and book appointment
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className="p-6 border-2 border-gray-100 rounded-xl cursor-pointer transition-all hover:border-emerald-300 hover:shadow-lg bg-white"
                      onClick={() => handleSelectDoctor(doctor.id)}
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-16 h-16 rounded-full object-cover bg-emerald-100 border-2 border-emerald-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                              <p className="text-sm text-emerald-600 font-medium">{doctor.specialty}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{doctor.qualifications}</p>
                          <p className="text-xs text-gray-500">{doctor.experience} experience</p>
                          
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Consultation Fee:</span>
                              <span className="font-bold text-emerald-600">LKR {doctor.consultationFee}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Available at:</span>
                              <span className="font-medium">{doctor.availableDispensaries.length} locations</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Next available:</span>
                              <span className="font-medium text-blue-600">{doctor.nextAvailable}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Languages:</span>
                              <span className="font-medium text-xs">{doctor.languages.join(', ')}</span>
                            </div>
                          </div>

                          <Button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md">
                            <Calendar className="w-4 h-4 mr-2" />
                            View Dispensaries & Book
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredDoctors.length === 0 && (
                  <div className="text-center py-12">
                    <Stethoscope className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No doctors found matching your search.</p>
                    <p className="text-gray-400 text-sm">Try adjusting your search terms or filters.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Live Queue Display & Quick Actions */}
          <div className="space-y-6">
            {/* Live Queue Display */}
            <QueueDisplay doctors={queueDoctors} />

            {/* Quick Actions */}
            <Card className="border-emerald-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-lg">
                <CardTitle className="text-lg text-emerald-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button variant="outline" className="w-full justify-start border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300">
                  <Calendar className="w-4 h-4 mr-3 text-emerald-600" />
                  View My Appointments
                </Button>
                <Button variant="outline" className="w-full justify-start border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300">
                  <Clock className="w-4 h-4 mr-3 text-emerald-600" />
                  Check Queue Status
                </Button>
                <Button variant="outline" className="w-full justify-start border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300">
                  <Activity className="w-4 h-4 mr-3 text-emerald-600" />
                  Emergency Services
                </Button>
                <Button variant="outline" className="w-full justify-start border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300">
                  <MapPin className="w-4 h-4 mr-3 text-emerald-600" />
                  Find Nearby Clinics
                </Button>
              </CardContent>
            </Card>

            {/* Healthcare Tips */}
            <Card className="border-emerald-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-lg">
                <CardTitle className="text-lg text-emerald-800 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  Health Tip of the Day
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Regular health checkups can help detect problems early when they're easier to treat. 
                  Schedule your annual physical today!
                </p>
                <Button size="sm" className="mt-3 bg-emerald-500 hover:bg-emerald-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
