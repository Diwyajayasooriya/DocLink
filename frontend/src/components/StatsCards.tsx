
import React from 'react';
import { MapPin, Users, Stethoscope, Activity } from 'lucide-react';
import './StatsCards.css';

interface StatsCardsProps {
  doctorsCount: number;
  totalDispensaries: number;
  activeQueues: number;
  totalPatients: number;
}

const StatsCards: React.FC<StatsCardsProps> = ({
  doctorsCount,
  totalDispensaries,
  activeQueues,
  totalPatients
}) => {
  return (
    <div className="stats-cards">
      <div className="stats-card emerald">
        <div className="stats-card-content">
          <div className="stats-card-inner">
            <div className="stats-card-info">
              <h3>Available Doctors</h3>
              <div className="number">{doctorsCount}</div>
              <div className="subtitle">Online Now</div>
            </div>
            <Stethoscope className="stats-card-icon" />
          </div>
        </div>
      </div>
      
      <div className="stats-card blue">
        <div className="stats-card-content">
          <div className="stats-card-inner">
            <div className="stats-card-info">
              <h3>Total Dispensaries</h3>
              <div className="number">{totalDispensaries}</div>
              <div className="subtitle">Locations Available</div>
            </div>
            <MapPin className="stats-card-icon" />
          </div>
        </div>
      </div>
      
      <div className="stats-card teal">
        <div className="stats-card-content">
          <div className="stats-card-inner">
            <div className="stats-card-info">
              <h3>Active Queues</h3>
              <div className="number">{activeQueues}</div>
              <div className="subtitle">Doctors Available</div>
            </div>
            <Activity className="stats-card-icon" />
          </div>
        </div>
      </div>
      
      <div className="stats-card purple">
        <div className="stats-card-content">
          <div className="stats-card-inner">
            <div className="stats-card-info">
              <h3>Total Patients</h3>
              <div className="number">{totalPatients}</div>
              <div className="subtitle">Served This Month</div>
            </div>
            <Users className="stats-card-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
