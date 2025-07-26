import React, { useState } from 'react';
import './GuidesPage.css';

const GuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample guides data
  const guides = [
    {
      id: 1,
      title: 'Getting Started with Nova Office',
      category: 'getting-started',
      description: 'Learn the basics of navigating and using the Nova Office platform.',
      thumbnail: 'getting-started-thumb.jpg',
      readTime: '5 min read',
      updated: '2025-07-01'
    },
    {
      id: 2,
      title: 'Setting Up Your Profile',
      category: 'account',
      description: 'Complete your profile to get the most out of Nova Office.',
      thumbnail: 'profile-setup-thumb.jpg',
      readTime: '3 min read',
      updated: '2025-07-05'
    },
    {
      id: 3,
      title: 'Submitting and Managing Expenses',
      category: 'expenses',
      description: 'Learn how to submit, track, and manage your expense reports.',
      thumbnail: 'expenses-thumb.jpg',
      readTime: '8 min read',
      updated: '2025-07-10'
    },
    {
      id: 4,
      title: 'Creating and Assigning Tasks',
      category: 'tasks',
      description: "Effectively manage your team's workload with tasks.",
      thumbnail: 'tasks-thumb.jpg',
      readTime: '6 min read',
      updated: '2025-07-12'
    },
    {
      id: 5,
      title: 'Requesting Time Off',
      category: 'time-off',
      description: 'Learn how to submit time off requests and check your balance.',
      thumbnail: 'time-off-thumb.jpg',
      readTime: '4 min read',
      updated: '2025-07-15'
    },
    {
      id: 6,
      title: 'Troubleshooting Common Issues',
      category: 'troubleshooting',
      description: 'Solutions to the most frequently encountered problems.',
      thumbnail: 'troubleshooting-thumb.jpg',
      readTime: '10 min read',
      updated: '2025-07-18'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'account', name: 'Account & Profile' },
    { id: 'expenses', name: 'Expenses' },
    { id: 'tasks', name: 'Tasks & Projects' },
    { id: 'time-off', name: 'Time Off' },
    { id: 'troubleshooting', name: 'Troubleshooting' }
  ];
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  const filteredGuides = guides.filter(guide => {
    // Filter by category
    const categoryMatch = activeCategory === 'all' || guide.category === activeCategory;
    
    // Filter by search query
    const searchMatch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="guides-page">
      <div className="guides-header">
        <h1>Knowledge Base</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="search-icon">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
      </div>
      
      <div className="guides-container">
        <div className="guides-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li 
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
          
          <div className="popular-articles">
            <h3>Popular Articles</h3>
            <ul className="popular-list">
              <li>
                <a href="#">Password Reset Guide</a>
              </li>
              <li>
                <a href="#">Setting Up Two-Factor Authentication</a>
              </li>
              <li>
                <a href="#">Uploading Receipts for Expenses</a>
              </li>
              <li>
                <a href="#">Using the Mobile App</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="guides-content">
          <h2>{activeCategory === 'all' ? 'All Guides' : categories.find(c => c.id === activeCategory).name}</h2>
          
          {filteredGuides.length === 0 ? (
            <div className="no-results">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
              </svg>
              <h3>No guides found</h3>
              <p>Try adjusting your search or category filter to find what you're looking for.</p>
            </div>
          ) : (
            <div className="guides-grid">
              {filteredGuides.map(guide => (
                <div key={guide.id} className="guide-card">
                  <div className="guide-thumbnail">
                    <div className="thumbnail-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="guide-details">
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                    <div className="guide-meta">
                      <span className="read-time">{guide.readTime}</span>
                                            <span className="update-date">Updated {formatDate(guide.updated)}</span>
                    </div>
                  </div>
                  <a href="#" className="guide-link">
                    <span>Read Guide</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="guides-footer">
        <div className="cant-find">
          <h3>Can't find what you're looking for?</h3>
          <div className="footer-actions">
            <button className="contact-support-btn">Contact Support</button>
            <button className="request-guide-btn">Request a Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
