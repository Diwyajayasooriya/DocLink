import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Calendar, Users, CheckCircle, AlertCircle, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import './BookAppointment.css';

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDispensary, setSelectedDispensary] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [bookingStep, setBookingStep] = useState('selectSlot'); // selectSlot, selectChannel, summary

  // Mock doctor data
  const doctor = {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    consultationFee: 2500,
    image: "/placeholder.svg",
    qualifications: "MBBS, MD (Cardiology)",
    availableDispensaries: [
      { 
        id: 1,
        name: "City General Hospital", 
        address: "Downtown Colombo",
        unit: "Cardiology Unit",
        status: "Doctor Present",
        arrivalTime: "09:00 AM",
        leavingTime: "05:00 PM",
        currentPatient: 8,
        totalPatients: 15,
        estimatedWait: "45 mins",
        timeSlots: [
          { time: "09:00 AM", available: false, type: "completed" },
          { time: "11:00 AM", available: false, type: "completed" },
          { time: "02:00 PM", available: true, type: "available" },
          { time: "04:00 PM", available: true, type: "available" }
        ]
      },
      { 
        id: 2,
        name: "Metro Medical Center", 
        address: "Nugegoda",
        unit: "Heart Center",
        status: "Doctor Arriving",
        arrivalTime: "10:30 AM",
        leavingTime: "04:30 PM",
        currentPatient: 0,
        totalPatients: 12,
        estimatedWait: "30 mins",
        timeSlots: [
          { time: "10:30 AM", available: true, type: "available" },
          { time: "01:00 PM", available: true, type: "available", selected: true },
          { time: "03:30 PM", available: true, type: "available" }
        ]
      },
      { 
        id: 3,
        name: "Community Health Center", 
        address: "Maharagama",
        unit: "General Medicine",
        status: "Doctor Leaving",
        arrivalTime: "08:30 AM",
        leavingTime: "01:00 PM",
        currentPatient: 20,
        totalPatients: 20,
        estimatedWait: "Closed for today",
        timeSlots: []
      }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectTimeSlot = (dispensary, timeSlot) => {
    setSelectedDispensary(dispensary);
    setSelectedTimeSlot(timeSlot);
    setBookingStep('selectChannel');
  };

  const handleChannelSelect = (channelNumber) => {
    setSelectedChannel(channelNumber);
    setBookingStep('summary');
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { 
      state: { 
        doctor, 
        dispensary: selectedDispensary, 
        timeSlot: selectedTimeSlot, 
        channel: selectedChannel 
      } 
    });
  };

  const renderTimeSlotView = () => (
    <div className="book-appointment-main">
      {/* Doctor Info Header */}
      <Card className="doctor-info-header">
        <CardContent className="doctor-info-header-content">
          <div className="doctor-header-info">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-header-avatar"
            />
            <div className="doctor-header-details">
              <h2>{doctor.name}</h2>
              <p className="doctor-header-specialty">{doctor.specialty}</p>
              <p className="doctor-header-qualifications">{doctor.qualifications}</p>
              <p className="doctor-header-fee">
                Consultation Fee: LKR {doctor.consultationFee}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Dispensaries */}
      <Card className="dispensaries-selection-card">
        <CardHeader className="dispensaries-selection-header">
          <CardTitle className="dispensaries-selection-title">
            <MapPin className="w-5 h-5" />
            Available at Dispensaries/Hospitals
          </CardTitle>
        </CardHeader>
        <CardContent className="dispensaries-selection-content">
          <div className="dispensary-list">
            {doctor.availableDispensaries.map((dispensary) => (
              <div key={dispensary.id} className="dispensary-selection-item">
                <div className="dispensary-selection-header">
                  <div className="dispensary-selection-info">
                    <h3>{dispensary.name}</h3>
                    <p>{dispensary.address}</p>
                    <p style={{ color: '#3b82f6', fontSize: '14px' }}>{dispensary.unit}</p>
                  </div>
                  <Badge 
                    variant={dispensary.status === "Doctor Present" ? "default" : dispensary.status === "Doctor Arriving" ? "secondary" : "destructive"}
                    className={`dispensary-status-badge ${dispensary.status === "Doctor Present" ? "present" : dispensary.status === "Doctor Arriving" ? "arriving" : "leaving"}`}
                  >
                    {dispensary.status}
                  </Badge>
                </div>

                <div className="dispensary-schedule-grid">
                  <div className="schedule-info-item">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Arrival: {dispensary.arrivalTime}</span>
                  </div>
                  <div className="schedule-info-item">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Leaving: {dispensary.leavingTime}</span>
                  </div>
                </div>

                {dispensary.status !== "Doctor Leaving" && (
                  <div className="queue-status">
                    <div className="queue-status-header">
                      <span className="queue-status-label">Current Queue Status</span>
                      <span className="queue-status-wait">{dispensary.estimatedWait}</span>
                    </div>
                    <div className="queue-progress-info">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>Patient #{dispensary.currentPatient} of {dispensary.totalPatients}</span>
                      <div className="queue-progress-bar">
                        <div 
                          className="queue-progress-fill"
                          style={{ width: `${(dispensary.currentPatient / dispensary.totalPatients) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {dispensary.timeSlots.length > 0 ? (
                  <div>
                    <div className="time-slots-section">
                      <h4>Available Time Slots</h4>
                      <div className="time-slots-grid">
                        {dispensary.timeSlots.map((slot, index) => (
                          <button
                            key={index}
                            className="time-slot-button"
                            disabled={!slot.available}
                            onClick={() => slot.available && handleSelectTimeSlot(dispensary, slot)}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="not-available">
                    <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p>Not available today</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderChannelSelection = () => (
    <div className="book-appointment-main">
      <Card className="channel-selection-card">
        <CardHeader className="channel-selection-header">
          <CardTitle className="channel-selection-title">Select Your Channel Number</CardTitle>
          <div className="channel-selection-info">
            <p>Time Slot: {selectedTimeSlot?.time}</p>
            <p>Hospital: {selectedDispensary?.name}</p>
            <p className="channel-available">11 channels available</p>
          </div>
        </CardHeader>
        <CardContent className="channel-selection-content">
          {/* Legend */}
          <div className="channel-legend">
            <div className="legend-item">
              <div className="legend-color current"></div>
              <span className="legend-text">Currently Seeing</span>
            </div>
            <div className="legend-item">
              <div className="legend-color completed"></div>
              <span className="legend-text">Completed</span>
            </div>
            <div className="legend-item">
              <div className="legend-color booked"></div>
              <span className="legend-text">Already Booked</span>
            </div>
            <div className="legend-item">
              <div className="legend-color available"></div>
              <span className="legend-text">Available</span>
            </div>
          </div>

          {/* Channel Grid */}
          <div className="channel-grid">
            {Array.from({ length: 20 }, (_, i) => {
              const channelNum = i + 1;
              let status = 'available';
              let className = 'channel-button available';
              
              if (channelNum <= 4) {
                status = 'completed';
                className = 'channel-button completed';
              } else if (channelNum === 5) {
                status = 'current';
                className = 'channel-button current';
              } else if ([7, 12, 15, 18].includes(channelNum)) {
                status = 'booked';
                className = 'channel-button booked';
              }

              if (selectedChannel === channelNum) {
                className += ' selected';
              }

              return (
                <button
                  key={channelNum}
                  className={className}
                  disabled={status === 'completed' || status === 'booked'}
                  onClick={() => status === 'available' && handleChannelSelect(channelNum)}
                >
                  {status === 'current' ? (
                    <div>
                      <div style={{ fontSize: '10px' }}>Now</div>
                      <div>{channelNum}</div>
                    </div>
                  ) : (
                    channelNum
                  )}
                </button>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="channel-stats">
            <div className="stat-card current">
              <div className="stat-number current">#5</div>
              <div className="stat-label current">Currently Seeing</div>
            </div>
            <div className="stat-card available">
              <div className="stat-number available">11</div>
              <div className="stat-label available">Available Slots</div>
            </div>
            <div className="stat-card wait">
              <div className="stat-number wait">60min</div>
              <div className="stat-label wait">Estimated Wait</div>
            </div>
          </div>

          {selectedChannel && (
            <div className="selected-channel-info">
              <div className="selected-channel-content">
                <div>
                  <div className="selected-channel-details">Selected Channel: #{selectedChannel}</div>
                  <div className="selected-channel-queue">You will be approximately 12 patients ahead in the queue</div>
                </div>
                <div className="selected-badge">Selected</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderBookingSummary = () => (
    <div className="booking-summary-grid">
      <div>
        <Card className="booking-summary-card">
          <CardHeader className="booking-summary-header">
            <CardTitle className="booking-summary-title">Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="booking-summary-content">
            <div className="booking-summary-info">
              <div className="booking-info-item">
                <label>Doctor</label>
                <p>{doctor.name}</p>
              </div>
              <div className="booking-info-item">
                <label>Dispensary</label>
                <p>{selectedDispensary?.name}</p>
                <p className="address">{selectedDispensary?.address}</p>
              </div>
              <div className="booking-info-item">
                <label>Time Slot</label>
                <p>{selectedTimeSlot?.time}</p>
              </div>
              <div className="booking-info-item">
                <label>Channel Number</label>
                <p className="channel">#{selectedChannel}</p>
              </div>
              <div className="booking-info-item">
                <label>Date</label>
                <p>Today, 01/07/2025</p>
              </div>
              <div className="booking-total-section">
                <div className="booking-total">
                  <span className="booking-total-label">Total Amount:</span>
                  <span className="booking-total-amount">LKR {doctor.consultationFee}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="important-info-card">
          <CardHeader className="important-info-header">
            <CardTitle className="important-info-title">Important Information</CardTitle>
          </CardHeader>
          <CardContent className="important-info-content">
            <div className="important-info-list">
              <div className="important-info-item">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                <span className="important-info-text">Channel number determines your queue position</span>
              </div>
              <div className="important-info-item">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                <span className="important-info-text">Please arrive 15 minutes before your time slot</span>
              </div>
              <div className="important-info-item">
                <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                <span className="important-info-text">Bring valid ID and previous medical records</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Button 
          onClick={handleProceedToPayment}
          className="proceed-payment-button"
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Proceed to Payment
        </Button>
      </div>
    </div>
  );

  return (
    <div className="book-appointment-container">
      {/* Header */}
      <header className="book-appointment-header">
        <div className="book-appointment-header-content">
          <div className="book-appointment-header-top">
            <div className="book-appointment-header-left">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Back to Dashboard</span>
              </Button>
              <div className="book-appointment-title">
                <h1>Book Appointment</h1>
                <p>
                  {bookingStep === 'selectSlot' && 'Select dispensary, time slot & channel number'}
                  {bookingStep === 'selectChannel' && 'Select your channel number'}
                  {bookingStep === 'summary' && 'Review your booking details'}
                </p>
              </div>
            </div>
            <div className="book-appointment-time">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </header>

      <div>
        {bookingStep === 'selectSlot' && renderTimeSlotView()}
        {bookingStep === 'selectChannel' && renderChannelSelection()}
        {bookingStep === 'summary' && renderBookingSummary()}
      </div>
    </div>
  );
};

export default BookAppointment;
