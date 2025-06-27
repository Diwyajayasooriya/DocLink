import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Calendar, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock doctor data (this would typically come from an API)
  const doctor = {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    consultationFee: 2500,
    image: "/placeholder.svg",
    qualifications: "MBBS, MD (Cardiology), FRCP",
    rating: 4.8,
    experience: "15 years",
    availableDispensaries: [
      { 
        id: 1,
        name: "Central Hospital", 
        time: "09:00 AM - 12:00 PM", 
        address: "123 Main Street, Colombo 07",
        phone: "+94 11 123 4567",
        nextAvailable: "09:00 AM",
        availableSlots: 8
      },
      { 
        id: 2,
        name: "City Medical Center", 
        time: "02:00 PM - 05:00 PM", 
        address: "456 Galle Road, Colombo 03",
        phone: "+94 11 234 5678",
        nextAvailable: "02:30 PM",
        availableSlots: 5
      },
      { 
        id: 3,
        name: "Heart Care Clinic", 
        time: "06:00 PM - 08:00 PM", 
        address: "789 High Level Road, Nugegoda",
        phone: "+94 11 345 6789",
        nextAvailable: "06:00 PM",
        availableSlots: 12
      }
    ],
    languages: ["English", "Sinhala"],
    about: "Dr. Sarah Johnson is a highly experienced cardiologist with over 15 years of practice. She specializes in interventional cardiology and has performed over 1000 successful cardiac procedures."
  };

  const handleBookAppointment = (dispensaryId: number) => {
    // This would typically navigate to a booking form or handle the booking logic
    console.log(`Booking appointment at dispensary ${dispensaryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-emerald-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Doctors</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-emerald-800">Doctor Profile</h1>
                <p className="text-emerald-600">View details and book appointment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Information */}
          <div className="lg:col-span-1">
            <Card className="border-emerald-100 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full object-cover bg-emerald-100 border-4 border-emerald-200 mx-auto mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>
                  <p className="text-emerald-600 font-medium text-lg">{doctor.specialty}</p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-700">{doctor.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({doctor.experience} experience)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Qualifications</h3>
                    <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Consultation Fee</h3>
                    <p className="text-xl font-bold text-emerald-600">LKR {doctor.consultationFee}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, index) => (
                        <Badge key={index} variant="secondary">{language}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{doctor.about}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Available Dispensaries */}
          <div className="lg:col-span-2">
            <Card className="border-emerald-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  Available Locations & Time Slots
                </CardTitle>
                <p className="text-sm text-emerald-600">
                  {doctor.availableDispensaries.length} locations available • Select your preferred location to book
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {doctor.availableDispensaries.map((dispensary) => (
                    <div
                      key={dispensary.id}
                      className="p-6 border-2 border-gray-100 rounded-xl bg-white hover:border-emerald-300 transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{dispensary.name}</h3>
                          <div className="flex items-center space-x-2 text-gray-600 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{dispensary.address}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 mt-1">
                            <span className="text-sm">📞 {dispensary.phone}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={dispensary.availableSlots > 0 ? "default" : "secondary"}
                          className={dispensary.availableSlots > 0 ? "bg-emerald-500" : ""}
                        >
                          {dispensary.availableSlots} slots available
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium">Time: {dispensary.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium">Next available: {dispensary.nextAvailable}</span>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md"
                        onClick={() => handleBookAppointment(dispensary.id)}
                        disabled={dispensary.availableSlots === 0}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {dispensary.availableSlots > 0 ? 'Book Appointment' : 'Fully Booked'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
