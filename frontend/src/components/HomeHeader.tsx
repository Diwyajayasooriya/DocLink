import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HomeHeader.css';

interface HomeHeaderProps {
  onSignInClick: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onSignInClick }) => {
  return (
    <header className="home-header">
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="home-header-brand">
            <div className="home-header-brand-icon">
              <Heart />
            </div>
            <div className="home-header-brand-content">
              <h1>DocLink</h1>
              <p>Connect with Healthcare Excellence</p>
            </div>
          </div>
          <div className="home-header-actions">
            <button onClick={onSignInClick} className="sign-in-button">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;