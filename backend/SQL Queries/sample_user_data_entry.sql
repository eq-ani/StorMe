INSERT INTO storme.user_ppid (
    first_name, middle_name, last_name, preferred_name, gender, date_of_birth, profile_picture_url,
    email, secondary_email, phone_number, alternate_phone_number, preferred_contact_method,
    address_line_1, address_line_2, city, state_province, postal_code, country,
    username, password_hash, security_questions, government_id_type, government_id_number,
    date_of_account_creation, last_login_timestamp, account_status, two_factor_enabled, two_factor_method,
    school, student_id,
    created_by, updated_by,
    gdpr_consent, ccpa_consent, terms_acceptance_date, marketing_opt_in, data_retention_expiration
)
VALUES
-- Sample Record 1
(
    'John', 'Michael', 'Doe', 'Johnny', 'Male', '1998-05-15', 'https://example.com/profiles/johndoe.jpg',
    'johndoe@example.com', 'johndoe_secondary@example.com', '+1234567890', '+0987654321', 'Email',
    '123 Main St', 'Apt 4B', 'Amherst', 'MA', '01002', 'USA',
    'johndoe', 'hashed_password_1', '{"question1": "hashed_answer1", "question2": "hashed_answer2"}',
    'Drivers License', 'DL123456789',
    CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Active', TRUE, 'SMS',
    'University of Massachusetts Amherst', 'S1234567',
    'admin_user', 'admin_user',
    TRUE, FALSE, CURRENT_TIMESTAMP, TRUE, CURRENT_TIMESTAMP + INTERVAL '1 year'
),
-- Sample Record 2
(
    'Jane', 'Emily', 'Smith', 'Janie', 'Female', '2000-08-20', 'https://example.com/profiles/janesmith.jpg',
    'janesmith@example.com', 'janesmith_secondary@example.com', '+1987654321', '+1234567890', 'Text',
    '456 Elm St', NULL, 'Amherst', 'MA', '01003', 'USA',
    'janesmith', 'hashed_password_2', '{"question1": "hashed_answer1", "question2": "hashed_answer2"}',
    'Passport', 'P987654321',
    CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Active', FALSE, NULL,
    'University of Massachusetts Amherst', 'S7654321',
    'admin_user', 'admin_user',
    TRUE, TRUE, CURRENT_TIMESTAMP, FALSE, CURRENT_TIMESTAMP + INTERVAL '2 years'
),
-- Sample Record 3
(
    'Sam', NULL, 'Taylor', 'Sammy', 'Non-Binary', '1995-03-10', 'https://example.com/profiles/samtaylor.jpg',
    'samtaylor@example.com', 'samtaylor_secondary@example.com', '+1230984567', NULL, 'Phone',
    '789 Maple St', 'Suite 12', 'Amherst', 'MA', '01004', 'USA',
    'samtaylor', 'hashed_password_3', '{"question1": "hashed_answer1", "question2": "hashed_answer2"}',
    'Other', 'ID543210987',
    CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Inactive', TRUE, 'Authenticator App',
    'University of Massachusetts Amherst', 'S5432109',
    'admin_user', 'admin_user',
    FALSE, TRUE, CURRENT_TIMESTAMP, TRUE, CURRENT_TIMESTAMP + INTERVAL '3 years'
);