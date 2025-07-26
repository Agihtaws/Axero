import React, { useState } from 'react';
import './AccountSettingsPage.css';

const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Sample user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@novaoffice.com',
    phone: '+1 (555) 123-4567',
    title: 'Product Manager',
    department: 'Product Development',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time (PT)',
    language: 'English (US)',
    bio: 'Experienced product manager with a passion for creating user-centered solutions.'
  };
  
  // Sample notification settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newMessages: true,
    taskAssignments: true,
    mentions: true,
    reminders: true,
    teamUpdates: false,
    weeklyDigest: true
  });
  
  const handleNotificationChange = (setting) => {
    setNotifications({
      ...notifications,
      [setting]: !notifications[setting]
    });
  };

  return (
    <main className="container page-container">
      <div className="page-header">
        <h1>Account Settings</h1>
        <button className="save-button">Save Changes</button>
      </div>
      
      <div className="settings-container">
        <div className="settings-sidebar">
          <div className="settings-tabs">
            <button 
              className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
              <span>Profile Information</span>
            </button>
            <button 
              className={`settings-tab ${activeTab === 'password' ? 'active' : ''}`}
              onClick={() => setActiveTab('password')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              </svg>
              <span>Password & Security</span>
            </button>
            <button 
              className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>
              <span>Notifications</span>
            </button>
            <button 
              className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
              </svg>
              <span>Appearance</span>
            </button>
            <button 
              className={`settings-tab \${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
              </svg>
              <span>Privacy</span>
            </button>
          </div>
        </div>
        
        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="settings-panel">
              <h2>Profile Information</h2>
              <p className="settings-description">Update your personal information and how it appears across your account.</p>
              
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" defaultValue={user.name} />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" defaultValue={user.email} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" defaultValue={user.phone} />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="title">Job Title</label>
                    <input type="text" id="title" defaultValue={user.title} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select id="department">
                      <option selected={user.department === 'Product Development'}>Product Development</option>
                      <option selected={user.department === 'Marketing'}>Marketing</option>
                      <option selected={user.department === 'Sales'}>Sales</option>
                      <option selected={user.department === 'Human Resources'}>Human Resources</option>
                      <option selected={user.department === 'Finance'}>Finance</option>
                      <option selected={user.department === 'IT Support'}>IT Support</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" defaultValue={user.location} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="timezone">Timezone</label>
                    <select id="timezone">
                      <option selected={user.timezone === 'Pacific Time (PT)'}>Pacific Time (PT)</option>
                      <option selected={user.timezone === 'Mountain Time (MT)'}>Mountain Time (MT)</option>
                      <option selected={user.timezone === 'Central Time (CT)'}>Central Time (CT)</option>
                      <option selected={user.timezone === 'Eastern Time (ET)'}>Eastern Time (ET)</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="language">Language</label>
                  <select id="language">
                    <option selected={user.language === 'English (US)'}>English (US)</option>
                    <option selected={user.language === 'English (UK)'}>English (UK)</option>
                    <option selected={user.language === 'Spanish'}>Spanish</option>
                    <option selected={user.language === 'French'}>French</option>
                    <option selected={user.language === 'German'}>German</option>
                    <option selected={user.language === 'Chinese'}>Chinese</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea id="bio" rows="4" defaultValue={user.bio}></textarea>
                  <span className="help-text">Brief description that appears on your profile.</span>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'password' && (
            <div className="settings-panel">
              <h2>Password & Security</h2>
              <p className="settings-description">Manage your password and security settings to keep your account safe.</p>
              
              <div className="form-section">
                <h3>Change Password</h3>
                
                <div className="form-group">
                  <label htmlFor="current-password">Current Password</label>
                  <input type="password" id="current-password" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="new-password">New Password</label>
                  <input type="password" id="new-password" />
                  <span className="help-text">Password must be at least 8 characters and include a number and special character.</span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm New Password</label>
                  <input type="password" id="confirm-password" />
                </div>
                
                <button className="update-button">Update Password</button>
              </div>
              
              <div className="form-section">
                <h3>Two-Factor Authentication</h3>
                <p>Add an extra layer of security to your account by enabling two-factor authentication.</p>
                
                <div className="toggle-container">
                  <span>Enable Two-Factor Authentication</span>
                  <label className="toggle">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Login Sessions</h3>
                <p>These are the devices that are currently logged into your account.</p>
                
                <div className="sessions-list">
                  <div className="session-item">
                    <div className="session-info">
                      <div className="device-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
                        </svg>
                      </div>
                      <div className="session-details">
                        <h4>MacBook Pro - Chrome</h4>
                        <div className="session-meta">
                          <span className="location">San Francisco, CA</span>
                          <span className="time">Current session</span>
                        </div>
                      </div>
                    </div>
                    <span className="session-status active">Current</span>
                  </div>
                  
                  <div className="session-item">
                    <div className="session-info">
                      <div className="device-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                      </div>
                      <div className="session-details">
                        <h4>iPhone 13 - Safari</h4>
                        <div className="session-meta">
                          <span className="location">San Francisco, CA</span>
                          <span className="time">Last active: Today at 10:45 AM</span>
                        </div>
                      </div>
                    </div>
                    <button className="session-action">Sign Out</button>
                  </div>
                  
                  <div className="session-item">
                    <div className="session-info">
                      <div className="device-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
                        </svg>
                      </div>
                      <div className="session-details">
                        <h4>Windows PC - Firefox</h4>
                        <div className="session-meta">
                          <span className="location">New York, NY</span>
                          <span className="time">Last active: Yesterday at 3:20 PM</span>
                        </div>
                      </div>
                    </div>
                    <button className="session-action">Sign Out</button>
                  </div>
                </div>
                
                <button className="danger-button">Sign Out From All Devices</button>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="settings-panel">
              <h2>Notification Settings</h2>
              <p className="settings-description">Control how and when you receive notifications across the platform.</p>
              
              <div className="form-section">
                <h3>Notification Channels</h3>
                
                <div className="toggle-container">
                  <span>Email Notifications</span>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.emailNotifications} 
                      onChange={() => handleNotificationChange('emailNotifications')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="toggle-container">
                  <span>Push Notifications</span>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.pushNotifications} 
                      onChange={() => handleNotificationChange('pushNotifications')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Notification Types</h3>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>New Messages</span>
                    <span className="toggle-description">Get notified when you receive a new message</span>
                  </div>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.newMessages} 
                      onChange={() => handleNotificationChange('newMessages')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>Task Assignments</span>
                    <span className="toggle-description">Get notified when you're assigned to a task</span>
                  </div>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.taskAssignments} 
                      onChange={() => handleNotificationChange('taskAssignments')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>Mentions</span>
                    <span className="toggle-description">Get notified when you're mentioned in comments</span>
                  </div>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.mentions} 
                      onChange={() => handleNotificationChange('mentions')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>Reminders</span>
                    <span className="toggle-description">Get notified about upcoming deadlines and events</span>
                  </div>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.reminders} 
                      onChange={() => handleNotificationChange('reminders')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>Team Updates</span>
                    <span className="toggle-description">Get notified about team activity and announcements</span>
                  </div>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.teamUpdates} 
                      onChange={() => handleNotificationChange('teamUpdates')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>Weekly Digest</span>
                    <span className="toggle-description">Receive a weekly summary of activity</span>
                  </div>
                  <label className="toggle">
                    <input 
                      type="checkbox" 
                      checked={notifications.weeklyDigest} 
                      onChange={() => handleNotificationChange('weeklyDigest')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div className="settings-panel">
              <h2>Appearance Settings</h2>
              <p className="settings-description">Customize how the application looks and feels.</p>
              
              <div className="form-section">
                <h3>Theme</h3>
                
                <div className="theme-options">
                  <div className="theme-option">
                    <div className="theme-preview light-theme"></div>
                    <div className="theme-option-info">
                      <span className="theme-name">Light</span>
                      <input type="radio" name="theme" id="light-theme" defaultChecked />
                      <label htmlFor="light-theme" className="radio-label"></label>
                    </div>
                  </div>
                  
                  <div className="theme-option">
                    <div className="theme-preview dark-theme"></div>
                    <div className="theme-option-info">
                      <span className="theme-name">Dark</span>
                      <input type="radio" name="theme" id="dark-theme" />
                      <label htmlFor="dark-theme" className="radio-label"></label>
                    </div>
                  </div>
                  
                  <div className="theme-option">
                    <div className="theme-preview system-theme"></div>
                    <div className="theme-option-info">
                      <span className="theme-name">System</span>
                      <input type="radio" name="theme" id="system-theme" />
                      <label htmlFor="system-theme" className="radio-label"></label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Density</h3>
                <p>Choose how compact you want the interface to be.</p>
                
                <div className="density-options">
                  <div className="density-option">
                    <input type="radio" name="density" id="comfortable" defaultChecked />
                    <label htmlFor="comfortable">
                      <span className="density-name">Comfortable</span>
                      <span className="density-description">More spacing between items</span>
                    </label>
                  </div>
                  
                  <div className="density-option">
                    <input type="radio" name="density" id="compact" />
                    <label htmlFor="compact">
                      <span className="density-name">Compact</span>
                      <span className="density-description">Less spacing between items</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'privacy' && (
            <div className="settings-panel">
              <h2>Privacy Settings</h2>
              <p className="settings-description">Manage your privacy preferences and control who can see your information.</p>
              
              <div className="form-section">
                <h3>Profile Visibility</h3>
                
                <div className="form-group">
                  <label htmlFor="profile-visibility">Who can see your profile information</label>
                  <select id="profile-visibility">
                    <option>Everyone in the organization</option>
                    <option>Only my team</option>
                    <option>Only my department</option>
                    <option>Only people I specify</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="online-status">Show online status to</label>
                  <select id="online-status">
                    <option>Everyone in the organization</option>
                    <option>Only my team</option>
                    <option>Only my department</option>
                    <option>Only people I specify</option>
                    <option>No one</option>
                  </select>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Activity Visibility</h3>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>Show my activity in team feeds</span>
                    <span className="toggle-description">Allow others to see your recent activity in team dashboards</span>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="toggle-container">
                  <div className="toggle-info">
                    <span>Allow others to tag me in posts</span>
                    <span className="toggle-description">Control whether others can mention or tag you</span>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Data & Privacy</h3>
                
                <button className="secondary-button">Download My Data</button>
                <button className="danger-button mt-4">Delete My Account</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AccountSettingsPage;
