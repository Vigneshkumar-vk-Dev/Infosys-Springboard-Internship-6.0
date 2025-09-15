import React from 'react';

const Dashboard = () => {
    return (
        <div className="page-content" data-page="Dashboard">
            <div className="main-grid">
                <div className="widget-grid">
                    <div className="widget-card map-widget">
                        <iframe
                            title="Dashboard Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5264627763!2d76.81307299667618!3d28.64368463554474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1668882823028!5m2!1sen!2sin">
                        </iframe>
                    </div>
                    <div className="widget-card fleet-performance-widget">
                        <h4>Fleet Performance</h4>
                        <table className="performance-table">
                            <thead><tr><th>FLEET</th><th>PERFORMANCE RATE</th><th>REVENUE</th></tr></thead>
                            <tbody>
                                <tr><td>#WO 092639</td><td><div className="performance-bar-container"><div className="performance-bar" style={{ width: '85%' }}></div></div> 85%</td><td>$98.78</td></tr>
                                <tr><td>#WO 638221</td><td><div className="performance-bar-container"><div className="performance-bar" style={{ width: '78%' }}></div></div> 78%</td><td>$68.18</td></tr>
                                <tr><td>#WO 281786</td><td><div className="performance-bar-container"><div className="performance-bar" style={{ width: '65%' }}></div></div> 65%</td><td>$56.48</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="widget-card revenue-widget">
                        <h4>Revenue</h4>
                        <div className="revenue-summary">
                            <div><span>Avg Revenue</span><strong>$957k <span className="positive">+17%</span></strong></div>
                            <div><span>Avg Income</span><strong>$891k <span className="positive">+25%</span></strong></div>
                            <div><span>Last year income</span><strong>$90.00 <span className="negative">-17%</span></strong></div>
                        </div>
                        <div className="chart-placeholder"><img src="https://i.imgur.com/5uCF5DE.png" alt="Revenue Chart"/></div>
                    </div>
                    <div className="widget-card stat-card">
                        <h4>Vehicles Under Maintenance</h4><div className="stat-value">18</div><div className="stat-change">Increased from last month</div>
                    </div>
                    <div className="widget-card stat-card">
                        <h4>Total Vehicles</h4><div className="stat-value">91</div><div className="stat-change">Increased from last month</div>
                    </div>
                </div>
                <aside className="right-sidebar">
                    <div className="widget-card fleet-utilization">
                        <h4>Fleet Utilization</h4>
                        <div className="chart-container"><div className="doughnut-chart"><span className="chart-value">68%</span></div></div>
                        <div className="chart-legend"><span>Active Trips</span><span>Idle Vehicles</span><span>Under Maintenance</span></div>
                    </div>
                    <div className="widget-card">
                        <h4>Recent trip</h4>
                        <ul className="info-list"><li><div className="item-icon">🚐</div><div className="item-details"><strong>David's vans</strong><span>123 Green street, S to 125 Kings Road</span></div><span className="item-status">Done</span></li></ul>
                    </div>
                    <div className="widget-card">
                        <h4>Live Tracking</h4>
                        <ul className="info-list">
                            <li><div className="item-icon" style={{ backgroundColor: '#4CAF50' }}>🚚</div><div className="item-details"><strong>Noah Car</strong><span>123 Green street</span></div></li>
                            <li><div className="item-icon" style={{ backgroundColor: '#FFC107' }}>🚚</div><div className="item-details"><strong>Jeep Car</strong><span>523 Mountain Road</span></div></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;
