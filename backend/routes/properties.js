const express = require('express');
const router = express.Router();
const pool = require('../database/db'); // Database connection

// Endpoint to get all properties
router.get('/properties', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, address_line_1, price, size, image_url FROM storme.host_db');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ message: 'Error fetching properties' });
  }
});

module.exports = router;