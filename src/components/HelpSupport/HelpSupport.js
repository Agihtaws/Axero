import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HelpSupport.css';

const HelpSupport = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const navigate = useNavigate();
  
  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page, or by contacting the IT support team at support@novaoffice.com.'
    },
    {
      id: 2,
      question: 'How do I request time off?',
      answer: 'Navigate to the "Quick Actions" section and click on "Request Time Off". Fill out the form with your requested dates and submit it for approval from your manager.'
    },
    {
      id: 3,
      question: 'Where can I find the company policies?',
      answer: 'All company policies can be found in the Resource Links section under the "HR & Admin" category. You can also search for specific policies using the search bar at the top of the page.'
    },
    {
      id: 4,
      question: 'How do I book a meeting room?',
      answer: 'Click on "Schedule Meeting" in the Quick Actions section, then select "Book Room" in the meeting creation form. You\'ll be able to see all available rooms and book one for your specified time.'
    },
  ];
  
  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };
  
  const navigateToChatSupport = () => {
    navigate('/chat-support');
  };
  
  const navigateToTicket = () => {
    navigate('/create-ticket');
  };
  
  const navigateToGuides = () => {
    navigate('/knowledge-base');
  };
  
  const navigateToContactSupport = () => {
    navigate('/contact-support');
  };

  return (
    <div className="help-support-section">
      <h2 className="section-title">Help & Support</h2>
      
      <div className="help-container">
        <div className="help-options">
          <div className="help-card">
            <div className="help-icon chat">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </div>
            <h3 className="help-title">Chat Support</h3>
            <p className="help-description">Get instant help from our support team via live chat</p>
            <button className="help-button" onClick={navigateToChatSupport}>Start Chat</button>
          </div>
          
          <div className="help-card">
            <div className="help-icon ticket">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z"/>
              </svg>
            </div>
            <h3 className="help-title">Submit Ticket</h3>
            <p className="help-description">Create a support ticket for technical issues</p>
            <button className="help-button" onClick={navigateToTicket}>Create Ticket</button>
          </div>
          
          <div className="help-card">
            <div className="help-icon docs">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
              </svg>
            </div>
            <h3 className="help-title">Knowledge Base</h3>
            <p className="help-description">Browse tutorials and how-to guides</p>
            <button className="help-button" onClick={navigateToGuides}>View Guides</button>
          </div>
        </div>
        
        <div className="faq-container">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          
          <div className="faq-list">
            {faqs.map(faq => (
              <div 
                key={faq.id} 
                className={`faq-item ${activeQuestion === faq.id ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleQuestion(faq.id)}>
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-footer">
            <span>Can't find what you're looking for?</span>
            <button className="contact-support-btn" onClick={navigateToContactSupport}>Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
