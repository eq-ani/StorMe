CREATE TABLE storme.host_db (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,  -- References user_ppid(id)
    property_id SERIAL UNIQUE,  -- Unique identifier for each property
    price DECIMAL(10, 2) NOT NULL,
    size VARCHAR(50),  -- E.g., "10x10 ft", "20x15 ft"
    stays_count INT DEFAULT 0,  -- Number of stays hosted
    stars_avg DECIMAL(2, 1) DEFAULT 0,  -- Average star rating
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state_province VARCHAR(50),
    postal_code VARCHAR(20),
    country VARCHAR(50),
    school VARCHAR(255),
    active BOOLEAN,
    temp_control BOOLEAN,
    allergen_free BOOLEAN,
    big_access BOOLEAN,
    accessibility INTEGER,
    image_url VARCHAR(1024),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    

    FOREIGN KEY (user_id) REFERENCES storme.user_ppid(id) ON DELETE CASCADE
);