import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  // Sample user data
  const user = {
    id: 1,
    name: 'Alex Johnson',
    role: 'Product Manager',
    email: 'alex.johnson@novaoffice.com',
    department: 'Product Development',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    joinDate: 'March 15, 2023',
    bio: 'Experienced product manager with a passion for creating user-centered solutions. I specialize in leading cross-functional teams to deliver innovative products that solve real customer problems.',
    skills: ['Product Strategy', 'User Research', 'Agile Methodologies', 'Team Leadership', 'Stakeholder Management', 'Market Analysis'],
    education: [
      {
        degree: 'MBA, Business Administration',
        institution: 'Stanford University',
        year: '2018-2020'
      },
      {
        degree: 'BS, Computer Science',
        institution: 'UC Berkeley',
        year: '2014-2018'
      }
    ],
    experience: [
      {
        position: 'Product Manager',
        company: 'NovaOffice',
        period: '2023 - Present'
      },
      {
        position: 'Associate Product Manager',
        company: 'TechCorp Inc.',
        period: '2020 - 2023'
      },
      {
        position: 'Product Analyst',
        company: 'InnovateSoft',
        period: '2018 - 2020'
      }
    ],
    projects: [
      {
        name: 'Website Redesign',
        description: 'Led the complete overhaul of company website, resulting in 40% increase in user engagement'
      },
      {
        name: 'Mobile App Development',
        description: 'Managed the development of our flagship mobile application with over 100,000 downloads'
      },
      {
        name: 'Customer Feedback System',
        description: 'Implemented new feedback collection system that improved product decisions'
      }
    ]
  };

  return (
    <main className="container page-container">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-header-content">
          <div className="profile-avatar large">{user.name.split(' ').map(n => n[0]).join('')}</div>
          <div className="profile-header-info">
            <h1>{user.name}</h1>
            <p className="profile-title">{user.role} • {user.department}</p>
            <div className="profile-contact-info">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                </svg>
                <span>{user.email}</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <span>{user.phone}</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span>{user.location}</span>
              </div>
            </div>
          </div>
          <div className="profile-actions">
            <button className="primary-button">Edit Profile</button>
            <button className="secondary-button">Message</button>
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>About</h2>
          <p className="profile-bio">{user.bio}</p>
        </div>
        
        <div className="profile-section">
          <h2>Skills</h2>
          <div className="skills-list">
            {user.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Experience</h2>
          <div className="experience-list">
            {user.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <h3>{exp.position}</h3>
                <div className="experience-details">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Education</h2>
          <div className="education-list">
            {user.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.degree}</h3>
                <div className="education-details">
                  <span className="institution">{edu.institution}</span>
                  <span className="year">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Projects</h2>
          <div className="projects-list">
            {user.projects.map((project, index) => (
              <div key={index} className="project-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
