import React, { useState } from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample projects data
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Revamp the company website with a modern design and improved user experience',
      status: 'in-progress',
      progress: 65,
      dueDate: '2025-08-15',
      team: 'Product Development',
      priority: 'high',
      tasks: { completed: 18, total: 32 }
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Create a native mobile application for iOS and Android platforms',
      status: 'planning',
      progress: 20,
      dueDate: '2025-10-01',
      team: 'Product Development',
      priority: 'high',
      tasks: { completed: 5, total: 45 }
    },
    {
      id: 3,
      name: 'Q3 Marketing Campaign',
      description: 'Plan and execute the marketing campaign for the third quarter',
      status: 'in-progress',
      progress: 40,
      dueDate: '2025-09-30',
      team: 'Marketing',
      priority: 'medium',
      tasks: { completed: 12, total: 28 }
    },
    {
      id: 4,
      name: 'Customer Feedback Implementation',
      description: 'Analyze and implement changes based on recent customer feedback',
      status: 'completed',
      progress: 100,
      dueDate: '2025-07-10',
      team: 'Customer Support',
      priority: 'medium',
      tasks: { completed: 24, total: 24 }
    },
    {
      id: 5,
      name: 'Sales Training Program',
      description: 'Develop and conduct training sessions for the sales team',
      status: 'in-progress',
      progress: 80,
      dueDate: '2025-07-31',
      team: 'Sales',
      priority: 'low',
      tasks: { completed: 16, total: 20 }
    },
    {
      id: 6,
      name: 'Product Launch: Version 2.0',
      description: 'Prepare and execute the launch of our product version 2.0',
      status: 'planning',
      progress: 15,
      dueDate: '2025-11-15',
      team: 'Product Development',
      priority: 'high',
      tasks: { completed: 3, total: 36 }
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const getStatusText = (status) => {
    switch (status) {
      case 'planning': return 'Planning';
      case 'in-progress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return status;
    }
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="container page-container">
      <div className="page-header">
        <h1>Projects</h1>
        <button className="create-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          New Project
        </button>
      </div>
      
      <div className="projects-filters">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'planning' ? 'active' : ''}`}
            onClick={() => setFilter('planning')}
          >
            Planning
          </button>
          <button 
            className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
            onClick={() => setFilter('in-progress')}
          >
            In Progress
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        
        <div className="projects-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <input type="text" placeholder="Search projects..." />
        </div>
      </div>
      
      <div className="projects-list">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h2 className="project-name">{project.name}</h2>
              <span className={`project-status status-${project.status}`}>
                {getStatusText(project.status)}
              </span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Team:</span>
                <span className="meta-value">{project.team}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Due:</span>
                <span className="meta-value">{formatDate(project.dueDate)}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Priority:</span>
                <span className={`meta-value priority-${project.priority}`}>{project.priority}</span>
              </div>
            </div>
            
            <div className="project-progress">
              <div className="progress-header">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="tasks-count">
                {project.tasks.completed} of {project.tasks.total} tasks completed
              </div>
            </div>
            
            <div className="project-actions">
              <button className="project-btn primary">View Details</button>
              <button className="project-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
