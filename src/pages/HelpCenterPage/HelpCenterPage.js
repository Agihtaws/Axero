import React, { useState } from 'react';
import './HelpCenterPage.css';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Sample help categories
  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'account', name: 'Account & Settings', icon: '⚙️' },
    { id: 'projects', name: 'Projects & Tasks', icon: '📋' },
    { id: 'teams', name: 'Teams & Collaboration', icon: '👥' },
    { id: 'documents', name: 'Documents & Files', icon: '📁' },
    { id: 'calendar', name: 'Calendar & Meetings', icon: '📅' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' },
  ];
  
  // Sample FAQs by category
  const faqs = {
    'getting-started': [
      {
        id: 'gs1',
        question: 'How do I navigate the dashboard?',
        answer: 'The dashboard is your central hub for all activities. At the top, you\'ll find quick access to your tasks, meetings, messages, and announcements. Below that, you\'ll see your upcoming meetings, recent documents, and team activity. Use the navigation menu at the top to access different sections of the platform.'
      },
      {
        id: 'gs2',
        question: 'How do I create my first task?',
        answer: 'To create a task, click on the "Create Task" button in the Quick Access section of your dashboard. Fill in the task details including title, description, due date, and assignees. You can also add attachments and set priority levels. Click "Save" to create the task.'
      },
      {
        id: 'gs3',
        question: 'How do I join a team?',
        answer: 'You can join a team by either accepting an invitation sent by a team admin or by requesting to join a team. To request to join, navigate to the Teams page, find the team you want to join, and click the "Request to Join" button. A team admin will need to approve your request.'
      },
      {
        id: 'gs4',
        question: 'How do I schedule my first meeting?',
        answer: 'To schedule a meeting, click on the "Schedule Meeting" button in the Quick Access section. Fill in the meeting details including title, date, time, location (physical or virtual), and participants. You can also add an agenda and attach relevant documents. Click "Schedule" to create the meeting and send invitations.'
      }
    ],
    'account': [
      {
        id: 'ac1',
        question: 'How do I change my password?',
        answer: 'To change your password, go to Account Settings > Password & Security. Enter your current password, then enter and confirm your new password. Click "Update Password" to save your changes.'
      },
      {
        id: 'ac2',
        question: 'How do I update my profile information?',
        answer: 'To update your profile information, go to Account Settings > Profile Information. Here you can edit your name, job title, department, contact information, and bio. Click "Save Changes" when you\'re done.'
      },
      {
        id: 'ac3',
        question: 'How do I enable two-factor authentication?',
        answer: 'To enable two-factor authentication, go to Account Settings > Password & Security. Under the Two-Factor Authentication section, toggle the switch to enable it. Follow the on-screen instructions to set up your preferred authentication method (SMS, authenticator app, etc.).'
      }
    ],
    'projects': [
      {
        id: 'pr1',
        question: 'How do I create a new project?',
        answer: 'To create a new project, go to the Projects page and click the "New Project" button. Fill in the project details including name, description, start and end dates, and team members. You can also set project goals and milestones. Click "Create Project" to save.'
      },
      {
        id: 'pr2',
        question: 'How do I assign tasks to team members?',
        answer: 'To assign tasks, open the project or task list, select the task you want to assign, and click "Edit" or "Assign". Select the team member from the dropdown list and click "Save". The assigned person will receive a notification about the new task.'
      },
      {
        id: 'pr3',
        question: 'How do I track project progress?',
        answer: 'Project progress is tracked automatically based on completed tasks. You can view progress on the project details page, which shows a progress bar, completed vs. total tasks, and upcoming milestones. For more detailed analytics, check the Reports section.'
      }
    ],
    'teams': [
      {
        id: 'tm1',
        question: 'How do I create a new team?',
        answer: 'To create a new team, go to the Teams page and click "Create Team". Enter the team name, description, and select members to invite. You can set team permissions and access levels for different members. Click "Create" to set up the team.'
      },
      {
        id: 'tm2',
        question: 'How do I manage team permissions?',
        answer: 'To manage team permissions, go to the Teams page, select your team, and click "Settings". Navigate to the "Permissions" tab where you can set access levels for different team members (Admin, Editor, Viewer). You can also configure what actions each role can perform.'
      },
      {
        id: 'tm3',
        question: 'How do I communicate with my team?',
        answer: 'There are multiple ways to communicate with your team: use the Team Chat for real-time messaging, comment on specific tasks or documents for contextual discussions, or schedule a meeting for more in-depth conversations. You can also use the Announcements feature for important updates.'
      }
    ],
    'documents': [
      {
        id: 'doc1',
        question: 'How do I upload a document?',
        answer: 'To upload a document, go to the Documents page and click "Upload Document". You can either drag and drop files or click to browse your computer. Select the file(s) you want to upload, choose the destination folder, add any tags or descriptions, and click "Upload".'
      },
      {
        id: 'doc2',
        question: 'How do I share documents with my team?',
        answer: 'To share a document, navigate to the document in the Documents page, click the "Share" button. You can either share with specific team members or with an entire team. Set appropriate permissions (View, Comment, Edit) and click "Share". Optionally, you can notify recipients by email.'
      },
      {
        id: 'doc3',
        question: 'How do I organize my documents into folders?',
        answer: 'To organize documents, go to the Documents page where you can create folders by clicking "New Folder". Give your folder a name and description. You can move documents into folders by dragging and dropping them, or by selecting "Move to" from the document\'s context menu.'
      }
    ],
    'calendar': [
      {
        id: 'cal1',
        question: 'How do I view my upcoming meetings?',
        answer: 'Your upcoming meetings are displayed on your dashboard and in the Calendar page. On the Calendar page, you can toggle between different views (Day, Week, Month) to see all scheduled meetings. Click on any meeting to view its details.'
      },
      {
        id: 'cal2',
        question: 'How do I join a virtual meeting?',
        answer: 'To join a virtual meeting, go to the meeting in your calendar and click the "Join" button. This will open the integrated video conferencing tool. Alternatively, you can join from the meeting notification that appears shortly before the scheduled time.'
      },
      {
        id: 'cal3',
        question: 'How do I reschedule a meeting?',
        answer: 'To reschedule a meeting, find the meeting in your calendar, click on it to open the details, then click "Edit". Update the date and time, and click "Save Changes". All participants will be notified of the change and their calendars will be updated automatically.'
      }
    ],
    'troubleshooting': [
      {
        id: 'tr1',
        question: 'I forgot my password. How do I reset it?',
        answer: 'If you forgot your password, click "Forgot Password" on the login page. Enter your email address and click "Reset Password". You\'ll receive an email with instructions to create a new password. If you don\'t receive the email, check your spam folder or contact support.'
      },
      {
        id: 'tr2',
        question: 'Why am I not receiving notifications?',
        answer: 'Check your notification settings in Account Settings > Notifications to ensure they\'re enabled. Also check your browser settings to allow notifications from our site. If using the mobile app, verify that app notifications are enabled in your device settings.'
      },
      {
        id: 'tr3',
        question: 'The application is running slowly. What can I do?',
        answer: 'Try clearing your browser cache and cookies, or try using a different browser. Make sure your browser is updated to the latest version. If the problem persists, check your internet connection or contact support for assistance.'
      },
      {
        id: 'tr4',
        question: 'How do I report a bug?',
        answer: 'To report a bug, go to Help Center > Report an Issue. Provide as much detail as possible about the bug, including what you were doing when it occurred, any error messages, and screenshots if available. Our support team will investigate and respond to your report.'
      }
    ]
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleFaq = (faqId) => {
    if (expandedFaq === faqId) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(faqId);
    }
  };

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery 
    ? Object.values(faqs).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs[activeCategory];

  return (
    <main className="container page-container">
      <div className="help-center-header">
        <h1>Help Center</h1>
        <div className="help-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search for help..." 
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      
      <div className="help-center-content">
        {!searchQuery && (
          <div className="help-categories">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        )}
        
        <div className="help-faqs">
          <h2>{searchQuery ? 'Search Results' : categories.find(c => c.id === activeCategory).name}</h2>
          
          {filteredFaqs.length === 0 ? (
            <div className="no-results">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
              </svg>
              <p>No results found. Try different keywords or browse the categories.</p>
            </div>
          ) : (
            <div className="faq-list">
              {filteredFaqs.map(faq => (
                <div 
                  key={faq.id} 
                  className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
                >
                  <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                    <h3>{faq.question}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="help-contact">
        <h2>Still need help?</h2>
        <div className="contact-options">
          <div className="contact-option">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </div>
            <h3>Chat with Support</h3>
            <p>Get instant help from our support team via live chat.</p>
            <button className="contact-button">Start Chat</button>
          </div>
          
          <div className="contact-option">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
              </svg>
            </div>
            <h3>Email Support</h3>
            <p>Send us an email and we'll get back to you within 24 hours.</p>
            <button className="contact-button">Send Email</button>
          </div>
          
          <div className="contact-option">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>
                <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
              </svg>
            </div>
            <h3>Knowledge Base</h3>
            <p>Browse our comprehensive documentation and tutorials.</p>
            <button className="contact-button">View Docs</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpCenterPage;
