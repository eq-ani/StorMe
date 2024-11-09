CREATE TABLE storme.bookings_db (
    booking_id SERIAL PRIMARY KEY,
    property_id INT NOT NULL,  -- References host_db(property_id)
    renter_user_id INT NOT NULL,  -- References user_ppid(id) of the renter
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('confirmed', 'pending', 'cancelled', 'active')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (property_id) REFERENCES storme.host_db(property_id),
    FOREIGN KEY (renter_user_id) REFERENCES storme.user_ppid(id)
);
