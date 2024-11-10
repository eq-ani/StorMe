const express = require('express');
const router = express.Router();
const pool = require('../database/db');  


router.post('/rentals', async (req, res) => {
  const {property_id, renter_user_id, start_date, end_date, cost, status} = req.body;
  
  try {
    // insert listing
    const result = await pool.query(
      `INSERT INTO storme.bookings_db (property_id, renter_user_id, start_date, end_date, cost, status, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`,
      [property_id, 1, start_date, end_date, cost, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting listing:", error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

module.exports = router;