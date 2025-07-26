import React, { useState } from 'react';
import './ChatSupportPage.css';

const ChatSupportPage = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { 
      id: 1, 
      sender: 'system', 
      message: 'Welcome to Nova Office Chat Support! How can we help you today?',
      timestamp: new Date().toISOString()
    }
  ]);
  
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (message.trim() === '') return;
    
    // Add user message to chat
    const userMessage = {
      id: chatHistory.length + 1,
      sender: 'user',
      message: message.trim(),
      timestamp: new Date().toISOString()
    };
    
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');
    
    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage = {
        id: chatHistory.length + 2,
        sender: 'agent',
        message: "Thank you for reaching out. An agent will respond to your inquiry shortly. For immediate assistance, please call our support line at (555) 123-4567.",
        timestamp: new Date().toISOString(),
        agent: "Support Team"
      };
      
      setChatHistory(prevChat => [...prevChat, agentMessage]);
    }, 1000);
  };
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-support-page">
      <div className="chat-header">
        <h1>Live Chat Support</h1>
        <div className="chat-status online">
          <span className="status-indicator"></span>
          <span>Support Available</span>
        </div>
      </div>
      
      <div className="chat-container">
        <div className="chat-messages">
          {chatHistory.map(chat => (
            <div 
              key={chat.id} 
              className={`message-bubble ${chat.sender === 'user' ? 'user-message' : 'agent-message'}`}
            >
              {chat.sender === 'agent' && (
                <div className="agent-info">
                  <div className="agent-avatar">
                    {chat.agent ? chat.agent.charAt(0) : 'S'}
                  </div>
                  <div className="agent-name">{chat.agent || 'Support Team'}</div>
                </div>
              )}
              <div className="message-content">
                <p>{chat.message}</p>
                <span className="message-time">{formatTime(chat.timestamp)}</span>
              </div>
            </div>
          ))}
        </div>
        
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
            className="chat-input"
          />
          <button type="submit" className="send-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg>
          </button>
        </form>
      </div>
      
      <div className="chat-footer">
        <div className="support-hours">
          <h3>Support Hours</h3>
          <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
          <p>Saturday: 10:00 AM - 6:00 PM EST</p>
          <p>Sunday: Closed</p>
        </div>
        
        <div className="alternative-contact">
          <h3>Other Ways to Contact Us</h3>
          <div className="contact-option">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            <span>(555) 123-4567</span>
          </div>
          <div className="contact-option">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            <span>support@novaoffice.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupportPage;
