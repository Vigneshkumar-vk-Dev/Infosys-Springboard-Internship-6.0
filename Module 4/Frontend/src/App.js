import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Modal from './components/Modal';
import Dashboard from './components/Dashboard';
import LiveMap from './components/LiveMap';
import Alerts from './components/Alerts';
import Drivers from './components/Drivers';
import Analytics from './components/Analytics';
import Booking from './components/Booking';
import RoutePlanner from './components/RoutePlanner';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActivePage('Dashboard');
  };

  const showModal = (title, content) => {
    setModalContent({ title, body: content });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleModalLogoutClick = e => {
      if (e.target && e.target.id === 'logout-button-modal') {
        handleLogout();
        closeModal();
      }
    };
    if (isLoggedIn) {
      document.addEventListener('click', handleModalLogoutClick);
    }
    return () => document.removeEventListener('click', handleModalLogoutClick);
  }, [isLoggedIn, handleLogout]);

  const notificationsContent = `<ul><li>Maintenance Due: Vehicle #3</li><li>New Trip Assigned: #451 to Alex Ray.</li></ul>`;
  const settingsContent = `<div><h4>Theme</h4><p>You can toggle between light and dark themes from the login screen.</p></div>`;
  const profileContent = `<div style="text-align: center;"><img src="https://placehold.co/80x80/00B87C/FFFFFF?text=DJ" alt="User Profile" style="border-radius: 50%; margin-bottom: 15px;"><h3>David John</h3><p>david.john@example.com</p><button id="logout-button-modal" style="background-color: var(--critical-red); width: 100%; color: white; padding: 10px; border: none; border-radius: 8px; cursor: pointer; margin-top: 1rem;">Logout</button></div>`;

  const renderPage = () => {
    switch (activePage) {
      case 'Live Map': return <LiveMap />;
      case 'Alerts': return <Alerts />;
      case 'Drivers': return <Drivers />;
      case 'Analytics': return <Analytics />;
      case 'Booking': return <Booking />;
      case 'Route Planner': return <RoutePlanner />;
      default: return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return (
        <Login onLogin={handleLogin} toggleTheme={toggleTheme} theme={theme} />
    );
  }

  return (
    <div className="app-shell">
      {isModalOpen && (
        <Modal 
          title={modalContent.title} 
          content={<div dangerouslySetInnerHTML={{ __html: modalContent.body }} />} 
          onClose={closeModal} 
        />
      )}
      <div className="dashboard-layout">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <Header 
          activePage={activePage}
          onNotificationsClick={() => showModal('Notifications', notificationsContent)}
          onSettingsClick={() => showModal('Settings', settingsContent)}
          onProfileClick={() => showModal('Profile', profileContent)}
        />
        <main className="main-content-area">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;