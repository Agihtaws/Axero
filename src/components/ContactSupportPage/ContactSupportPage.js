import React, { useState } from 'react';
import './ContactSupportPage.css';

const ContactSupportPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    contactMethod: 'email',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  
  const handleNewRequest = () => {
    setIsSubmitted(false);
    setContactForm({
      name: '',
      email: '',
      contactMethod: 'email',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-support-page">
      <div className="contact-header">
        <h1>Contact Support</h1>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-methods-list">
            <div className="contact-method-card">
              <div className="method-icon phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </div>
              <h3>Phone Support</h3>
              <p>(555) 123-4567</p>
              <p className="hours">Monday - Friday: 8AM - 8PM EST</p>
            </div>
            
            <div className="contact-method-card">
              <div className="method-icon email">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </div>
              <h3>Email Support</h3>
              <p>support@novaoffice.com</p>
              <p className="hours">Response within 24 hours</p>
            </div>
            
            <div className="contact-method-card">
              <div className="method-icon chat">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
              </div>
              <h3>Live Chat</h3>
              <p>Chat with a support agent</p>
              <p className="hours">Available during business hours</p>
              <button className="start-chat-btn">Start Chat</button>
            </div>
          </div>
          
          <div className="office-hours">
            <h3>Office Hours</h3>
            <ul>
              <li><span>Monday - Friday:</span> 8:00 AM - 8:00 PM EST</li>
              <li><span>Saturday:</span> 10:00 AM - 6:00 PM EST</li>
              <li><span>Sunday:</span> Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="contact-form-container">
          {!isSubmitted ? (
            <>
              <h2>Send us a message</h2>
              <p className="form-intro">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <div className="radio-group">
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="contactEmail"
                        name="contactMethod"
                        value="email"
                        checked={contactForm.contactMethod === 'email'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="contactEmail">Email</label>
                    </div>
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="contactPhone"
                        name="contactMethod"
                        value="phone"
                        checked={contactForm.contactMethod === 'phone'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="contactPhone">Phone</label>
                    </div>
                  </div>
                </div>
                
                {contactForm.contactMethod === 'phone' && (
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </>
          ) : (
            <div className="message-success">
              <div className="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>
              <h2>Message Sent!</h2>
              <p>Thank you for contacting us. We've received your message and will respond to you shortly.</p>
              
              {contactForm.contactMethod === 'email' ? (
                <p>We'll send a response to <strong>{contactForm.email}</strong></p>
              ) : (
                <p>We'll contact you at <strong>{contactForm.phone}</strong></p>
              )}
              
              <button className="new-message-btn" onClick={handleNewRequest}>Send Another Message</button>
            </div>
          )}
        </div>
      </div>
      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I reset my password?</h3>
            <p>You can reset your password by clicking on the "Forgot Password" link on the login page, or by contacting the IT support team at support@novaoffice.com.</p>
          </div>
          
          <div className="faq-item">
            <h3>How do I request time off?</h3>
            <p>Navigate to the "Quick Actions" section and click on "Request Time Off". Fill out the form with your requested dates and submit it for approval from your manager.</p>
          </div>
          
          <div className="faq-item">
            <h3>Where can I find the company policies?</h3>
            <p>All company policies can be found in the Resource Links section under the "HR & Admin" category. You can also search for specific policies using the search bar at the top of the page.</p>
          </div>
          
          <div className="faq-item">
            <h3>How do I book a meeting room?</h3>
            <p>Click on "Schedule Meeting" in the Quick Actions section, then select "Book Room" in the meeting creation form. You'll be able to see all available rooms and book one for your specified time.</p>
          </div>
        </div>
        
        <div className="view-all-link">
          <a href="#">View All FAQs</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportPage;
