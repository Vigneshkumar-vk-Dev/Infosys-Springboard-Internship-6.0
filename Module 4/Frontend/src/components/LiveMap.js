import React from 'react';

const LiveMap = () => {
    return (
        <div className="page-content" data-page="Live Map">
            <h2 className="page-header">Live Map</h2>
            <div className="widget-card map-widget full-page-map">
                <iframe
                    title="Live Fleet Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5264627763!2d76.81307299667618!3d28.64368463554474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1668882823028!5m2!1sen!2sin">
                </iframe>
            </div>
        </div>
    );
};

export default LiveMap;
