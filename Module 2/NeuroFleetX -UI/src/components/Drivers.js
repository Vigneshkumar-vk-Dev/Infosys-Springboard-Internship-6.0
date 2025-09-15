import React from 'react';

const Drivers = () => {
    return (
        <div className="page-content" data-page="Drivers">
            <h2 className="page-header">Driver Management</h2>
            <div className="widget-card">
                <table className="drivers-table">
                    <thead>
                        <tr><th>Driver Name</th><th>Rating</th><th>Total Trips</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className="driver-name"><img src="https://placehold.co/40x40/2ecc71/ffffff?text=AR" alt="AR" /><span>Alex Ray</span></div></td>
                            <td>4.9 ⭐</td>
                            <td>1,204</td>
                            <td><div className="driver-status status-online">Online</div></td>
                        </tr>
                        <tr>
                            <td><div className="driver-name"><img src="https://placehold.co/40x40/3498db/ffffff?text=JS" alt="JS" /><span>Jane Smith</span></div></td>
                            <td>4.8 ⭐</td>
                            <td>982</td>
                            <td><div className="driver-status status-on-trip">On Trip</div></td>
                        </tr>
                        <tr>
                            <td><div className="driver-name"><img src="https://placehold.co/40x40/e74c3c/ffffff?text=MO" alt="MO" /><span>Mike Olsen</span></div></td>
                            <td>4.7 ⭐</td>
                            <td>1,530</td>
                            <td><div className="driver-status status-offline">Offline</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Drivers;
