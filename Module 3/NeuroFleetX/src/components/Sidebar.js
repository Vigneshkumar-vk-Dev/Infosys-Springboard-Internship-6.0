import React from 'react';

const Sidebar = ({ activePage, setActivePage }) => {
    const navItems = ['Dashboard', 'Live Map', 'Alerts', 'Drivers', 'Analytics', 'Booking', 'Route Planner'];
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>NeuroFleetX</h1>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map(item => (
                        <li 
                            key={item} 
                            className={activePage === item ? 'active' : ''}
                            onClick={() => setActivePage(item)}
                            data-nav={item}
                        >
                            <div className="nav-icon"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
