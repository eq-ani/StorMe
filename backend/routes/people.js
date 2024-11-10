const express = require('express');
const router = express.Router();
const pool = require('../database/db'); // Database connection

// Endpoint to get all properties
router.get('/people', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, first_name, last_name, phone_number, email, profile_picture_url FROM storme.user_ppid');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

module.exports = router;