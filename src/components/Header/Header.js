import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import NotificationBell from '../NotificationBell/NotificationBell';
import UserProfile from '../UserProfile/UserProfile';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <span className="logo-text">Axero</span>
          </Link>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
  <ul className="nav-list">
    <li className="nav-item">
      <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Dashboard</Link>
    </li>
    <li className="nav-item">
      <Link to="/teams" className={`nav-link ${isActive('/teams') ? 'active' : ''}`}>Teams</Link>
    </li>
    <li className="nav-item">
      <Link to="/meetings" className={`nav-link ${isActive('/meetings') ? 'active' : ''}`}>Meetings</Link>
    </li>
    <li className="nav-item">
      <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
    </li>
    <li className="nav-item">
      <Link to="/calendar" className={`nav-link ${isActive('/calendar') ? 'active' : ''}`}>Calendar</Link>
    </li>
    <li className="nav-item">
      <Link to="/documents" className={`nav-link ${isActive('/documents') ? 'active' : ''}`}>Documents</Link>
    </li>
  </ul>
</nav>

        <div className="header-actions">
          <SearchBar />
          <NotificationBell count={3} />
          <button 
            className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="sun-icon">☀️</span>
            <span className="moon-icon">🌙</span>
            <span className="toggle-thumb"></span>
          </button>
          <UserProfile name="Alex Johnson" role="Product Manager" />
        </div>
      </div>
    </header>
  );
};

export default Header;
