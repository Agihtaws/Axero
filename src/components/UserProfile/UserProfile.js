import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = ({ name, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="user-profile">
      <button className="profile-button" onClick={toggleDropdown}>
        <span className="avatar">{getInitials(name)}</span>
      </button>

      {isOpen && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <span className="avatar large">{getInitials(name)}</span>
            <div className="profile-info">
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          </div>
          
          <ul className="profile-menu">
            <li><Link to="/profile" onClick={() => setIsOpen(false)}>My Profile</Link></li>
            <li><Link to="/account-settings" onClick={() => setIsOpen(false)}>Account Settings</Link></li>
            <li><Link to="/help-center" onClick={() => setIsOpen(false)}>Help Center</Link></li>
            <li className="divider"></li>
            <li><a href="#logout" className="logout">Sign Out</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
