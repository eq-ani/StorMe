const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../database/db');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log('Recieved signup request: ', req.body);
  
    try {
      console.log('Received signup request:', req.body);
  
      // Check if email already exists
      const userCheck = await pool.query('SELECT * FROM storme.user_ppid WHERE email = $1', [email]);
      console.log('Email check result:', userCheck.rows);
  
      if (userCheck.rows.length > 0) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log('Hashed password generated.');
  
      // Insert new user
      await pool.query(
        `INSERT INTO storme.user_ppid (email, password_hash, date_of_account_creation) VALUES ($1, $2, NOW())`,
        [email, hashedPassword]
      );
      console.log('New user inserted into database.');
  
      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Received login request:', req.body);

    try {
        // Check if the user exists
        const userResult = await pool.query('SELECT * FROM storme.user_ppid WHERE email = $1', [email]);
        const user = userResult.rows[0];

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare provided password with stored hash
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // If password matches, login is successful
        console.log('Login successful');
        res.status(200).json({ message: 'Login successful', user: { email: user.email, first_name: user.first_name, last_name: user.last_name } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports = router;
 