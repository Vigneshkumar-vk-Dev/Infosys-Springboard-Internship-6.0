import React, { useState } from 'react';

const Booking = () => {
    const [bookings, setBookings] = useState([
        { id: 1, vehicle: 'Cargo Van #3', date: '2025-10-05', route: 'Warehouse A to Port B', status: 'Pending' },
        { id: 2, vehicle: 'Sedan #12', date: '2025-10-02', route: 'Airport to Downtown Hotel', status: 'In Progress' }
    ]);

    const [newBooking, setNewBooking] = useState({
        vehicleType: 'Standard Sedan',
        date: '',
        pickup: '',
        dropoff: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBooking(prev => ({ ...prev, [name]: value }));
    };

    const handleAddBooking = (e) => {
        e.preventDefault();
        if (!newBooking.date || !newBooking.pickup || !newBooking.dropoff) {
            // A simple validation instead of an alert
            console.error("Please fill all fields to book a vehicle.");
            return;
        }

        const newEntry = {
            id: Date.now(), // simple unique id
            vehicle: `${newBooking.vehicleType} #${Math.floor(Math.random() * 100)}`,
            date: newBooking.date,
            route: `${newBooking.pickup} to ${newBooking.dropoff}`,
            status: 'Booked'
        };

        setBookings(prev => [...prev, newEntry].sort((a, b) => new Date(a.date) - new Date(b.date)));
        // Reset form
        setNewBooking({ vehicleType: 'Standard Sedan', date: '', pickup: '', dropoff: '' });
    };

    const handleCancelBooking = (bookingId) => {
        setBookings(prev => prev.filter(booking => booking.id !== bookingId));
    };


    return (
      <div className="page-content" data-page="Booking">
        <h2 className="page-header">Vehicle Booking</h2>
        <div className="flex-grid">
            <div className="widget-card">
                <h4>New Booking</h4>
                <form className="booking-form" onSubmit={handleAddBooking}>
                    <div className="form-group">
                        <label htmlFor="vehicle-type">Vehicle Type</label>
                        <select id="vehicle-type" name="vehicleType" value={newBooking.vehicleType} onChange={handleInputChange}>
                            <option>Standard Sedan</option>
                            <option>Luxury SUV</option>
                            <option>Cargo Van</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="booking-date">Date</label>
                        <input type="date" id="booking-date" name="date" value={newBooking.date} onChange={handleInputChange} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="pickup-location">Pickup Location</label>
                        <input type="text" id="pickup-location" name="pickup" value={newBooking.pickup} onChange={handleInputChange} placeholder="e.g., Main Street 123" />
                    </div>
                     <div className="form-group">
                        <label htmlFor="dropoff-location">Dropoff Location</label>
                        <input type="text" id="dropoff-location" name="dropoff" value={newBooking.dropoff} onChange={handleInputChange} placeholder="e.g., Central Station" />
                    </div>
                    <button type="submit" className="btn-primary">Book Vehicle</button>
                </form>
            </div>
            <div className="widget-card">
                <h4>Upcoming Bookings</h4>
                 <table className="bookings-table">
                    <thead>
                        <tr><th>Vehicle</th><th>Date</th><th>Route</th><th>Status</th><th>Action</th></tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.id}>
                                <td>{booking.vehicle}</td>
                                <td>{booking.date}</td>
                                <td>{booking.route}</td>
                                <td>
                                    <div className={`item-status ${booking.status.toLowerCase().replace(' ', '-')}`}>
                                        {booking.status}
                                    </div>
                                </td>
                                <td>
                                    <button className="btn-danger" onClick={() => handleCancelBooking(booking.id)}>
                                        Unbook
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
};

export default Booking;
