import React from 'react';
import './details.css'; // <-- This line is essential
import { Stethoscope, MapPin, Activity, Users } from 'lucide-react';

const stats = [
  {
    title: "Available Doctors",
    value: "6",
    subtitle: "Online Now",
    color: "bg-green", // <-- Use class defined in your CSS
    icon: <Stethoscope />
  },
  {
    title: "Total Dispensaries",
    value: "19",
    subtitle: "Locations Available",
    color: "bg-blue",
    icon: <MapPin />
  },
  {
    title: "Active Queues",
    value: "2",
    subtitle: "Doctors Available",
    color: "bg-teal",
    icon: <Activity />
  },
  {
    title: "Total Patients",
    value: "945",
    subtitle: "Served This Month",
    color: "bg-purple",
    icon: <Users />
  }
];

const StatsOverview = () => {
  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card ${stat.color}`}>
          <div>
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-subtitle">{stat.subtitle}</p>
          </div>
          <div>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
