const express = require('express');
const router = express.Router();
const pool = require('../database/db');  // Database connection

// Endpoint to create a new listing
router.post('/listings', async (req, res) => {
  const { price, size, address_line_1, city, state_province, postal_code, country, image_url, school } = req.body;
  
  try {
    // Insert the listing data into the database
    const result = await pool.query(
      `INSERT INTO storme.host_db (user_id, price, size, address_line_1, city, state_province, postal_code, country, image_url, school)
       VALUES (1, $1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [price, size, address_line_1, city, state_province, postal_code, country, image_url, school]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting listing:", error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

module.exports = router;