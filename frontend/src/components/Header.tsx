import React from 'react';
import { Clock, Heart, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  currentTime: Date;
}

const Header: React.FC<HeaderProps> = ({ currentTime }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {  
      // Navigate to home page
      navigate('/');

    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-brand">
            <div className="header-brand-icon">
              <Heart />
            </div>
            <div className="header-brand-content">
              <h1>DocLink</h1>
              <p>Connect with Healthcare Excellence</p>
            </div>
          </div>
          <div className="header-info">
            <div className="header-info-item">
              <Clock />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="header-info-item">
              <Activity />
              <span>Live Updates</span>
            </div>
            <div className='header-info-item'>
              <button onClick={handleLogout}>Log out</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;