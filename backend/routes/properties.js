const express = require('express');
const router = express.Router();
const pool = require('../database/db'); 


router.get('/properties', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM storme.host_db');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ message: 'Error fetching properties' });
  }
});

module.exports = router;