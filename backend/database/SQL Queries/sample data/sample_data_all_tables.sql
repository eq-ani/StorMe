-- Insert 5 sample users
INSERT INTO storme.user_ppid (first_name, last_name, preferred_name, gender, date_of_birth, email, username, password_hash, school, student_id, account_status)
VALUES 
    ('Alice', 'Smith', 'Alice', 'Female', '1995-03-15', 'alice@example.com', 'alice123', 'hashed_password', 'UMass', 'U001', 'active'),
    ('Bob', 'Johnson', 'Bob', 'Male', '1996-07-21', 'bob@example.com', 'bob_johnson', 'hashed_password', 'UMass', 'U002', 'active'),
    ('Charlie', 'Brown', 'Charlie', 'Male', '1997-11-11', 'charlie@example.com', 'charlie_b', 'hashed_password', 'UMass', 'U003', 'active'),
    ('Diana', 'Williams', 'Diana', 'Female', '1998-05-05', 'diana@example.com', 'diana_w', 'hashed_password', 'UMass', 'U004', 'active'),
    ('Evan', 'Davis', 'Evan', 'Male', '1999-09-09', 'evan@example.com', 'evan_d', 'hashed_password', 'UMass', 'U005', 'active');

-- Insert host entries for Alice and Bob with property details
INSERT INTO storme.host_db (user_id, price, size, stays_count, stars_avg, address_line_1, city, state_province, postal_code, country)
VALUES 
    (1, 150.00, '10x10 ft', 0, 0.0, '123 Main St', 'Amherst', 'MA', '01002', 'USA'),  -- Alice as host
    (2, 200.00, '15x10 ft', 0, 0.0, '456 Maple Ave', 'Amherst', 'MA', '01002', 'USA'); -- Bob as host


-- Insert renter entries for Charlie, Diana, and Evan
INSERT INTO storme.renter_db (user_id, bag_id, bag_image_url, stays_count, stars_avg)
VALUES 
    (3, 'BAG001', 'http://example.com/bag1.jpg', 0, 0.0),
    (4, 'BAG002', 'http://example.com/bag2.jpg', 0, 0.0),
    (5, 'BAG003', 'http://example.com/bag3.jpg', 0, 0.0);

-- Insert bookings for Charlie, Diana, and Evan, linking them to Alice and Bob’s properties
INSERT INTO storme.bookings_db (property_id, renter_user_id, start_date, end_date, cost, status)
VALUES 
    (1, 3, '2023-06-01', '2023-08-31', 300.00, 'active'),       -- Charlie's past booking (set to 'active' as a completed past booking)
    (1, 4, '2024-06-01', '2024-08-31', 300.00, 'confirmed'),    -- Diana's current booking
    (2, 5, '2024-06-15', '2024-08-15', 400.00, 'confirmed');    -- Evan's current booking

-- Insert a review by Charlie on Alice’s property
INSERT INTO storme.reviews_db (user_id, booking_id, rating, comment, created_at)
VALUES 
    (3, 1, 5, 'Great storage space, very secure!', '2023-09-01');

-- Insert transactions for each booking
INSERT INTO storme.transaction_db (booking_id, payer_id, payee_id, amount, payment_method, transaction_date, status)
VALUES 
    (1, 3, 1, 300.00, 'credit_card', '2023-06-01', 'completed'),  -- Charlie's payment to Alice
    (2, 4, 1, 300.00, 'paypal', '2024-06-01', 'completed'),       -- Diana's payment to Alice
    (3, 5, 2, 400.00, 'bank_transfer', '2024-06-15', 'completed');-- Evan's payment to Bob

