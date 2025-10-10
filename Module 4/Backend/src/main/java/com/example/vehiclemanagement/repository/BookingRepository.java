package com.example.vehiclemanagement.repository;

import com.example.vehiclemanagement.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Example: List<Booking> findByCustomerName(String name);
}
