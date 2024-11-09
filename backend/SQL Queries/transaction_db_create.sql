CREATE TABLE storme.transaction_db (
    transaction_id SERIAL PRIMARY KEY,
    booking_id INT NOT NULL,  -- References bookings_db(booking_id)
    payer_id INT NOT NULL,  -- User ID of the payer, references user_ppid(id)
    payee_id INT NOT NULL,  -- User ID of the payee, references user_ppid(id)
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50),  -- e.g., 'credit_card', 'paypal', 'bank_transfer'
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) CHECK (status IN ('completed', 'pending', 'failed')),
    
    FOREIGN KEY (booking_id) REFERENCES storme.bookings_db(booking_id),
    FOREIGN KEY (payer_id) REFERENCES storme.user_ppid(id),
    FOREIGN KEY (payee_id) REFERENCES storme.user_ppid(id)
);
