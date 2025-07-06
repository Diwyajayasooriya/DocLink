
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Lock, Calendar, MapPin, Clock } from 'lucide-react';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const { doctor, dispensary, timeSlot, channel } = location.state || {};

  if (!doctor || !dispensary || !timeSlot || !channel) {
    navigate('/dashboard');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = () => {
    navigate('/booking-confirmed', { 
      state: { 
        doctor, 
        dispensary, 
        timeSlot, 
        channel,
        paymentData: {
          paymentId: 'pay_1234567890',
          method: paymentMethod,
          cardLast4: paymentData.cardNumber.slice(-4) || '4532'
        }
      } 
    });
  };

  return (
    <div className="payment-container">
      <header className="payment-header">
        <div className="payment-header-content">
          <div className="payment-header-left">
            <button 
              className="payment-back-button"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <div>
              <h1 className="payment-title">Payment Details</h1>
              <p className="payment-subtitle">Complete your appointment booking</p>
            </div>
          </div>
          <div className="payment-time">
            <Clock className="w-4 h-4 inline mr-1" />
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </header>

      <div className="payment-main">
        <div className="payment-grid">
          <div className="payment-form-section">
            <div className="payment-card">
              <div className="payment-card-header">
                <h2 className="payment-card-title">Payment Method</h2>
              </div>
              <div className="payment-card-content">
                <div className="payment-method-buttons">
                  <button
                    className={`payment-method-button ${paymentMethod === 'card' ? 'active' : 'inactive'}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <CreditCard className="w-4 h-4" />
                    Card
                  </button>
                  <button
                    className={`payment-method-button ${paymentMethod === 'mobile' ? 'active' : 'inactive'}`}
                    onClick={() => setPaymentMethod('mobile')}
                  >
                    <Smartphone className="w-4 h-4" />
                    Mobile Pay
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="payment-form">
                    <div className="payment-form-group">
                      <label htmlFor="cardNumber" className="payment-form-label">Card Number</label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        className="payment-form-input"
                      />
                    </div>
                    
                    <div className="payment-form-row">
                      <div className="payment-form-group">
                        <label htmlFor="expiryDate" className="payment-form-label">Expiry Date</label>
                        <input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={paymentData.expiryDate}
                          onChange={handleInputChange}
                          className="payment-form-input"
                        />
                      </div>
                      <div className="payment-form-group">
                        <label htmlFor="cvv" className="payment-form-label">CVV</label>
                        <input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={paymentData.cvv}
                          onChange={handleInputChange}
                          className="payment-form-input"
                        />
                      </div>
                    </div>

                    <div className="payment-form-group">
                      <label htmlFor="cardholderName" className="payment-form-label">Cardholder Name</label>
                      <input
                        id="cardholderName"
                        name="cardholderName"
                        placeholder="John Doe"
                        value={paymentData.cardholderName}
                        onChange={handleInputChange}
                        className="payment-form-input"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'mobile' && (
                  <div className="mobile-pay-placeholder">
                    <Smartphone className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <p>Mobile payment options will be available soon</p>
                  </div>
                )}

                <div className="payment-security-notice">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                <button 
                  onClick={handlePayment}
                  className="payment-button"
                >
                  Pay LKR {doctor.consultationFee}
                </button>
              </div>
            </div>
          </div>

          <div className="payment-summary-section">
            <div className="payment-card">
              <div className="payment-card-header">
                <h2 className="payment-card-title">Booking Summary</h2>
              </div>
              <div className="payment-card-content">
                <div className="booking-summary">
                  <div className="booking-info">
                    <div className="booking-info-item">
                      <h3>Doctor</h3>
                      <p>{doctor.name}</p>
                      <p className="specialty">{doctor.specialty}</p>
                    </div>
                    
                    <div className="booking-info-item">
                      <h3>Dispensary</h3>
                      <p>{dispensary.name}</p>
                      <p className="address">{dispensary.address}</p>
                    </div>

                    <div className="booking-info-item">
                      <h3>Time Slot</h3>
                      <p>{timeSlot.time}</p>
                    </div>

                    <div className="booking-info-item">
                      <h3>Channel Number</h3>
                      <p className="channel">#{channel}</p>
                    </div>

                    <div className="booking-info-item">
                      <h3>Date</h3>
                      <p>Today, 01/07/2025</p>
                    </div>
                  </div>

                  <div className="booking-fee">
                    <div className="booking-fee-row">
                      <span>Consultation Fee:</span>
                      <span>LKR {doctor.consultationFee}</span>
                    </div>
                  </div>

                  <div className="booking-details">
                    <div className="booking-detail-item">
                      <MapPin className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <div className="booking-detail-content">
                        <p>{dispensary.name}</p>
                        <p>{dispensary.address}</p>
                      </div>
                    </div>
                    
                    <div className="booking-detail-item">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <div className="booking-detail-content">
                        <p>Time: {timeSlot.time}</p>
                        <p>Channel #{channel}</p>
                      </div>
                    </div>
                    
                    <div className="booking-detail-item">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <div className="booking-detail-content">
                        <p>Date: Today, 01/07/2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="booking-total">
                    <span>Total Amount:</span>
                    <span>LKR {doctor.consultationFee}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
