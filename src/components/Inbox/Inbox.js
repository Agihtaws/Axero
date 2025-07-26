import React, { useState } from 'react';
import './Inbox.css';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Sarah Williams',
      avatar: '/avatars/sarah.jpg',
      subject: 'Project proposal feedback',
      preview: "Hi Alex, I've reviewed the project proposal and have some feedback to share..",
      date: '10 minutes ago',
      read: false
    },
    {
      id: 2,
      sender: 'David Wilson',
      avatar: '/avatars/david.jpg',
      subject: 'Meeting notes from yesterday',
      preview: "Here are the meeting notes from yesterday's discussion on the marketing strategy...",
      date: '2 hours ago',
      read: false
    },
    {
      id: 3,
      sender: 'Jessica Lee',
      avatar: '/avatars/jessica.jpg',
      subject: 'Updated design files',
      preview: "I've uploaded the updated design files to the shared folder. Please take a look when you have a chance...",
      date: '4 hours ago',
      read: false
    },
    {
      id: 4,
      sender: 'Michael Brown',
      avatar: '/avatars/michael.jpg',
      subject: 'Q3 planning',
      preview: 'We need to start planning for Q3. Can we schedule some time to discuss priorities?',
      date: '1 day ago',
      read: true
    },
    {
      id: 5,
      sender: 'Emily Davis',
      avatar: '/avatars/emily.jpg',
      subject: 'Client meeting next week',
      preview: 'Just a reminder that we have a client meeting scheduled for next Tuesday at 10am...',
      date: '2 days ago',
      read: true
    }
  ]);

  const [notifications, setNotifications] = useState([
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
    },
    {
      id: 4,
      type: 'document',
      content: 'Jessica shared a document: Q2 Performance Report',
      time: '5 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'mention',
      content: 'Michael mentioned you in a comment on Project Timeline',
      time: '1 day ago',
      read: true
    }
  ]);

  const markAllAsRead = () => {
    if (activeTab === 'messages') {
      setMessages(messages.map(message => ({...message, read: true})));
    } else {
      setNotifications(notifications.map(notification => ({...notification, read: true})));
    }
  };

  const markAsRead = (id) => {
    if (activeTab === 'messages') {
      setMessages(messages.map(message => 
        message.id === id ? {...message, read: true} : message
      ));
    } else {
      setNotifications(notifications.map(notification => 
        notification.id === id ? {...notification, read: true} : notification
      ));
    }
  };

  const getUnreadCount = (type) => {
    if (type === 'messages') {
      return messages.filter(message => !message.read).length;
    } else {
      return notifications.filter(notification => !notification.read).length;
    }
  };

  return (
    <div className="inbox-container">
      <div className="inbox-header">
        <h1>Inbox</h1>
        <button className="mark-all-read-btn" onClick={markAllAsRead}>
          Mark all as read
        </button>
      </div>

      <div className="inbox-tabs">
        <button 
          className={`inbox-tab ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          Messages
          {getUnreadCount('messages') > 0 && (
            <span className="unread-badge">{getUnreadCount('messages')}</span>
          )}
        </button>
        <button 
          className={`inbox-tab ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
          {getUnreadCount('notifications') > 0 && (
            <span className="unread-badge">{getUnreadCount('notifications')}</span>
          )}
        </button>
      </div>

      <div className="inbox-content">
        {activeTab === 'messages' && (
          <div className="messages-list">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`message-item ${!message.read ? 'unread' : ''}`}
                onClick={() => markAsRead(message.id)}
              >
                <div className="message-avatar">
                  {message.avatar ? (
                    <img src={message.avatar} alt={message.sender} />
                  ) : (
                    <div className="avatar-placeholder">
                      {message.sender.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="message-content">
                  <div className="message-header">
                    <h3 className="message-sender">{message.sender}</h3>
                    <span className="message-date">{message.date}</span>
                  </div>
                  <h4 className="message-subject">{message.subject}</h4>
                  <p className="message-preview">{message.preview}</p>
                </div>
                {!message.read && <div className="unread-indicator"></div>}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="notifications-list">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${!notification.read ? 'unread' : ''}`}
                onClick={() => markAsRead(notification.id)}
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
                  {notification.type === 'document' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
                    </svg>
                  )}
                  {notification.type === 'mention' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                  )}
                </div>
                <div className="notification-content">
                  <p>{notification.content}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
                {!notification.read && <div className="unread-indicator"></div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
