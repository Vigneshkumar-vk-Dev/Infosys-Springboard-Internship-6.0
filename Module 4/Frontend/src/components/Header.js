import React from 'react';

const Header = ({ activePage, onNotificationsClick, onSettingsClick, onProfileClick }) => {
  return (
    <header className="dashboard-header">
      <div className="header-greeting">
        <h3>{activePage === 'Dashboard' ? 'Dashboard Overview' : activePage}</h3>
      </div>
      <div className="header-actions">
        <input type="search" placeholder="Search" className="search-bar" />
        <button id="notifications-btn" className="icon-button" onClick={onNotificationsClick}>🔔</button>
        <button id="settings-btn" className="icon-button" onClick={onSettingsClick}>⚙️</button>
        <div className="user-profile">
          <img id="profile-btn" src="https://placehold.co/40x40/00B87C/FFFFFF?text=DJ" alt="User" onClick={onProfileClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
