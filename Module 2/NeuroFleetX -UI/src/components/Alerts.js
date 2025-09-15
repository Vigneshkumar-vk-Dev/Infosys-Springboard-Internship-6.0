import React from 'react';

const Alerts = () => {
    return (
        <div className="page-content" data-page="Alerts">
            <h2 className="page-header">Alerts</h2>
            <div className="widget-card">
                <ul className="alerts-list">
                    <li className="alert-item">
                        <div className="alert-icon">⚠️</div>
                        <div className="alert-details">
                            <strong>Engine Overheating</strong>
                            <span>Vehicle #7 - CityMover 5</span>
                        </div>
                        <div className="alert-severity severity-critical">Critical</div>
                    </li>
                    <li className="alert-item">
                        <div className="alert-icon">🔋</div>
                        <div className="alert-details">
                            <strong>Low Battery</strong>
                            <span>Vehicle #12 - UrbanPod X</span>
                        </div>
                        <div className="alert-severity severity-high">High</div>
                    </li>
                    <li className="alert-item">
                        <div className="alert-icon">🔧</div>
                        <div className="alert-details">
                            <strong>Maintenance Due</strong>
                            <span>Vehicle #3 - EcoCruiser 1</span>
                        </div>
                        <div className="alert-severity severity-medium">Medium</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Alerts;
