import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Meetings.css';

const Meetings = () => {
  const location = useLocation();
  // Sample meetings data - in a real app, this would come from a data source or API
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: 'Team Meeting',
      time: '10:00 AM - 11:00 AM',
      date: '2025-07-23',
      location: 'Conference Room A',
      participants: ['Alex Johnson', 'Sarah Williams', 'Michael Brown', 'Emily Davis'],
      description: 'Weekly team sync to discuss ongoing projects and priorities.'
    },
    {
      id: 2,
      title: 'Project Review',
      time: '2:00 PM - 3:00 PM',
      date: '2025-07-23',
      location: 'Zoom Meeting',
      participants: ['Alex Johnson', 'David Wilson', 'Jessica Lee'],
      description: 'Review progress on the NovaOffice dashboard project.'
    },
    {
      id: 3,
      title: 'Client Call',
      time: '4:30 PM - 5:00 PM',
      date: '2025-07-23',
      location: 'Phone',
      participants: ['Alex Johnson', 'Robert Chen'],
      description: 'Follow up with client about requirements and timeline.'
    }
  ]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    participants: '',
    description: ''
  });

  useEffect(() => {
    // Check if we should open the schedule modal based on navigation state
    if (location.state && location.state.openScheduleModal) {
      setIsCreateModalOpen(true);
    }
  }, [location]);

  const handleNewMeeting = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting({
      ...newMeeting,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = meetings.length > 0 ? Math.max(...meetings.map(meeting => meeting.id)) + 1 : 1;
    
    // Format the time range
    const timeRange = `${newMeeting.startTime} - ${newMeeting.endTime}`;
    
    // Format participants as an array
    const participantsArray = newMeeting.participants
      .split(',')
      .map(participant => participant.trim())
      .filter(participant => participant !== '');
    
    const meetingToAdd = {
      id,
      title: newMeeting.title,
      time: timeRange,
      date: newMeeting.date,
      location: newMeeting.location,
      participants: participantsArray,
      description: newMeeting.description
    };
    
    setMeetings([...meetings, meetingToAdd]);
    setNewMeeting({
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      location: '',
      participants: '',
      description: ''
    });
    setIsCreateModalOpen(false);
  };

  return (
    <div className="meetings-container">
      <div className="meetings-header">
        <h1>Today's Meetings</h1>
        <button className="new-meeting-btn" onClick={handleNewMeeting}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          New Meeting
        </button>
      </div>
      
      <div className="meetings-list">
        {meetings.map(meeting => (
          <div key={meeting.id} className="meeting-card">
            <div className="meeting-time">
              <div className="time-badge">{meeting.time.split(' - ')[0]}</div>
              <div className="time-duration">{meeting.time}</div>
            </div>
            
            <div className="meeting-details">
              <h2 className="meeting-title">{meeting.title}</h2>
              <div className="meeting-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                {meeting.location}
              </div>
              
              <div className="meeting-participants">
                <div className="participants-label">Participants:</div>
                <div className="participants-list">
                  {meeting.participants.join(', ')}
                </div>
              </div>
              
              <p className="meeting-description">{meeting.description}</p>
              
              <div className="meeting-actions">
                <button className="join-btn">Join Meeting</button>
                <button className="edit-btn">Edit</button>
                <button className="cancel-btn">Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isCreateModalOpen && (
        <div className="modal-backdrop">
          <div className="create-meeting-modal">
            <div className="modal-header">
              <h2>Schedule New Meeting</h2>
              <button className="close-btn" onClick={closeCreateModal}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Meeting Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newMeeting.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={newMeeting.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startTime">Start Time</label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={newMeeting.startTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endTime">End Time</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={newMeeting.endTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={newMeeting.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="participants">Participants (comma separated)</label>
                <input
                  type="text"
                  id="participants"
                  name="participants"
                  value={newMeeting.participants}
                  onChange={handleInputChange}
                  placeholder="e.g. John Smith, Jane Doe"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newMeeting.description}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeCreateModal}>Cancel</button>
                <button type="submit" className="submit-btn">Schedule Meeting</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meetings;
