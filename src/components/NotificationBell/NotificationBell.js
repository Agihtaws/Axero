import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationBell.css';

const NotificationBell = ({ count = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const handleMarkAllAsRead = (e) => {
    e.stopPropagation();
    // Implementation for marking all as read
    // This would typically update state or call an API
  };

  const handleViewAllNotifications = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    navigate('/inbox');
  };

  const handleNotificationClick = (e, notificationType) => {
    e.stopPropagation();
    setIsOpen(false);
    navigate('/inbox');
  };

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'message',
      content: 'Sarah sent you a message about the project proposal',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'meeting',
      content: 'Team meeting starting in 15 minutes',
      time: '15 minutes ago',
      read: false
    },
    {
      id: 3,
      type: 'task',
      content: 'New task assigned: Review Q3 marketing plan',
      time: '2 hours ago',
      read: false
    }
  ];

  return (
    <div className="notification-container">
      <button 
        className="notification-bell" 
        onClick={toggleNotifications}
        aria-label="Notifications"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </svg>
        {count > 0 && <span className="notification-badge">{count}</span>}
      </button>

      {isOpen && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notifications</h3>
            <button 
              className="mark-all-read"
              onClick={handleMarkAllAsRead}
            >
              Mark all as read
            </button>
          </div>
          
          <ul className="notifications-list">
            {notifications.map(notification => (
              <li 
                key={notification.id} 
                className={`notification-item ${!notification.read ? 'unread' : ''}`}
                onClick={(e) => handleNotificationClick(e, notification.type)}
              >
                <div className={`notification-icon ${notification.type}`}>
                  {notification.type === 'message' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"></path>
                    </svg>
                  )}
                  {notification.type === 'meeting' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                    </svg>
                  )}
                  {notification.type === 'task' && (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
  </svg>
)}
                </div>
                <div className="notification-content">
                  <p>{notification.content}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="notifications-footer">
            <a href="#" onClick={handleViewAllNotifications}>View all notifications</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
