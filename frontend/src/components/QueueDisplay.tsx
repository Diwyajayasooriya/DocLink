import React from 'react';
import { Clock, Users, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
    <Card className="queue-card">
      <CardHeader className="queue-header">
        <CardTitle className="queue-title">
          <Users className="queue-title-icon" />
          Live Queue Status
        </CardTitle>
      </CardHeader>
      <CardContent className="queue-content">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="queue-doctor-card">
            <div className="queue-doctor-container">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="queue-doctor-avatar"
              />
              <div className="queue-doctor-details">
                <div className="queue-doctor-header">
                  <h4 className="queue-doctor-name">{doctor.name}</h4>
                  <Badge 
                    variant={doctor.isArrived ? "default" : "secondary"}
                    className={`queue-doctor-status ${doctor.isArrived ? 'active' : 'inactive'}`}
                  >
                    {doctor.isArrived ? "Active" : "Not Arrived"}
                  </Badge>
                </div>
                <p className="queue-doctor-specialty">{doctor.specialty}</p>
                <p className="queue-doctor-hospital">{doctor.hospital}</p>
                
                {doctor.isArrived ? (
                  <div className="queue-stats">
                    <div className="queue-stat-row">
                      <span className="queue-stat-label">Current Patient</span>
                      <span className="queue-stat-value current">#{doctor.currentPatient}</span>
                    </div>
                    <div className="queue-stat-row">
                      <span className="queue-stat-label">Patients in Queue</span>
                      <span className="queue-stat-value waiting">{doctor.totalPatients - doctor.currentPatient}</span>
                    </div>
                    <div className="queue-progress-container">
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
                      <Clock className="queue-wait-icon" />
                      <span>Est. wait time: {calculateWaitTime(doctor.currentPatient, doctor.totalPatients)} mins</span>
                    </div>
                  </div>
                ) : (
                  <div className="queue-not-arrived">
                    <p className="queue-arrival-time">Expected arrival: {doctor.arrivalTime}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {doctors.length === 0 && (
          <div className="queue-empty-state">
            <Activity className="queue-empty-icon" />
            <p className="queue-empty-message">No active queues at the moment</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QueueDisplay;