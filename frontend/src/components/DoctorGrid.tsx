import React from 'react';
import { Calendar, Star, Stethoscope } from 'lucide-react';
import './DoctorGrid.css';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  consultationFee: number;
  image: string;
  qualifications: string;
  rating: number;
  experience: string;
  availableDispensaries: Array<{
    name: string;
    time: string;
    address: string;
  }>;
  nextAvailable: string;
  totalPatients: number;
  languages: string[];
}

interface DoctorGridProps {
  doctors: Doctor[];
  onSelectDoctor: (doctorId: number) => void;
}

const DoctorGrid: React.FC<DoctorGridProps> = ({ doctors, onSelectDoctor }) => {
  return (
    <div className="doctor-grid-card">
      <div className="doctor-grid-header">
        <div className="doctor-grid-title">
          <Stethoscope className="doctor-icon" />
          Choose Your Doctor
        </div>
        <p className="doctor-grid-subtitle">
          {doctors.length} doctors available • Select to view dispensaries and book appointment
        </p>
      </div>
      <div className="doctor-grid-content">
        <div className="doctor-grid-container">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="doctor-card"
              onClick={() => onSelectDoctor(doctor.id)}
            >
              <div className="doctor-card-content">
                <div className="doctor-card-header">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-avatar"
                  />
                  <div className="doctor-info">
                    <div className="doctor-name-rating">
                      <div>
                        <h3 className="doctor-name">{doctor.name}</h3>
                        <p className="doctor-specialty">{doctor.specialty}</p>
                      </div>
                      <div className="doctor-rating">
                        <Star className="star-icon" />
                        <span>{doctor.rating}</span>
                      </div>
                    </div>
                    <p className="doctor-qualifications">{doctor.qualifications}</p>
                    <p className="doctor-experience">{doctor.experience} experience</p>
                    
                    <div className="doctor-details">
                      <div className="doctor-detail-row">
                        <span className="doctor-detail-label">Consultation Fee:</span>
                        <span className="doctor-detail-value fee">LKR {doctor.consultationFee}</span>
                      </div>
                      <div className="doctor-detail-row">
                        <span className="doctor-detail-label">Available at:</span>
                        <span className="doctor-detail-value">{doctor.availableDispensaries.length} locations</span>
                      </div>
                      <div className="doctor-detail-row">
                        <span className="doctor-detail-label">Next available:</span>
                        <span className="doctor-detail-value available">{doctor.nextAvailable}</span>
                      </div>
                      <div className="doctor-detail-row">
                        <span className="doctor-detail-label">Languages:</span>
                        <span className="doctor-detail-value languages">{doctor.languages.join(', ')}</span>
                      </div>
                    </div>

                    <button className="doctor-book-button">
                      <Calendar className="calendar-icon" />
                      View Dispensaries & Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {doctors.length === 0 && (
          <div className="doctor-grid-empty">
            <Stethoscope className="empty-icon" />
            <h3>No doctors found matching your search.</h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorGrid;