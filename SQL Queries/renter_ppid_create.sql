
CREATE TABLE renter_ppid (
    id SERIAL PRIMARY KEY, -- Auto-generated unique ID

    -- Basic Information
    first_name VARCHAR(255),
    middle_name VARCHAR(255),
    last_name VARCHAR(255),
    preferred_name VARCHAR(255),
    gender VARCHAR(50) CHECK (gender IN ('Male', 'Female', 'Non-Binary', 'Other')),
    date_of_birth DATE,
    profile_picture_url VARCHAR(255),

    -- Contact Information
    email VARCHAR(255) UNIQUE,
    secondary_email VARCHAR(255),
    phone_number VARCHAR(20),
    alternate_phone_number VARCHAR(20),
    preferred_contact_method VARCHAR(50) CHECK (preferred_contact_method IN ('Email', 'Phone', 'Text')),

    -- Address Details
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(255),
    state_province VARCHAR(255),
    postal_code VARCHAR(20),
    country VARCHAR(255),

    -- Identification & Security
    username VARCHAR(255) UNIQUE,
    password_hash TEXT,
    security_questions JSONB, -- A JSONB column to store questions and answers (hashed)
    government_id_type VARCHAR(50) CHECK (government_id_type IN ('Passport', 'Drivers License', 'Other')),
    government_id_number VARCHAR(255),
    date_of_account_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login_timestamp TIMESTAMP,
    account_status VARCHAR(50) CHECK (account_status IN ('Active', 'Inactive', 'Banned')),
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    two_factor_method VARCHAR(50) CHECK (two_factor_method IN ('SMS', 'Authenticator App')),

    -- Education
    school VARCHAR(255),
    student_id VARCHAR(255),

    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255),
    updated_by VARCHAR(255),

    -- Privacy Compliance
    gdpr_consent BOOLEAN DEFAULT FALSE,
    ccpa_consent BOOLEAN DEFAULT FALSE,
    terms_acceptance_date TIMESTAMP,
    marketing_opt_in BOOLEAN DEFAULT FALSE,
    data_retention_expiration TIMESTAMP -- For automatic data deletion
);