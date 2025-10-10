package com.example.vehiclemanagement.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String pickupLocation;
    private String dropLocation;
    private String date;
    private double distance;

    @ManyToOne
    private Vehicle vehicle;

    @ManyToOne
    private Driver driver;
}
