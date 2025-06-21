import React from 'react';
import { Heart, Clock, Activity } from 'lucide-react';

import './Header.css';

const Header = ({ currentTime }) => (
  <header className="doc-header">
    <div className="doc-header__container">
      <div className="doc-header__branding">
        <div className="doc-header__icon">
          <Heart className="icon-white" />
        </div>
        <div>
          <h1 className="doc-header__title">DocLink</h1>
          <p className="doc-header__subtitle">Connect with Healthcare Excellence</p>
        </div>
      </div>
      <div className="doc-header__status">
        <div className="doc-header__status-item">
          <Clock className="icon-colored" />
          <span>{currentTime}</span>
        </div>
        <div className="doc-header__status-item">
          <Activity className="icon-colored" />
          <span>Live Updates</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
