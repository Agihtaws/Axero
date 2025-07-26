// Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = ({ userName }) => {
  const navigate = useNavigate();

  // Get current time for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  // Get current date in a nice format
  const getCurrentDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  // Handler for Tasks Due Today card click
  const handleTasksCardClick = () => {
    navigate('/tasks');
  };

  // Handler for Meetings Today card click
  const handleMeetingsCardClick = () => {
    navigate('/meetings');
  };

  // Handler for Unread Messages card click
  const handleMessagesCardClick = () => {
    navigate('/inbox');
  };

  // Handler for View Inbox button click
  const handleViewInboxClick = (e) => {
    e.stopPropagation();
    navigate('/inbox');
  };

  // Handler for New Announcements card click
  const handleAnnouncementsCardClick = () => {
    navigate('/announcements');
  };

  // Handler for View All Announcements button click
  const handleViewAllAnnouncementsClick = (e) => {
    e.stopPropagation();
    navigate('/announcements');
  };

  // Quick Access Card Handlers
  const handleCreateTaskClick = () => {
    navigate('/tasks', { state: { openCreateModal: true } });
  };

  const handleScheduleMeetingClick = () => {
    navigate('/meetings', { state: { openScheduleModal: true } });
  };

  const handleUploadDocumentClick = () => {
    navigate('/documents', { state: { openUploadModal: true } });
  };

  const handleRequestTimeOffClick = () => {
  navigate('/time-off', { state: { openTimeOffModal: true } });
};

  const handleSubmitExpenseClick = () => {
  navigate('/expenses', { state: { openExpenseModal: true } });
};

  const handleMoreActionsClick = () => {
  navigate('/more-actions', { state: { showQuickActions: true } });
};

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="welcome-container">
          <h1 className="welcome-heading">
            <span className="greeting">{getGreeting()},</span> {userName}
          </h1>
          <p className="date">{getCurrentDate()}</p>
          <p className="welcome-message">Here's what's happening in your workspace today</p>
        </div>
        
        <div className="metrics-container">
          <div 
            className="metric-card clickable-card" 
            onClick={handleTasksCardClick}
            role="button"
            aria-label="View tasks due today on calendar"
            tabIndex="0"
          >
            <div className="metric-icon tasks">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-value">8</span>
              <span className="metric-label">Tasks Due Today</span>
            </div>
            <div className="metric-progress">
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
              <span className="progress-text">12 total</span>
            </div>
          </div>
          
          <div 
            className="metric-card clickable-card"
            onClick={handleMeetingsCardClick}
            role="button"
            aria-label="View meetings for today"
            tabIndex="0"
          >
            <div className="metric-icon meetings">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-value">3</span>
              <span className="metric-label">Meetings Today</span>
            </div>
            <div className="metric-time">
              <span className="next-meeting">Next: 2:00 PM</span>
              <span className="meeting-title">Product Review</span>
            </div>
          </div>
          
          <div 
            className="metric-card clickable-card"
            onClick={handleMessagesCardClick}
            role="button"
            aria-label="View unread messages"
            tabIndex="0"
          >
            <div className="metric-icon messages">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-value">12</span>
              <span className="metric-label">Unread Messages</span>
            </div>
            <button 
              className="view-all-btn"
              onClick={handleViewInboxClick}
            >
              View Inbox
            </button>
          </div>
          
          <div 
            className="metric-card clickable-card"
            onClick={handleAnnouncementsCardClick}
            role="button"
            aria-label="View new announcements"
            tabIndex="0"
          >
            <div className="metric-icon announcements">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-value">2</span>
              <span className="metric-label">New Announcements</span>
            </div>
            <button 
              className="view-all-btn"
              onClick={handleViewAllAnnouncementsClick}
            >
              View All
            </button>
          </div>
        </div>
      </div>    
            
      <div className="quick-actions">
        <h2 className="quick-actions-title">Quick Access</h2>
        <div className="action-cards">
          <div 
            className="action-card" 
            onClick={handleCreateTaskClick}
            role="button"
            aria-label="Create a new task"
            tabIndex="0"
          >
            <div className="action-icon create-task">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </div>
            <span className="action-label">Create Task</span>
          </div>
          
          <div 
            className="action-card"
            onClick={handleScheduleMeetingClick}
            role="button"
            aria-label="Schedule a new meeting"
            tabIndex="0"
          >
            <div className="action-icon schedule-meeting">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
            </div>
            <span className="action-label">Schedule Meeting</span>
          </div>
          
          <div 
            className="action-card"
            onClick={handleUploadDocumentClick}
            role="button"
            aria-label="Upload a new document"
            tabIndex="0"
          >
            <div className="action-icon upload-document">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
              </svg>
            </div>
            <span className="action-label">Upload Document</span>
          </div>
          
          <div 
            className="action-card"
            onClick={handleRequestTimeOffClick}
            role="button"
            aria-label="Request time off"
            tabIndex="0"
          >
            <div className="action-icon time-off">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
            </div>
            <span className="action-label">Request Time Off</span>
          </div>
          
          <div 
            className="action-card"
            onClick={handleSubmitExpenseClick}
            role="button"
            aria-label="Submit an expense"
            tabIndex="0"
          >
            <div className="action-icon expense">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
              </svg>
            </div>
            <span className="action-label">Submit Expense</span>
          </div>
          
          <div 
            className="action-card more"
            onClick={handleMoreActionsClick}
            role="button"
            aria-label="View more actions"
            tabIndex="0"
          >
            <div className="action-icon more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
            </div>
            <span className="action-label">More Actions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


