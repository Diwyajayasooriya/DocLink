
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Calendar, MapPin, User, CreditCard, Smartphone, Download, Home, Activity } from 'lucide-react';
import './BookingConfirmed.css';

const BookingConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  const { doctor, dispensary, timeSlot, channel, paymentData } = location.state || {};

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!doctor || !dispensary || !timeSlot || !channel || !paymentData) {
    navigate('/dashboard');
    return null;
  }

  const queuePosition = channel;
  const totalInQueue = 12;
  const estimatedWaitTime = queuePosition * 15;
  const progressPercentage = Math.max(0, ((totalInQueue - queuePosition + 1) / totalInQueue) * 100);

  return (
    <div className="booking-confirmed-container">
      <header className="booking-confirmed-header">
        <div className="booking-confirmed-header-content">
          <div className="booking-confirmed-header-left">
            <button 
              className="booking-confirmed-back-button"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <div>
              <h1 className="booking-confirmed-title">Booking Confirmed</h1>
              <p className="booking-confirmed-subtitle">Your appointment has been successfully booked</p>
            </div>
          </div>
          <div className="booking-confirmed-time">
            <Clock className="w-4 h-4 inline mr-1" />
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </header>

      <div className="booking-confirmed-main">
        <div className="success-message">
          <CheckCircle className="success-icon" />
          <h2 className="success-title">Payment Successful!</h2>
          <p className="success-subtitle">Your appointment has been confirmed</p>
        </div>

        <div className="booking-confirmed-grid">
          <div className="booking-confirmed-card">
            <div className="booking-confirmed-card-header">
              <h3 className="booking-confirmed-card-title">Appointment Details</h3>
            </div>
            <div className="booking-confirmed-card-content">
              <div className="appointment-details">
                <div className="appointment-section">
                  <div className="appointment-info-item">
                    <span>Doctor:</span>
                    <span>{doctor.name}</span>
                  </div>
                  <div className="appointment-info-item">
                    <span>Specialty:</span>
                    <span className="specialty">{doctor.specialty}</span>
                  </div>
                  <div className="appointment-info-item">
                    <span>Date:</span>
                    <span>Today, 01/07/2025</span>
                  </div>
                  <div className="appointment-info-item">
                    <span>Time Slot:</span>
                    <span>{timeSlot.time}</span>
                  </div>
                  <div className="appointment-info-item">
                    <span>Location:</span>
                    <span>{dispensary.name}</span>
                  </div>
                  <div className="appointment-info-item">
                    <span>Channel Number:</span>
                    <span className="channel">#{channel}</span>
                  </div>
                  <div className="appointment-info-item">
                    <span>Payment ID:</span>
                    <span className="payment-id">{paymentData.paymentId}</span>
                  </div>
                </div>

                <div className="queue-status">
                  <div className="queue-header">
                    <Activity className="w-5 h-5 text-emerald-600" />
                    <h4 className="queue-title">Live Queue Status</h4>
                  </div>
                  
                  <div className="queue-info">
                    <div>
                      <span>{queuePosition}</span>
                      <span>Your Position</span>
                    </div>
                    <div>
                      <span>{totalInQueue}</span>
                      <span>Total in Queue</span>
                    </div>
                    <div>
                      <span>{estimatedWaitTime}</span>
                      <span>Est. Wait (min)</span>
                    </div>
                  </div>

                  <div className="queue-progress">
                    <div 
                      className="queue-progress-bar" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className="queue-status-text">
                    {queuePosition <= 3 ? 'Your turn is coming soon!' : 'Please wait for your turn'}
                  </p>
                </div>

                <div className="action-buttons">
                  <Link to="/dashboard" className="action-button primary">
                    <Home className="w-4 h-4" />
                    Back to Dashboard
                  </Link>
                  <button className="action-button secondary">
                    <Download className="w-4 h-4" />
                    Download Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-confirmed-card">
            <div className="booking-confirmed-card-header">
              <h3 className="booking-confirmed-card-title">Payment Summary</h3>
            </div>
            <div className="booking-confirmed-card-content">
              <div className="payment-summary">
                <div className="payment-method-info">
                  {paymentData.method === 'card' ? (
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Smartphone className="w-6 h-6 text-green-600" />
                  )}
                  <div>
                    <h4>
                      {paymentData.method === 'card' ? 'Credit Card' : 'Mobile Payment'}
                    </h4>
                    <p>
                      {paymentData.method === 'card' 
                        ? `****${paymentData.cardLast4}` 
                        : 'Mobile wallet payment'
                      }
                    </p>
                  </div>
                </div>

                <div className="payment-receipt">
                  <div className="payment-receipt-item">
                    <span>Consultation Fee:</span>
                    <span>LKR {doctor.consultationFee}</span>
                  </div>
                  <div className="payment-receipt-item">
                    <span>Service Fee:</span>
                    <span>LKR 0</span>
                  </div>
                  <div className="payment-receipt-item">
                    <span>Payment Method:</span>
                    <span>{paymentData.method === 'card' ? 'Credit Card' : 'Mobile Pay'}</span>
                  </div>
                  <div className="payment-receipt-item">
                    <span>Transaction ID:</span>
                    <span>{paymentData.paymentId}</span>
                  </div>
                </div>

                <div className="payment-total">
                  <span>Total Paid:</span>
                  <span>LKR {doctor.consultationFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
