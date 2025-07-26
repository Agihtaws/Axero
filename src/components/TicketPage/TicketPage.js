import React, { useState } from 'react';
import './TicketPage.css';

const TicketPage = () => {
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'technical',
    priority: 'medium',
    description: '',
    attachments: []
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketForm({
      ...ticketForm,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setTicketForm({
      ...ticketForm,
      attachments: files
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate random ticket number
    const randomTicketNum = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(randomTicketNum);
    setIsSubmitted(true);
  };
  
  const handleNewTicket = () => {
    setIsSubmitted(false);
    setTicketForm({
      subject: '',
      category: 'technical',
      priority: 'medium',
      description: '',
      attachments: []
    });
  };

  return (
    <div className="ticket-page">
      <div className="ticket-header">
        <h1>Submit Support Ticket</h1>
      </div>
      
      {!isSubmitted ? (
        <div className="ticket-form-container">
          <div className="ticket-info-box">
            <div className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3>Before submitting a ticket</h3>
              <p>Check our <a href="#">Knowledge Base</a> for solutions to common problems.</p>
              <p>Response times: High priority - 4 hours, Medium - 24 hours, Low - 48 hours</p>
            </div>
          </div>
          
          <form className="ticket-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={ticketForm.subject}
                onChange={handleInputChange}
                placeholder="Brief description of the issue"
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={ticketForm.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account Access</option>
                  <option value="billing">Billing</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={ticketForm.priority}
                  onChange={handleInputChange}
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={ticketForm.description}
                onChange={handleInputChange}
                rows="6"
                placeholder="Please provide as much detail as possible about the issue you're experiencing"
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="attachments">Attachments (Optional)</label>
              <div className="file-upload-container">
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  onChange={handleFileChange}
                  className="file-input"
                  multiple
                />
                <label htmlFor="attachments" className="file-upload-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>
                  {ticketForm.attachments.length > 0 
                    ? `${ticketForm.attachments.length} file(s) selected` 
                    : 'Upload screenshots or relevant files'}
                </label>
              </div>
              <small className="form-help-text">Max file size: 10MB. Supported formats: JPG, PNG, PDF, DOC</small>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="submit-btn">Submit Ticket</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="ticket-success">
          <div className="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </div>
          <h2>Ticket Submitted Successfully!</h2>
          <p className="ticket-number">Your ticket number: <strong>{ticketNumber}</strong></p>
          <p>We've received your support request and will respond as soon as possible.</p>
          <p>You'll receive email updates when there are updates to your ticket.</p>
          
          <div className="success-actions">
            <button className="new-ticket-btn" onClick={handleNewTicket}>Submit Another Ticket</button>
            <button className="view-tickets-btn">View My Tickets</button>
          </div>
        </div>
      )}
      
      <div className="ticket-footer">
        <div className="support-info">
          <h3>Need Immediate Assistance?</h3>
          <p>For urgent issues, please contact our support team directly:</p>
          <div className="contact-methods">
            <div className="contact-method">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span>(555) 123-4567</span>
            </div>
            <div className="contact-method">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              <span>support@novaoffice.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
