import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpcomingMeetings.css';

const UpcomingMeetings = () => {
  const [activeTab, setActiveTab] = useState('today');
  const navigate = useNavigate();
  
  // Sample meeting data
  const meetings = {
    today: [
      {
        id: 1,
        title: 'Product Review',
        time: '2:00 PM - 3:00 PM',
        location: 'Conference Room A',
        participants: [
          { id: 1, name: 'Alex Johnson', avatar: 'AJ' },
          { id: 2, name: 'Sarah Williams', avatar: 'SW' },
          { id: 3, name: 'Michael Brown', avatar: 'MB' },
          { id: 4, name: 'Emily Davis', avatar: 'ED' },
        ],
        status: 'upcoming'
      },
      {
        id: 2,
        title: 'Team Standup',
        time: '10:00 AM - 10:30 AM',
        location: 'Zoom Meeting',
        participants: [
          { id: 1, name: 'Alex Johnson', avatar: 'AJ' },
          { id: 5, name: 'David Wilson', avatar: 'DW' },
          { id: 6, name: 'Jessica Lee', avatar: 'JL' },
        ],
        status: 'completed'
      },
      {
        id: 3,
        title: 'Client Presentation',
        time: '4:00 PM - 5:00 PM',
        location: 'Conference Room B',
        participants: [
          { id: 1, name: 'Alex Johnson', avatar: 'AJ' },
          { id: 7, name: 'Robert Miller', avatar: 'RM' },
          { id: 8, name: 'Jennifer Clark', avatar: 'JC' },
        ],
        status: 'upcoming'
      }
    ],
    tomorrow: [
      {
        id: 4,
        title: 'Project Kickoff',
        time: '9:00 AM - 10:30 AM',
        location: 'Conference Room A',
        participants: [
          { id: 1, name: 'Alex Johnson', avatar: 'AJ' },
          { id: 2, name: 'Sarah Williams', avatar: 'SW' },
          { id: 3, name: 'Michael Brown', avatar: 'MB' },
        ],
        status: 'upcoming'
      },
      {
        id: 5,
        title: 'One-on-One with Manager',
        time: '2:00 PM - 2:30 PM',
        location: 'Manager\'s Office',
        participants: [
          { id: 1, name: 'Alex Johnson', avatar: 'AJ' },
          { id: 9, name: 'Thomas Anderson', avatar: 'TA' },
        ],
        status: 'upcoming'
      }
    ],
    week: [
      {
        id: 6,
        title: 'Quarterly Review',
        time: 'Thursday, 11:00 AM - 12:30 PM',
        location: 'Main Conference Room',
        participants: [
          { id: 1, name: 'Alex Johnson', avatar: 'AJ' },
          { id: 9, name: 'Thomas Anderson', avatar: 'TA' },
          { id: 10, name: 'Lisa White', avatar: 'LW' },
          { id: 11, name: 'Kevin Martin', avatar: 'KM' },
        ],
        status: 'upcoming'
      },
      {
        id: 7,
        title: 'Team Building Event',
        time: 'Friday, 3:00 PM - 5:00 PM',
        location: 'Office Lounge',
        participants: [
          { id: 1, name: 'Alex Johnson', avatar: 'AJ' },
          { id: 2, name: 'Sarah Williams', avatar: 'SW' },
          { id: 3, name: 'Michael Brown', avatar: 'MB' },
          { id: 5, name: 'David Wilson', avatar: 'DW' },
          { id: 6, name: 'Jessica Lee', avatar: 'JL' },
          { id: 12, name: '+4 others', avatar: '+4' },
        ],
        status: 'upcoming'
      }
    ]
  };

  // Navigate to meetings page
  const goToMeetingsPage = () => {
    navigate('/meetings');
  };

  // Navigate to meetings page with schedule form open
  const goToScheduleMeeting = () => {
    navigate('/meetings', { state: { openScheduleModal: true } });
  };

  // Handle join button click
  const handleJoinClick = (meeting) => {
    // For completed meetings, do nothing
    if (meeting.status === 'completed') return;
    
    // For upcoming meetings, navigate to the meetings page
    navigate('/meetings');
  };

  // Handle details button click
  const handleDetailsClick = () => {
    navigate('/meetings');
  };

  return (
    <div className="meetings-card">
      <div className="card-header">
        <h2 className="card-title">Upcoming Meetings</h2>
        <div className="card-tabs">
          <button 
            className={`tab-button ${activeTab === 'today' ? 'active' : ''}`}
            onClick={() => setActiveTab('today')}
          >
            Today
          </button>
          <button 
            className={`tab-button ${activeTab === 'tomorrow' ? 'active' : ''}`}
            onClick={() => setActiveTab('tomorrow')}
          >
            Tomorrow
          </button>
          <button 
            className={`tab-button ${activeTab === 'week' ? 'active' : ''}`}
            onClick={() => setActiveTab('week')}
          >
            This Week
          </button>
        </div>
      </div>
      
      <div className="meetings-list">
        {meetings[activeTab].map(meeting => (
          <div key={meeting.id} className={`meeting-item ${meeting.status}`}>
            <div className="meeting-time-status">
              <div className="meeting-status-indicator"></div>
              <span className="meeting-time">{meeting.time}</span>
            </div>
            
            <div className="meeting-details">
              <h3 className="meeting-title">{meeting.title}</h3>
              <div className="meeting-info">
                <div className="meeting-location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  <span>{meeting.location}</span>
                </div>
                
                <div className="meeting-participants">
                  <div className="avatar-group">
                    {meeting.participants.slice(0, 3).map(participant => (
                      <div key={participant.id} className="avatar" title={participant.name}>
                        {participant.avatar}
                      </div>
                    ))}
                    {meeting.participants.length > 3 && (
                      <div className="avatar more" title="More participants">
                        +{meeting.participants.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="meeting-actions">
              <button 
                className="action-button join" 
                disabled={meeting.status === 'completed'}
                onClick={() => handleJoinClick(meeting)}
              >
                {meeting.status === 'upcoming' ? 'Join' : 'Completed'}
              </button>
              <button 
                className="action-button details"
                onClick={handleDetailsClick}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="card-footer">
        <button className="view-all-link" onClick={goToMeetingsPage}>
          View All Meetings
        </button>
        <button className="schedule-meeting-btn" onClick={goToScheduleMeeting}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Schedule Meeting
        </button>
      </div>
    </div>
  );
};

export default UpcomingMeetings;
