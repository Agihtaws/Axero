import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import ResourceLinks from './components/ResourceLinks/ResourceLinks';
import HelpSupport from './components/HelpSupport/HelpSupport';
import Footer from './components/Footer/Footer';
import LoadingState from './components/LoadingState/LoadingState';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import Meetings from './pages/Meetings/Meetings';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import DocumentsPage from './pages/DocumentsPage/DocumentsPage';
import Inbox from './components/Inbox/Inbox';
import AnnouncementsPage from './components/AnnouncementsPage/AnnouncementsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AccountSettingsPage from './pages/AccountSettingsPage/AccountSettingsPage';
import HelpCenterPage from './pages/HelpCenterPage/HelpCenterPage';
import TasksPage from './components/TasksPage/TasksPage'; // Import the TasksPage component
import TimeOffPage from './components/TimeOffPage/TimeOffPage';
import ExpensePage from './components/ExpensePage/ExpensePage';
import MoreActionsPage from './components/MoreActionsPage/MoreActionsPage';
import TicketPage from './components/TicketPage/TicketPage';
import ChatSupportPage from './components/ChatSupportPage/ChatSupportPage';
import GuidesPage from './components/GuidesPage/GuidesPage';
import ContactSupportPage from './components/ContactSupportPage/ContactSupportPage';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  if (loading) {
    return <LoadingState />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={
            <main className="container">
              <Hero userName="Alex" />
              <Dashboard />
              <ResourceLinks />
              <HelpSupport />
            </main>
          } />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/tasks" element={<TasksPage />} /> {/* Add the Tasks route */}
          <Route path="/time-off" element={<TimeOffPage />} />
          <Route path="/expenses" element={<ExpensePage />} />
          <Route path="/more-actions" element={<MoreActionsPage />} />
          <Route path="/create-ticket" element={<TicketPage />} />
          <Route path="/chat-support" element={<ChatSupportPage />} />
          <Route path="/knowledge-base" element={<GuidesPage />} />
          <Route path="/contact-support" element={<ContactSupportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
