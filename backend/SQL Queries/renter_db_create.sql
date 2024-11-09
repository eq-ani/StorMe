CREATE TABLE storme.renter_db (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,  -- References user_ppid(id)
    bag_id VARCHAR(50) NOT NULL UNIQUE,  -- Unique identification for each bag
    bag_image_url VARCHAR(255),  -- Link to bag image
    stays_count INT DEFAULT 0,  -- Number of stays as renter
    stars_avg DECIMAL(2, 1) DEFAULT 0,  -- Average star rating as renter
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES storme.user_ppid(id)
);
