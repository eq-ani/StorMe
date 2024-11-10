CREATE TABLE storme.reviews_db (
    review_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,  -- References user_ppid(id)
    booking_id INT NOT NULL,  -- References bookings_db(booking_id)
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES storme.user_ppid(id) ON DELETE CASCADE, 
    FOREIGN KEY (booking_id) REFERENCES storme.bookings_db(booking_id) ON DELETE CASCADE
);