
import React from 'react';
import { Clock, Heart, Activity } from 'lucide-react';

interface HeaderProps {
  currentTime: Date;
}

const Header: React.FC<HeaderProps> = ({ currentTime }) => {
  return (
    <header className="bg-white shadow-lg border-b border-emerald-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                DocLink
              </h1>
              <p className="text-emerald-600 font-medium">Connect with Healthcare Excellence</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">{currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">Live Updates</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;