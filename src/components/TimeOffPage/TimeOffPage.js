import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TimeOffPage.css';

const TimeOffPage = () => {
  const location = useLocation();
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    startDate: '',
    endDate: '',
    type: 'vacation',
    reason: '',
    status: 'pending'
  });
  
  // Sample time off requests data
  const [requests, setRequests] = useState([
    {
      id: 1,
      startDate: '2025-08-10',
      endDate: '2025-08-17',
      type: 'vacation',
      reason: 'Summer vacation with family',
      status: 'approved',
      approvedBy: 'Jennifer Clark',
      requestedOn: '2025-07-01'
    },
    {
      id: 2,
      startDate: '2025-07-25',
      endDate: '2025-07-25',
      type: 'personal',
      reason: 'Doctor appointment',
      status: 'approved',
      approvedBy: 'Jennifer Clark',
      requestedOn: '2025-07-15'
    },
    {
      id: 3,
      startDate: '2025-09-05',
      endDate: '2025-09-05',
      type: 'sick',
      reason: 'Not feeling well',
      status: 'pending',
      requestedOn: '2025-07-20'
    }
  ]);
  
  // Check if we should open the request modal based on navigation state
  useEffect(() => {
    if (location.state && location.state.openTimeOffModal) {
      setIsRequestModalOpen(true);
    }
  }, [location]);
  
  const handleRequestTimeOff = () => {
    setIsRequestModalOpen(true);
  };
  
  const closeRequestModal = () => {
    setIsRequestModalOpen(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({
      ...newRequest,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = requests.length > 0 ? Math.max(...requests.map(req => req.id)) + 1 : 1;
    
    const requestToAdd = {
      id,
      ...newRequest,
      status: 'pending',
      requestedOn: new Date().toISOString().split('T')[0]
    };
    
    setRequests([...requests, requestToAdd]);
    setNewRequest({
      startDate: '',
      endDate: '',
      type: 'vacation',
      reason: '',
      status: 'pending'
    });
    setIsRequestModalOpen(false);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Calculate days off
  const calculateDaysOff = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };
  
  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'status-badge approved';
      case 'rejected':
        return 'status-badge rejected';
      case 'pending':
        return 'status-badge pending';
      default:
        return 'status-badge';
    }
  };
  
  // Get type icon
  const getTypeIcon = (type) => {
    switch (type) {
      case 'vacation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
          </svg>
        );
      case 'sick':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
          </svg>
        );
      case 'personal':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
          </svg>
        );
    }
  };

  return (
    <div className="time-off-page">
      <div className="page-header">
        <h1>Time Off Requests</h1>
        <button className="request-button" onClick={handleRequestTimeOff}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Request Time Off
        </button>
      </div>
      
      <div className="time-off-summary">
        <div className="summary-card">
          <div className="summary-icon vacation">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
            </svg>
          </div>
          <div className="summary-details">
            <h3>Vacation Days</h3>
            <div className="summary-value">12 / 20</div>
            <div className="summary-subtext">Days remaining</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon sick">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
            </svg>
          </div>
          <div className="summary-details">
            <h3>Sick Days</h3>
            <div className="summary-value">5 / 7</div>
            <div className="summary-subtext">Days remaining</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon personal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
          </div>
          <div className="summary-details">
            <h3>Personal Days</h3>
            <div className="summary-value">3 / 5</div>
            <div className="summary-subtext">Days remaining</div>
          </div>
        </div>
      </div>
      
      <div className="requests-container">
        <h2>Your Requests</h2>
        
        <div className="requests-list">
          {requests.map(request => (
            <div key={request.id} className="request-card">
              <div className="request-type-icon">
                {getTypeIcon(request.type)}
              </div>
              
              <div className="request-details">
                <div className="request-header">
                  <h3 className="request-type">{request.type.charAt(0).toUpperCase() + request.type.slice(1)}</h3>
                  <span className={getStatusBadgeClass(request.status)}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </div>
                
                <div className="request-dates">
                  <div className="date-range">
                    <span className="date-label">From:</span>
                    <span className="date-value">{formatDate(request.startDate)}</span>
                  </div>
                  <div className="date-range">
                    <span className="date-label">To:</span>
                    <span className="date-value">{formatDate(request.endDate)}</span>
                  </div>
                  <div className="days-count">
                    <span className="days-value">{calculateDaysOff(request.startDate, request.endDate)} days</span>
                  </div>
                </div>
                
                {request.reason && (
                  <div className="request-reason">
                    <p>{request.reason}</p>
                  </div>
                )}
                
                <div className="request-meta">
                  <span className="request-date">Requested on {formatDate(request.requestedOn)}</span>
                  {request.status === 'approved' && (
                    <span className="approver">Approved by {request.approvedBy}</span>
                  )}
                </div>
                
                {request.status === 'pending' && (
                  <div className="request-actions">
                    <button className="cancel-request-btn">Cancel Request</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isRequestModalOpen && (
        <div className="modal-backdrop">
          <div className="request-time-off-modal">
            <div className="modal-header">
              <h2>Request Time Off</h2>
              <button className="close-btn" onClick={closeRequestModal}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={newRequest.startDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={newRequest.endDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="type">Time Off Type</label>
                <select
                  id="type"
                  name="type"
                  value={newRequest.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="vacation">Vacation</option>
                  <option value="sick">Sick Leave</option>
                  <option value="personal">Personal Time</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="reason">Reason (Optional)</label>
                <textarea
                  id="reason"
                  name="reason"
                  value={newRequest.reason}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Provide additional details about your time off request"
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeRequestModal}>Cancel</button>
                <button type="submit" className="submit-btn">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeOffPage;
