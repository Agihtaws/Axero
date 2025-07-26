import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Announcements.css';

const Announcements = () => {
  const [expandedAnnouncement, setExpandedAnnouncement] = useState(null);
  const navigate = useNavigate();
  
  // Sample announcements data remains the same
  const announcements = [
    {
      id: 1,
      title: 'Office Renovation Update',
      content: 'The office renovation project is progressing well. The 3rd floor will be closed next week for painting and new furniture installation. Please plan to work from home or use the designated spaces on the 2nd floor during this time.',
      author: 'Thomas Anderson',
      role: 'Facilities Manager',
      avatar: 'TA',
      date: 'Today',
      important: true,
      unread: true
    },
    {
      id: 2,
      title: 'New Health Benefits Package',
      content: 'We\'re excited to announce our enhanced health benefits package starting next quarter. Highlights include improved mental health coverage, fitness reimbursements, and expanded family leave options. More details will be shared in the upcoming all-hands meeting.',
      author: 'Jennifer Clark',
      role: 'HR Director',
      avatar: 'JC',
      date: 'Yesterday',
      important: true,
      unread: true
    },
    {
      id: 3,
      title: 'Quarterly All-Hands Meeting',
      content: 'Our Q3 All-Hands meeting is scheduled for next Friday at 2:00 PM in the main conference room. We\'ll be discussing company performance, upcoming projects, and recognizing outstanding team contributions. The agenda will be shared via email by Wednesday.',
      author: 'Robert Miller',
      role: 'CEO',
      avatar: 'RM',
      date: '2 days ago',
      important: false,
      unread: false
    }
  ];
  
  const toggleAnnouncement = (id) => {
    if (expandedAnnouncement === id) {
      setExpandedAnnouncement(null);
    } else {
      setExpandedAnnouncement(id);
    }
  };

  const handleViewAll = () => {
    // Simply navigate to the announcements page
    navigate('/announcements');
  };

  const handleNewAnnouncement = () => {
    // Navigate to announcements page with state to open the create modal
    navigate('/announcements', { state: { openCreateModal: true } });
  };

  return (
    <div className="announcements-card">
      <div className="card-header">
        <h2 className="card-title">Announcements</h2>
        <button 
          className="new-announcement-btn"
          onClick={handleNewAnnouncement}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
          </svg>
          New
        </button>
      </div>
      
      <div className="announcements-list">
        {announcements.map(announcement => (
          <div 
            key={announcement.id} 
            className={`announcement-item ${announcement.unread ? 'unread' : ''} ${announcement.important ? 'important' : ''} ${expandedAnnouncement === announcement.id ? 'expanded' : ''}`}
          >
            <div className="announcement-header" onClick={() => toggleAnnouncement(announcement.id)}>
              <div className="announcement-meta">
                {announcement.important && (
                  <span className="important-tag">Important</span>
                )}
                <h3 className="announcement-title">{announcement.title}</h3>
              </div>
              <div className="announcement-info">
                <span className="announcement-date">{announcement.date}</span>
                <button className="expand-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="announcement-content">
              <p>{announcement.content}</p>
              
              <div className="announcement-author">
                <div className="author-avatar">{announcement.avatar}</div>
                <div className="author-info">
                  <span className="author-name">{announcement.author}</span>
                  <span className="author-role">{announcement.role}</span>
                </div>
              </div>
              
              <div className="announcement-actions">
                <button className="action-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                  </svg>
                  Like
                </button>
                <button className="action-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                  </svg>
                  Comment
                </button>
                <button className="action-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="card-footer">
        <button 
          className="view-all-link"
          onClick={handleViewAll}
        >
          View All Announcements
        </button>
      </div>
    </div>
  );
};

export default Announcements;
