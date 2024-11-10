--lol
-- Insert 5 sample users
INSERT INTO storme.user_ppid (first_name, last_name, preferred_name, gender, date_of_birth, email, username, password_hash, school, student_id, account_status, profile_picture_url)
VALUES 
    ('Owen', 'McGlynn', 'Alice', 'Male', '1995-03-15', 'owen@example.com', 'alice123', 'hashed_password', 'UMass', 'U001', 'active', '/assets/images/owen.png'),
    ('Gordan', 'Liu', 'Bob', 'Male', '1996-07-21', 'gordan@example.com', 'bob_johnson', 'hashed_password', 'UMass', 'U002', 'active', '/assets/images/gordan.png'),
    ('Donny', 'Yeung', 'Charlie', 'Male', '1997-11-11', 'donny@example.com', 'charlie_b', 'hashed_password', 'UMass', 'U003', 'active', '/assets/images/donny.png'),
    ('Ani', 'Poluru', 'Diana', 'Male', '1998-05-05', 'ani@example.com', 'diana_w', 'hashed_password', 'UMass', 'U004', 'active', '/assets/images/ani.png'),
    ('Evan', 'Davis', 'Evan', 'Male', '1999-09-09', 'evan@example.com', 'evan_d', 'hashed_password', 'UMass', 'U005', 'active', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHP6W3ltWNpXeGo1FCqoNdZeC4TNO6il-p4g&s');
    
    

-- Insert host entries for Alice and Bob with property details
    INSERT INTO storme.host_db (user_id, property_id, price, size, address_line_1, city, state_province, postal_code, country, image_url, school, stays_count, review_comm, review_num, temp_control, allergen_free, big_access, accessibility)
VALUES
    (1, 101, 15, '10x10 ft', '1234 Storage St.', 'Amherst', 'MA', '01002', 'USA', 'https://st.hzcdn.com/fimgs/5f4264b804f395ce_9753-w240-h180-b0-p0--.jpg', 'UMass', 15, 'Great space, very secure.', 45, TRUE, FALSE, TRUE, FALSE),
    (1, 102, 20, '15x15 ft', '5678 Rental Rd.', 'Cambridge', 'MA', '02138', 'USA', 'https://www.neighbor.com/storage-blog/wp-content/uploads/2023/09/AdobeStock_316541746.jpg', 'Harvard', 25, 'Convenient location and good size.', 67, FALSE, TRUE, FALSE, TRUE),
    (2, 103, 18, '12x12 ft', '1010 Storage Blvd.', 'Boston', 'MA', '02215', 'USA', 'https://live.staticflickr.com/4024/4390395225_bc382b64a7_b.jpg', 'Boston University', 30, 'Perfect for summer storage needs.', 53, FALSE, FALSE, FALSE, FALSE),
    (2, 104, 22, '20x20 ft', '2020 Rent Dr.', 'Cambridge', 'MA', '02139', 'USA', 'https://214pressurewashing.com/wp-content/uploads/2017/09/apartment-9-11-17.jpeg', 'MIT', 5, 'A bit pricey but worth it.', 85, FALSE, FALSE, TRUE, TRUE),
    (3, 105, 13, '8x10 ft', '3030 Depot Ln.', 'Boston', 'MA', '02116', 'USA', 'https://images.squarespace-cdn.com/content/v1/4fcf5c8684aef9ce6e0a44b0/9ac3151f-b9df-44bf-8e46-965f54bc11e2/Empty+bedroom+with+golden+oak+floor.jpg', 'Northeastern University', 18, 'Small but secure and clean.', 72, TRUE, FALSE, TRUE, FALSE),
    (3, 106, 17, '10x15 ft', '4040 Storage Cir.', 'Amherst', 'MA', '01003', 'USA', 'https://www.pufftonvillage.com/wp-content/uploads/PV100_0121_one_bdrm_garden_sharp.jpg', 'UMass', 22, 'Good size and accessibility.', 64, FALSE, TRUE, FALSE, TRUE),
    (4, 107, 25, '25x20 ft', '5050 Rent Ave.', 'Cambridge', 'MA', '02140', 'USA', 'https://i.ytimg.com/vi/emSzZ1h0T30/maxresdefault.jpg', 'Harvard', 35, 'Spacious and highly recommended.', 92, TRUE, TRUE, TRUE, FALSE),
    (4, 108, 14, '10x8 ft', '6060 Rental Ln.', 'Boston', 'MA', '02215', 'USA', 'https://img.freepik.com/premium-photo/small-empty-room-with-walls-painted-plain-offwhite-color-french-oak-parquet-floors_449839-10640.jpg', 'Boston University', 12, 'Affordable and convenient.', 55, FALSE, FALSE, TRUE, TRUE),
    (2, 109, 21, '18x18 ft', '7070 Storage St.', 'Cambridge', 'MA', '02142', 'USA', 'https://thumbs.dreamstime.com/b/empty-small-walk-closet-shelves-carpet-floor-northwest-usa-76323472.jpg', 'MIT', 8, 'Ideal for larger items.', 78, TRUE, FALSE, FALSE, TRUE),
    (5, 15, 16, '12x10 ft', '8080 Depot Blvd.', 'Boston', 'MA', '02118', 'USA', 'https://bienalclosets.com/wp-content/uploads/2023/06/dressing-room-small-oneroom-apartment-1.jpg', 'Northeastern University', 20, 'Great location near campus.', 66, FALSE, TRUE, TRUE, FALSE);

-- Insert renter entries for Charlie, Diana, and Evan
INSERT INTO storme.renter_db (user_id, bag_id, bag_image_url, stays_count, stars_avg)
VALUES 
    (1, 'BAG004', 'http://example.com/bag4.jpg', 3, 4.7),
    (3, 'BAG005', 'http://example.com/bag5.jpg', 5, 4.2),
    (3, 'BAG006', 'http://example.com/bag6.jpg', 2, 3.8),
    (4, 'BAG007', 'http://example.com/bag7.jpg', 1, 5.0),
    (5, 'BAG008', 'http://example.com/bag8.jpg', 6, 4.5),
    (1, 'BAG009', 'http://example.com/bag9.jpg', 4, 4.0),
    (2, 'BAG010', 'http://example.com/bag10.jpg', 2, 3.5),
    (3, 'BAG011', 'http://example.com/bag11.jpg', 3, 4.8),
    (4, 'BAG012', 'http://example.com/bag12.jpg', 0, 0.0),
    (5, 'BAG013', 'http://example.com/bag13.jpg', 1, 4.6);


-- Insert bookings for Charlie, Diana, and Evan, linking them to Alice and Bob’s properties
INSERT INTO storme.bookings_db (property_id, renter_user_id, start_date, end_date, cost, status)
VALUES 
    (101, 3, '2023-05-01', '2023-07-01', 20.00, 'active'),           -- Past booking, active as completed
    (102, 2, '2023-06-01', '2023-08-01', 18.50, 'active'),           -- Past booking, active as completed
    (103, 1, '2024-06-15', '2024-08-15', 15.75, 'confirmed'),        -- Upcoming booking, confirmed
    (104, 5, '2024-07-01', '2024-09-01', 12.00, 'pending'),          -- Upcoming booking, pending
    (105, 5, '2024-06-10', '2024-08-10', 19.95, 'confirmed'),       -- Upcoming booking, confirmed
    (106, 4, '2024-07-15', '2024-09-15', 22.00, 'confirmed'),       -- Upcoming booking, confirmed but with a slightly higher cost
    (107, 3, '2023-04-01', '2023-06-01', 14.00, 'active'),          -- Past booking, active as completed
    (109, 2, '2023-08-01', '2023-10-01', 10.50, 'active'),         -- Past booking, active as completed
    (108, 3, '2023-07-01', '2023-09-01', 23.75, 'confirmed'),        -- Past booking, slightly higher cost
    (107, 4, '2024-07-15', '2024-09-15', 12.30, 'confirmed'),        -- Upcoming booking
    (106, 5, '2024-06-20', '2024-08-20', 16.80, 'pending'),          -- Upcoming booking, pending
    (105, 1, '2023-07-15', '2023-09-15', 13.00, 'active'),           -- Completed booking
    (104, 5, '2024-06-01', '2024-08-01', 18.00, 'confirmed'),        -- Future booking confirmed
    (103, 4, '2023-08-01', '2023-10-01', 19.99, 'active'),           -- Past booking with active status
    (102, 3, '2024-06-05', '2024-08-05', 24.50, 'confirmed'),        -- Upcoming booking
    (101, 2, '2024-07-10', '2024-09-10', 15.75, 'pending');        -- Upcoming booking, pending


-- Insert a review by Charlie on Alice’s property
INSERT INTO storme.reviews_db (user_id, booking_id, rating, comment, created_at)
VALUES 
    (3, 1, 5, 'Great storage space, very secure!', '2023-09-01'),
    (4, 2, 4, 'Convenient location, but a bit pricey.', '2023-08-15'),
    (5, 3, 3, 'Average experience, could use better lighting.', '2023-07-22'),
    (2, 4, 5, 'Perfect for summer storage needs, highly recommend!', '2023-06-05'),
    (1, 5, 4, 'Easy access, but a little small for large items.', '2023-05-12'),
    (3, 6, 2, 'Too small and not very accessible.', '2023-04-30'),
    (4, 7, 5, 'Spacious and affordable, loved it!', '2023-04-10'),
    (3, 8, 4, 'Nice storage, but a bit out of the way.', '2023-03-21'),
    (5, 9, 5, 'Great service and secure storage, will rent again.', '2023-03-11'),
    (2, 5, 3, 'Average location, decent space.', '2023-02-05'),
    (4, 11, 1, 'Had issues with accessibility, would not recommend.', '2023-01-22'),
    (5, 12, 5, 'Fantastic experience, very convenient!', '2023-01-15'),
    (2, 13, 4, 'Good location, and easy to access.', '2023-01-01'),
    (5, 3, 3, 'Could use more security, otherwise okay.', '2022-12-12'),
    (1, 2, 5, 'Highly recommended, very clean and secure.', '2022-11-23'),
    (4, 1, 4, 'Decent space, but a bit cramped for larger items.', '2022-10-08'),
    (5, 13, 2, 'Too expensive for the size offered.', '2022-09-30'),
    (2, 12, 5, 'Very happy with the space, will rent again.', '2022-09-01'),
    (3, 11, 5, 'Excellent experience, well maintained.', '2022-08-15'),
    (1, 10, 4, 'Convenient, though slightly noisy location.', '2022-07-18'),
    (5, 11, 3, 'Average quality but serves its purpose.', '2022-06-20'),
    (5, 12, 4, 'Good value for the price.', '2022-05-22'),
    (4, 13, 5, 'Safe, clean, and easy to access!', '2022-05-10'),
    (4, 14, 2, 'Location was not ideal, but decent space.', '2022-04-12'),
    (2, 15, 5, 'Very satisfied with my stay, highly recommend!', '2022-03-09');


-- Insert transactions for each booking
INSERT INTO storme.transaction_db (booking_id, payer_id, payee_id, amount, payment_method, transaction_date, status)
VALUES 
    (4, 1, 2, 20.00, 'credit_card', '2023-05-01', 'completed'),  -- Frank's payment to Bob
    (5, 2, 3, 15.00, 'paypal', '2024-06-10', 'pending'),         -- Grace's payment to Charlie
    (6, 3, 4, 12.00, 'bank_transfer', '2024-07-15', 'completed'),-- Henry's payment to Diana
    (7, 4, 5, 18.00, 'credit_card', '2024-08-05', 'completed'),  -- Ian's payment to Evan
    (8, 5, 3, 17.00, 'paypal', '2024-08-15', 'failed'),         -- Jack's payment to Frank
    (9, 1, 1, 25.00, 'credit_card', '2023-09-20', 'completed'), -- Laura's payment to Alice
    (5, 2, 2, 22.00, 'bank_transfer', '2023-07-05', 'completed'), -- Mike's payment to Bob
    (11, 3, 3, 19.00, 'paypal', '2024-06-20', 'pending'),       -- Nancy's payment to Charlie
    (12, 4, 4, 21.00, 'credit_card', '2024-07-25', 'completed'),-- Oscar's payment to Diana
    (13, 5, 5, 24.00, 'bank_transfer', '2024-08-10', 'completed'); -- Peter's payment to Evan


