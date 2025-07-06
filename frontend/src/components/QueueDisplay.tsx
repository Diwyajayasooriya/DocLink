
import React from 'react';
import { Clock, Users, Activity } from 'lucide-react';
import './QueueDisplay.css';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  arrivalTime: string;
  isArrived: boolean;
  currentPatient: number;
  totalPatients: number;
  consultationFee: number;
  image: string;
}

interface QueueDisplayProps {
  doctors: Doctor[];
}

const QueueDisplay: React.FC<QueueDisplayProps> = ({ doctors }) => {
  const calculateProgress = (current: number, total: number) => {
    if (total === 0) return 0;
    return Math.round((current / total) * 100);
  };

  const calculateWaitTime = (current: number, total: number) => {
    if (!current || current === 0) return 0;
    const avgConsultationTime = 15; // minutes per patient
    const remainingPatients = current - 1;
    return remainingPatients * avgConsultationTime;
  };

  return (
    <div className="queue-display-card">
      <div className="queue-display-header">
        <div className="queue-display-title">
          <Users />
          Live Queue Status
        </div>
      </div>
      <div className="queue-display-content">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="queue-item">
            <div className="queue-item-header">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="queue-doctor-avatar"
              />
              <div className="queue-doctor-info">
                <div className="queue-doctor-header">
                  <h4 className="queue-doctor-name">{doctor.name}</h4>
                  <span className={`queue-badge ${doctor.isArrived ? 'active' : 'inactive'}`}>
                    {doctor.isArrived ? "Active" : "Not Arrived"}
                  </span>
                </div>
                <p className="queue-doctor-specialty">{doctor.specialty}</p>
                <p className="queue-doctor-hospital">{doctor.hospital}</p>
                
                {doctor.isArrived ? (
                  <div className="queue-status">
                    <div className="queue-status-row">
                      <span className="queue-status-label">Current Patient</span>
                      <span className="queue-status-value current">#{doctor.currentPatient}</span>
                    </div>
                    <div className="queue-status-row">
                      <span className="queue-status-label">Patients in Queue</span>
                      <span className="queue-status-value waiting">{doctor.totalPatients - doctor.currentPatient}</span>
                    </div>
                    <div className="queue-progress">
                      <div className="queue-progress-header">
                        <span className="queue-progress-label">Queue Progress</span>
                        <span className="queue-progress-percent">{calculateProgress(doctor.currentPatient, doctor.totalPatients)}%</span>
                      </div>
                      <div className="queue-progress-bar">
                        <div 
                          className="queue-progress-fill"
                          style={{ width: `${calculateProgress(doctor.currentPatient, doctor.totalPatients)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="queue-wait-time">
                      <Clock />
                      <span>Est. wait time: {calculateWaitTime(doctor.currentPatient, doctor.totalPatients)} mins</span>
                    </div>
                  </div>
                ) : (
                  <div className="queue-not-arrived">
                    <p>Expected arrival: {doctor.arrivalTime}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {doctors.length === 0 && (
          <div className="queue-empty">
            <Activity />
            <p>No active queues at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueueDisplay;
