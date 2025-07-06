
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Calendar, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import './DoctorDetails.css';

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
    navigate(`/book-appointment/${id}`);
  };

  return (
    <div className="doctor-details-container">
      {/* Header */}
      <header className="doctor-details-header">
        <div className="doctor-details-header-content">
          <div className="doctor-details-header-top">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to Dashboard</span>
            </Button>
            <div className="doctor-details-header-info">
              <div className="doctor-details-header-icon">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="doctor-details-header-text">
                <h1>Doctor Profile</h1>
                <p>View details and book appointment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="doctor-details-main">
        <div className="doctor-details-grid">
          {/* Doctor Information */}
          <div>
            <Card className="doctor-info-card">
              <CardContent className="doctor-info-content">
                <div className="doctor-profile">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-avatar"
                  />
                  <h2 className="doctor-name">{doctor.name}</h2>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  <div className="doctor-rating">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>{doctor.rating}</span>
                    <span className="experience">({doctor.experience} experience)</span>
                  </div>
                </div>

                <div className="doctor-details-info">
                  <div className="doctor-info-section">
                    <h3>Qualifications</h3>
                    <p>{doctor.qualifications}</p>
                  </div>
                  
                  <div className="doctor-info-section">
                    <h3>Consultation Fee</h3>
                    <p className="doctor-fee">LKR {doctor.consultationFee}</p>
                  </div>
                  
                  <div className="doctor-info-section">
                    <h3>Languages</h3>
                    <div className="doctor-languages">
                      {doctor.languages.map((language, index) => (
                        <span key={index} className="language-badge">{language}</span>
                      ))}
                    </div>
                  </div>

                  <div className="doctor-info-section doctor-about">
                    <h3>About</h3>
                    <p>{doctor.about}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Available Dispensaries */}
          <div>
            <Card className="dispensaries-card">
              <CardHeader className="dispensaries-header">
                <CardTitle className="dispensaries-title">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  Available Locations & Time Slots
                </CardTitle>
                <p className="dispensaries-subtitle">
                  {doctor.availableDispensaries.length} locations available • Select your preferred location to book
                </p>
              </CardHeader>
              <CardContent className="dispensaries-content">
                <div className="dispensaries-list">
                  {doctor.availableDispensaries.map((dispensary) => (
                    <div
                      key={dispensary.id}
                      className="dispensary-item"
                    >
                      <div className="dispensary-header">
                        <div className="dispensary-info">
                          <h3>{dispensary.name}</h3>
                          <div className="dispensary-address">
                            <MapPin className="w-4 h-4" />
                            <span>{dispensary.address}</span>
                          </div>
                          <div className="dispensary-phone">
                            <span>📞 {dispensary.phone}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={dispensary.availableSlots > 0 ? "default" : "secondary"}
                          className="availability-badge available"
                        >
                          {dispensary.availableSlots} slots available
                        </Badge>
                      </div>

                      <div className="dispensary-schedule">
                        <div className="schedule-item">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          <span>Time: {dispensary.time}</span>
                        </div>
                        <div className="schedule-item">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <span>Next available: {dispensary.nextAvailable}</span>
                        </div>
                      </div>

                      <Button 
                        className="dispensary-book-button"
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
