import React, { useState } from 'react';

const RoutePlanner = () => {
    const [optimized, setOptimized] = useState(false);
    return (
        <div className="page-content" data-page="Route Planner">
            <h2 className="page-header">AI Route Optimization</h2>
            <div className="flex-grid">
                <div className="widget-card">
                    <h4>Plan a Route</h4>
                    <form className="booking-form">
                        <div className="form-group">
                            <label htmlFor="start-point">Starting Point</label>
                            <input type="text" id="start-point" name="start-point" defaultValue="Connaught Place, New Delhi" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-point">Ending Point</label>
                            <input type="text" id="end-point" name="end-point" defaultValue="Gurugram, Haryana" />
                        </div>
                        <button type="button" className="btn-primary" onClick={() => setOptimized(true)}>
                            {optimized ? 'Route Optimized!' : 'Optimize Route with AI'}
                        </button>
                    </form>
                    
                    {optimized && (
                        <div className="route-result">
                            <h4>Optimized Route Details</h4>
                            <p><strong>Estimated Distance:</strong> 28.5 km (Saved 4.2 km vs. standard route)</p>
                            <p><strong>Estimated Time:</strong> 45 minutes (Saved 15 minutes in current traffic)</p>
                            <p><strong>AI Suggestion:</strong> Avoids NH48 due to heavy congestion. Recommends taking the Mehrauli-Gurugram road.</p>
                        </div>
                    )}
                </div>
                 {optimized && (
                    <div className="widget-card">
                        <h4>Optimized Route Visualization</h4>
                        <div className="route-map-container">
                             <iframe
                                title="Optimized Route Map"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d89698.83580190334!2d77.0202313361623!3d28.52780653556704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sConnaught+Place%2C+New+Delhi%2C+Delhi!3m2!1d28.6304203!2d77.21772159999999!4m5!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C+Haryana!3m2!1d28.4594965!2d77.0266383!5e0!3m2!1sen!2sin!4v1668882823028!5m2!1sen!2sin">
                            </iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoutePlanner;
