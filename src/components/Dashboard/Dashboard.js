import React from 'react';
import './Dashboard.css';
import UpcomingMeetings from '../UpcomingMeetings/UpcomingMeetings';
import Announcements from '../Announcements/Announcements';
import TeamActivity from '../TeamActivity/TeamActivity';
import WeatherWidget from '../WeatherWidget/WeatherWidget';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="dashboard-column main-column">
          <UpcomingMeetings />
          <Announcements />
        </div>
        <div className="dashboard-column side-column">
          <WeatherWidget />
          <TeamActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
