import React from 'react';

const Analytics = () => {
    return (
        <div className="page-content" data-page="Analytics">
            <h2 className="page-header">Analytics & Reporting</h2>
            <div className="analytics-grid">
                <div className="analytics-card">
                    <h4>Total Revenue</h4>
                    <div className="analytics-value">$1.2M</div>
                </div>
                <div className="analytics-card">
                    <h4>Total Trips</h4>
                    <div className="analytics-value">4,521</div>
                </div>
                <div className="analytics-card">
                    <h4>Average Trip Duration</h4>
                    <div className="analytics-value">18 min</div>
                </div>
                <div className="analytics-card" style={{ gridColumn: '1 / -1' }}>
                    <h4>Revenue Over Time</h4>
                    <div className="chart-placeholder"><img src="https://i.imgur.com/5uCF5DE.png" alt="Revenue Chart"/></div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
