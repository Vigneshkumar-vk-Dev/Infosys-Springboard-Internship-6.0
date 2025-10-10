package com.example.vehiclemanagement.repository;

import com.example.vehiclemanagement.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
    // Example: List<Driver> findByStatus(String status);
}
