import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourceLinks.css';

const ResourceLinks = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const navigate = useNavigate();
  
  // Sample resource data
  const resources = {
    popular: [
      { id: 1, title: 'Employee Handbook', icon: '📚', type: 'PDF' },
      { id: 2, title: 'Expense Report Template', icon: '📝', type: 'XLSX' },
      { id: 3, title: 'Brand Guidelines', icon: '🎨', type: 'PDF' },
      { id: 4, title: 'IT Support Request Form', icon: '🖥️', type: 'FORM' },
      { id: 5, title: 'Office Map', icon: '🗺️', type: 'PNG' },
      { id: 6, title: 'Holiday Calendar', icon: '📅', type: 'ICAL' },
    ],
    hr: [
      { id: 7, title: 'Time Off Request Form', icon: '⏰', type: 'FORM' },
      { id: 8, title: 'Benefits Overview', icon: '🏥', type: 'PDF' },
      { id: 9, title: 'Remote Work Policy', icon: '🏠', type: 'PDF' },
      { id: 10, title: 'Performance Review Template', icon: '📊', type: 'DOCX' },
    ],
    it: [
      { id: 11, title: 'VPN Setup Guide', icon: '🔒', type: 'PDF' },
      { id: 12, title: 'Password Reset Tool', icon: '🔑', type: 'TOOL' },
      { id: 13, title: 'Software Request Form', icon: '💾', type: 'FORM' },
      { id: 14, title: 'Tech Equipment Catalog', icon: '📱', type: 'PDF' },
    ],
    finance: [
      { id: 15, title: 'Reimbursement Form', icon: '💰', type: 'XLSX' },
      { id: 16, title: 'Budget Planning Template', icon: '📈', type: 'XLSX' },
      { id: 17, title: 'Tax Documents', icon: '📋', type: 'PDF' },
      { id: 18, title: 'Procurement Guidelines', icon: '🛒', type: 'PDF' },
    ],
  };

  const categories = [
    { id: 'popular', name: 'Popular', icon: '⭐' },
    { id: 'hr', name: 'HR & Admin', icon: '👥' },
    { id: 'it', name: 'IT Support', icon: '💻' },
    { id: 'finance', name: 'Finance', icon: '💵' },
  ];

  const handleUploadClick = () => {
    // Navigate to the documents page with state to open the upload modal
    navigate('/documents', { state: { openUploadModal: true } });
  };

  const handleBrowseClick = () => {
    // Simply navigate to the documents page
    navigate('/documents');
  };

  return (
    <div className="resources-section">
      <h2 className="section-title">Resource Links</h2>
      
      <div className="resources-container">
        <div className="resources-categories">
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
        
        <div className="resources-grid">
          {resources[activeCategory].map(resource => (
            <a href="#resource" key={resource.id} className="resource-card">
              <div className="resource-icon">{resource.icon}</div>
              <div className="resource-info">
                <h3 className="resource-title">{resource.title}</h3>
                <span className="resource-type">{resource.type}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="resources-footer">
        <button className="resources-action-btn" onClick={handleUploadClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
          </svg>
          Upload New Resource
        </button>
        <button className="resources-action-btn secondary" onClick={handleBrowseClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          Browse All Resources
        </button>
      </div>
    </div>
  );
};

export default ResourceLinks;

