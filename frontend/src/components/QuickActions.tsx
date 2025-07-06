
import React from 'react';
import { Calendar, Clock, Activity, MapPin } from 'lucide-react';
import './QuickActions.css';

const QuickActions: React.FC = () => {
  return (
    <div className="quick-actions-card">
      <div className="quick-actions-header">
        <div className="quick-actions-title">Quick Actions</div>
      </div>
      <div className="quick-actions-content">
        <button className="quick-action-button">
          <Calendar />
          View My Appointments
        </button>
        <button className="quick-action-button">
          <Clock />
          Check Queue Status
        </button>
        <button className="quick-action-button">
          <Activity />
          Emergency Services
        </button>
        <button className="quick-action-button">
          <MapPin />
          Find Nearby Clinics
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
