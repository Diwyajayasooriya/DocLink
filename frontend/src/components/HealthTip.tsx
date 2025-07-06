
import React from 'react';
import { Heart } from 'lucide-react';
import './HealthTip.css';

const HealthTip: React.FC = () => {
  return (
    <div className="health-tip-card">
      <div className="health-tip-header">
        <div className="health-tip-title">
          <Heart />
          Health Tip of the Day
        </div>
      </div>
      <div className="health-tip-content">
        <p className="health-tip-text">
          Regular health checkups can help detect problems early when they're easier to treat. 
          Schedule your annual physical today!
        </p>
        <button className="health-tip-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HealthTip;
