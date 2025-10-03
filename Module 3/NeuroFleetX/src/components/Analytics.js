import React, { useState } from 'react';

const Analytics = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [reportStatus, setReportStatus] = useState('');

    // --- Data for Charts & Tables ---

    // Data for "Revenue Over Time" chart
    const revenueData = [
        { month: 'Oct', revenue: 85 }, { month: 'Nov', revenue: 92 }, { month: 'Dec', revenue: 110 },
        { month: 'Jan', revenue: 95 }, { month: 'Feb', revenue: 105 }, { month: 'Mar', revenue: 120 },
        { month: 'Apr', revenue: 118 }, { month: 'May', revenue: 125 }, { month: 'Jun', revenue: 130 },
        { month: 'Jul', revenue: 128 }, { month: 'Aug', revenue: 140 }, { month: 'Sep', revenue: 135 },
    ];
    const maxRevenue = Math.max(...revenueData.map(d => d.revenue), 1);

    // Data for "Avg. Fuel Efficiency" chart
    const fuelEfficiencyData = [
        { month: 'Apr', kmpl: 12.1 }, { month: 'May', kmpl: 12.3 }, { month: 'Jun', kmpl: 11.9 },
        { month: 'Jul', kmpl: 12.5 }, { month: 'Aug', kmpl: 12.8 }, { month: 'Sep', kmpl: 12.6 },
    ];
    const maxKmpl = Math.max(...fuelEfficiencyData.map(d => d.kmpl), 1);

    // Data for "Trips per Vehicle Type" chart
    const vehicleTripsData = [
        { type: 'Sedan', trips: 1850 }, { type: 'SUV', trips: 1230 }, 
        { type: 'Van', trips: 980 }, { type: 'Truck', trips: 461 }
    ];
    const maxTrips = Math.max(...vehicleTripsData.map(v => v.trips), 1);
    
    // Data for "Revenue by Vehicle Type" chart
    const vehicleRevenueData = [
        { type: 'Sedan', revenue: 45000 }, { type: 'SUV', revenue: 52000 },
        { type: 'Van', revenue: 75000 }, { type: 'Truck', revenue: 68000 }
    ];
    const maxVehicleRevenue = Math.max(...vehicleRevenueData.map(v => v.revenue), 1);
    
    // Expanded historical data for the table and for full download
    const historicalTripData = [
        { id: 'T8921', vehicle: 'Sedan #8', driver: 'Alex Ray', date: '2025-09-29', distance: 15.2, revenue: 25.50, status: 'Completed' },
        { id: 'T8920', vehicle: 'Van #2', driver: 'Jane Smith', date: '2025-09-29', distance: 42.1, revenue: 75.20, status: 'Completed' },
        { id: 'T8919', vehicle: 'SUV #5', driver: 'Mike Olsen', date: '2025-09-28', distance: 8.5, revenue: 15.00, status: 'Cancelled' },
        { id: 'T8918', vehicle: 'Sedan #11', driver: 'Alex Ray', date: '2025-09-28', distance: 22.0, revenue: 38.75, status: 'Completed' },
        { id: 'T8917', vehicle: 'Truck #1', driver: 'Jane Smith', date: '2025-09-27', distance: 150.5, revenue: 350.00, status: 'Completed' },
        { id: 'T8916', vehicle: 'Sedan #8', driver: 'Mike Olsen', date: '2025-09-27', distance: 5.1, revenue: 9.80, status: 'Completed' },
        { id: 'T8915', vehicle: 'SUV #7', driver: 'Alex Ray', date: '2025-09-26', distance: 31.2, revenue: 55.40, status: 'Completed' },
        { id: 'T8914', vehicle: 'Van #3', driver: 'Jane Smith', date: '2025-09-26', distance: 25.0, revenue: 48.90, status: 'Completed' }
    ];

    // --- Helper function to download data as CSV ---
    const downloadCSV = (data, filename = 'report.csv') => {
        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(header => `"${row[header]}"`).join(',')) // Enclose in quotes for safety
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.href) {
            URL.revokeObjectURL(link.href);
        }
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // --- Event Handlers for Report Generation ---

    const handleGenerateSummaryReport = () => {
        setReportStatus('Generating summary report...');
        setTimeout(() => {
            const reportData = [
                { Metric: "Total Revenue (YTD)", Value: "$1.2M" },
                { Metric: "Total Trips (YTD)", Value: "4,521" },
                { Metric: "Avg. Fuel Efficiency", Value: "12.5 km/l" },
                ...vehicleTripsData.map(d => ({ Metric: `Trips - ${d.type}`, Value: d.trips }))
            ];
            downloadCSV(reportData, `NeuroFleetX_Summary_Report_${new Date().toISOString().split('T')[0]}.csv`);
            setReportStatus('Summary report has been successfully downloaded.');
        }, 1500);
    };

    const handleDownloadFullLog = () => {
        setReportStatus('Preparing full trip log for download...');
        setTimeout(() => {
            downloadCSV(historicalTripData, `NeuroFleetX_Full_Trip_Log_${new Date().toISOString().split('T')[0]}.csv`);
            setReportStatus('Full trip log has been successfully downloaded.');
        }, 1000);
    };
    
    return (
        <div className="page-content" data-page="Analytics">
            <h2 className="page-header">Historical Analytics & Reporting</h2>
            <div className="tabs">
                <div className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</div>
                <div className={`tab ${activeTab === 'historical' ? 'active' : ''}`} onClick={() => setActiveTab('historical')}>Historical Data</div>
                <div className={`tab ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>Generate Reports</div>
            </div>
            
            {activeTab === 'overview' && (
                <div className="analytics-grid">
                    <div className="analytics-card">
                        <h4>Total Revenue (YTD)</h4>
                        <div className="analytics-value">$1.2M</div>
                    </div>
                    <div className="analytics-card">
                        <h4>Total Trips (YTD)</h4>
                        <div className="analytics-value">4,521</div>
                    </div>
                    <div className="analytics-card" style={{gridColumn: '1 / -1'}}>
                        <h4>Avg. Fuel Efficiency (Last 6 Months)</h4>
                        <div className="bar-chart">
                             {fuelEfficiencyData.map(data => (
                                <div key={data.month} className="bar-wrapper">
                                    <div 
                                        className="bar" 
                                        style={{ height: `${(data.kmpl / maxKmpl) * 80}%` }}
                                        title={`${data.kmpl} km/l`}
                                    ></div>
                                    <span className="bar-label">{data.month}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="analytics-card" style={{ gridColumn: '1 / -1' }}>
                        <h4>Revenue Over Time (Last 12 Months)</h4>
                        <div className="bar-chart">
                             {revenueData.map(data => (
                                <div key={data.month} className="bar-wrapper">
                                    <div 
                                        className="bar" 
                                        style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                                        title={`$${data.revenue}k`}
                                    ></div>
                                    <span className="bar-label">{data.month}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'historical' && (
                <div className="widget-card">
                    <h4>Filter Historical Trip Data</h4>
                    <div className="filter-controls">
                        <label htmlFor="start-date">From:</label>
                        <input type="date" id="start-date" name="start-date" />
                        <label htmlFor="end-date">To:</label>
                        <input type="date" id="end-date" name="end-date" />
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr><th>Trip ID</th><th>Vehicle</th><th>Driver</th><th>Date</th><th>Distance (km)</th><th>Revenue ($)</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                            {historicalTripData.map(trip => (
                                <tr key={trip.id}>
                                    <td>{trip.id}</td>
                                    <td>{trip.vehicle}</td>
                                    <td>{trip.driver}</td>
                                    <td>{trip.date}</td>
                                    <td>{trip.distance}</td>
                                    <td>{trip.revenue.toFixed(2)}</td>
                                    <td><div className={`driver-status status-${trip.status.toLowerCase()}`}>{trip.status}</div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {activeTab === 'reports' && (
                <div className="widget-card report-section">
                    <h4>Generate Custom Report</h4>
                    <p>Select metrics and date ranges to generate downloadable PDF/CSV reports.</p>
                    <div className="report-charts-grid">
                        <div className="analytics-card">
                            <h4>Trips per Vehicle Type</h4>
                            <div className="bar-chart">
                                {vehicleTripsData.map(data => (
                                    <div key={data.type} className="bar-wrapper">
                                        <div 
                                            className="bar" 
                                            style={{ height: `${(data.trips / maxTrips) * 100}%` }}
                                            title={`${data.trips} trips`}
                                        ></div>
                                        <span className="bar-label">{data.type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="analytics-card">
                            <h4>Revenue by Vehicle Type</h4>
                            <div className="bar-chart">
                                {vehicleRevenueData.map(data => (
                                    <div key={data.type} className="bar-wrapper">
                                        <div 
                                            className="bar" 
                                            style={{ height: `${(data.revenue / maxVehicleRevenue) * 100}%` }}
                                            title={`$${data.revenue.toLocaleString()}`}
                                        ></div>
                                        <span className="bar-label">{data.type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="report-actions">
                        <button className="btn-primary" onClick={handleGenerateSummaryReport}>Generate Summary Report</button>
                        <button className="btn-primary btn-secondary" onClick={handleDownloadFullLog}>Download Full Trip Log</button>
                    </div>
                    {reportStatus && <div className="report-status">{reportStatus}</div>}
                </div>
            )}
        </div>
    );
};

export default Analytics;
