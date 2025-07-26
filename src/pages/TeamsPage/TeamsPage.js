import React, { useState } from 'react';
import './TeamsPage.css';

const TeamsPage = () => {
  const [activeTeam, setActiveTeam] = useState(null);
  
  // Sample teams data
  const teams = [
    {
      id: 1,
      name: 'Product Development',
      description: 'Responsible for designing and building our core products',
      members: [
        { id: 1, name: 'Alex Johnson', role: 'Product Manager', avatar: 'AJ' },
        { id: 2, name: 'Sarah Williams', role: 'UX Designer', avatar: 'SW' },
        { id: 3, name: 'Michael Brown', role: 'Frontend Developer', avatar: 'MB' },
        { id: 4, name: 'Emily Davis', role: 'Backend Developer', avatar: 'ED' },
        { id: 5, name: 'David Wilson', role: 'QA Engineer', avatar: 'DW' },
      ]
    },
    {
      id: 2,
      name: 'Marketing',
      description: 'Handles all marketing, communications, and brand initiatives',
      members: [
        { id: 6, name: 'Jessica Lee', role: 'Marketing Director', avatar: 'JL' },
        { id: 7, name: 'Robert Miller', role: 'Content Strategist', avatar: 'RM' },
        { id: 8, name: 'Jennifer Clark', role: 'Social Media Manager', avatar: 'JC' },
      ]
    },
    {
      id: 3,
      name: 'Customer Support',
      description: 'Provides assistance and technical support to our customers',
      members: [
        { id: 9, name: 'Thomas Anderson', role: 'Support Manager', avatar: 'TA' },
        { id: 10, name: 'Lisa White', role: 'Support Specialist', avatar: 'LW' },
        { id: 11, name: 'Kevin Martin', role: 'Support Specialist', avatar: 'KM' },
        { id: 12, name: 'Amanda Lewis', role: 'Customer Success', avatar: 'AL' },
      ]
    },
    {
      id: 4,
      name: 'Sales',
      description: 'Drives revenue growth through client acquisition and relationship management',
      members: [
        { id: 13, name: 'Daniel Taylor', role: 'Sales Director', avatar: 'DT' },
        { id: 14, name: 'Sophia Garcia', role: 'Account Executive', avatar: 'SG' },
        { id: 15, name: 'James Rodriguez', role: 'Sales Representative', avatar: 'JR' },
      ]
    }
  ];

  const handleTeamClick = (teamId) => {
    setActiveTeam(teamId === activeTeam ? null : teamId);
  };

  return (
    <main className="container page-container">
      <div className="page-header">
        <h1>Teams</h1>
        <button className="create-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Create Team
        </button>
      </div>
      
      <div className="teams-grid">
        {teams.map(team => (
          <div 
            key={team.id} 
            className={`team-card ${activeTeam === team.id ? 'expanded' : ''}`}
            onClick={() => handleTeamClick(team.id)}
          >
            <div className="team-card-header">
              <h2 className="team-name">{team.name}</h2>
              <span className="member-count">{team.members.length} members</span>
            </div>
            
            <p className="team-description">{team.description}</p>
            
            <div className="team-members">
              <h3>Team Members</h3>
              <div className="members-list">
                {team.members.map(member => (
                  <div key={member.id} className="member-item">
                    <div className="member-avatar">{member.avatar}</div>
                    <div className="member-info">
                      <span className="member-name">{member.name}</span>
                      <span className="member-role">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="team-actions">
              <button className="team-action-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                Edit Team
              </button>
              <button className="team-action-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Add Member
              </button>
              <button className="team-action-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                Team Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TeamsPage;
